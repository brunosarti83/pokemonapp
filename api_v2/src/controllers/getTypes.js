const getTypesHandler = require('../handlers/getTypesHandler');

const getTypes = async (req, res) => {
    try {
        const types = await getTypesHandler()
        res.status(200).json(types)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getTypes;