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
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('sliderValue', JSON.stringify(json.value))

      // update loading state
      setIsLoading(false)
    }
  }

  return { updateSliderValue, isLoading, error }
}