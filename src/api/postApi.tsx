import axios from "axios"

import {Post} from "../Types/Post";


export const getPosts = (setPosts: (posts: Post[]) => void): Promise<void> => {
    return axios.get(`/users/1/posts`)
        .then(response => {
            console.log(response.data);  // Log the data
            setPosts(response.data);     // Set the posts
        })
        .catch(error => {
            console.log(error.message);   // Log the error message if there is one
        });
};