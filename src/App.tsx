import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { theme } from "./utils/Theme";

import { PropertiesList } from "./assets/PropertiesList";
import { FilterableProperties } from "./Components/FilterableProperties";
import { Props } from "./Components/Props";

const getPropertiesList = () => PropertiesList;

function App() {
  const [propertiesList, setPropertiesList] = useState<Props[]>([]);

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
    </ThemeProvider>
  );
}

export default App;
