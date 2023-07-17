import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './pages/Main';
import Blue from './pages/Blue';
import Green from './pages/Green';
import Red from './pages/Red';
import Navbar from './Navbar';
import { UserContext } from './context/userContext';

export default function App() {

  const initialState = {
    firstName: 'James',
    lastName: 'Sales',
    phone: '801-555-5510',
    email: 'jamessales@salesjames.co.uk'
  }


  const [content, setContent] = useState('main');

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const renderContent = () => {
    if (content === 'name') {
      return <Blue />;
    } else if (content === 'email') {
      return <Red />;
    } else if (content === 'phone') {
      return <Green />;
    } else {
      return <Main setContent={handleContentChange} />;
    }
  };

  return (
    <UserContext.Provider value={initialState}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Navbar content={content} setContent={setContent} />
        </View>
        <View style={styles.content}>
          {renderContent()}
        </View>
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    height: 110,
    width: '100%',
    backgroundColor: 'lightgray',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  content: {
    width: '100%',
    flex: 1
  }
});
