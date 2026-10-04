const projects = [
  {
    title: "BackToTheFuture",
    year: "2026 · Ongoing",
    description:
      "Studying whether temporal client reputation can improve Byzantine robustness in federated intrusion detection while preserving fair participation for honest clients with highly non-IID data.",
    technologies: ["Python", "PyTorch", "CICIoT2023"],
    github: "https://github.com/lemurz/FIDS---Temporal-Reputation-Mechanism",
  },

  {
    title: "Adversarial Bengali NLP: Attack Paths, Defense Evidence, and Research Gaps",
    year: "2026 · Draft",
    description:
      "Structured narrative review on adversarial robustness in Bengali/Bangla NLP. Covers orthographic and lexical attacks, transliteration, code-mixing, jailbreaks, and multimodal attack surfaces, and how much Bengali NLP has been explored in terms of these.",
    technologies: [],
    github: "https://github.com/lemurz/FIDS---Temporal-Reputation-Mechanism",
  },


];
export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Research Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li className="project" key={project.title}>
            <div className="project-year">{project.year}</div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-actions">
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <ul className="tag-list">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
