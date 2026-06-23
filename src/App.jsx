import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import Hero from './Components/hero'
import SimpleFooter from './Components/footer'
import LogoClouds from './Components/logoclouds'
import Marketplace from './Components/Marketplace'
import ErrorPage from './Components/error404'
import Icmal from './Components/icmal'

function App() {

  return (
    <>
    <Header />
    <Hero/>
    <Marketplace/>
    <Icmal/>
    <LogoClouds/>
    <ErrorPage />
    <SimpleFooter/>
          </>
  )
}

export default App
