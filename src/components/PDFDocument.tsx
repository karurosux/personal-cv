import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { CVData } from "@/types/cv";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 50,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#1a1a1a",
    lineHeight: 1.6,
  },
  header: {
    marginBottom: 20,
    borderBottom: "1 solid #e2e8f0",
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 8,
    fontWeight: "bold",
  },
  contactInfoText: {
    fontSize: 10,
    color: "#64748b",
  },
  contactLink: {
    color: "#2563eb",
    textDecoration: "none",
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
    textTransform: "uppercase",
    borderBottom: "1 solid #e2e8f0",
    paddingBottom: 4,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#334155",
    marginBottom: 6,
    textAlign: "justify",
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 4,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
  },
  experienceCompany: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2563eb",
  },
  experienceDate: {
    fontSize: 9,
    color: "#64748b",
  },
  techStackText: {
    fontSize: 9,
    color: "#475569",
    marginTop: 2,
  },
  educationItem: {
    marginBottom: 10,
  },
  educationDegree: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
  },
  educationInstitution: {
    fontSize: 10,
    color: "#10b981",
    fontWeight: "bold",
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 3,
  },
  bulletText: {
    fontSize: 10,
    color: "#334155",
    lineHeight: 1.5,
    flex: 1,
  },
  bulletIcon: {
    width: 10,
    fontSize: 10,
  }
});

interface PDFDocumentProps {
  data: CVData;
}

export const CVPDFDocument = ({ data }: PDFDocumentProps) => {
  const contactParts = [
    data.contactInfo.email,
    data.contactInfo.phone,
    data.contactInfo.location,
    data.contactInfo.github?.replace("https://", ""),
    data.contactInfo.linkedin?.replace("https://", "")
  ].filter(Boolean);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>
            {data.title} | {data.yearsOfExperience} Years of Experience
          </Text>
          <Text style={styles.contactInfoText}>
            {contactParts.join(" | ")}
          </Text>
        </View>



        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Technical Competencies</Text>
          <Text style={styles.text}>
            Programming Languages: TypeScript, JavaScript, Go, Java, Dart, C#, Bash
          </Text>
          <Text style={styles.text}>
            Frameworks & Tools: Next.js, React, Angular, Node.js, Flutter, Echo, Spring, .NET, ExtJS
          </Text>
          <Text style={styles.text}>
            Databases & Caching: PostgreSQL, PostGIS, SQLite, Redis, Oracle SQL, MS SQL, MySQL
          </Text>
          <Text style={styles.text}>
            Infrastructure & Tools: Docker, Dokploy, NGINX, Git, Stripe, RevenueCat, Groq API, Google ML Kit, OpenCV, Sentry, Firebase
          </Text>
          <Text style={styles.text}>
            Concepts: Distributed Systems, Microservices, Domain-Driven Design (DDD), RESTful APIs, CI/CD, Machine Learning
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {data.workExperience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
                <Text style={styles.experienceDate}>{exp.location}</Text>
              </View>
              
              {exp.positions.map((pos, posIdx) => (
                <View key={posIdx} style={{ marginBottom: 8, marginTop: 4 }}>
                  <View style={styles.experienceHeader}>
                    <Text style={styles.experienceTitle}>{pos.title}</Text>
                    <Text style={styles.experienceDate}>{pos.startDate} - {pos.endDate}</Text>
                  </View>
                  
                  {Array.isArray(pos.description) ? (
                    pos.description.map((bullet, idx) => (
                      <View key={idx} style={styles.bulletPoint}>
                        <Text style={styles.bulletIcon}>•</Text>
                        <Text style={styles.bulletText}>{bullet}</Text>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.text}>{pos.description}</Text>
                  )}
                  
                  <Text style={styles.techStackText}>
                    Technologies: {pos.skills.join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.experienceDate}>{edu.startDate} - {edu.endDate}</Text>
              </View>
              <Text style={styles.educationInstitution}>{edu.institution} | {edu.location}</Text>
              
              {edu.description && (
                <Text style={[styles.text, { marginTop: 4 }]}>{edu.description}</Text>
              )}
              {edu.achievements && edu.achievements.length > 0 && (
                <View style={{ marginTop: 4 }}>
                  {edu.achievements.map((achievement, idx) => (
                    <View key={idx} style={styles.bulletPoint}>
                      <Text style={styles.bulletIcon}>•</Text>
                      <Text style={styles.bulletText}>{achievement}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <Text style={styles.text}>
            {data.languages.map((lang) => `${lang.name} (${lang.proficiency})`).join(", ")}
          </Text>
        </View>

        {data.certifications && data.certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certifications.map((cert, index) => (
              <Text key={index} style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>{cert.name}</Text>
                {cert.issuer && ` - ${cert.issuer}`}
                {cert.date && ` (${cert.date})`}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};
