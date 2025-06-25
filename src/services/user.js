

export const fetchUserData = async (userId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const formulatedResponse = await response.json()
        return formulatedResponse

    } catch (e) {

    }
}