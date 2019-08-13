import React from 'react';

const LangPairings = () => (
  <div class="main__lang-column">
    <div className="main__lang-column--section">
      <h2>
        <span className="main__upload--number">2</span>
        Choose your languages pairings
          </h2>
    </div>
    <form className="main__nav-lang">
      <div className="main__nav-lang-section">
        <span className="main__nav-lang-text">FROM</span>
        <select className="main__nav-lang-input">
          <option value="РУССКИЙ">Русский</option>
          <option selected value="ENGLISH">English</option>
          <option value="УКРАЇНСЬКА">Українська</option>
        </select>
      </div>
      <div className="main__nav-lang-section">
        <span className="main__nav-lang-text">TO</span>
        <select className="main__nav-lang-input">
          <option selected disabled>Choose language</option>
          <option value="РУССКИЙ">Русский</option>
          <option value="ENGLISH">English</option>
          <option value="УКРАЇНСЬКА">Українська</option>
        </select>
      </div>
    </form>
  </div>
)

export default LangPairings; 
