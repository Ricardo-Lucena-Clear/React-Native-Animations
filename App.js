import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      LargAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50)
    }

    Animated.timing(
      this.state.LargAnimada,
      {
        toValue: 300,
        duration: 2000
      }
    ).start();
  }

render(){
  return(
    <View style={StyleSheet.container}>
      <Animated.View style={{width: this.state.LargAnimada, height: this.state.AltAnimada, backgroundColor: '#4169E1', justifyContent: 'center'}}>
        <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>Carregando ...</Text>
      </Animated.View>
    </View>
   )
  }  
 }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});