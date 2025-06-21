import React, { useEffect, useRef } from 'react';

function Four() {
  const gridContainerRef = useRef(null);
  const gridItems = useRef([]);

  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const container = gridContainerRef.current;

    // Clear previous items (if any)
    container.innerHTML = '';
    gridItems.current = [];

    // Create 100 grid items (10x10)
    for (let i = 0; i < 100; i++) { 
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridItem.dataset.index = i;
      container.appendChild(gridItem);
      gridItems.current.push(gridItem);
    }

    // Mouse movement handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateGridColors();
    };

    function updateGridColors() {
      gridItems.current.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(mouseX - itemCenterX, 2) +
          Math.pow(mouseY - itemCenterY, 2)
        );

        item.classList.remove('active', 'nearby', 'far');

        if (distance < 100) {
          item.classList.add('active');
        } else if (distance < 200) {
          item.classList.add('nearby');
        } else if (distance < 400) {
          item.classList.add('far');
        }
      });
    }

    function createRipple(x, y) {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = x - 25 + 'px';
      ripple.style.top = y - 25 + 'px';
      ripple.style.width = '50px';
      ripple.style.height = '50px';

      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }

    function addRandomPulse() {
      const randomIndex = Math.floor(Math.random() * gridItems.current.length);
      const item = gridItems.current[randomIndex];

      if (!item.classList.contains('active')) {
        item.classList.add('pulse');
        setTimeout(() => {
          item.classList.remove('pulse');
        }, 3000);
      }
    }

    const handleClick = (e) => {
      createRipple(e.clientX, e.clientY);

      gridItems.current.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - itemCenterX, 2) +
          Math.pow(e.clientY - itemCenterY, 2)
        );

        if (distance < 150) {
          item.style.animation = 'none';
          setTimeout(() => {
            item.style.animation = 'gradientShift 1s ease infinite';
          }, 10);
        }
      });
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    const pulseInterval = setInterval(addRandomPulse, 2000);

    // Initial state
    updateGridColors();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <section id="about" className="section green-card">
      {/* Interactive Grid Background */}
      <div className="grid-container" ref={gridContainerRef}></div>
      
      {/* Main Content Container */}
      <div className="content-container">
        {/* Glass Card */}
        <div className="glass-card">
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face" alt="Mentor" className="glass-card-image" />
          </div>
          <div className="card-content">
            <h2>Meet Your Mentor👋</h2>
            <p>Mrs. Vaishnavi Krishnamurthy</p>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="text-content">
          <div className="text-block">
            <p style={{textAlign: 'justify'}}><strong>Vaishnavi Krishnamurthy</strong>, with <span className="highlight-number">20+ years</span> of experience in soft skills and career development, has empowered <span className="highlight-number">35,000+ students</span> and professionals. She fosters confidence and growth, helping individuals embrace their journey and focus on personal success. Her tailored training in resume building, interview preparation, and workplace skills equips students to thrive, ensuring not just job placement but long-term career excellence.</p>
          </div>
          
          {/* Logo Bar */}
          <div className="logos">
            <div className="logos-slide">
              <img src="iitm.png" alt="IIT Madras" />
              <img src="vit.png" alt="VIT" />
              <img src="biocon.png" alt="biocon"/>
              <img src="iisc.png" alt = "IISC"/>
              <img src="iitm.png" alt="IIT Madras" />
              <img src="vit.png" alt="VIT" />
              <img src="biocon.png" alt="biocon"/>
              <img src="iisc.png" alt = "IISC"/>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main Section */
        .section.green-card {
          background-color: rgb(255, 255, 255);
          min-height: 100vh;
          position: sticky;
          top: 0;
          overflow: hidden;
          color: black;
          font-family: Arial, sans-serif;
          z-index: 1003;
        }

        /* Grid Background */
        .grid-container {
          position: absolute;
          top: 0;
          left: 0;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: repeat(10, 1fr);
          width: 100vw;
          height: 100vh;
          gap: 2px;
          padding: 10px;
          z-index: 1001;
        }

        .grid-item {
          aspect-ratio: 1/1;
          width: 100%;
          height: auto;
          position: relative;
          transition: all 0.3s ease;
        }

        .grid-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(255, 0, 150, 0.3), 
            rgba(0, 255, 200, 0.3), 
            rgba(255, 100, 0, 0.3)
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          border-radius: 8px;
        }

        .grid-item.active::before {
          opacity: 1;
        }

        .grid-item.active {
          transform: scale(1.05);
          box-shadow: 
            0 20px 40px rgba(255, 0, 150, 0.3),
            0 0 30px rgba(0, 255, 200, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
          background: rgb(255, 255, 255);
          animation: none;
        }

        .grid-item.nearby {
          transform: scale(1.02);
          background: linear-gradient(45deg, 
            rgba(255, 0, 150, 0.6), 
            rgba(0, 255, 200, 0.6)
          );
          box-shadow: 0 10px 20px rgba(255, 0, 150, 0.2);
        }

        .grid-item.far {
          background: linear-gradient(45deg, 
            rgba(100, 100, 255, 0.4), 
            rgba(45, 105, 233, 0.4)
          );
        }

        .pulse {
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: scale(1.03); 
            opacity: 1; 
          }
        }

        /* Ripple effect */
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(113, 162, 236, 0.4) 50%, 
            transparent 100%
          );
          transform: scale(0);
          animation: rippleAnimation 1s ease-out;
          pointer-events: none;
          z-index: 400;
        }

        @keyframes rippleAnimation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* Content Container */
        .content-container {
          position: relative;
          z-index: 1002;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          min-height: 100vh;
          padding: 2rem;
          gap: 2rem;
        }

        /* Glass Card - Now responsive to image */
        .glass-card {
          flex: 0 0 auto;
          max-width: 450px;
          min-width: 300px;
          width: fit-content;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #000;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease-in-out;
          margin-top: 25vh;
        }

        /* Image Container - Maintains aspect ratio */
        .image-container {
          width: 100%;
          position: relative;
          margin-bottom: 1.5rem;
        }

        .glass-card-image {
          width: 100%;
          height: auto;
          max-width: 400px;
          border-radius: 16px;
          object-fit: cover;
          display: block;
        }

        /* Card Content */
        .card-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card-content h2 {
          margin: 0 0 1rem 0;
          font-size: 1.7rem;
          font-family: 'Rajdhani', sans-serif;
        }

        .card-content p {
          margin: 0;
          font-size: 1rem;
          opacity: 0.8;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600; /* ← makes text bold */

        }

        /* Text Content */
        .text-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-left: 3rem;
          min-height: 100vh;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.3rem;
        }

        .text-block {
          max-width: 600px;
          font-weight: 400;
          color: #000;
          line-height: 1.6;
          margin-bottom: 3rem;
          text-align: justify;
        }

        .highlight-number {
          font-size: 1.3em;
          font-weight: bold;
          color: #1E90FF;
        }

        /* Logo Bar */
        .logos {
          overflow: hidden;
          padding: 40px 0;
          position: relative;
          width: 100%;
          max-width: 600px;
        }

        .logos-slide {
          display: flex;
          align-items: center;
          animation: scroll 20s linear infinite;
          width: calc(200px * 6);
        }

        .logos-slide img {
          height: 60px;
          width: auto;
          margin: 0 50px;
          filter: grayscale(100%) opacity(0.7);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .logos-slide img:hover {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.1);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .content-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1rem;
          }

          .glass-card {
            flex: none;
            width: 90%;
            max-width: 450px;
            min-width: 280px;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .text-content {
            padding-left: 0;
            min-height: auto;

          }

          .text-block {
            text-align: center;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 768px) {
          .content-container {
            padding: 1rem;
            gap: 1rem;
          }

          .glass-card {
            width: 95%;
            max-width: 400px;
            min-width: 250px;
            padding: 1.5rem;
            border-radius: 16px;
            margin-top: 1rem;
          }

          .glass-card-image {
            max-width: 100%;
            border-radius: 12px;
          }

          .card-content h2 {
            font-size: 1.3rem;
            font-family: 'Rajdhani', sans-serif;
          }

          .card-content p {
            font-size: 0.9rem;
            font-family: 'Rajdhani', sans-serif;
          }

          .text-block {
            font-size: 0.9rem;
            max-width: 100%;
          }

          .logos {
            padding: 30px 0;
          }

          .logos-slide img {
            height: 40px;
            margin: 0 30px;
          }
        }

        @media (max-width: 480px) {
          .glass-card {
            width: 95%;
            max-width: 350px;
            min-width: 250px;
            padding: 1rem;
          }

          .glass-card-image {
            border-radius: 10px;
          }

          .card-content h2 {
            font-size: 1.2rem;
            font-family: 'Rajdhani', sans-serif;
          }

          .card-content p {
            font-size: 0.85rem;
          }

          .text-block {
            font-size: 0.85rem;
          }

          .logos-slide img {
            height: 35px;
            margin: 0 25px;
          }
        }

        @media  (min-width: 1024px) {
          .text-content{
            transform: translateX(50px) translateY(50px);
          }
        }
      `}</style>
    </section>
  );
}

export default Four;