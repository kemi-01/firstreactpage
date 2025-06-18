import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/body'
import No from './components/no'
import About from './components/About'
import Collection from './components/collection';
import Whyus from './components/Whyus'
import Say from './components/Say'
import Customers from './components/customers'
import Purity from './components/Purity'
// import New from './components/New/'




const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <No />
      <About />
      <Collection />
       <Whyus />
      <Say />
      <Customers />
      <Purity />
      {/* <New//> */}
      <Footer />

    </div>
  )
}

export default App
