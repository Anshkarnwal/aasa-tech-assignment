import React from 'react'

const HeroSection = () => {
  return (
    <div>
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
    </div>
  )
}

export default HeroSection
