import React from 'react';

function Five() {
  const testimonials = [
    {
      id: "testimonial-1",
      text: "Vaishnavi ma'am's practical approach to resume building and communication skills made all the difference. Her mock interviews and clear feedback gave me the confidence I needed for my placements! 🙌",
      name: "Sairam Arul",
      position: "SWE at Spendflo, Ex-Zoho",
      rotation: "-2deg"
    },
    {
      id: "testimonial-2", 
      text: "Your training in enhancing my soft skills played a crucial role in helping me succeed in my placements. Thank you for standing behind me and helping me grow both personally and professionally",
      name: " Sharmila Shekar",
      position: "Engineer Trainee, Sify",
      rotation: "3deg"
    },
    {
      id: "testimonial-3",
      text: "Vaishnavi Mam’s focus on developing soft skills and new-gen practices is truly inspiring. The mock interviews, feedback sessions, and practical examples she provided helped me identify my strengths and growth areas. Her innovative training methodologies and personalized approach make a lasting impact on students and professionals alike.",
      name: "Allwin Joseph",
      position: "MES dev at ABB",
      rotation: "-1deg"
    },
    {
      id: "testimonial-4",
      text: "I would like to express my heartfelt gratitude to my mentor for their invaluable guidance and support during my placement preparation. Their structured training sessions, personalized advice, and constant encouragement were instrumental in boosting my confidence and sharpening my skills.",
      name: "Calvin Paul",
      position: "Regional Exec., Zoho",
      rotation: "2deg"
    }
  ];

  return (
    <section className="section-five">
      <div className="page-content">
        <div className="head-five">
          <h1>What Our Students Say</h1>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              id={testimonial.id}
              className="blur-card"
              style={{ transform: `rotate(${testimonial.rotation})` }}
            >
              <div className="quote-icon">"</div>
              <div className="testimonial-text">
                {testimonial.text}
              </div>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.name}</div>
                <div className="author-position">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-five {
          padding-top: 2rem;
          min-height: auto;
          width: 100vw;
          background: linear-gradient(to bottom right, #e9d5ff, #6366f1);
          position: relative;
          top: 0;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 15rem;
        }

        .page-content {
          color: white;
          font-family: 'Rajdhani', sans-serif;
          max-width: 1200px;
          z-index: 2001;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .head-five{
          font-size: 3rem;
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
            transform: translateY(-100px); 
            margin-bottom: 2rem;
        }
        
        @media (max-width: 768px){
          .head-five{
            font-size: 2rem;
            transform: translateY(-80px);
          }
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 30px;
          margin-top: 2rem;
          max-width: 900px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, auto);
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .blur-card {
            position: relative;
            width: 100%;
            min-height: 280px;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 35px;
            color: white;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

        }

        .blur-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            pointer-events: none;
        }

        .blur-card:hover {
            transform: translateY(-5px) rotate(0deg) !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
            border-color: rgba(255, 255, 255, 0.3);
        }

        .quote-icon {
            font-size: 40px;
            opacity: 0.6;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .testimonial-text {
            font-size: 18px;
            line-height: 1.7;
            font-style: italic;
            margin-bottom: 25px;
            opacity: 0.95;
            position: relative;
            z-index: 1;
            flex-grow: 1;
            color: #fff;
            font-weight: 100; 
        }

        .testimonial-author {
            position: relative;
            z-index: 1;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 20px;
        }

        .author-name {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 5px;
            color: #fff;
        }
        
        .author-position {
            font-size: 14px;
            opacity: 0.8;
            font-weight: 500;
            letter-spacing: 0.5px;
        }
      `}</style>
    </section>
  );
}

export default Five;