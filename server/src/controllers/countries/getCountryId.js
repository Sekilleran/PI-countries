const axios = require('axios');
const { Country } = require('../../db');

const getCountryId = async (id) => {
  try {
    let country = await Country.findByPk(id);

    if (!country) {
      // Si el país no se encuentra en la base de datos, intentamos obtenerlo desde una API externa
      const response = await axios.get(`http://localhost:5000/countries/${id}`);
      const countryData = response.data;

      // Crear el país en la base de datos
      country = await Country.create({
        id: countryData.cca3,
        name: countryData.name.official,
        image: countryData.flags.png,
        continent: countryData.region,
        capital: countryData.capital[0],
        subregion: countryData.subregion,
        area: countryData.area,
        population: countryData.population
      });
    }

    return country;
  } catch (error) {
    console.error('Error fetching country by ID:', error);
    throw error;
  }
};

module.exports = getCountryId;