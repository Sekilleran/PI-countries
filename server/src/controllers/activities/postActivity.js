const { Activity, Country } = require("../../db");

const postActivity = async (name, difficulty, duration, season, Countries) => {
  try {
    if (!name || !difficulty || !duration || !season || !Countries) {
      throw new Error('Some data is missing');
    }

    const namesOfCountryes = Array.isArray(Countries) ? Countries : [Countries];
    const assCountries = [];

    for (const countryName of namesOfCountryes) {
      const country = await Country.findOne({
        where: {
          name: countryName
        }
      });

      if (!country) {
        throw new Error(`Country with name "${countryName}" not found.`);
      }

      assCountries.push(country);
    }

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    await newActivity.setCountries(assCountries);

    return newActivity;
  } catch (error) {
    throw error;
  }
};

module.exports = postActivity;
