import './App.css';
import Header from './Component/header/Header';
import { AuthContext } from './Component/context/AuthContext';
import AppRouter from './routes/AppRouter';
import React from 'react';

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true);
    }
    setIsLoading(false)
  }, [])
  return (<div className="App">
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
      <Header />
      <AppRouter />
    </AuthContext.Provider></div>
  );
}

export default App;
