
import axios from 'axios';

const loginApi = async (requestData) => {
    const url = 'https://reqres.in/api/login';
    const getResponse = await axios.post(url, requestData);
    console.log(getResponse);
    return getResponse;
}

export default loginApi;