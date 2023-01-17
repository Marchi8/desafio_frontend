import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';
import SalesProvider from './contexts/SalesContext';

function App() {
  return (
    <div className="App">
      <SalesProvider>
        <GlobalStyle />
        <Dashboard />
      </SalesProvider>
    </div>
  )
}

export default App
