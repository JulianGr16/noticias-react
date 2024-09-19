import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";
import "./App.css";

const API_KEY = "pub_53811818a907cd3757c64cf3d6c1821f03745";
const API_URL = "https://newsdata.io/api/1/news";

function App() {
  const [category, setCategory] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`${API_URL}?category=${category}&apikey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setNoticias(data.results);
        });
    }
  }, [category]);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="app">
      <Titulo />
      <Formulario onSelectCategory={handleCategorySelect} />
      <ListaNoticias noticias={noticias} />
    </div>
  );
}

// Renderizar la aplicación directamente en el index.html
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
