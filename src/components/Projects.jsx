const projects = [
  {
    title: "Temporal Client Reputation for Byzantine-Resilient FIDS",
    year: "2026 · Ongoing",
    description:
      "Studying whether temporal client reputation can improve Byzantine robustness in federated intrusion detection while preserving fair participation for honest clients with highly non-IID data.",
    technologies: ["Python", "PyTorch", "CICIoT2023"],
    github: "https://github.com/lemurz/FIDS---Temporal-Reputation-Mechanism",
  },
];
export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Selected Research</h2>
      <ul className="project-list">
        {projects.map((p) => (
          <li className="project" key={p.title}>
            <div className="project-year">{p.year}</div>
            <div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-actions">
                <a
                  className="project-link"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <ul className="tag-list">
                  {p.technologies.map((x) => (
                    <li key={x}>{x}</li>
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
