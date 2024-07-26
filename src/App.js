import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Herosection from './Components/Herosection';
import Services from './Components/Services';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import './LandingPage.css';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
        <Header />
      <Herosection />
      <Features />
      <AboutUs />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
