import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      LargAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50)
    }
    this.carregarGrafico = this.carregarGrafico.bind(this);

  }
  carregarGrafico(){

    Animated.sequence([
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 300,
          duration: 1000
        }
      )
    ]).start()
  }

render(){
  return(
    <View style={{flex: 1}}>

    <View style={{
      marginTop: 50,
      height: 80, 
      alignItems: 'center', 
      justifyContent: "center" ,
      flexDirection: 'row',
      backgroundColor: "#4169E1"
    }}>

    <TouchableOpacity>
      <Text style={{ fontSize: 25, color: '#ffffff'}}>
        Gerar Gráfico
      </Text>
    </TouchableOpacity>

    </View>

    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>

      <Animated.View style={{width: this.state.LargAnimada,
                            height: this.state.AltAnimada, 
                            backgroundColor: '#FF0000', 
                            justifyContent: 'center', 
                            borderRadius: 25}}>


        <Text style={{color: '#FFFFFF', 
                      fontSize: 22, 
                      textAlign: 'center'
                      }}>R$ 150,00</Text>


      </Animated.View>


    </View>




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