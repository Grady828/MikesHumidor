import React from 'react'
import search from '../images/search.png'
import avatar from '../images/user.png'

export function Cigars() {
  return (
    <>
      <header>
        <div>Menu</div>
        <h2 className="header-name">Humidor</h2>
        <div className="Search">
          <img src={search} alt={search} height="30" width="30" />
        </div>
        <div className="Login">
          <img src={avatar} alt={avatar} height="30" width="30" />
        </div>
      </header>
      <main>
        <h3>Inventory:</h3>
        <ul>
          <li>Arturo Fuente - 5</li>

          <li>Nub - 4</li>

          <li>Montecristo - 3</li>

          <li>Tirador Ramos - 2</li>
        </ul>

        <section>
          <div>
            Current Humidity: <i className="fas fa-plus"></i>71%
            <i className="fas fa-minus"></i>
          </div>
          <div>
            Current Temp: <i className="fas fa-plus"></i>68&deg;
            <i className="fas fa-minus"></i>
          </div>
        </section>
      </main>
    </>
  )
}
