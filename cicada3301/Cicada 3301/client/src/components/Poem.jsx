import React from 'react';

const Poem = ({ title, content, hint }) => {
  return (
    <div className="poem neon-border">
      <h3 className="neon-title">{title}</h3>
      <pre className="neon-text">{content}</pre>
      {hint && <p className="hint neon-hint">🔍 {hint}</p>}
    </div>
  );
};

export default Poem;