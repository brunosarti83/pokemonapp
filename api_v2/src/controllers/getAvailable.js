const getAvailableHandler = require('../handlers/getAvailableHandler');

const getAvailable = async (req, res) => {
    try {
        const available = await getAvailableHandler({...req.query})
        res.status(200).json(available)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getAvailable;