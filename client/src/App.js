import React from "react";
import axios from 'axios'
import './App.css';
import WeatherInfo from "./WeatherInfo.js";

const baseURL = "https://weather-fetch-2hhr.onrender.com/api/";

function App() {
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState(null);
  const [staticName, setStatic] = React.useState("");
  const [isFetchingData, setFechStatus] = React.useState(false);

  const load = async (Toload) => {
    setFechStatus(true)
    try {
      axios.get(baseURL+name).then((response) => {
        setData(JSON.parse(response.data.message))
        setFechStatus(false)
      });
      
    } catch (err) {
      setData("e")
    }
    setStatic(Toload)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    load(name)
  }
  const buttonClick = (event) => {
    event.preventDefault();
    load(staticName)
  }
  
  return (
    <div className="App">
      <div className="mainMenu">
        {/* form */}
        <form onSubmit={handleSubmit}>
          <label>Enter location - </label>
          <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required="required" placeholder='Enter a location'
            />
          <input type="submit" />
          <button onClick={buttonClick}>Refresh</button>
        </form>

        <div className="Input">
          <WeatherInfo data={data===null || data===undefined? "e" : data} loading={isFetchingData} name={staticName}/>
        </div>
      </div>
    </div>
  );
}

export default App;
