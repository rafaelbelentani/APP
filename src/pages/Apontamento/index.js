import { BackgroundImage } from 'react-native-elements/dist/config';
import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Linking } from 'react-native';
import { StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';  
import { callList } from './listaapi';
import { FontAwesome } from '@expo/vector-icons';
import Select1 from './Select1';


      export default function Apontamento ({navigation}) {

      const [currentDateWithMoment, setcurrentDateWithMoment] = useState('') 
      useEffect(() => {
      var dateMoment = moment().format('DD/MM/YY - HH:mm:ss')
      setcurrentDateWithMoment(dateMoment)    
      }, [])

      const botao1 = () => {
      navigation.navigate("Contar Peças")
      }

      const botaosaldo = () => {
      navigation.navigate("Saldo Cliente")
      }

      const botaopedido = () => {
      navigation.navigate("Pedido Adicional")
      }

      const botaoentrega = () => {
        navigation.navigate("Fechar Entrega")
        }
      
    return (
    <View style={styles.screen}>  

    <BackgroundImage
    source={require('../Login/logo.png')}
    style={styles.logo} 
    resizeMode='contain'
    />

    <Text style={styles.texto}> Filial: </Text>
    <Text style={styles.filial}>Jardinópolis </Text>
    <Text style={styles.texto2}> Gestor Elis: </Text>
    <Text style={styles.gestor}>Marcelo Luciano</Text>

            <SafeAreaView>
            <View marginLeft={280}
            marginTop={-40}>
            <TouchableOpacity 
            style={styles.chat}            
            onPress={() => { 
            Linking.openURL('https://api.whatsapp.com/send?phone=5516992268524'); 
            }}>
            <FontAwesome name="whatsapp" color="#32CD32" size={40}/>
            </TouchableOpacity>
            </View>
            </SafeAreaView>

    <Text style={styles.texto3}> Data: </Text>
    <Text style={styles.dateComponente}> {currentDateWithMoment} </Text>
    

            <SafeAreaView>
            <Select1
            options={callList} 
            onChangeSelect={(id) => console.log(id)}
            text='Selecione um Cliente' />
            </SafeAreaView>   
            

              

            <TouchableOpacity
             style={styles.cadastrar}
             onPress={ () => {botao1 ()} }
            >              
            <Text style={styles.botaoText} >Contar Peças</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.cadastrar}
             onPress={ () => {botaopedido ()} }>
            <Text style={styles.botaoText} >Pedido Adicional</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.cadastrar}
             onPress={ () => {botaosaldo ()} }
            >
            <Text style={styles.botaoText} >Saldo Cliente</Text>
            </TouchableOpacity>

            

            


           
            
    </View>
  );
}

const styles = StyleSheet.create({

    screen: {
    flex: 1,    
    alignItems: 'center',
    },

    logo: {
    width: 200,
    height: 200,
    },

      texto: {
      fontSize: 18,
      left: -175,
      marginTop: -20,
      marginBottom: 10,
      },

      texto2: {
      fontSize: 18,
      left: -150,
      marginTop: 10,
      },

       texto3: {
      fontSize: 18,
      left: -172,
      marginTop: 7,
      },

      botaoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
      },

      filial: {
        width: 120,
        height: 30,
        marginTop: -33,
        marginLeft: -65,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 3,      
        marginHorizontal: 20,    
        borderRadius: 3,
        fontSize: 18,
        borderWidth: 1,      
        },
  
          gestor:{     
          width: 160,
          height: 30,
          marginTop: -26,
          marginLeft:-25,
          paddingTop: 3, 
          marginBottom: 5,
          paddingLeft: 10,
          marginHorizontal: 20,
          borderRadius: 3,
          fontSize: 18,
          borderWidth: 1,
          },

      Select: {
      height: 50,      
      backgroundColor: '#F8F9FA',       
      borderRadius: 5,
      borderWidth: 1,
      paddingLeft: 380,      
      marginBottom: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      marginTop: 5,    
      },

      cliente: {     
      marginLeft:-280,      
      fontSize: 20,
      color: '#808080',
      marginTop: 5,      
      flexDirection: 'row',
      paddingLeft: 280,
      backgroundColor: 'red'
      },

      cadastrar: {
      width: 300,
      height: 42,
      backgroundColor: '#1E90FF',
      marginTop: 40,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',      
      },

      roundButton2: {
      marginLeft: 310,
      marginBottom: 50,        
      },

      chat: {
      width: 50,
      height: 50,
       
      
      },

      dateComponente: {
        fontSize: 16,
        width: 180,
        marginTop: -25,
        marginLeft: -5,
        marginBottom: 10,
        paddingLeft: 4,
        marginHorizontal: 20,
        borderRadius: 3,
        fontSize: 18,
        borderWidth: 1,
        height: 30,
        paddingTop: 3, 
        },
   

});