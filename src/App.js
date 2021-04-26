import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDataFromApi = async () => {
    const data = await fetch(url);
    const places = await data.json();
    setPlaces(places);
    setLoading(false);
  };
  const Delete = (id)=>{
    setPlaces(places.filter(item=> item.id != id ));
  }
  useEffect(() => {
    fetchDataFromApi();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return <Tours places={places} Delete={Delete} />;
  }
}

export default App;
