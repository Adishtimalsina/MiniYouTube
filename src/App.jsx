import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Play from "./components/Play";

const api = import.meta.env.VITE_REACT_APP_API_KEY;

function App() {
  const [userInput, setUserInput] = useState("");
  const userValue = (event) => {
    // console.log(event);
    // let value = event.target.value;
    // if (event.key === "Enter" || event.target.innerText === "Search") {
    //   setUserInput(value);
    //   event.target.value = " ";
    // }
    setUserInput(event);
  };

  // console.log(userInput);

  const [titles, settitles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=49&order=relevance&q=${userInput}&key=${api}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const responseData = await response.json();
        settitles(responseData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (userInput.trim() !== "") {
      setLoading(true);
      fetchData();
    }

    if (!titles) {
      fetchData();
    }
  }, [userInput]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  let newData = titles.items;

  return (
    <>
      <Header />
      <SearchBar method={userValue} />
      <Cards datas={newData} />
      <Footer />
    </>
  );
}

export default App;
