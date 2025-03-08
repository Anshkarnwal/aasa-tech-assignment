import React from "react";

const WarningSection = () => {
  return (
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
  );
};

export default WarningSection;