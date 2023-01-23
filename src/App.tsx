import './App.css';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';
import SalesProvider from './contexts/SalesContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SalesProvider>
        <GlobalStyle />
        <ToastContainer />
        <Dashboard />
      </SalesProvider>
    </div>
  )
}

export default App
