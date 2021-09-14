// Fetching User's Data
export const userDataApi = async (pageNumber) => {
    try {
        const query = `/?page=${pageNumber}&results=10`
        const response = await fetch(process.env.REACT_APP_BASE_URL + query)
        const users = await response.json()
        return users.results
    } catch (err) {
        console.log(err)
    }
}