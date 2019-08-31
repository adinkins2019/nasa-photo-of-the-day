/*import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;*/

import React, {useState, useEffect} from "react";
import Header from "./Header";
import DailyPhoto from "./APOD"
import {getPhoto} from "./APOD"

import "./App.css";

const prod_api = "https://api.nasa.gov/planetary/apod?api_key=Pyzu5wzYNu3v05jyADCkMiOUldNYcxeDQ8myhFfs"


export default function App() {
  const [imageDate, updateAPODImages] = useState([]);
  useEffect(() => {
    getPhoto(imageDate, updateAPODImages, prod_api)
    console.log(imageDate)
  }
  ,[imageDate]
  )
  return (
    <div className="App">
    
      <Header siteTitle="NASA Photo Of The Day"/>
      <DailyPhoto 
      date={imageDate.date} 
      attribution={imageDate.copyright} 
      url={imageDate.url}
      description={imageDate.explanation}

      />

    </div>
  );
}
