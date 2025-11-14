import { CoverLetterData, CVData } from "@/types/cv";

interface CoverLetterProps {
  data: CoverLetterData;
  cvData: CVData;
}

export default function CoverLetter({ data, cvData }: CoverLetterProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg print:shadow-none">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{cvData.name}</h1>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{cvData.contactInfo.email}</p>
            {cvData.contactInfo.phone?.length > 0 && (
              <p>{cvData.contactInfo.phone}</p>
            )}
            {cvData.contactInfo.location?.length > 0 && (
              <p>{cvData.contactInfo.location}</p>
            )}
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p>{currentDate}</p>
        </div>

        {data.recipientName && (
          <div className="text-sm">
            <p>{data.recipientName}</p>
            {data.recipientTitle && <p>{data.recipientTitle}</p>}
            <p>{data.companyName}</p>
            {data.companyAddress && <p>{data.companyAddress}</p>}
          </div>
        )}

        <div className="space-y-4">
          <p>{data.salutation},</p>

          <p className="leading-relaxed">{data.openingParagraph}</p>

          {data.bodyParagraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          <p className="leading-relaxed">{data.closingParagraph}</p>

          <div className="pt-4">
            <p>Sincerely,</p>
            <p className="mt-8 font-semibold">{cvData.name}</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          * {
            visibility: hidden;
          }

          body {
            background: white !important;
          }

          .terminal-scanline::before,
          .terminal-scanline::after {
            display: none !important;
          }

          header,
          footer,
          nav,
          .no-print {
            display: none !important;
          }

          main {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .bg-white {
            visibility: visible !important;
          }

          .bg-white * {
            visibility: visible !important;
          }

          .bg-white {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
