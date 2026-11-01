import { useState, type FormEvent } from 'react';

import {
  Rocket,
  Users,
  Lightbulb,
  GraduationCap,
  HeartPulse,
  Leaf,
  Code2,
  Handshake,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  CalendarDays,
  MapPin,
  Trophy,
  Settings,
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  Github,
  Play,
} from 'lucide-react';

import { benefits, programs, startups } from './data/siteData';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  const metrics = [
    { icon: GraduationCap, value: '1K+', label: 'Students Supported' },
    { icon: Rocket, value: '100+', label: 'Startup Ideas Nurtured' },
    { icon: Users, value: '50+', label: 'Mentors' },
    { icon: CalendarDays, value: '25+', label: 'Events & Hackathons' },
  ];

  return (
    <>
      {/* HEADER */}

      <header className="header">
        <a href="#" className="brand">
          <span className="brand-icon">
            <Lightbulb size={27} />
          </span>

          <span>
            <b>Student Innovation Hub</b>
            <small>Dream • Innovate • Grow</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#mentorship" onClick={closeMenu}>Mentorship</a>
          <a href="#startups" onClick={closeMenu}>Startups</a>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#resources" onClick={closeMenu}>Resources</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a href="#apply" className="nav-cta" onClick={closeMenu}>
            Apply for Incubation <ArrowRight size={15} />
          </a>
        </nav>

        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>

        {/* HERO SECTION */}

        <section className="hero">
          <div className="hero-bg"></div>

          <div className="hero-content">
            <span className="eyebrow">
              PLATFORM FOR STUDENT ENTREPRENEURS
            </span>

            <h1>
              Have an Idea?
              <br />
              Let's Build Your
              <br />
              <em>Startup</em> Together!
            </h1>

            <p>
              We empower college students to transform innovative ideas
              into successful startups through mentorship, training
              and support.
            </p>

            <div className="actions">
              <a href="#programs" className="btn primary">
                Explore Programs <ArrowRight size={17} />
              </a>

              <a href="#about" className="btn ghost">
                <Play size={17} /> Watch Our Story
              </a>
            </div>

            <small className="hero-note">
              Dream big. Build smart. Create impact.
            </small>
          </div>
        </section>

        {/* BENEFITS */}

        <section className="benefits" id="about">
          {benefits.map(({ title, sub, icon: Icon }) => (
            <div className="benefit" key={title}>
              <span>
                <Icon size={23} />
              </span>

              <div>
                <b>{title}</b>
                <small>{sub}</small>
              </div>
            </div>
          ))}
        </section>

        {/* PROGRAMS */}

        <section className="section programs" id="programs">
          <div className="intro">
            <span className="eyebrow">OUR PROGRAMS</span>

            <h2>
              Turn Your Ideas
              <br />
              into Impact
            </h2>

            <p>
              Get hands-on support at every stage of your startup journey.
              Learn, collaborate and turn your ideas into real solutions.
            </p>

            <a href="#apply" className="text-link">
              Explore All Programs <ArrowRight size={15} />
            </a>
          </div>

          <div className="program-grid">
            {programs.map(({ title, desc, icon: Icon, tone, tag }) => (
              <article className={`program-card ${tone}`} key={title}>
                <div className="card-top">
                  <span>
                    <Icon size={25} />
                  </span>

                  <small>{tag}</small>
                </div>

                <h3>{title}</h3>

                <p>{desc}</p>

                <a href="#apply">
                  Learn More <ArrowRight size={13} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* IMPACT */}

        <section className="section impact">
          <div>
            <span className="eyebrow">OUR IMPACT</span>

            <h2>Building Tomorrow's Innovators</h2>

            <p>
              Supporting students with the right resources,
              mentorship and opportunities to make their ideas
              a reality.
            </p>

            <small className="note">
              Illustrative prototype figures. Replace with verified data.
            </small>
          </div>

          <div className="metrics">
            {metrics.map(({ icon: Icon, value, label }) => (
              <div className="metric" key={label}>
                <Icon size={27} />
                <b>{value}</b>
                <small>{label}</small>
              </div>
            ))}
          </div>
        </section>

        {/* STARTUPS */}

        <section className="section" id="startups">
          <div className="section-heading">
            <div>
              <span className="eyebrow">STUDENT STARTUPS</span>

              <h2>Innovative Ideas. Real Impact.</h2>

              <p>Explore student innovation concepts.</p>
            </div>

            <a href="#apply" className="text-link">
              View Success Stories <ArrowRight size={15} />
            </a>
          </div>

          <div className="startup-grid">
            {startups.map(({ name, category, desc, icon: Icon, tone }) => (
              <article className="startup" key={name}>
                <span className={`startup-icon ${tone}`}>
                  <Icon size={28} />
                </span>

                <div>
                  <small>{category}</small>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EVENTS */}

        <section className="section events" id="events">
          <div>
            <span className="eyebrow">UPCOMING EVENTS</span>

            <h2>Learn, Connect & Innovate</h2>

            <p>
              Join workshops, hackathons and innovation events
              to connect with fellow student entrepreneurs.
            </p>

            <a href="#apply" className="text-link">
              View All Events <ArrowRight size={15} />
            </a>
          </div>

          <article className="event">
            <div className="event-art">
              <Trophy size={45} />
              <b>INNOVATE 2026</b>
            </div>

            <div className="event-info">
              <label>FEATURED EVENT</label>

              <h3>Student Hackathon 2026</h3>

              <p>
                Bring your ideas, collaborate with teams and
                develop creative solutions.
              </p>

              <small>
                <CalendarDays size={14} /> Upcoming event
              </small>

              <small>
                <MapPin size={14} /> Online & On-Campus
              </small>

              <a href="#apply" className="btn light">
                Register Now <ArrowRight size={14} />
              </a>
            </div>
          </article>
        </section>

        {/* MENTORSHIP */}

        <section className="section" id="mentorship">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MENTORSHIP NETWORK</span>
              <h2>Learn From Experienced Mentors</h2>
              <p>
                Get guidance to develop your technical and business ideas.
              </p>
            </div>
          </div>

          <div className="startup-grid">
            <article className="startup">
              <span className="startup-icon">
                <Users size={27} />
              </span>
              <div>
                <h3>Expert Guidance</h3>
                <p>Learn from experienced professionals and founders.</p>
              </div>
            </article>

            <article className="startup">
              <span className="startup-icon cyan">
                <Code2 size={27} />
              </span>
              <div>
                <h3>Technical Support</h3>
                <p>Get support while developing your product.</p>
              </div>
            </article>

            <article className="startup">
              <span className="startup-icon green">
                <Handshake size={27} />
              </span>
              <div>
                <h3>Business Guidance</h3>
                <p>Understand startup planning and business development.</p>
              </div>
            </article>
          </div>
        </section>

        {/* RESOURCES */}

        <section className="section" id="resources">
          <div className="section-heading">
            <div>
              <span className="eyebrow">RESOURCES</span>
              <h2>Tools for Your Startup Journey</h2>
              <p>Explore opportunities to learn, develop and grow.</p>
            </div>
          </div>
        </section>

        {/* APPLY */}

        <section className="section apply" id="apply">
          <div>
            <span className="eyebrow">READY TO START?</span>

            <h2>Ready to Start Your Startup Journey?</h2>

            <p>
              Have an idea or want to become part of our innovation
              community? Tell us about yourself.
            </p>

            <ul>
              <li><CheckCircle /> Student-focused opportunities</li>
              <li><CheckCircle /> Mentorship and technical guidance</li>
              <li><CheckCircle /> Startup development support</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit}>
            {submitted ? (
              <div className="success">
                <CheckCircle size={45} />

                <h3>Thank You!</h3>

                <p>
                  Your demo form submission was successful.
                  No information has been stored or sent to a server.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <>
                <h3>Join Student Innovation Hub</h3>

                <p>Share your interest with us.</p>

                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <label htmlFor="interest">Your Interest</label>

                <select
                  id="interest"
                  required
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                >
                  <option value="">Select your interest</option>
                  <option value="Startup Idea">Startup Idea</option>
                  <option value="Mentorship">Mentorship</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Events">Events</option>
                </select>

                <label htmlFor="message">Tell us about your idea</label>

                <textarea
                  id="message"
                  rows={3}
                  placeholder="Describe your idea..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <button type="submit" className="btn primary submit">
                  Submit Interest <ArrowRight size={16} />
                </button>
              </>
            )}
          </form>
        </section>

      </main>

      {/* FOOTER */}

      <footer id="contact">
        <div className="footer-main">
          <a href="#" className="brand footer-brand">
            <span className="brand-icon">
              <Lightbulb size={27} />
            </span>

            <span>
              <b>Student Innovation Hub</b>
              <small>Dream • Innovate • Grow</small>
            </span>
          </a>

          <p>
            Empowering students to transform innovative
            ideas into meaningful solutions.
          </p>

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#events">Events</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <Linkedin size={18} />
            <Twitter size={18} />
            <Youtube size={18} />
            <Github size={18} />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Student Innovation Hub. All rights reserved.</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
