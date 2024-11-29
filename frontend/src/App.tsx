import React, { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [selectedMessage, setSelectedMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/messages') // Appel au backend pour récupérer les messages
      .then(response => response.json())
      .then(data => setMessages(data.messages))
      .catch(error => console.error('Erreur lors de l’appel à l’API :', error));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      {messages.map((msg, index) => (
        <button key={index} onClick={() => setSelectedMessage(msg)}>
          {msg}
        </button>
      ))}
      <p>Message sélectionné : {selectedMessage}</p>
    </div>
  );
}

export default App;
