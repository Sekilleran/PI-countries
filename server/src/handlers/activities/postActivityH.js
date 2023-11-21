const postActivity = require('../../controllers/activities/postActivity');

const postActivityHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, Countries } = req.body;

    if (!name || !difficulty || !duration || !season || !Countries) {
      return res.status(400).json({ error: 'Some data is missing' });
    }

    const activity = await postActivity(name, difficulty, duration, season, Countries);

    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postActivityHandler;
