import { CoverLetterData } from "@/types/cv";
import { cvData } from "./cv-data";

export const buildCoverLetter = (
  companyName: string,
  position: string,
  whyThisCompany: string,
  recipientName?: string,
  recipientTitle?: string
): CoverLetterData => {
  const salutation = recipientName
    ? `Dear ${recipientName}`
    : "Dear Hiring Manager";

  const openingParagraph = `I am writing to apply for the ${position} position at ${companyName}. ${whyThisCompany}`;

  const bodyParagraphs = [
    `My career in software engineering has been driven by curiosity and a deep desire to understand how things work. Over the past ${cvData.yearsOfExperience} years, I have consistently sought out opportunities to learn new technologies and solve challenging technical problems. My journey began as a Full Stack Developer building solutions for Mexico's public property registry system using ExtJS, C#/.NET, and Oracle/MSSQL. This early exposure to full-stack development sparked my interest in frontend technologies and set me on a path of continuous learning.`,

    `I immersed myself in mastering Angular and modern JavaScript, which led me to PRA Health Sciences where I built clinical trial applications. During this time, I dedicated myself to studying design patterns, best practices, and new frameworks—not because I had to, but because I genuinely enjoyed the process of learning and experimentation. This curiosity-driven approach to growth caught the attention of Semantic AI, where I spent over six years working on complex data intelligence platforms.`,

    `At Semantic AI, I had the opportunity to work with diverse technologies across the stack. I developed sophisticated UI solutions using Angular and React, built Java Spring backends, created CLI tools, and worked with Docker deployments. What I enjoyed most was tackling technical challenges that required deep problem-solving—whether it was architecting plugin frameworks, developing proof-of-concept solutions, or diving into unfamiliar codebases to understand and improve them. Working alongside talented engineers accelerated my learning and exposed me to new approaches and technologies.`,

    `What motivates me is the opportunity to work on interesting technical problems while continuously expanding my knowledge. I'm particularly drawn to working alongside smart, talented engineers who challenge my thinking and expose me to new perspectives. Some of my most significant growth at Semantic AI came from collaborating with exceptionally skilled colleagues. I thrive in environments where I can focus on hands-on development, experiment with new approaches, and learn both from complex codebases and from the people around me. My expertise spans modern frontend frameworks (${cvData.primarySkills.slice(0, 3).join(", ")}), state management patterns, and full-stack development, but I'm always eager to learn new technologies and deepen my understanding through challenging work and collaboration with talented teammates.`,
  ];

  const closingParagraph = `I would welcome the opportunity to discuss how my technical background and passion for learning might contribute to ${companyName}. Thank you for considering my application.`;

  return {
    recipientName,
    recipientTitle,
    companyName,
    position,
    salutation,
    openingParagraph,
    bodyParagraphs,
    closingParagraph,
  };
};

export const defaultCoverLetter = buildCoverLetter(
  "[Company Name]",
  "[Position Title]",
  "[Explain why you're interested in this specific company - research their mission, values, products, or culture and write 2-3 sentences about what resonates with you]"
);
