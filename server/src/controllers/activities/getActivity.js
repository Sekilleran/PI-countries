const { Activity, Country } = require('../../db');

const getActivities = async () => {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        through: {
          attributes: []
        }
      }
    });

    const transformedActivities = activities.map(activity => {
      const transformedActivity = {
        ...activity.get(),
        Countries: activity.Countries.map(country => country.name)
      };
      return transformedActivity;
    });

    return transformedActivities;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};

module.exports = getActivities;
