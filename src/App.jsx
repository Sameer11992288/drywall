const highlights = [
  'Residential and commercial service',
  'Reliable timelines and clean workmanship',
  'Detail-focused drywall finishing',
  'Built for contractors, developers, and homeowners',
];

const services = [
  {
    title: 'Drywall',
    text: 'Professional drywall installation for residential, commercial, and renovation projects with clean execution and dependable timelines.',
    bullets: [
      'Board installation',
      'Drywall repairs and patchwork',
      'Residential and commercial interiors',
      'Clean jobsite standards',
    ],
  },
  {
    title: 'Framing',
    text: 'Accurate structural and interior framing solutions designed to support efficient builds and high-quality finishes.',
    bullets: ['Steel stud framing', 'Wood framing', 'Bulkheads and partitions', 'Layout precision'],
  },
  {
    title: 'Finishing',
    text: 'Smooth taping, mudding, sanding, and final finishing work that prepares your space for paint and occupancy.',
    bullets: ['Taping and mudding', 'Level finish preparation', 'Sanding and touch-ups', 'Ready-for-paint delivery'],
  },
];

const aboutPoints = [
  'Clear communication from estimate to completion',
  'Quality-first workmanship on every detail',
  'Flexible support for residential and commercial projects',
  'A professional finish that reflects the standard of your build',
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <div className="brand-name">Primex Dry Wall</div>
            <div className="brand-subtitle">Drywall • Framing • Finishing</div>
          </div>
          <a href="#contact" className="button button-primary">
            Get a Quote
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Toronto Interior Construction Specialists</div>
              <h1>Drywall, framing, and finishing done right the first time.</h1>
              <p>
                Primex Dry Wall supports builders, homeowners, and property managers with dependable interior construction services.
                We focus on disciplined workmanship, clean sites, and polished final results.
              </p>
              <div className="button-row">
                <a href="#contact" className="button button-primary">
                  Request a Quote
                </a>
                <a href="#services" className="button button-secondary">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="highlight-grid">
              {highlights.map((item) => (
                <div key={item} className="glass-card compact-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-block">
          <div className="container">
            <div className="section-intro">
              <div className="section-label">Our Services</div>
              <h2>Core services for contractors, developers, and homeowners</h2>
              <p>
                Primex Dry Wall specializes in the interior stages of construction that define structure, flow, and finish quality.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="glass-card service-card">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-block section-muted">
          <div className="container about-grid">
            <div>
              <div className="section-label">About Primex Dry Wall</div>
              <h2>Focused on craftsmanship, communication, and clean execution</h2>
              <p>
                Primex Dry Wall is a construction company specializing in drywall, framing, and finishing. We support builders,
                homeowners, property managers, and contractors with dependable trade work that keeps projects moving and delivers
                polished results.
              </p>
            </div>

            <div className="stack-grid">
              {aboutPoints.map((item) => (
                <div key={item} className="glass-card compact-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-block">
          <div className="container contact-grid">
            <div>
              <div className="section-label">Contact</div>
              <h2>Tell us about your project</h2>
              <p>
                This Vite version is structured for straightforward deployment on Vercel, with a standard React entry point and
                clean static hosting output.
              </p>
            </div>

            <div className="contact-card">
              <form className="contact-form">
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Email address" />
                <textarea placeholder="Project details" rows="6" />
                <button type="submit" className="button button-primary button-full">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
