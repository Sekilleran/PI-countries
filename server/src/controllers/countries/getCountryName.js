const fetchCountryData = require('./getCountry');

const getCountryName = async (searchName) => {
  try {
    const countryData = await fetchCountryData();
    const filteredCountries = [];

    for (const country of countryData) {
      if (country.name.toLowerCase().includes(searchName.toLowerCase())) {
        filteredCountries.push(country);
      }
    }

    return filteredCountries;
  } catch (error) {
    console.error('Error while fetching countries by name:', error);
    throw error;
  }
};

module.exports = getCountryName;
