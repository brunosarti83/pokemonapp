const { Type } = require('../db');

const getTypesHandler = async () => {
    try {
        const types = await Type.findAll({
            attributes: ['id','name']
        })
        return types
    } catch (error) {
        throw error
    }
}

module.exports = getTypesHandler;