import axios from 'axios'

const API_key = 'AIzaSyCZK1pOt1UekRJZ3tZnOLihmgXiDYfDrTA'
const searchTerm = 'llamas'

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        maxResults: 20,
        key: API_key
    }
})