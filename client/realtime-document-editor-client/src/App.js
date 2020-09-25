import React from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./style/style.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Main content={"Some example content"} />
      <Footer />
    </div>
  )
}

export default App