import React from "react";
import "./App.css";
 import {  FaCertificate, FaProjectDiagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPencilRuler, FaPaintBrush, FaTools, FaMask, FaImages, FaDollarSign,  FaChalkboardTeacher } from "react-icons/fa";
import Headers from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import CourseInfo from "./Components/CourseInfo";
import PricingSection from "./Components/PricingSection";
import WarningSection from "./Components/WarningSection";
import BenefitsSection from "./Components/BenefitsList";
import FAQSection from "./Components/FAQSection";

const words = [
  { text: "Local Shops & Retail Stores", color: "gray", size: "12px" },
  { text: "Restaurants & Cafés", color: "blue", size: "30px" },
  { text: "Freelancers & Solopreneurs", color: "orange", size: "20px" },
  { text: "Startups & Small Tech Businesses", color: "red", size: "26px" },
  { text: "Gyms & Fitness Trainers", color: "orangered", size: "14px" },
  { text: "Doctors & Clinics", color: "purple", size: "30px" },
  { text: "Financial Advisors", color: "lightblue", size: "22px" },
  { text: "Home-Based Businesses", color: "cyan", size: "12px" },
  { text: "Artists", color: "blue", size: "20px" },
  { text: "Bakeries", color: "gold", size: "28px" },
  { text: "Salons & Beauty Parlors", color: "black", size: "12px" },
  { text: "Lawyers & Legal Services", color: "black", size: "28px" },
  { text: "NGOs & Social Enterprises", color: "orangered", size: "20px" },
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

 


const DigitalArtCourse = () => {
  
  return (
    <div className="container">
      <Headers/>
      <HeroSection/>
      <CourseInfo/>
      <PricingSection/>
      <WarningSection/>
      <BenefitsSection/>
     
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

    <FAQSection/>




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