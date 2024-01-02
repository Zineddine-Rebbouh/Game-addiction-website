// localStorageUtils.js

// Get user information from localStorage
export const getCurrentUser = () => {
  try {
    const storedData = localStorage.getItem("jwtToken")
    if (storedData) {
      return JSON.parse(storedData)
    }
    return null
  } catch (error) {
    console.error("Error getting user info from localStorage:", error)
    return null
  }
}
