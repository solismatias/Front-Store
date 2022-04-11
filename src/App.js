import "./sass/main.scss"
import Navbar from './components/Navbar';
import Cart from "./components/Cart";
// import Category from "./components/Category";
// import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Category /> */}
      {/* <Product /> */}
      <Cart />
    </div>
  );
}

export default App;
