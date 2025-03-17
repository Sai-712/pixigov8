import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DevLoginProps {
  onLoginSuccess?: () => void;
}

export const DevLogin: React.FC<DevLoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleDevLogin = () => {
    // Store mock user data for development
    localStorage.setItem('userEmail', 'dev@example.com');
    localStorage.setItem('userName', 'Dev User');
    
    // Call the success callback if provided
    if (onLoginSuccess) {
      onLoginSuccess();
    }
    
    // Navigate to events page
    navigate('/events');
  };

  // Only show in development mode
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <button
      onClick={handleDevLogin}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Development Login
    </button>
  );
};