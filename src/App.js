import "./sass/main.scss"
import Navbar from './layout/Navbar';
import Cart from "./layout/Cart";
// import Category from "./layout/Category";
// import Product from "./layout/Product";

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
