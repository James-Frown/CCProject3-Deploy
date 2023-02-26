import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Card">
        <div className="Card__Image">
          <img className="Card__Image__src" src="/Bitmap.png" alt="image of perfume"></img>
        </div>
        <div className="Card__Content">
          <div className="Card__Content__Upper">
            <h2>
              PERFUME
            </h2>
            <h1>
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="Product__description">
              A flora, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>

          <div className="Card__Content__Middle">
            <p className="Card__curr__price">
              $149.99
            </p>
            <p className="Card__old__price">
              $169.99
            </p>
          </div>

          <button className="Card__Content__Button">
            <div className="Card__Content__Button__Icon">
              <img src="/Shape.png" alt="cart icon"></img>
            </div>

            <div className="Card__Content__Button__Text">
              <p>
                Add to Cart
              </p>
            </div>
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
