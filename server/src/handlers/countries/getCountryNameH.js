const getCountryName = require('../../controllers/countries/getCountryName');

const getByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: 'Name parameter is missing' });
    }

    const countries = await getCountryName(name);

    if (countries.length === 0) {
      return res.status(404).json({ error: 'No countries found with the provided name' });
    }

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getByNameHandler;
