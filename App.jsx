import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch("https://<YOUR_BACKEND_URL>.railway.app/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1>React + FastAPI</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
