import React from 'react'
import './custom.scss'
import { Cigar } from './pages/Cigar'
import { Cigars } from './pages/Cigars'
import { NewCigar } from './pages/NewCigar'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import axios from 'axios'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import { Header } from './components/Header'
import { Brands } from './pages/Brands'

export function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Cigars />
          </Route>
          <Route exact path="/Cigars/:id">
            <Cigar />
          </Route>
          <Route path="/newCigar">
            <NewCigar />
          </Route>
          <Route exact path="/Brands">
            <Brands />
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
