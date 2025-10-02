import { useState } from 'react'
import './App.css'

function App() {

  const [premium, setPremium] = useState(0);
  const [ecomony, setEcomony] = useState(0);

  const handlePremiumChange = (e) => {
    setPremium(e.target.value);
  };

  const handleEcomonyChange = (e) => {
    setEcomony(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(premium, ecomony);
  };

  return (
    <div class="bg-gradient-to-br from-blue-900 via-purple-900 to-rose-900 font-sans m-0">

      <div class="min-h-screen flex items-center justify-center p-4">

        <div class="w-full max-w-md p-8 space-y-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30">

          <div>
            <h1 class="text-3xl font-bold text-white text-center">
              Welcome to Smart Host
            </h1>
          </div>

          <form class="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label for="premium" class="block text-sm font-medium text-gray-100">Free Premium rooms:</label>
              <input
                type="number"
                id="premium"
                placeholder="Premium rooms"
                value={premium}
                onChange={handlePremiumChange}
                class="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
              />
            </div>

            <div>
              <label for="ecomony" class="block text-sm font-medium text-gray-100">Free Economy rooms:</label>
              <input
                type="number"
                id="ecomony"
                placeholder="Ecomony rooms"
                value={ecomony}
                onChange={handleEcomonyChange}
                class="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              class="w-full py-3 px-4 bg-orange-500/80 hover:bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Calculate
            </button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default App
