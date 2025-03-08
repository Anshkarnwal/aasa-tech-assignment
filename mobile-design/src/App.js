import React from "react";
import "./App.css";
 import { FaGlobe, FaSyncAlt, FaBrush, FaUsers, FaClipboardCheck, FaCertificate, FaProjectDiagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPencilRuler, FaPaintBrush, FaTools, FaMask, FaImages, FaDollarSign,  FaChalkboardTeacher } from "react-icons/fa";
import  { useState } from "react";

const words = [
  { text: "Local Shops & Retail Stores", color: "gray", size: "32px" },
  { text: "Restaurants & Cafés", color: "blue", size: "30px" },
  { text: "Freelancers & Solopreneurs", color: "orange", size: "28px" },
  { text: "Startups & Small Tech Businesses", color: "red", size: "26px" },
  { text: "Gyms & Fitness Trainers", color: "orangered", size: "24px" },
  { text: "Doctors & Clinics", color: "purple", size: "24px" },
  { text: "Financial Advisors", color: "lightblue", size: "22px" },
  { text: "Home-Based Businesses", color: "cyan", size: "32px" },
  { text: "Artists", color: "blue", size: "20px" },
  { text: "Bakeries", color: "gold", size: "20px" },
  { text: "Salons & Beauty Parlors", color: "black", size: "28px" },
  { text: "Lawyers & Legal Services", color: "black", size: "18px" },
  { text: "NGOs & Social Enterprises", color: "orangered", size: "25px" },
  { text: "Coaching Centers & Tutors", color: "gray", size: "15px" },
  { text: "Interior Designers & Architects", color: "black", size: "26px" },
  { text: "Event Planners & Wedding Services", color: "black", size: "10px" },
  { text: "Home Services", color: "orange", size: "24px" },
  { text: "Automobile", color: "blue", size: "14px" },
  { text: "Vet Clinics", color: "black", size: "14px" },
  { text: "Bands", color: "orange", size: "14px" },
  { text: "Dealerships", color: "blue", size: "34px" },
];


const features = [
  { icon: <FaPencilRuler />, text: "Sketching Basics – Shape, form, and proportion fundamentals" },
  { icon: <FaPaintBrush />, text: "Digital Painting – Master shading, blending & coloring techniques" },
  { icon: <FaTools />, text: "Tool Mastery – Hands-on with Procreate, Photoshop & Illustrator" },
  { icon: <FaMask />, text: "Character & Concept Art – Create professional-grade designs" },
  { icon: <FaImages />, text: "Portfolio Building – Craft stunning pieces to showcase your skills" },
  { icon: <FaDollarSign />, text: "Bonus: Monetization Guide – How to sell your art & get freelance gigs" },
  { icon: <FaCertificate />, text: "Certificate of Completion – Boost your creative career" },
  { icon: <FaProjectDiagram />, text: "Project-Based Learning – Build a stunning portfolio" },
  { icon: <FaChalkboardTeacher />, text: "Live Mentorship – Weekly Q&A sessions with industry pros" },
];


  

  const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience required!",
    },
    {
      question: "What tools do I need to take this course?",
      answer: (
        <ul>
          <li>✔ A tablet (iPad, Wacom, or any drawing tablet)</li>
          <li>✔ Digital art software (Procreate, Photoshop, or Krita)</li>
          <li>✔ A passion for creativity</li>
        </ul>
      ),
    },
    {
      question: "How long is the course?",
      answer:
        "The course runs for 4 weeks, with step-by-step lessons covering everything from sketching to advanced digital painting techniques.",
    },
    {
      question: "Is this a live or recorded course?",
      answer:
        "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes! After completing the course, you'll receive a Certificate of Completion, which can boost your portfolio and career opportunities.",
    },

    {
      question: "Can I monetize my digital art after this course?",
      answer:
        "Absolutely! The course includes a bonus session on freelancing & selling your art so you can start earning right away.",
    },
    {
      question: "What happens if I miss a live session?",
      answer:
        "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing.",
    },
    {
      question: "How do I apply the coupon code?",
      answer:
        "Once you sign up, you’ll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses.",
    },
    {
      question: "What if I don’t have a tablet?",
      answer:
        "You can still take the course using a mouse & free digital art software (like Krita). However, a tablet is recommended for better results.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "The ₹79 booking fee is non-refundable, but we’re confident you’ll love the course!",
    },
    {
      question: "How do I enroll?",
      answer:
        'Click the "Enroll Now" button, make the payment, and get instant access to the course materials!',
    },
    {
      question: "Do I need an internet connection for this course?",
      answer:
        "Yes, you will need a stable internet connection to access the video lessons and live Q&A sessions.",
    },
    {
      question: "Will I get lifetime access to the course content?",
      answer:
        "Yes! Once you enroll, you'll have lifetime access to all the lessons and resources.",
    },
    {
      question: "Do I need prior drawing experience?",
      answer:
        "Not at all! This course is designed for beginners and includes step-by-step guidance to help you improve your skills.",
    },
    {
      question: "Can I access the course on my mobile device?",
      answer:
        "Yes, you can watch the lessons on your mobile device, tablet, or computer as long as you have an internet connection.",
    },
  ];

 


