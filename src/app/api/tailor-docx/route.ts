import { NextRequest, NextResponse } from "next/server";
import { Packer } from "docx";
import { createCVDocument } from "@/components/DOCXDocument";
import { cvData } from "@/data/cv-data";
import Groq from "groq-sdk";
import { CVData } from "@/types/cv";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { jobPosition } = await request.json();

    if (!jobPosition) {
      return NextResponse.json({ error: "Job position is required" }, { status: 400 });
    }

    const systemPrompt = `You are an expert technical resume writer. Your task is to tailor a candidate's resume to match a specific job description or target position. 
You must output a single JSON object. DO NOT output markdown, backticks, or any preamble. ONLY JSON.
The JSON must perfectly match the following schema:
{
  "title": "string",
  "professionalSummary": {
    "intro": "string",
    "careerProgression": "string"
  },
  "workExperience": [
    {
      "company": "string",
      "location": "string",
      "positions": [
        {
          "title": "string",
          "startDate": "string",
          "endDate": "string",
          "description": ["string", "string"],
          "skills": ["string"]
        }
      ]
    }
  ],
  "projects": [
    {
      "name": "string",
      "description": ["string"],
      "technologies": ["string"]
    }
  ]
}

Instructions:
1. Update the "title" to closely align with the target role.
2. Rewrite the "professionalSummary" intro and careerProgression to heavily emphasize the candidate's background that matches the target role, utilizing industry-standard ATS keywords.
3. For each position in "workExperience", rewrite the "description" array bullets to highlight achievements and tools relevant to the target role. Drop irrelevant details, elevate matching skills, and ensure strong action verbs and ATS-friendly phrasing are used.
4. Keep the exact same companies, dates, and core factual history. Only change the framing and highlights.
5. Reorder or highlight "skills" and "technologies" lists to put the target role's keywords first.
6. Return the tailored fields as a valid JSON object.`;

    const userPrompt = `Target Job Position / Description:
${jobPosition}

Base Resume Data (JSON):
${JSON.stringify({
  title: cvData.title,
  professionalSummary: cvData.professionalSummary,
  workExperience: cvData.workExperience,
  projects: cvData.projects,
})}
`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.2,
      response_format: { type: "json_object" },
    });

    const responseContent = completion.choices[0]?.message?.content;
    
    if (!responseContent) {
      throw new Error("Failed to generate tailored data");
    }

    const tailoredData = JSON.parse(responseContent);

    // Merge tailored data with original cvData to ensure all base fields (like education, contact) exist
    const finalData: CVData = {
      ...cvData,
      title: tailoredData.title || cvData.title,
      professionalSummary: tailoredData.professionalSummary || cvData.professionalSummary,
      workExperience: tailoredData.workExperience || cvData.workExperience,
      projects: tailoredData.projects || cvData.projects,
    };

    const doc = createCVDocument(finalData);
    const buffer = await Packer.toBuffer(doc);

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": 'attachment; filename="Carlos_Gonzalez_Tailored_CV.docx"',
      },
    });

  } catch (error) {
    console.error("Error tailoring DOCX:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
  }
}
