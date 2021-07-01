import './App.css';

import { ZipCodeContextProvider } from './contexts/ZipCodeContext';

import { routes as Routes } from './routes'

function App() {
  return (
    <ZipCodeContextProvider>
      <Routes />
    </ZipCodeContextProvider>
  );
}

export default App;
