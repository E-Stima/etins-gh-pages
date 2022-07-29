
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './carouselComponents';
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
       </body>
    </div>
    
  );
}

export default App;
