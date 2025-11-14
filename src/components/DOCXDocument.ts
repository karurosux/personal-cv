import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  UnderlineType,
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
    "Frontend Development: Angular, React, Next.js, Svelte, SvelteKit, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design, Single Page Applications (SPA), Progressive Web Apps (PWA)",
    "State Management & Architecture: Redux, NgRx, Angular Signals, Component-Based Architecture, RESTful API Integration, Plugin Architecture",
    "Backend & Database: Node.js, Express.js, NestJS, Java Spring, Go, C#/.NET, PostgreSQL, Oracle Database, Microsoft SQL Server, REST API Development",
    "DevOps & Tools: Docker, Git, CI/CD, NPM, Agile/Scrum Methodologies, Team Leadership, Technical Documentation",
    "Specialized Skills: Geospatial Mapping (OpenLayers, Leaflet), CLI Development, Build Tools, Web Performance Optimization, Cross-Browser Compatibility",
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
            text: exp.title,
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
            text: exp.company,
            bold: true,
            color: "2563eb",
          }),
        ],
        spacing: { after: 50 },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${exp.location} | ${exp.startDate} - ${exp.endDate}`,
            color: "666666",
            size: 18,
          }),
        ],
        spacing: { after: 100 },
      })
    );

    children.push(
      new Paragraph({
        text: exp.description,
        spacing: { after: 100 },
        alignment: AlignmentType.JUSTIFIED,
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: "Technologies Used: ", bold: true }),
          new TextRun(exp.skills.join(", ")),
        ],
        spacing: { after: 200 },
      })
    );
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
            text: `• ${achievement}`,
            spacing: { after: 50 },
            indent: { left: 400 },
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

  return new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });
};
