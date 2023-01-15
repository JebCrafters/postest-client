import axios from 'axios'



export const createPost = async (namePost, textPost, dateTime, name, color) => {
    try {
        if (!namePost && !textPost) {
            return  alert("Fill in the post title and post text")
        }
        if (!namePost ) {
            return  alert("Fill in the post title ")
        }
        if (!textPost ) {
            return  alert("Fill in the post text ")
        }else {
            alert("Post created successfully")
                
            await  axios.post(`https://postes.herokuapp.com/api/posts/create-post`, {
                namePost,
                textPost,
                dateTime,
                name,
                color
            })
           
            
        }
        window.location.assign ("https://iso2.tech")
    } catch (e) {
        alert("Note was not created")
    }

}

export const Posts = async () => {
    try {
        const response = await axios.get('https://postes.herokuapp.com/api/posts/all-posts');
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