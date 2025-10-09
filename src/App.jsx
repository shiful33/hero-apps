
import { useEffect } from 'react';
import './App.css'
import { LoadingProvider, useLoading } from './Contexts/LoadingContext';
import Router, { Route } from 'router';
import { Routes, useLocation } from 'react-router';
import LoadingOverlay from './Components/LoadingOverlay';

const RouteChangeMonitor = () => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();

    const transitionTimer = setTimeout(() => {
    stopLoading();
  }, 50);

  return () => clearTimeout(transitionTimer);
  }, [location.pathname, startLoading, stopLoading]);

  return null;
}

function App() {

  return (
    <LoadingProvider>
      <Router>
        <RouteChangeMonitor />
        <LoadingOverlay />
        <Routes>
          
        </Routes>
      </Router>
    </LoadingProvider>
  )
}

export default App
