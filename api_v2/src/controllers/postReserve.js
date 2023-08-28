const postReserverHandler = require('../handlers/postReserveHandler');

const postReserve = async (req, res) => {
        try {
            const id = await postReserverHandler({...req.body})
            res.status(200).json({ created: true, reserveId: id })
        } catch (error) {
            res.status(500).json({ error: error })
        }
}

module.exports = postReserve;