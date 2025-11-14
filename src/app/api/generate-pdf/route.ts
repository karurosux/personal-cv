import { NextRequest, NextResponse } from 'next/server';
import { pdf } from '@react-pdf/renderer';
import { createElement } from 'react';
import { CVPDFDocument } from '@/components/PDFDocument';
import { cvData } from '@/data/cv-data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const phoneParam = searchParams.get('cvp');
  const locationParam = searchParams.get('cvl');
  const jobTitleParam = searchParams.get('cvjt');

  const data = {
    ...cvData,
    ...(jobTitleParam && { title: jobTitleParam }),
    contactInfo: {
      ...cvData.contactInfo,
      ...(phoneParam && { phone: phoneParam }),
      ...(locationParam && { location: locationParam }),
    },
  };

  const pdfDocument = createElement(CVPDFDocument, { data });
  const pdfBlob = await pdf(pdfDocument as any).toBlob();
  const pdfBuffer = await pdfBlob.arrayBuffer();

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Carlos_Gonzalez_CV.pdf"',
    },
  });
}
