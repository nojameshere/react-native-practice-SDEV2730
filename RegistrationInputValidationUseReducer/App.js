import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './pages/Main';
import Blue from './pages/Blue';
import Green from './pages/Green';
import Red from './pages/Red';
import Navbar from './Navbar';
import UserContextProvider from './context/userContext';
import Validation from './pages/Validation';

export default function App() {

  const [content, setContent] = useState('');

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const renderContent = () => {
    if (content === 'name') {
      return <Blue setContent={setContent} />;
    } else if (content === 'email') {
      return <Red setContent={setContent}/>;
    } else if (content === 'phone') {
      return <Green setContent={setContent}/>;
    } else if (content === 'validation') {
      return <Validation setContent={setContent}/>;
    } else {
      return <Main setContent={handleContentChange} />;
    }
  };

  return (
    <UserContextProvider>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Navbar content={content} setContent={setContent} />
        </View>
        <View style={styles.content}>
          {renderContent()}
        </View>
      </View>
    </UserContextProvider>
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
