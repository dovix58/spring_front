import axios from "axios"
import { SetStateAction } from "react";


export const getPosts = (setPosts: { (value: SetStateAction<never[]>): void; (arg0: any): any; }) =>{

    return axios.get(`/users/1/posts`)
        .then(response => setPosts(response.data))
        .catch(error => {
            console.log(error.message);
        })
}