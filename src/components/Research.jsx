const interests = ['Federated Learning', 'AI Security & Privacy', 'Network Intrusion Detection', 'Natural Language Processing']
export default function Research() { return <section className="section" id="research"><h2>Research Interests</h2><ul className="interest-list">{interests.map(x => <li key={x}>{x}</li>)}</ul></section> }
