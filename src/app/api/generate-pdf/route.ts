import { NextResponse } from 'next/server';
import { pdf } from '@react-pdf/renderer';
import { createElement } from 'react';
import { CVPDFDocument } from '@/components/PDFDocument';
import { cvData } from '@/data/cv-data';

export async function GET() {
  const pdfDocument = createElement(CVPDFDocument, { data: cvData });
  const pdfBlob = await pdf(pdfDocument as any).toBlob();
  const pdfBuffer = await pdfBlob.arrayBuffer();

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Carlos_Gonzalez_CV.pdf"',
    },
  });
}
