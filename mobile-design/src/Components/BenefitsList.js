import React from "react";
import { FaGlobe, FaSyncAlt, FaBrush, FaUsers, FaClipboardCheck, FaCertificate, FaProjectDiagram } from "react-icons/fa";

const benefits = [
  { icon: <FaGlobe className="benefit-icon" />, text: "Hands-on Lessons– Learn digital painting, shading & composition." },
  { icon: <FaSyncAlt className="benefit-icon" />, text: "Tool Mastery– Master Procreate, Photoshop, & Illustrator." },
  { icon: <FaBrush className="benefit-icon" />, text: "Exclusive Resource Pack– Brushes, templates & textures." },
  { icon: <FaUsers className="benefit-icon" />, text: "Live Mentorship– Weekly Q&A sessions with industry pros." },
  { icon: <FaProjectDiagram className="benefit-icon" />, text: "Project-Based Learning– Build a stunning portfolio." },
  { icon: <FaCertificate className="benefit-icon" />, text: "Certificate of Completion – Boost your creative career." },
  { icon: <FaClipboardCheck className="benefit-icon" />, text: "Community Access – Network with fellow artists." },
];

const BenefitsSection = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-title">
        With This Course, <span className="highlight-text">You Get:</span>
      </h2>
      <div className="benefits-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            {benefit.icon} 
            <p>{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;