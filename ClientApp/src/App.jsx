import React from 'react'
import './custom.scss'
import { Cigar } from './pages/Cigar'
import { Cigars } from './pages/Cigars'
import { NewCigar } from './pages/NewCigar'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import axios from 'axios'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'

export function App() {
  return (
    <>
      <header>
        <h1 className="header-name">Humidor</h1>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <Link>
                <li>Add A Cigar</li>
              </Link>
              <a href="#">
                <li>Brands</li>
              </a>
              <a href="#">
                <li>Search</li>
              </a>
              <a href="#">
                <li>Sign In</li>
              </a>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/Cigars">
            <Cigars />
          </Route>
          <Route exact path="/Cigars/:id">
            <Cigar />
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </main>
      {/* <footer>
        <p>logo</p>
        <p>Github logo</p>
      </footer> */}
    </>
  )
}
