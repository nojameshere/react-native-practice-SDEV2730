import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './pages/Main';
import Blue from './pages/Blue';
import Green from './pages/Green';
import Red from './pages/Red';
import Navbar from './Navbar';

export default function App() {
  const [content, setContent] = useState('main');

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const renderContent = () => {
    if (content === 'blue') {
      return <Blue />;
    } else if (content === 'red') {
      return <Red />;
    } else if (content === 'green') {
      return <Green />;
    } else {
      return <Main setContent={handleContentChange} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Navbar content={content} setContent={setContent}/>
      </View>
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
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
