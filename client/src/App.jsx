import { useState } from 'react'
import { Header } from './components/Header'
import { Welcome } from './components/Welcome'


function App() {

  return (
    <div className="h-screen w-full bg-slate-900 divide-y divide-gray-600">
      <Header/>
      <Welcome/>
    </div>
  )
}

export default App
