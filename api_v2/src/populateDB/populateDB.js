const getApiTypes = require('../api_requests/getApiTypes.js');
const { Type, Pokemon } = require('../db.js');

const populateDB = async () => {
    try {
        console.log('starting to populate DB...')
        const apiTypes = await getApiTypes()
        await Type.bulkCreate(apiTypes)
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = populateDB;
