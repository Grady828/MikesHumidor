import React from 'react'
import './custom.scss'
import { Cigar } from './pages/Cigar'
import { Cigars } from './pages/Cigars'
import { NewCigar } from './pages/NewCigar'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import search from './images/search.png'
import avatar from './images/user.png'

export function App() {
  return (
    <>
      <header>
        <div>Menu</div>
        <h2 className="header-name">Humidor</h2>
        <div className="Search">
          <img src={search} alt={search} height="15" width="15" />
        </div>
        <div className="Login">
          <img src={avatar} alt={avatar} height="16" width="16" />
        </div>
      </header>
      <main>
        <Cigars></Cigars>
      </main>
      {/* <footer>
        <p>logo</p>
        <p>Github logo</p>
      </footer> */}
    </>
  )
}
