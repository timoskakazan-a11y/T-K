import React from 'react';

function WelcomeBanner() {
  return (
    <div style={{
      backgroundColor: '#4a90e2',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      borderRadius: '8px'
    }}>
      <h1>Привет, мир!</h1>
      <p>Это моя первая страница на React.</p>
    </div>
  );
}

export default WelcomeBanner;
