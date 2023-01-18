import axios from 'axios'



export const createPost = async (namePost, textPost, dateTime, name, color) => {
    try {
        if (!namePost && !textPost) {
            return alert("Fill in the post title and post text")
        }
        if (!namePost) {
            return alert("Fill in the post title ")
        }
        if (!textPost) {
            return alert("Fill in the post text ")
        } else {
            
            await axios.post(`https://postes.herokuapp.com/api/posts/create-post`, {
                namePost,
                textPost,
                dateTime,
                name,
                color
            })          
        }

    } catch (e) {
            alert(e.response.data.message)
            window.location = "https://iso2.tech/create-post"
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
