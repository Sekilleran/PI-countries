const getCountry = require('../../controllers/countries/getCountry');

const getCountriesHandler = async (req, res) => {
  try {
    const countries = await getCountry();

    if (countries.length === 0) {
      return res.status(404).json({ error: 'No countries found' });
    }

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountriesHandler;
