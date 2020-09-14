import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { theme } from "./utils/theme";

import { PropertiesList } from "./assets/PropertiesList";
import { FilterableProperties } from "./Components/FilterableProperties";
import { TProperties } from "./types/TProperties";
import { Map } from "./Components/Map";

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FilterableProperties products={propertiesList} />
      <Map
        src="https://www.google.com/maps/d/embed?mid=1ZmA0p3it2sfUb18rv8dydUez73sh8TXR"
        width={640}
        height={480}
      />
    </ThemeProvider>
  );
}

export default App;
