import { useEffect, useState } from 'react'

export function App() {
  const [frase, setFrase] = useState([])

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then(response => response.json())
      .then(data => setFrase(data.slip.advice))
  }, [])

  function reload() {
    window.location.reload()
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-white mt-10">
        {frase}
      </h1>

      <div className="w-1/4 m-auto mt-5">
        <button
          className="bg-amber-400 p-2 rounded-md w-96 hover:bg-amber-600"
          onClick={reload}
        >
          Reload
        </button>
      </div>
    </div>
  )
}
