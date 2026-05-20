import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
} from "docx";
import { CVData } from "@/types/cv";

export const createCVDocument = (data: CVData): Document => {
  const children: Paragraph[] = [];

  children.push(
    new Paragraph({
      text: data.name,
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.LEFT,
      spacing: { after: 100 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${data.title} | ${data.yearsOfExperience} Years of Experience`,
          size: 24,
        }),
      ],
      spacing: { after: 200 },
    })
  );

  const contactParts: string[] = [data.contactInfo.email];
  if (data.contactInfo.phone) {
    contactParts.push(data.contactInfo.phone);
  }
  if (data.contactInfo.location) {
    contactParts.push(data.contactInfo.location);
  }
  contactParts.push(
    data.contactInfo.github.replace("https://", ""),
    data.contactInfo.linkedin.replace("https://", "")
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: contactParts.join(" | "),
          size: 18,
          color: "666666",
        }),
      ],
      spacing: { after: 400 },
    })
  );

  children.push(
    new Paragraph({
      text: "PROFESSIONAL SUMMARY",
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 150 },
      border: {
        bottom: {
          color: "2563eb",
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  children.push(
    new Paragraph({
      text: data.professionalSummary.intro,
      spacing: { after: 150 },
      alignment: AlignmentType.JUSTIFIED,
    })
  );

  children.push(
    new Paragraph({
      text: data.professionalSummary.careerProgression,
      spacing: { after: 150 },
      alignment: AlignmentType.JUSTIFIED,
    })
  );

  children.push(
    new Paragraph({
      text: data.professionalSummary.currentRole,
      spacing: { after: 300 },
      alignment: AlignmentType.JUSTIFIED,
    })
  );

  children.push(
    new Paragraph({
      text: "CORE TECHNICAL COMPETENCIES",
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 150 },
      border: {
        bottom: {
          color: "2563eb",
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  const competencies = [
    "Programming Languages: TypeScript, JavaScript, Go, Java, Dart, C#, Bash",
    "Frameworks & Tools: Next.js, React, Angular, Node.js, Flutter, Echo, Spring, .NET, ExtJS",
    "Databases & Caching: PostgreSQL, PostGIS, SQLite, Redis, Oracle SQL, MS SQL, MySQL",
    "Infrastructure & Tools: Docker, Dokploy, NGINX, Git, Stripe, RevenueCat, Groq API, Google ML Kit, OpenCV, Sentry, Firebase",
    "Concepts: Distributed Systems, Microservices, Domain-Driven Design (DDD), RESTful APIs, CI/CD, Machine Learning",
  ];

  competencies.forEach((comp) => {
    children.push(
      new Paragraph({
        text: comp,
        spacing: { after: 100 },
        alignment: AlignmentType.JUSTIFIED,
      })
    );
  });

  children.push(
    new Paragraph({
      text: "PROFESSIONAL EXPERIENCE",
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 150 },
      border: {
        bottom: {
          color: "2563eb",
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  data.workExperience.forEach((exp) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: exp.company,
            bold: true,
            size: 24,
            color: "0f172a",
          }),
        ],
        spacing: { before: 200, after: 50 },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: exp.location,
            color: "666666",
            size: 18,
            italics: true,
          }),
        ],
        spacing: { after: 100 },
      })
    );

    exp.positions.forEach((pos) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: pos.title,
              bold: true,
              color: "2563eb",
              size: 20,
            }),
            new TextRun({
              text: `  (${pos.startDate} - ${pos.endDate})`,
              color: "666666",
              size: 16,
            }),
          ],
          spacing: { before: 100, after: 50 },
        })
      );

      if (Array.isArray(pos.description)) {
        pos.description.forEach((bullet) => {
          children.push(
            new Paragraph({
              text: bullet,
              bullet: { level: 0 },
              spacing: { after: 50 },
            })
          );
        });
      } else {
        children.push(
          new Paragraph({
            text: pos.description,
            spacing: { after: 50 },
            alignment: AlignmentType.JUSTIFIED,
            indent: { left: 200 },
          })
        );
      }

      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: "  Technologies Used: ", bold: true, size: 16 }),
            new TextRun({ text: pos.skills.join(", "), size: 16 }),
          ],
          spacing: { after: 150 },
          indent: { left: 200 },
        })
      );
    });
  });

  children.push(
    new Paragraph({
      text: "EDUCATION",
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 150 },
      border: {
        bottom: {
          color: "10b981",
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  data.education.forEach((edu) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: edu.degree,
            bold: true,
            size: 24,
          }),
        ],
        spacing: { before: 200, after: 50 },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: edu.institution,
            bold: true,
            color: "10b981",
          }),
        ],
        spacing: { after: 50 },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${edu.location} | ${edu.startDate} - ${edu.endDate}`,
            color: "666666",
            size: 18,
          }),
        ],
        spacing: { after: 100 },
      })
    );

    if (edu.description) {
      children.push(
        new Paragraph({
          text: edu.description,
          spacing: { after: 100 },
          alignment: AlignmentType.JUSTIFIED,
        })
      );
    }

    if (edu.achievements && edu.achievements.length > 0) {
      edu.achievements.forEach((achievement) => {
        children.push(
          new Paragraph({
            text: achievement,
            bullet: { level: 0 },
            spacing: { after: 50 },
          })
        );
      });
    }
  });

  children.push(
    new Paragraph({
      text: "LANGUAGES",
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 150 },
      border: {
        bottom: {
          color: "2563eb",
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun(
          data.languages.map((lang) => `${lang.name} (${lang.proficiency})`).join(", ")
        ),
      ],
      spacing: { after: 300 },
    })
  );

  if (data.certifications && data.certifications.length > 0) {
    children.push(
      new Paragraph({
        text: "CERTIFICATIONS",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 300, after: 150 },
        border: {
          bottom: {
            color: "2563eb",
            space: 1,
            style: BorderStyle.SINGLE,
            size: 6,
          },
        },
      })
    );

    data.certifications.forEach((cert) => {
      const certText = `${cert.name} - ${cert.issuer}${cert.date ? ` (${cert.date})` : ""}`;
      children.push(
        new Paragraph({
          text: certText,
          spacing: { after: 100 },
        })
      );
    });
  }

  return new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });
};
