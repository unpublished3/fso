import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import countriesService from "./services/countriesService";

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((data) => {
      setAllCountries(data);
    });
  }, []);

  const changeCountryName = (e) => {    
    setCountryName(e.target.value);
    filterCountries(e.target.value);
  };

  const filterCountries = (filterString) => {
    setCountries(
      allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(filterString.toLowerCase())
      )
    );
  };

  const show = (country) => {
    setCountries([country])
    setCountryName(country.name.common)
  }

  return (
    <div>
      <span>
        Find Countries &nbsp;
        <input type="text" value={countryName} onChange={changeCountryName} />
      </span>

      <Countries countries={countries} show={show}/>
    </div>
  );
};

export default App;
