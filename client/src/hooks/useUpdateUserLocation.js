import { useState } from 'react'

export const useUpdateUserLocation = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const updateUserLocation = async (email, location) => {
    setIsLoading(true)
    setError(null)
    console.log(email, location);

    // const response = await fetch('https://weather-app-server-api.herokuapp.com/api/accounts/updatelocation', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({ email, location })
    // })
    const response = await fetch('/api/accounts/updatelocation', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, location })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
        const getUser = JSON.parse(localStorage.getItem("user"));
        const date = getUser.date;
        const email = getUser.email;
        const token = getUser.token;
        const userLocation = location;
        const userSliderValue = getUser.userSliderValue;
        const updatedUser = { date, email, token, userLocation, userSliderValue }
        localStorage.setItem('user', JSON.stringify(updatedUser));
        // update loading state
        setIsLoading(false)
    }
  }

  return { updateUserLocation, isLoading, error }
}