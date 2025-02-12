import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { Setting } from './const'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App rentalOffersCount={Setting.rentOffersCount}/>
  </React.StrictMode>
)