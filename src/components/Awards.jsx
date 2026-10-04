const awards = [
  { title: "1st Place", event: "IUT Codesprint", year: "2026" },
  { title: "3rd Place", event: "IUT Codesprint", year: "2025" },
];

export default function Awards() {
  return (
    <section className="section" id="awards">
      <h2>Awards &amp; Honors</h2>
      <ul className="award-list">
        {awards.map((award) => (
          <li className="award-item" key={`${award.event}-${award.year}`}>
            <span className="award-year">{award.year}</span>
            <p>
              <strong>{award.title}</strong>
              <span aria-hidden="true"> · </span>
              {award.event}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
