import axios from 'axios';
const URL  ="http://localhost:7000";

export const getads = async() => {
    try{
        return await axios.get(`${URL}/`);
    }
    catch (error) {
        console.log("error in fetching ads",error);
    }
}

export const searchads = async(key) => {
    try{
        return await axios.get(`${URL}/search/${key}`);
    }
    catch (error) {
        console.log("error in searching ads",error);
    }
}