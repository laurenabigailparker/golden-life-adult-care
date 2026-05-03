import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show')
        })
      },
      { threshold: 0.15 }
    )

    items.forEach((item) => observer.observe(item))

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      document.documentElement.style.setProperty('--scroll-progress', progress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      items.forEach((item) => observer.unobserve(item))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const services = [
    ['Engaging Social Programs', 'Group games, arts and crafts, aquatic visual therapy, pet therapy, music therapy, guest lectures, cultural events, and meaningful peer connection.', '/social.jpg'],
    ['The Power of Laughter', 'Joyful activities, entertainment, and a positive community designed to support emotional wellbeing.', '/experience.jpg'],
    ['Passionate Hobby Pursuits', 'Support for hobbies such as gardening, reading, knitting, painting, and other personal interests.', '/facility.jpg'],
    ['Optimal Hydration & Nutrition', 'Balanced meals, hydration support, dietary guidance, and nutrition-focused care.', '/nutrition.jpg'],
    ['Health & Safety Support', 'Trained staff, accessible spaces, safety protocols, handrails, non-slip flooring, and accessible restrooms.', '/wellness.jpg'],
    ['Family Peace of Mind', 'Guided enrollment, tours, clear communication, and supportive answers for families.', '/trust.jpg'],
  ]

  const faqs = [
    ['What is an Adult Care Center?', 'An adult care center provides a safe, structured daytime environment offering social, health, and supportive services for seniors and adults with disabilities.'],
    ['Who is eligible for your services?', 'Our services are designed for seniors and adults with disabilities who benefit from social engagement, activities, meals, and health support.'],
    ['What services do you provide?', 'We offer social activities, hobbies, nutritional support, hydration management, wellness routines, and structured daily engagement.'],
    ['What are your hours of operation?', 'Monday through Friday, 8:00 AM to 5:00 PM.'],
    ['Are meals provided?', 'Yes, we provide healthy, balanced meals tailored to dietary needs.'],
    ['What activities do you offer?', 'Activities include games, arts and crafts, therapy programs, music, exercise, guest lectures, cultural events, and more.'],
    ['Do you have medical staff?', 'Yes, trained healthcare professionals assist with medication management and health monitoring.'],
    ['What safety measures are in place?', 'We maintain strict safety protocols, accessible design, handrails, non-slip flooring, accessible restrooms, and supervised care.'],
    ['Do you offer transportation?', 'Transportation may be available depending on location and availability. Please contact us for details.'],
    ['How do I enroll?', 'Contact us and we’ll guide you through the process step-by-step.'],
    ['Can I visit first?', 'Yes, we encourage tours before enrollment.'],
    ['Who can I contact?', 'You can reach us via phone or email anytime.'],
    ['How do I start?', 'Simply reach out through our contact section and we’ll guide you through the next steps.'],
  ]

  const serviceFaqs = [
    ['What kind of social programs do you offer?', 'We offer art, exercise, therapy programs, cultural events, musical performances, group games, and community activities designed for engagement.'],
    ['How do you handle nutrition?', 'A dedicated dietician supports balanced meals, hydration schedules, and dietary needs tailored to each individual.'],
    ['How do you promote joy?', 'We create a positive, engaging environment with laughter, activities, entertainment, and meaningful social interaction.'],
    ['Do you support hobbies?', 'Yes, we encourage hobbies like reading, gardening, knitting, painting, and other favorite pastimes.'],
  ]

  return (
    <div className="site">
      <div className="scroll-progress"></div>
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <header className="header">
        <a className="brand" href="#home">
          <span>GL</span>
          <div>
            <strong>Golden Life</strong>
            <small>Adult Care Center</small>
          </div>
        </a>

        <nav>
          <a href="#mission">Mission</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">Consultation</a>
      </header>

      <main>
        <section className="hero section-cream" id="home">
          <div className="hero-copy">
            <p className="kicker">Golden Life Adult Care</p>
            <h1>
              Private daytime care,
              <br />
              <span>beautifully designed.</span>
            </h1>
            <p>
              A nurturing, vibrant, and inclusive adult care community for
              seniors and adults with disabilities.
            </p>
            <a className="button" href="#contact">Request Consultation</a>
          </div>

          <div className="hero-image">
            <img src="/hero.jpg" alt="Golden Life adult care center" />
            <div className="hero-overlay"></div>
            <div className="hero-glass"></div>
            <div className="hero-note">
              <span>Private Adult Day Care</span>
              <p>Safe, vibrant, inclusive, and thoughtfully designed.</p>
            </div>
          </div>
        </section>

        <section className="mission section-soft reveal" id="mission">
          <p className="kicker">Manifesting Our Mission</p>
          <h2>We enrich the journey of aging.</h2>
          <p>
            Our unwavering commitment to promoting joy, self-esteem, and dignity
            shapes everything we do. We strive to enrich the lives of our clients
            while providing peace of mind to families and caregivers.
          </p>

          <div className="pillar-grid">
            {[
              ['Vision', 'Creating a nurturing and inclusive haven for seniors and adults with disabilities.'],
              ['Commitment', 'Fostering productivity, health, dignity, and meaningful social connection.'],
              ['Impact', 'Enhancing lives while bringing peace of mind to families and caregivers.'],
            ].map(([title, text], index) => (
              <article key={title} style={{ transitionDelay: `${index * 120}ms` }}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services section-gold reveal" id="services">
          <div className="section-heading">
            <p className="kicker">Our Services</p>
            <h2>Enhancing life in the golden years.</h2>
            <p>
              From socialization and hobbies to hydration, diet, and laughter
              therapy, our services are designed around each individual’s needs.
            </p>
          </div>

          <div className="service-grid">
            {services.map(([title, text, image], index) => (
              <article key={title} style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="service-image">
                  <img src={image} alt={title} />
                </div>
                <span>✦</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-clean reveal" id="experience">
          <div>
            <p className="kicker">The Daily Experience</p>
            <h2>A day designed with intention.</h2>
            <p className="experience-intro">
              Every part of the day is structured to support comfort, safety,
              social connection, and peace of mind for families.
            </p>

            <img
              src="/experience.jpg"
              className="experience-img"
              alt="Senior adults enjoying daily activities"
            />
          </div>

          <div className="experience-list">
            {[
              ['01', 'Warm arrival', 'A calm welcome that helps each member transition into the day with comfort and ease.'],
              ['02', 'Wellness check', 'Supportive check-ins help staff stay aware of comfort, hydration, mood, and daily needs.'],
              ['03', 'Activities', 'Meaningful social programs, creative hobbies, music, games, and enrichment help keep the day engaging.'],
              ['04', 'Meals', 'Balanced meals, hydration support, and dietary awareness help promote overall wellness.'],
              ['05', 'Family confidence', 'Families can feel reassured knowing their loved one is supported in a safe, caring environment.'],
            ].map(([num, title, text], index) => (
              <div key={title} style={{ transitionDelay: `${index * 90}ms` }}>
                <span>{num}</span>
                <article>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials section-dark reveal">
          <div>
            <p className="kicker">Testimonials</p>
            <h2>Trusted by families and loved ones.</h2>
          </div>

          <img src="/trust.jpg" className="testimonial-img" alt="Trusted senior care" />

          <div className="testimonial-grid">
            {[
              [
                'Remarkable Transformation.',
                'Sending my father to Golden Life was the best decision we ever made. The transformation in his mood and daily routine has been remarkable. They’ve given us peace of mind knowing he’s in great hands.',
                'Julia R.',
              ],
              [
                'Truly Exceptional.',
                'My experience at Golden Life Adult Care Center has been truly exceptional. The staff’s compassion and dedication create a stimulating and enjoyable atmosphere. They make my days brighter.',
                'Susan B.',
              ],
            ].map(([title, quote, name]) => (
              <article key={name}>
                <div className="stars">★★★★★</div>
                <h3>{title}</h3>
                <p>“{quote}”</p>
                <strong>{name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="faq section-soft reveal" id="faq">
          <p className="kicker">Have questions?</p>
          <h2>We’re here with the answers you need.</h2>

          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="faq section-clean reveal">
          <p className="kicker">Service Details</p>
          <h2>More about our care approach.</h2>

          <div className="faq-list">
            {serviceFaqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact section-gold reveal" id="contact">
          <div className="contact-card">
            <p className="kicker">Private Consultation</p>
            <h2>Begin with a private conversation.</h2>
            <p>
              Tell us about your loved one’s needs, routines, and goals. We’ll
              help you understand whether Golden Life is the right fit.
            </p>

            <div className="contact-details">
              <div>
                <span>Call</span>
                <strong>(267)-518-7146</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>Info@GoldenLifeAdultCare.com</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Philadelphia</strong>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/meevrgdn"
            method="POST"
          >
            <div className="form-row">
              <input type="text" name="name" placeholder="Full name" required />
              <input type="tel" name="phone" placeholder="Phone number" required />
            </div>

            <input type="email" name="email" placeholder="Email address" required />

            <select name="reason" defaultValue="" required>
              <option value="" disabled>Reason for inquiry</option>
              <option>Tour request</option>
              <option>Enrollment information</option>
              <option>Services question</option>
              <option>General question</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us a little about your loved one’s needs"
              required
            />

            <input type="hidden" name="_subject" value="New Golden Life Inquiry" />
            <input type="hidden" name="_template" value="table" />

            <button type="submit">Request a Private Consultation</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Golden Life Adult Care Center</strong>
          <p>Comfort • Dignity • Connection</p>
        </div>

        <div className="footer-lang">
          <span>Language</span>
          <button className="active">EN</button>
          <button disabled>ES</button>
          <button disabled>RU</button>
          <button disabled>JA</button>
        </div>
      </footer>
    </div>
  )
}

export default App