import { useState } from 'react'

export const useSliderValue = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const updateSliderValue = async (email, value) => {
    setIsLoading(true)
    setError(null)
    console.log(email, value);

    // const response = await fetch('https://weather-app-server-api.herokuapp.com/api/accounts/updatevalue', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({ email, password })
    // })
    const response = await fetch('/api/accounts/updatevalue', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, value })
    })
    const json = await response.json()

    if (!response.ok) {
      console.log('error updating value');
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      if (value === 0) {
        localStorage.setItem('sliderValue', JSON.stringify(0))
        const getUser = JSON.parse(localStorage.getItem("user"));
        const date = getUser.date;
        const email = getUser.email;
        const token = getUser.token;
        const userLocation = getUser.userLocation;
        const userSliderValue = 0;
        const updatedUser = { date, email, token, userLocation, userSliderValue }
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        localStorage.setItem('sliderValue', JSON.stringify(json.value))
      }

      // update loading state
      setIsLoading(false)
    }
  }

  return { updateSliderValue, isLoading, error }
}