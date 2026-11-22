import { useState, useEffect } from 'react'

// Simple SVG icons
const icons = {
  menu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  close: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  external: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  map: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  download: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  grad: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
}

const projects = [
  {
    title: 'FlyBird Tourism',
    desc: 'End-to-end travel portal built solo with Laravel covering CRM, Marketing, Accounts & Admin modules. Multi-user authentication with role-based access (Admin, Agent, User, Vendor) and a dashboard-based booking management system for day-to-day operations.',
    url: 'https://www.flybirdtourism.com/',
    tags: ['Laravel', 'PHP', 'MySQL', 'CRM', 'RBAC'],
    icon: '✈️',
  },
  {
    title: 'Meta Airfare — Flight Meta Search',
    desc: 'Flight meta search platform similar to JetCost & Kayak. Integrates multiple flight APIs for real-time pricing & availability with redirect-based booking flow connecting users to airline & OTA sites.',
    url: 'https://www.metairfare.com/',
    tags: ['Laravel', 'REST APIs', 'Flight APIs', 'Multi-currency'],
    icon: '🔍',
  },
  {
    title: 'Punjab Aviation',
    desc: 'Extended travel booking platform for the Indian market supporting flight, hotel, holiday package & sightseeing modules with multi-currency display (INR, USD, EUR, GBP, AED).',
    url: 'https://www.punjabaviation.com/',
    tags: ['Laravel', 'Travel', 'Hotels', 'Packages'],
    icon: '🛫',
  },
  {
    title: 'TravoByte — AI Travel CRM',
    desc: 'AI-powered Travel CRM supporting B2B / B2C / B2B2C portals with flight, hotel & bus API integrations. Built animated dashboard widgets for AI-driven quote generation, lead pipeline tracking and flight route visualization.',
    url: 'https://www.travobyte.com/',
    tags: ['Laravel', 'AI', 'CRM', 'React', 'APIs'],
    icon: '🤖',
  },
  {
    title: 'Karz and Dolls',
    desc: 'E-commerce storefront for diecast model cars, action figures & collectibles. Features catalog browsing, wishlist and secure checkout with payment gateway integration.',
    url: 'https://www.karzanddolls.com/',
    tags: ['Laravel', 'E-commerce', 'Razorpay', 'MySQL'],
    icon: '🛒',
  },
  {
    title: 'Birthday Masti',
    desc: 'Full-featured e-commerce storefront for birthday and party products with modern UI, product catalog, cart and secure payment flow.',
    url: 'https://www.birthdaymasti.com/',
    tags: ['Laravel', 'E-commerce', 'Bootstrap'],
    icon: '🎂',
  },
  {
    title: 'Club 147',
    desc: 'E-commerce platform with product catalog, wishlist functionality and secure checkout experience tailored for club merchandise.',
    url: 'https://www.club147.in/',
    tags: ['Laravel', 'E-commerce', 'Payments'],
    icon: '🏷️',
  },
  {
    title: 'Nibble & Pixel',
    desc: 'Modern design-focused website for a product photography studio with clean frontend, portfolio showcase and contact flows.',
    url: 'https://www.nibbleandpixel.com/',
    tags: ['Frontend', 'Design', 'Responsive'],
    icon: '📸',
  },
]

