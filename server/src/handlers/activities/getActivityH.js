const getActivity = require('../../controllers/activities/getActivity')


const getActivitiesHandler = async(req, res) => {
    try {
        const actividades = await getActivity()
        res.status(200).json(actividades)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}



module.exports = getActivitiesHandler