import "./sass/main.scss"
import Navbar from './components/Navbar';
// import Category from "./components/Category";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Category /> */}
      <Product />
    </div>
  );
}

export default App;
