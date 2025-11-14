import { NextRequest, NextResponse } from "next/server";
import { Packer } from "docx";
import { createCVDocument } from "@/components/DOCXDocument";
import { cvData } from "@/data/cv-data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const phoneParam = searchParams.get("cvp");
  const locationParam = searchParams.get("cvl");
  const jobTitleParam = searchParams.get("cvjt");

  const data = {
    ...cvData,
    ...(jobTitleParam && { title: jobTitleParam }),
    contactInfo: {
      ...cvData.contactInfo,
      ...(phoneParam && { phone: phoneParam }),
      ...(locationParam && { location: locationParam }),
    },
  };

  const doc = createCVDocument(data);
  const buffer = await Packer.toBuffer(doc);

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": 'attachment; filename="Carlos_Gonzalez_CV.docx"',
    },
  });
}
