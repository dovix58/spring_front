import axios from "axios";
import {Thumbnail} from "../Types/Thumbnail";

export const getAllPhotoIds = async (postId: number): Promise<number[]> => {
    const url = `/users/1/posts/${postId}/photos`;
    const response = await axios.get<number[]>(url);
    return response.data;
}
export const getThumbnail = async (photoId: number, postId: number): Promise<Thumbnail> => {
    const url = `/users/1/posts/${postId}/photos/${photoId}/thumbnail`;
    const response = await axios.get<Thumbnail>(url);
    return response.data;
};