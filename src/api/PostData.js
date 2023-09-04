import axios from "axios";

export default class PostData {
    static async getComments(limit = 10, page = 1) {

        const response = await axios.get('https://jsonplaceholder.typicode.com/comments/', {
            params: { _limit: limit, _page: page }
        })

        return response;
    }
    static async getByID(id) {

        const response = await axios.get('https://jsonplaceholder.typicode.com/comments/' + id);

        return response;
    }
}

// export default class PostData {
//     static async getComments(limit = 10, page = 1) {

//         const response = await axios.get('https://jsonplaceholder.typicode.com/comments/', {
//             params: {
//                 _limit: limit,
//                 _page: page
//             }
//         });
//         return response;

//     }
// }