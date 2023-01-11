import axios from 'axios'



export const createPost = async (namePost, textPost, dateTime, name, color) => {
    // console.log(namePost, textPost, dateTime,name )
    try {
       await axios.post(`http://localhost:5000/api/posts/create-post`, {
            namePost,
            textPost,
            dateTime,
            name,
            color
        })

        alert("Note was created successfully")
    } catch (e) {
        alert(e.response.data.message)
    }

}

export const Posts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/posts/all-posts');
        // console.log(response.data)
        const res = response.data
        return res
    } catch (error) {
        console.log(error);
    }
}

// export default class PostService {
//     static async getAll() {
//         const response = [...await fetch('http://localhost:5000/api/posts/all-posts')]
//         return response
//     }
// }


// useEffect(() => {
//     axios.get('http://localhost:5000/api/notes/posts').then(res => {
//         setPosts(res)
//         console.log(res.data)
//     }).catch(e => {
//         console.log(e)
//     })
// }, []);