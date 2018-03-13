import axios from 'axios';


export default function fetchPhotosJson() {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    return axios.get(url).then(response=> response.data);
    
}