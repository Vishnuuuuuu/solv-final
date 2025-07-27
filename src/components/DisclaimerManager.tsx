import React, { createContext, useContext, useEffect, useState } from 'react';

interface DisclaimerContextType {
  hasAccepted: boolean;
  acceptDisclaimer: () => void;
  resetDisclaimer: () => void;
}

const DisclaimerContext = createContext<DisclaimerContextType | undefined>(undefined);

export const useDisclaimer = () => {
  const context = useContext(DisclaimerContext);
  if (!context) {
    throw new Error('useDisclaimer must be used within a DisclaimerProvider');
  }
  return context;
};

interface DisclaimerProviderProps {
  children: React.ReactNode;
}

export const DisclaimerProvider: React.FC<DisclaimerProviderProps> = ({ children }) => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkDisclaimerStatus();
  }, []);

  const checkDisclaimerStatus = () => {
    try {
      // Use sessionStorage instead of localStorage so it clears when browser closes
      const accepted = sessionStorage.getItem('solv-disclaimer-accepted');
      
      if (accepted === 'true') {
        setHasAccepted(true);
      } else {
        setHasAccepted(false);
      }
    } catch (error) {
      console.error('Error checking disclaimer status:', error);
      setHasAccepted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const acceptDisclaimer = () => {
    try {
      // Use sessionStorage so it clears when browser closes
      sessionStorage.setItem('solv-disclaimer-accepted', 'true');
      setHasAccepted(true);
    } catch (error) {
      console.error('Error saving disclaimer acceptance:', error);
    }
  };

  const resetDisclaimer = () => {
    try {
      sessionStorage.removeItem('solv-disclaimer-accepted');
      setHasAccepted(false);
    } catch (error) {
      console.error('Error resetting disclaimer:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <DisclaimerContext.Provider value={{ hasAccepted, acceptDisclaimer, resetDisclaimer }}>
      {children}
    </DisclaimerContext.Provider>
  );
};