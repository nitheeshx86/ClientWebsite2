import React, { useState, useRef, useEffect } from 'react';

function Two() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const confettiContainerRef = useRef();

  const moveIndicator = () => {
    const indicator = document.querySelector('.indicator');
    const tab = tabRefs.current[activeTab];

    if (tab && indicator) {
      indicator.style.width = `${tab.offsetWidth}px`;
      indicator.style.left = `${tab.offsetLeft}px`;
    }
  };

  useEffect(() => {
    moveIndicator();
    window.addEventListener('resize', moveIndicator);
    return () => window.removeEventListener('resize', moveIndicator);
  }, [activeTab]);

  const createConfetti = (tabIndex) => {
    const emojiSets = [
      ['👤', '🆔', '🧑‍💼'], // Profile
      ['💼', '🎤', '🤝'],     // Interview
      ['📝', '📄', '🖋️'],     // Resume
      ['🧠', '🤝', '💡']      // Soft Skills
    ];
    const emojis = emojiSets[tabIndex];
    const container = confettiContainerRef.current;
    const tab = tabRefs.current[tabIndex];
    
    if (!container || !tab) return;

    // Get tab position relative to viewport
    const tabRect = tab.getBoundingClientRect();
    
    // Create multiple confetti pieces
    for (let i = 0; i < 18; i++) { // Increased from 15 to 18 for more variety
      const confetti = document.createElement('div');
      // Randomly pick one emoji from the set for this tab
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      confetti.textContent = randomEmoji;
      confetti.className = 'confetti-piece';
      
      // Position relative to tab center in viewport coordinates
      const startX = tabRect.left + tabRect.width / 2;
      const startY = tabRect.top + tabRect.height / 2;
      
      confetti.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: ${startY}px;
        font-size: ${Math.random() * 20 + 20}px;
        pointer-events: none;
        z-index: 10000;
        animation: confetti-burst ${Math.random() * 0.5 + 1}s ease-out forwards;
        transform-origin: center;
        --random-x: ${(Math.random() - 0.5) * 400}px;
        --random-y: ${Math.random() * -200 - 100}px;
        --rotation: ${Math.random() * 720 - 360}deg;
      `;
      
      container.appendChild(confetti);
      
      // Clean up after animation
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      }, 1500);
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    createConfetti(index);
  };

  const handleMouseMove = (event) => {
    const button = event.currentTarget;
    const centerX = button.offsetWidth / 2;
    const centerY = button.offsetHeight / 2;
    const offsetX = event.nativeEvent.offsetX - centerX;
    const offsetY = event.nativeEvent.offsetY - centerY;
    button.style.setProperty("--_x-motion", `${offsetX}px`);
    button.style.setProperty("--_y-motion", `${offsetY}px`);
  };

  const tabTitles = ['Profile', 'Interview', 'Resume', 'Soft Skills'];
  const tabContent = [
    {
      title: 'Profile Building',
      content: (
        <div className="profile-content">
          <p>
            I will tailor my coaching to your interests and study style, so you'll know exactly what to focus on each semester.
          </p>
          <p>
            Trying to figure this out alone can be tiring and sometimes misleading—let me help you save energy and stay organized!
          </p>
          <p><strong>I can support you with:</strong></p>
          <ul>
            <li>Technologies to Learn</li>
            <li>Certifications to Get</li>
            <li>Projects to Align With Your Goals</li>
            <li>When to Do Internships</li>
            <li>Essential Soft Skills</li>
            <li>Leveraging Extracurricular Activities</li>
          </ul>
          <p><strong>Available Plans:</strong></p>
          <ul>
            <li>Complete roadmap of your graduation – ₹5000</li>
            <li>Yearly roadmap – ₹3000/year</li>
            <li>Semesterly roadmap – ₹2000/semester</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Interview Prep',
      content: (
        <div className="interview-content">
          <p>
            Unlock your potential and ace your next interview with our tailored interview preparation services. Whether you're aspiring to join a product company or a management consulting firm, we've got you covered with personalized training and expert feedback.
          </p>
          <p><strong>1. Mock Interview</strong></p>
          <p>
            Practice makes perfect! We'll conduct mock interviews to help you build confidence and refine your responses. Price: ₹1500
          </p>
          <p><strong>2. Specialized Training</strong></p>
          <ul>
            <li>For Product Companies - ₹2000</li>
            <li>For Management/Consulting Companies - ₹3000</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Resume Crafting',
      content: (
        <div className="resume-content">
          <p>
            Take the first step towards your dream career with our professional resume services. Whether you're a fresher or a seasoned professional, we'll help you create a resume that stands out and reflects your unique skills and experiences.
          </p>
          <p><strong>1. Resume Correction</strong></p>
          <p>
            Perfect your existing resume with our expert feedback.
          </p>
          <ul>
            <li>Price: ₹499 (For freshers)</li>
          </ul>
          <p><strong>2. Resume Preparation</strong></p>
          <p>
            Craft a compelling, tailored resume from scratch.
          </p>
          <ul>
            <li>Freshers: ₹699</li>
            <li>Professionals (up to 5 years experience): ₹2000</li>
            <li>Mid-Level (up to 15 years experience): ₹3000</li>
            <li>Senior-Level (over 15 years experience): ₹5000</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Softskills Training',
      content: (
        <div className="softskills-content">
          <p>
            Let me guide you towards your professional goals with personalized coaching that aligns with your interests and study style. Don't navigate your career development alone—get the support you need to stay organized, focused, and on track.
          </p>
          <p>Here's how I can support you:</p>
          <ul>
            <li>Key Technologies to Learn</li>
            <li>Certifications You Should Get</li>
            <li>Project Ideas to Explore</li>
            <li>When to Look for Internships</li>
            <li>Essential Soft Skills to Develop</li>
            <li>Extracurricular Activities to Join</li>
          </ul>
        </div>
      )
    }
  ];
  
  return (
    <>
      <style>{`
        /* Root variables for glassy button */
        :root {
          --button-text: hsl(200, 60%, 12%);
          --button-1-surface: rgb(215, 202, 252);
          --button-2-surface: hsl(41, 96%, 56%);
        }

        .section {
          height: 100vh;
          width: 100vw;
          position: sticky;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .blue-card {
          background: linear-gradient(to bottom right, #e9d5ff, #6366f1);
          color: white;
          z-index: 3;
          box-shadow: 0px -20px 40px rgba(0, 0, 0, 0.3);
        }

        .content-inner {
          text-align: center;
          max-width: 800px;
          padding: 2rem;
          font-family: 'Rajdhani', sans-serif;
          height: 120vh;
        }

        .page-wrapper {
          max-width: 1000px;
          width: 100%;
          padding: 3rem;
        }

        .tab-wrapper {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
        }

        .tab-list {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          height: 60px;
          background-color: rgba(31, 41, 55, 0.2);
          padding: 4px;
          border-radius: 9999px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          overflow: visible;
        }

        .tab {
          position: relative;
          z-index: 1;
          background: transparent;
          border: none;
          border-radius: 9999px;
          height: 52px;
          font-size: 1.1rem;
          color: #1f2937;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .tab.active {
          font-weight: 600;
          color: #1c3f66;
        }

        .tab span {
          display: inline-block;
          width: 100%;
        }

        .indicator {
          position: absolute;
          top: 4px;
          bottom: 4px;
          left: 0;
          width: calc(100% / 4);
          background-color: white;
          border-radius: 9999px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: left 0.3s ease, width 0.3s ease;
          z-index: 0;
        }

        .tab-panels {
          margin-top: 2rem;
          background-color: #f5f3ff;
          border-radius: 1.5rem;
          padding: 2.5rem;
          position: relative;
        }

        .tab-panel {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          transition: all 0.3s ease;
        }

        .tab-panel.active {
          position: relative;
          opacity: 1;
          visibility: visible;
        }

        .tab-panel h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .tab-panel p {
          color: #4b5563;
          font-size: 1.1rem;
          line-height: 1.6;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 1rem auto;
        }

        .tab-panel ul {
          text-align: left;
          margin: 0 auto;
          padding-left: 1.5rem;
          max-width: 600px;
        }

        .tab-panel {
          color: #1f2937;
        }

        .button-container {
          margin-top: 2rem;
          text-align: center;
        }

        /* Glassy Button Styles */
        .glassy-button {
          --_padding: 0.75rem 2rem;
          --_transition-speed: 200ms;
          --_hover-opacity: 0.4;
          --_pressed-opacity: 0.15;
          --_hover-blurriness: 5px;
          --_pressed-blurriness: 10px;
          --_frostiness: 0.3;
          --_hover-offset: 0.5rem;
          --_pressed-offset: 0.25rem;
          --_motion-factor: 0.1;
          --_surface: var(--button-1-surface);
          
          outline: 0;
          cursor: pointer;
          font: inherit;
          color: var(--button-text);
          font-weight: 500;
          font-size: 1.1rem;
          padding: 0;
          border: 0;
          border-radius: 1rem;
          background-color: transparent;
          position: relative;
          transition: all 0.3s ease;
        }

        .glassy-button span {
          display: block;
          overflow: hidden;
          padding: var(--_padding);
          border-radius: inherit;
          background-color: hsl(0 0% 100% / 0);
          backdrop-filter: blur(0px);
          transition: background-color var(--_transition-speed),
            backdrop-filter var(--_transition-speed),
            translate var(--_transition-speed);
        }

        .glassy-button span::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url("data:image/svg+xml, %3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 171 171' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.74' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0;
          transition: opacity var(--_transition-speed);
        }

        .glassy-button::after {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          border-radius: inherit;
          background-color: var(--_surface);
          transition: scale var(--_transition-speed),
            translate var(--_transition-speed);
          animation: glassy-exit forwards var(--_transition-speed);
        }

        .glassy-button:hover span,
        .glassy-button:focus-visible span {
          outline: 1px solid hsl(0 0% 100% / 0.7);
          background-color: hsl(0 0% 100% / var(--_hover-opacity));
          backdrop-filter: blur(var(--_hover-blurriness));
          translate: 0 calc(var(--_hover-offset) * -1);
        }

        .glassy-button:hover span::before,
        .glassy-button:focus-visible span::before {
          opacity: var(--_frostiness);
        }

        .glassy-button:hover::after,
        .glassy-button:focus-visible::after {
          scale: 0.95;
          translate: 0 0.125rem;
          animation: glassy-enter forwards var(--_transition-speed);
        }

        .glassy-button:active span {
          backdrop-filter: blur(var(--_pressed-blurriness));
          background-color: hsl(0 0% 100% / var(--_pressed-opacity));
          translate: 0 calc(var(--_pressed-offset) * -1);
        }

        .glassy-button:active::after {
          scale: 0.875;
          translate: 0 0.25rem;
        }

        /* Confetti Animation */
        @keyframes confetti-burst {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--random-x), var(--random-y)) rotate(var(--rotation)) scale(0.3);
            opacity: 0;
          }
        }

        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
        }

        /* Glassy Button Animations */
        @keyframes glassy-enter {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(
              calc(var(--_x-motion) * var(--_motion-factor) * -1),
              calc(var(--_y-motion) * var(--_motion-factor) * -1)
            );
          }
        }

        @keyframes glassy-exit {
          from {
            transform: translate(
              calc(var(--_x-motion) * var(--_motion-factor) * -1),
              calc(var(--_y-motion) * var(--_motion-factor) * -1)
            );
          }
          to {
            transform: translate(0, 0);
          }
        }

        .section-heading {
          font-size: 4rem;
          text-shadow: 
            1px 1px 0 #4a4a4a,
            2px 2px 0 #4a4a4a,
            3px 3px 0 #4a4a4a,
            4px 4px 0 #4a4a4a,
            5px 5px 0 #4a4a4a,
            6px 6px 0 #4a4a4a,
            7px 7px 0 #4a4a4a,
            8px 8px 0 #4a4a4a,
            9px 9px 0 #4a4a4a,
            10px 10px 0 #4a4a4a,
            11px 11px 0 #4a4a4a,
            12px 12px 0 #4a4a4a,
            13px 13px 0 #4a4a4a,
            14px 14px 0 #4a4a4a,
            15px 15px 0 #4a4a4a,
            16px 16px 0 #4a4a4a,
            17px 17px 0 #4a4a4a,
            18px 18px 0 #4a4a4a,
            19px 19px 0 #4a4a4a,
            20px 20px 0 #4a4a4a,
            21px 21px 0 #4a4a4a,
            22px 22px 0 #4a4a4a,
            23px 23px 0 #4a4a4a,
            24px 24px 0 #4a4a4a,
            25px 25px 0 #4a4a4a,
            26px 26px 0 #4a4a4a,
            27px 27px 0 #4a4a4a,
            28px 28px 0 #4a4a4a,
            29px 29px 0 #4a4a4a,
            30px 30px 0 #4a4a4a;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .page-wrapper {
            padding: 2rem 1rem;
          }
          
          .tab-wrapper {
            max-width: 100%;
          }
          
          .tab-list {
            height: 50px;
          }
          
          .tab {
            height: 42px;
            font-size: 1rem;
          }
          
          .tab-panels {
            padding: 1.5rem;
          }
          
          .tab-panel h2 {
            font-size: 1.25rem;
          }
          
          .tab-panel p {
            font-size: 1rem;
          }
          
          .glassy-button {
            --_padding: 0.6rem 1.5rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .tab {
            font-size: 0.9rem;
          }
          
          .tab-list {
            height: 45px;
          }
          
          .tab {
            height: 37px;
          }
          
          .glassy-button {
            --_padding: 0.5rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
      
      <div className="confetti-container" ref={confettiContainerRef}></div>
      <section className="section blue-card">
        <div className='content-inner'>
          <h1 className="section-heading">We got you covered.</h1>
          <div className="page-wrapper">
            <div className="tab-wrapper">
              <div className="tab-list" role="tablist" aria-label="tabs">
                <div className="indicator"></div>
                {tabTitles.map((title, index) => (
                  <button
                    key={index}
                    ref={(el) => (tabRefs.current[index] = el)}
                    role="tab"
                    aria-selected={activeTab === index}
                    aria-controls={`panel-${index + 1}`}
                    id={`tab-${index + 1}`}
                    className={`tab ${activeTab === index ? 'active' : ''}`}
                    onClick={() => handleTabClick(index)}
                  >
                    <span>{title}</span>
                  </button>
                ))}
              </div>
              <div className="tab-panels">
                {tabContent.map((content, index) => (
                  <div
                    key={index}
                    role="tabpanel"
                    id={`panel-${index + 1}`}
                    className={`tab-panel ${activeTab === index ? 'active' : ''}`}
                    style={{
                      opacity: activeTab === index ? 1 : 0,
                      transform: activeTab === index ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease'
                    }}
                  >
                    <h2>{content.title}</h2>
                    <div>
                      {content.content}
                      <div className="button-container">
                        <button
                          className="glassy-button"
                          onMouseMove={handleMouseMove}
                          onClick={() => {
                            const contactSection = document.querySelector("#contact");
                            contactSection?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          <span>Let's Get Started</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Two;