const skills = [
  { title: 'Backend', items: ['Laravel', 'PHP', 'CodeIgniter', 'Livewire', 'Node.js', 'Express', 'Django'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'HTML/CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'MUI'] },
  { title: 'Database', items: ['MySQL', 'MongoDB', 'Mongoose'] },
  { title: 'APIs & Integrations', items: ['REST APIs', 'SOAP', 'Razorpay', 'SendGrid', 'GRN Connect', 'Payment Gateways'] },
  { title: 'Cloud & Tools', items: ['AWS', 'Git', 'Postman', 'VS Code', 'PyCharm'] },
  { title: 'Other', items: ['Python', 'Currency Exchange', 'Geo-location'] },
]

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Kalinga Institute of Industrial Technology (KIIT), Odisha',
    period: '2017 – 2021',
    meta: 'CGPA: 8.0',
  },
  {
    degree: 'Class XII (HSC – UP Board)',
    school: 'Panchayat Inter College, Gorakhpur',
    period: '2015 – 2017',
    meta: 'Aggregate: 65%',
  },
  {
    degree: 'Class X (ICSE)',
    school: 'Stepping Stones Inter College, Gorakhpur',
    period: '2014 – 2015',
    meta: 'Aggregate: 72%',
  },
  {
    degree: 'Full Stack Development',
    school: 'Apponix Technologies',
    period: 'Completed April 2023',
    meta: 'Certification',
  },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="logo">CBC</a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? icons.close : icons.menu}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-badge">
            <span></span> Available for opportunities
          </div>
          <h1>
            Chandra Bhushan <span>Chaudhary</span>
          </h1>
          <p className="hero-role">Laravel Developer</p>
          <p className="hero-desc">
            Building scalable web applications, RESTful APIs, and CRM platforms across travel, 
            e-commerce, and SaaS domains. 3+ years of hands-on experience delivering production-ready platforms.
          </p>
          <div className="hero-meta">
            <span>{icons.map} Gorakhpur, UP</span>
            <span>{icons.mail} chandrabhushan2541@gmail.com</span>
            <span>{icons.phone} +91 73555 32545</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects {icons.external}
            </a>
            <a href="#contact" className="btn btn-outline">
              Let&apos;s Talk
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              {icons.github}
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              {icons.linkedin}
            </a>
            <a href="mailto:chandrabhushan2541@gmail.com" aria-label="Email">
              {icons.mail}
            </a>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">40%</div>
              <div className="stat-label">Data Retrieval Boost</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">30%</div>
              <div className="stat-label">Performance Gain</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">8+</div>
              <div className="stat-label">Live Platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <div className="section-label">About Me</div>
          <h2 className="section-title">The developer behind the code</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Laravel Developer with 3+ years of experience designing and building scalable web applications, 
                RESTful APIs, and CRM platforms across the travel, e-commerce, and SaaS domains.
              </p>
              <p>
                Skilled in third-party API integration, database optimization, and full-stack development 
                using Laravel, React, and Next.js. Proven ability to independently deliver production-ready 
                platforms — from travel booking portals to AI-powered CRM dashboards.
              </p>
              <p>
                I work closely with stakeholders to translate business requirements into reliable technical solutions.
              </p>
              <ul className="about-highlights">
                <li>{icons.check} Improved data retrieval efficiency by 40% through query optimization & caching</li>
                <li>{icons.check} Enhanced application performance by 30% via code refactoring</li>
                <li>{icons.check} Integrated payment gateways, flight/hotel inventory & notification services</li>
                <li>{icons.check} Led technical audits ensuring full regulatory compliance</li>
              </ul>
            </div>
            <div>
              <div className="skill-group" style={{ marginBottom: '1rem' }}>
                <h3>{icons.code} Currently Working</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Laravel Developer at <strong style={{ color: 'var(--accent-light)' }}>Nibble Software Technologies</strong>
                  <br />
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>June 2023 – Present</span>
                </p>
              </div>
              <div className="skill-group">
                <h3>Focus Areas</h3>
                <div className="skill-tags">
                  {['Travel Tech', 'E-commerce', 'SaaS', 'CRM Systems', 'API Integration', 'Performance'].map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="container">
          <div className="section-label">Work Experience</div>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-desc">Building production systems that scale and deliver real business value.</p>

          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Laravel Developer</div>
                <div className="exp-company">Nibble Software Technologies</div>
              </div>
              <div className="exp-date">June 2023 – Present</div>
            </div>
            <ul className="exp-list">
              <li>Designed and developed scalable Laravel applications and RESTful APIs for clients across travel, e-commerce, and SaaS domains.</li>
              <li>Improved data retrieval efficiency by 40% through query optimization and caching strategies.</li>
              <li>Enhanced application performance by 30% via code refactoring and backend optimization.</li>
              <li>Integrated third-party SOAP and REST APIs including payment gateways, flight/hotel inventory systems, and notification services (SendGrid, Razorpay, GRN Connect).</li>
              <li>Led the team through a complex technical audit, ensuring full regulatory compliance.</li>
              <li>Presented technical solutions and project progress directly to client stakeholders.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <div className="section-label">Featured Projects</div>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-desc">
            Production platforms across travel, e-commerce and SaaS — each with live links and real business impact.
          </p>

          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.title} className="project-card">
                <div className="project-header">
                  <div className="project-icon">{p.icon}</div>
                  <div className="project-links">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" title="Live Demo" aria-label={`Visit ${p.title}`}>
                      {icons.external}
                    </a>
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">
                    <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                  </h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-desc">The stack I use to turn ideas into production-ready software.</p>

          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="container">
          <div className="section-label">Education & Certifications</div>
          <h2 className="section-title">Learning Path</h2>
          <p className="section-desc">Academic background and continuous learning.</p>

          <div className="edu-list">
            {education.map((e) => (
              <div key={e.degree} className="edu-item">
                <div className="edu-icon">{icons.grad}</div>
                <div className="edu-content">
                  <h3>{e.degree}</h3>
                  <div className="school">{e.school}</div>
                  <div className="meta">{e.period} · {e.meta}</div>
                </div>
              </div>
            ))}
            <div className="edu-item">
              <div className="edu-icon">{icons.grad}</div>
              <div className="edu-content">
                <h3>Additional Certifications</h3>
                <div className="school">CTTC</div>
                <div className="meta">Internet of Things (Jan 2020) · AI & Machine Learning (June 2019) · Self Driving Car Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let&apos;s work together</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p>
                I&apos;m currently open to new opportunities and interesting projects. 
                Whether you need a Laravel developer for your next product or want to discuss a collaboration — feel free to reach out.
              </p>
              <div className="contact-methods">
                <a href="mailto:chandrabhushan2541@gmail.com" className="contact-method">
                  {icons.mail}
                  <div>
                    <span>chandrabhushan2541@gmail.com</span>
                    <small>Email me anytime</small>
                  </div>
                </a>
                <a href="tel:+917355532545" className="contact-method">
                  {icons.phone}
                  <div>
                    <span>+91 73555 32545</span>
                    <small>Call or WhatsApp</small>
                  </div>
                </a>
                <div className="contact-method">
                  {icons.map}
                  <div>
                    <span>Gorakhpur, Uttar Pradesh</span>
                    <small>India</small>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="skill-group" style={{ height: '100%' }}>
                <h3>Quick Links</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                  <a href="#projects" className="btn btn-outline" style={{ justifyContent: 'center' }}>
                    Browse Projects
                  </a>
                  <a href="mailto:chandrabhushan2541@gmail.com" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                    {icons.mail} Send Email
                  </a>
                </div>
                <div className="social-links" style={{ marginTop: '1.5rem' }}>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">{icons.github}</a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">{icons.linkedin}</a>
                  <a href="mailto:chandrabhushan2541@gmail.com">{icons.mail}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            Designed & built by <a href="#home">Chandra Bhushan Chaudhary</a> · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
