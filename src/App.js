
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import BestSelling from './Pages/BestSelling';
import Hero from './Pages/Hero';
import Product from './Pages/Product';

function App() {
  return (
    <>
    
      <Navbar/>
         
    <main className='max-w-7xl mx-auto'>
      <Hero />
      <BestSelling/>
      <Product/> 

      <Footer/> 
    </main>
    
    </>
  );
}

export default App;
