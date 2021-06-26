import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    { /* 
    下面寫的code, 通常會讓background那個<div>包含那個content <div>
    但是
    因為我們想要在滑鼠hover時, 讓background image變大, 
    如果background那個<div>包含那個content <div>的話, 就會大家一起變大, 但我們不希望那個content <div>變大
    所以才把2個<div>分開寫
    但分開寫, 先不看CSS的話, 其實是2個同級的 <div> 
    所以要用CSS 讓 content <div> 在 background <div> 裡面
    */}
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
