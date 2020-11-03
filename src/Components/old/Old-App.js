/*
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { theme } from "./utils/theme";

import { PropertiesList } from "./assets/PropertiesList";
import { FilterableProperties } from "./Components/FilterableProperties";
import { TProperties } from "./types/TProperties";
import { Map } from "./Components/Map";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Properties } from "./Components/Properties2";

const getPropertiesList = () => PropertiesList;

function App() {
  const [propertiesList, setPropertiesList] = useState<TProperties[]>([]);

  useEffect(() => {
    const fetchPropertiesList = async () => {
      const result = await getPropertiesList();
      setPropertiesList(result);
    };
    fetchPropertiesList();
  }, []);

  const [filter, setFilter] = useState({
    location: "",
    type: "",
    size: "",
  });

  const officeTypes = [
    "Office Space",
    "Coworking",
    "Virtual Office",
    "Meeting Rooms",
  ];

  const locations = ["new york", "boston"];

  const [type, setType] = useState(officeTypes[0]);
  const [location, setLocation] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <FilterableProperties
        type={type}
        setType={setType}
        officeTypes={officeTypes}
        location={Location}
        setLocation={setLocation}
        locations={locations}
      />
      <Properties properties={propertiesList} type={type} location={location} />
      {/* <Map
        src="https://www.google.com/maps/d/embed?mid=1ZmA0p3it2sfUb18rv8dydUez73sh8TXR"
        width={640}
        height={480}
      /> }
      </ThemeProvider>
      );
    }
    
    export default App;
    

*/
