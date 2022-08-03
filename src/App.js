
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './carouselComponents';
import FooterComponent from './FooterComponent';
import HomeComponent from './home';
//import logo from './logo.svg';
import NavbarComponent from './navbarComponent';



function App() {
  return (
    <div className="App">
       <header>
        <NavbarComponent/>
       </header>
       <body>
        <CarouselComponent/>
        <HomeComponent/>
        <FooterComponent/>
       </body>
    </div>
    
  );
}

export default App;
