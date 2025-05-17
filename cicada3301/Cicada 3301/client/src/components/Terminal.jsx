import React, { useState } from 'react';

const Terminal = ({ onCommand }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Simula comandos
    const newOutput = [...output, `> ${input}`];
    if (input === 'help') {
      newOutput.push('Comandos: decrypt [flag], clear');
    }
    setOutput(newOutput);
    setInput('');
  };

  return (
    <div className="terminal neon-border">
      <div className="terminal-output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite um comando..."
          className="terminal-input"
        />
      </form>
    </div>
  );
};

export default Terminal;