import React from 'react';

function WelcomeBanner() {
  return (
    <div style={{
      backgroundColor: '#4a90e2',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      borderRadius: '8px',
      margin: '20px'
    }}>
      <h1>Привет из Vercel!</h1>
      <p>Это приложение было успешно развернуто.</p>
    </div>
  );
}

export default WelcomeBanner;
