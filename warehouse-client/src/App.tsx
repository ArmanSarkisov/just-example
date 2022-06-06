// hooks
import { useRequestProducts } from './hooks';

// components
import { Products } from './components/Products';

function App() {
  useRequestProducts();

  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