const DigitalArtCourse = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">A A S A</div>
        <button className="get-started">Get Started</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="title">Master the Art of Digital Illustration</h1>
        <p className="subtitle">
          A 4-Week Course Designed for Beginners & Enthusiasts!
        </p>
      </section>

      {/* Image Section */}
      <div className="image-container">
        <img src="/Image1.png" alt="Digital Art Course" className="hero-image" />
      </div>
       {/* Course Info */}
       <section className="course-info">
        <p>
          Learn to create stunning digital artwork with step-by-step guidance
          from industry experts.
        </p>
        <p>No prior experience required. Just your creativity!</p>
        <p className="price">Enroll now for <strong>₹7,999</strong></p>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <button className="cta-button">Secure Your Spot for Just ₹79</button>
        <p className="bonus-info">
          Use a coupon code within 15 minutes to unlock a special bonus pack!
        </p>
      </section>

      {/* Warning Section */}
      <section className="warning">
        <h2>Without Proper Training, You Might:</h2>
        <div className="warning-grid">
          <div className="warning-item">Struggle with complex software tools</div>
          <div className="warning-item">Feel stuck without structured learning</div>
          <div className="warning-item">
            <span className="warning-cross">❌</span> Miss out on monetizing your skills
          </div>
        </div>
      </section>



      <div className="benefits-container">
      {/* Section Title */}
      <h2 className="benefits-title">
        With This Course, <span className="highlight-text">You Get:</span>
      </h2>

      {/* Benefits List */}
      <div className="benefits-list">
        <div className="benefit-item">
          <FaGlobe className="benefit-icon" />
          <p>Hands-on Lessons– Learn digital painting, shading & composition.</p>
        </div>
        <div className="benefit-item">
          <FaSyncAlt className="benefit-icon" />
          <p>Tool Mastery– Master Procreate, Photoshop, & Illustrator.</p>
        </div>
        <div className="benefit-item">
          <FaBrush className="benefit-icon" />
          <p>Exclusive Resource Pack– Brushes, templates & textures.</p>
        </div>
        <div className="benefit-item">
          <FaUsers className="benefit-icon" />
          <p>Live Mentorship– Weekly Q&A sessions with industry pros.</p>
        </div>
        <div className="benefit-item">
          <FaProjectDiagram className="benefit-icon" />
          <p>Project-Based Learning– Build a stunning portfolio.</p>
        </div>
        <div className="benefit-item">
          <FaCertificate className="benefit-icon" />
          <p>Certificate of Completion – Boost your creative career.</p>
        </div>
        <div className="benefit-item">
          <FaClipboardCheck className="benefit-icon" />
          <p>Community Access – Network with fellow artists.</p>
        </div>
      </div>
    </div>



    <div className="flex flex-col items-center space-y-6 p-6">
      {/* Book Now Button */}
      <button className="book-now-btn">Book Now at ₹49</button>

      {/* Video Player Box */}
      <div className="video-box">
        <FaPlay className="play-icon" />
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-container">
        {/* Testimonial 1 */}
        <div className="testimonial-card purple-border">
          <h3 className="testimonial-name">Aditi Verma</h3>
          <p className="testimonial-age">22</p>
          <p className="testimonial-text">
            I always wanted to learn digital art, but tutorials were confusing.
            This course made everything so simple! Now, I’m taking commissions
            online!
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card blue-border">
          <h3 className="testimonial-name">Rajesh Khanna</h3>
          <p className="testimonial-age">30</p>
          <p className="testimonial-text">
            Switching from traditional art to digital felt overwhelming, but
            this course changed everything! The structured lessons helped me
            master Procreate in weeks!
          </p>
        </div>
      </div>
    </div>



    <div className="wordcloud-container">
      <h2 className="title">Is This Right for You?</h2>
      <p className="subtitle">
        Everybody is fond of Digital Art! You need it too.
      </p>
      <div className="wordcloud">
        {words.map((word, index) => (
          <span
            key={index}
            className="word"
            style={{ color: word.color, fontSize: word.size }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>


    <div className="extra-features-container">
      <h2 className="title">Not Satisfied Yet?</h2>
      <p className="subtitle">We got you! Here are few extra features</p>

      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="icon">{feature.icon}</span>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>

      <button className="cta-button">Book Now for ₹79</button>
    </div>


    <div className="enroll-container">
      <h2 className="title">Enroll Now for <span className="price">₹7,999</span></h2>
      <div className="option-box">Secure Your Spot for Just ₹79</div>
      <div className="option-box">Bonus Offer: Apply a coupon code within 15 minutes to unlock:</div>
      <div className="option-box">Exclusive Brush & Texture Pack</div>
      <div className="option-box">Extra Live Q&A Session with Mentors</div>

      <p className="offer-text">
        WE Offer everything you need at ₹7,999—but wait... 👀
      </p>

      <div className="discount-box">
        Use a Special Code & Unlock a Game-Changing Discount to avail the same course at a discounted price!
      </div>

      <button className="book-btn">Book Now for ₹79</button>
    </div>

    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>Q: {faq.question}</span>
            <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9662;</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>




    <div className="cta-container">
      <button className="cta-button">Let’s get started</button>
      <h2 className="cta-heading">Ready to Start Your Digital Art Journey?</h2>
      <p className="cta-text">
        Click below to secure your spot & start creating!
      </p>
      <button className="cta-button">Enroll Now</button>
    </div>
    </div>

    
  );
};


export default DigitalArtCourse;