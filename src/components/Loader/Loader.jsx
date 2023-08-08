import React from 'react';

import "./Loader.scss";

const MyLoader = () => (
    <div className='loader-box' id="loader">
  <svg viewBox="0 0 100 100">
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
          flood-color="#fc6767"/>
      </filter>
    </defs>
    <circle id="spinner" style={{fill:"transparent",stroke:"#0f1f34",strokeWidth: "7px",strokeLinecap: "round",filter:"url(#shadow)"}} cx="50" cy="50" r="45"/>
</svg>
</div>
);

export default MyLoader;
