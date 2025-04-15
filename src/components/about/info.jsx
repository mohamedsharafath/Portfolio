import React from 'react';
import leetcodeLogo from "../../assets/icons8-leetcode-48.png"; // make sure to add this image
import gfgLogo from "../../assets/icons8-geeksforgeeks-48.png"; // make sure to add this image
import githubLogo from "../../assets/icons8-github-50.png"; // make sure to add this image

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <img src={leetcodeLogo} alt="LeetCode" className="about__icon-img" />
        <h3 className="about__title">LeetCode</h3>
        <span className="about__subtitle">500+ Problems Solved</span>
      </div>

      <div className="about__box">
        <img src={gfgLogo} alt="GeeksforGeeks" className="about__icon-img" />
        <h3 className="about__title">GFG</h3>
        <span className="about__subtitle">600+ Problems Solved</span>
      </div>

      <div className="about__box">
        <img src={githubLogo} alt="GitHub" className="about__icon-img" />
        <h3 className="about__title">GitHub</h3>
        <span className="about__subtitle">20+ Repositories</span>
      </div>
    </div>
  );
};

export default Info;
