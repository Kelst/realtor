import axios from "axios";
export const baseUrl="https://bayut.p.rapidapi.com"

export const fetchApi=async (url)=>{
    const {data}= await axios.get((url),{
        headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '28b58181b7msh0400383284fd1bap1eab6djsn3df9510c09f3'
              }
    });

return data
}