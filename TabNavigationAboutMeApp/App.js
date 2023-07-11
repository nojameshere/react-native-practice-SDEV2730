import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Navbar';
import School from './pages/School';
import Home from './pages/Home';
import Skills from './pages/Skills';

export default function App() {

  const [ selected, setSelected ] = useState('home')

  const renderPage = () => {
    if(selected === 'skills'){
      return(
        <Skills />
      )
    }
    else if (selected === 'school'){
      return(
        <School />
      )
    }
    else {
      return(
        <Home />
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {renderPage()}
      </View>
      <Navbar selected={selected} setSelected={setSelected}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    
  },
  content: {
    flex: 1
  }
});
