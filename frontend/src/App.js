
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container className='mt-5'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
