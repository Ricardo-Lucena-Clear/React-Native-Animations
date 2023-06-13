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
  
  Animated.loop(
    Animated.sequence([
      Animated.timing(
        this.state.LargAnimada,
        {
          toValue: 200,
          duration: 700
        }
      ),
      Animated.timing(
        this.state.LargAnimada,
        {
          toValue: 150,
          duration: 700
        }
      )
      ])
  ).start()

  }

render(){
  return(
    <View style={StyleSheet.container}>
      <Animated.View style={{width: this.state.LargAnimada, height: this.state.AltAnimada, backgroundColor: '#4169E1', justifyContent: 'center', borderRadius: 25}}>
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