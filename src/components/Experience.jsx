const experience = [
  {
    organization: "Elite Research Lab",
    role: "Student Researcher",
    location: "Queens, NY, USA",
    period: "Aug. 2026 - Present",
    highlights: [
      "First author on \"Adversarial Bengali NLP: Attack Paths, Defense Evidence, and Research Gaps,\" a structured narrative review evaluating the robustness of Bengali NLP systems and the overall depth of research in the field. Submitted for publication.",
    ],
  },
  {
    organization: "RedDot Digital Limited",
    role: "Software Developer Intern",
    location: "Gulshan, Dhaka, Bangladesh",
    period: "Sep. 2026 - Present",
    highlights: [
      "Fine-tuned a PaddleOCR model used to detect Bengali NID cards for a mobile financial services product.",
      "Worked under exclusive mentorship on an unreleased MFS backend, studying and working with eKYC and financial transactions.",
    ],
  },
  {
    organization: "AFK Tech Limited",
    role: "Backend Developer Intern",
    location: "Dhaka, Bangladesh",
    period: "Oct. 2025 - Nov. 2025",
    highlights: [
      "Collaborated on the initial backend infrastructure for an event-management solution using Django and Supabase, implementing core services and establishing a scalable foundation for future development.",
    ],
  },
  {
    organization: "The Attention Network",
    role: "Version Control Engineer (Contract)",
    location: "Dhaka, Bangladesh",
    period: "May 2025",
    highlights: [
      "Documented and maintained Semantic Versioning for four web applications, improving release traceability and producing developer-facing technical documentation.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item" key={`${item.organization}-${item.role}`}>
            <div className="experience-period">{item.period}</div>
            <div>
              <div className="experience-heading">
                <div>
                  <h3>{item.organization}</h3>
                  <p className="experience-role">{item.role}</p>
                </div>
                <p className="experience-location">{item.location}</p>
              </div>
              <ul className="highlight-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
