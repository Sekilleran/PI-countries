const getCountryId = require('../../controllers/countries/getCountryId')


const getByIdHandler = async(req, res) => {

    try {
        const {id} = req.params;
        const pais = await getCountryId(id)
        
        if(!pais)  return res.status(404).json({error: "Countryes not found"}) 
        
        res.status(200).json(pais)

    } catch (error) {
        
        return res.status(500).json({ error: error.message });
    }
}


module.exports = getByIdHandler