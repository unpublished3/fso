const Countries = ({ countries }) => {
  if (countries.length > 10)
    return <p>Too many countries, specify another filter.</p>;
  if (countries.length > 1)
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.cca2}>{country.name.common}</li>
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
      </>
    );
  }
};

export default Countries;
