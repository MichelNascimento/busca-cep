import './App.css';
import { ZipCodeContextProvider } from './contexts/ZipCodeContext';

import Home from './pages/Home/Home';
import Result from './pages/Result/Result';

function App() {
  return (
    <ZipCodeContextProvider>
      <Home />
      <Result />
    </ZipCodeContextProvider>
  );
}

export default App;
