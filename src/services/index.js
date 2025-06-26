

export const fetchUserData = async (userId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const formulatedResponse = await response.json()
        return formulatedResponse

    } catch (e) {

    }
}

export const fetchPostData = async () => {
    try {

        await new Promise((resolve) => setTimeout(resolve, 5000));

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        const formulatedResponse = await response.json()
        return formulatedResponse

    } catch (e) {

    }
}