import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Transactions } from './Pages/Transactions';
import { Profile } from './Pages/Profile';
import { AddTransaction } from './Pages/AddTransaction';
import { Map } from './Pages/Map';
import { Auth } from './AuthPageSelector';
import { ContextProvider } from './Context/Context';


export default function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [page, setPage] = useState('profile');
  

  useEffect(() => {
    // Update the showNavbar state based on the page
    setShowNavbar(page !== 'map' && page !== 'auth');
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'newEntry':
        return <AddTransaction />;
      case 'transactions':
        return <Transactions />;
      case 'profile':
        return <Profile setPage={setPage} />;
      case 'map':
        return <Map setPage={setPage} />;
      case 'auth':
        return <Auth setPage={setPage} />;
      default:
        return null; // Handle other cases if necessary
    }
  };

  return (
    <ContextProvider>
      <View style={styles.container}>
        <View style={styles.page}>
          {renderPage()}
        </View>
        {showNavbar && <Navbar style={styles.navbar} setPage={setPage} />}
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
