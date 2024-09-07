import Weather from "./Weather";

const Countries = ({ countries, show }) => {
  if (countries.length == 0) return <></>;
  if (countries.length > 10)
    return <p>Too many countries, specify another filter.</p>;
  if (countries.length > 1)
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.cca2}>
            {country.name.common}{" "}
            <button
              onClick={() => {
                show(country);
              }}
            >
              Show
            </button>
          </li>
        ))}
      </ul>
    );

  if (countries.length == 1) {
    const country = countries[0];

    return (
      <>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital[0]}</p>
        <p>Area {country.area}</p>

        <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([code, language]) => (
            <li key={code}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        <Weather
          capital={country.capital[0]}
          lat={country.capitalInfo.latlng[0]}
          lng={country.capitalInfo.latlng[1]}
        />
      </>
    );
  }
};

export default Countries;
