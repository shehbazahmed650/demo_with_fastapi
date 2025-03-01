import styles from "./App.module.css";
import { useState, useEffect } from "react";
import NextButton from "./components/NextButton"; // Import the button component
import PoweredBy from "./components/PoweredBy";
function App() {
  const [message, setMessage] = useState("Loading...");

  // Function to fetch joke from FastAPI
  const fetchJoke = () => {
    fetch("http://127.0.0.1:8000/") // FastAPI URL
      .then((res) => res.json())
      .then((data) => setMessage(data.message)) // Set joke in state
      .catch((err) => console.error("Error fetching joke:", err));
  };

  // Fetch joke when component loads
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
    <div className={styles.appContainer}>
      <h1 className={styles.title}>FastAPI Joke Generator</h1>
      <div className={styles.jokeBox}>
        <h2 className={styles.jokeText}>{message}</h2>
      </div>
      <NextButton onClick={fetchJoke} />
      <PoweredBy/>
    </div>
    </>
  );
}

export default App;
