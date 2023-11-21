const axios = require('axios');
const { Country } = require('../../db');
const db = require('../../db');

const COUNTRIES_API_URL = `http://localhost:5000/countries`;

const getCountry = async () => {
  try {
    const response = await axios.get(COUNTRIES_API_URL);
    const countriesData = response.data;

    const savedCountries = await Promise.all(
      countriesData.map(async (countryData) => {
        if (!countryData.capital) {
          countryData.capital = ['-'];
        }
        if (!countryData.subregion) {
          countryData.subregion = '-';
        }

        const [dbCountry] = await Country.findOrCreate({
          where: {
            id: countryData.cca3,
          },
          defaults: {
            name: countryData.name.official,
            image: countryData.flags.png,
            continent: countryData.region,
            capital: countryData.capital[0],
            subregion: countryData.subregion,
            area: countryData.area,
            population: countryData.population,
          },
        });

        return {
          id: dbCountry.id,
          name: dbCountry.name,
          image: dbCountry.image,
          continent: dbCountry.continent,
          capital: dbCountry.capital,
          subregion: dbCountry.subregion,
          area: dbCountry.area,
          population: dbCountry.population,
        };
      })
    );

    return savedCountries;
  } catch (error) {
    console.error('Error fetching and saving countries:', error);
    throw error;
  }
};

module.exports = getCountry;
