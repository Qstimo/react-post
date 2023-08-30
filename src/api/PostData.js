import axios from "axios";

export default class PostData {
    static async getComments() {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments/');
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}