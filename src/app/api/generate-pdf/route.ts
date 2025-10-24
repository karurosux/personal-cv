import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { createElement } from 'react';
import { CVPDFDocument } from '@/components/PDFDocument';
import { cvData } from '@/data/cv-data';

export async function GET() {
  const pdfDocument = createElement(CVPDFDocument, { data: cvData });
  const pdfBuffer = await renderToBuffer(pdfDocument);

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Carlos_Gonzalez_CV.pdf"',
    },
  });
}
