import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
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
    marginBottom: 25,
    borderBottom: "2 solid #2563eb",
    paddingBottom: 18,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 18,
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 16,
    fontWeight: 600,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    fontSize: 9,
    color: "#64748b",
    marginTop: 8,
  },
  contactItem: {
    marginRight: 16,
  },
  contactLink: {
    color: "#2563eb",
    textDecoration: "none",
  },
  section: {
    marginTop: 18,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    borderBottom: "1.5 solid #e2e8f0",
    paddingBottom: 5,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#334155",
    marginBottom: 8,
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
  },
  skill: {
    backgroundColor: "#f1f5f9",
    padding: "3 10",
    borderRadius: 4,
    fontSize: 9,
    color: "#334155",
    border: "1 solid #cbd5e1",
    marginBottom: 0,
    lineHeight: 1,
  },
  experienceItem: {
    marginBottom: 16,
    paddingLeft: 12,
    borderLeft: "3 solid #2563eb",
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 2,
  },
  experienceCompany: {
    fontSize: 11,
    color: "#2563eb",
    marginBottom: 2,
    fontWeight: 600,
  },
  experienceDate: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 8,
  },
  experienceDescription: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#475569",
    marginBottom: 8,
  },
  subsectionTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: "#475569",
    marginTop: 10,
    marginBottom: 6,
  },
  techStack: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 6,
    fontWeight: 600,
  },
  educationItem: {
    marginBottom: 14,
    paddingLeft: 12,
    borderLeft: "3 solid #10b981",
  },
  educationDegree: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 2,
  },
  educationInstitution: {
    fontSize: 11,
    color: "#10b981",
    marginBottom: 2,
    fontWeight: 600,
  },
  educationDate: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 6,
  },
  educationDescription: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#475569",
    marginBottom: 6,
  },
  achievementsList: {
    marginTop: 4,
    marginBottom: 4,
  },
  achievementItem: {
    fontSize: 9,
    color: "#475569",
    marginBottom: 3,
    paddingLeft: 8,
  },
});

interface PDFDocumentProps {
  data: CVData;
}

export const CVPDFDocument = ({ data }: PDFDocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>
            {data.title} | {data.yearsOfExperience} Years of Experience
          </Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>{data.contactInfo.email}</Text>
            {data.contactInfo.phone?.length > 0 && (
              <Text style={styles.contactItem}>{data.contactInfo.phone}</Text>
            )}
            {data.contactInfo.location?.length > 0 && (
              <Text style={styles.contactItem}>{data.contactInfo.location}</Text>
            )}
          </View>
          <View style={styles.contactInfo}>
            <Link src={data.contactInfo.github} style={styles.contactLink}>
              <Text style={styles.contactItem}>
                {data.contactInfo.github.replace("https://", "")}
              </Text>
            </Link>
            <Link src={data.contactInfo.linkedin} style={styles.contactLink}>
              <Text style={styles.contactItem}>
                {data.contactInfo.linkedin.replace("https://", "")}
              </Text>
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.text}>{data.professionalSummary.intro}</Text>
          <Text style={styles.text}>
            {data.professionalSummary.careerProgression}
          </Text>
          <Text style={styles.text}>
            {data.professionalSummary.currentRole}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>

          <Text style={styles.subsectionTitle}>Core Competencies</Text>
          <View style={styles.skillsContainer}>
            {data.primarySkills.map((skill) => (
              <Text key={skill} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>

          <Text style={styles.subsectionTitle}>Programming Languages</Text>
          <View style={styles.skillsContainer}>
            {data.programmingLanguages.map((lang) => (
              <Text key={lang} style={styles.skill}>
                {lang}
              </Text>
            ))}
          </View>

          <Text style={styles.subsectionTitle}>Frameworks & Libraries</Text>
          <View style={styles.skillsContainer}>
            {data.frameworks.map((framework) => (
              <Text key={framework} style={styles.skill}>
                {framework}
              </Text>
            ))}
          </View>

          <Text style={styles.subsectionTitle}>Additional Technologies</Text>
          <View style={styles.skillsContainer}>
            {data.allSkills.map((skill) => (
              <Text key={skill} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {data.workExperience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>{exp.title}</Text>
              <Text style={styles.experienceCompany}>{exp.company}</Text>
              <Text style={styles.experienceDate}>
                {exp.location} | {exp.startDate} - {exp.endDate}
              </Text>
              <Text style={styles.experienceDescription}>
                {exp.description}
              </Text>
              <Text style={styles.techStack}>Technologies Used:</Text>
              <View style={styles.skillsContainer}>
                {exp.skills.map((skill) => (
                  <Text key={skill} style={styles.skill}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.educationDegree}>{edu.degree}</Text>
              <Text style={styles.educationInstitution}>{edu.institution}</Text>
              <Text style={styles.educationDate}>
                {edu.location} | {edu.startDate} - {edu.endDate}
              </Text>
              {edu.description && (
                <Text style={styles.educationDescription}>
                  {edu.description}
                </Text>
              )}
              {edu.achievements && edu.achievements.length > 0 && (
                <View style={styles.achievementsList}>
                  {edu.achievements.map((achievement, idx) => (
                    <Text key={idx} style={styles.achievementItem}>
                      • {achievement}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.skillsContainer}>
            {data.languages.map((language, index) => (
              <Text key={index} style={styles.skill}>
                {language.name} ({language.proficiency})
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
