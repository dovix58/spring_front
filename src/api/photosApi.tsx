import axios from "axios";
import {Thumbnail} from "../Types/Thumbnail";

export const getAllPhotoIds = async (postId: number): Promise<number[]> => {
    const url = `/users/1/posts/${postId}/photos`;
    const response = await axios.get<number[]>(url);
    return response.data;
}
export const getThumbnail = async (photoId : number, postId: number): Promise<Thumbnail> => {
    const url = `/users/1/posts/${postId}/photos/${photoId}/thumbnail`;
    const response = await axios.get(url, {
        responseType: 'arraybuffer', // Expect an array buffer as the response
    });

    // Create a blob URL from the byte array
    const blob = new Blob([response.data], { type: 'image/jpeg' });
    const imageUrl = URL.createObjectURL(blob); // Create a URL for the blob
}