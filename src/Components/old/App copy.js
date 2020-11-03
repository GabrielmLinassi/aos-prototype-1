/*
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  DataSearch,
  SingleList,
  ReactiveBase,
  MultiList,
} from "@appbaseio/reactivesearch";

import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

import { theme } from "./utils/theme";

import { PropertiesList } from "./assets/PropertiesList";
import { FilterableProperties } from "./Components/FilterableProperties";
import { TProperties } from "./types/TProperties";
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
    <>
      <ReactiveBase
        app="aos-prototype-1"
        url="https://search-aos-prototype-3-3pvwgur5eiiqivjh4dzl5dksvq.sa-east-1.es.amazonaws.com/"
        credentials="root:PI159357ky.,"
      >
        <Autocomplete
          id="combo-box-demo"
          options={locations}
          style={{ width: 300 }}
          renderInput={(params) => (
            <DataSearch
              componentId="LocationSensor"
              dataField="address.city"
              title="Location"
              placeholder="Type City"
              autosuggest={true}
              highlight={true}
              onError={(error) => <div>ERROR...</div>}
            />
          )}
        />

        <DataSearch
          componentId="LocationSensor"
          dataField="address.city"
          title="Location"
          placeholder="Type City"
          autosuggest={true}
          highlight={true}
          onError={(error) => <div>ERROR...</div>}
        />
      </ReactiveBase>
    </>
  );
}

export default App;

*/
