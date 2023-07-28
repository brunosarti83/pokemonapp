import axios from 'axios';

const getAllTypes = async () => {
    try {
        const url = '/types'
        const { data } = await axios.get(url)
        return data

    } catch (error) {
        throw error
    }
}

export default getAllTypes;