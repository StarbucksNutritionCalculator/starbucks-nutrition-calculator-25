
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to Home component
    navigate('/home', { replace: true });
  }, [navigate]);
  
  // Return Home component directly in case the redirect doesn't happen immediately
  return <Home />;
};

export default Index;
