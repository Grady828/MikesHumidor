import React from 'react'
import './custom.scss'
import { Cigar } from './pages/Cigar'
import { Cigars } from './pages/Cigars'
import { NewCigar } from './pages/NewCigar'
import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Brands } from './pages/Brands'
import { Footer } from './components/Footer'
import { Brand } from './pages/Brand'

export function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Cigars />
        </Route>
        <Route exact path="/Cigars/:id">
          <Cigar />
        </Route>
        <Route path="/NewCigar">
          <NewCigar />
        </Route>
        <Route exact path="/Brands">
          <Brands />
        </Route>
        <Route exact path="/Brand/:id">
          <Brand />
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
      <Footer />
    </>
  )
}
