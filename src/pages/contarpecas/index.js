import { BackgroundImage } from 'react-native-elements/dist/config';
import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView,KeyboardAvoidingView, ScrollView, Linking } from 'react-native';
import { StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';  
import { FontAwesome } from '@expo/vector-icons';







export default function Contarpecas({navigation}) {
        
       

        const [currentDateWithMoment, setcurrentDateWithMoment] = useState('') 
      useEffect(() => {
      var dateMoment = moment().format('DD/MM/YY - HH:mm:ss')
      setcurrentDateWithMoment(dateMoment)    
      }, [])

return (
                
  <KeyboardAvoidingView 
  behavior={Platform.OS == "ios" ? "padding": "height"}
  style = {[styles.container]}
  keyboardVerticalOffset={95}
  >

    <ScrollView style={[styles.container2]} contentContainerStyle={styles.container}>
                
                 
            
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
        
    <Text style={styles.textocliente}> Cliente: </Text>
    <Text style={styles.textocliente2}>?????</Text>


<View style={styles.container3}>
  <View style={styles.topico}>
  <Text style={styles.item}> ITEM: </Text>
  </View>

  

  <View style={styles.topico2}>
  <Text style={styles.quantidade}> QUANTIDADE: </Text>
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Guardanapo: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Avental: </Text>  
  <TextInput 
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Toalha: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Toalha de mesa: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Uniforme: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Pano de chão: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Tapete: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Cortina: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Toalha: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Toalha2: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>

<View style={styles.container4}>
  <View style={styles.itens3}>
  <Text style={styles.itens2}> Toalha3: </Text>  
  <TextInput  
  keyboardType='phone-pad'
  returnKeyType='done'
  style={styles.quantidade2}  />
  </View>
</View>


<TouchableOpacity
             style={styles.cadastrar}
             onPress={ () => {botaoentrega ()} }>
            <Text style={styles.botaoText} >Fechar Entrega</Text>
            </TouchableOpacity> 

    </ScrollView>
    </KeyboardAvoidingView>
);
}



const styles = StyleSheet.create({

  container2: {
    width: '100%',
    padding: 10, 
    
    },

    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },

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

          textocliente:{
                fontSize: 18,
                marginLeft: -330,
                marginTop: 7,

          },

        textocliente2: {                
        borderWidth: 1,        
        width: 160,
        height: 30,
        marginTop: -25,
        marginLeft: -45,
        borderRadius: 3,
        },
    
          botaoText: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#fff',
          
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
          marginTop: 20,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center', 
          marginBottom: 50,     
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
       

            container3: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
              
            },

            topico:{
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              padding: 5, 
              
            },

            topico2:{
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              padding: 5, 
              
            },

            item:{
            fontSize: 18,
            fontWeight: 'bold',
          
            },

            quantidade:{
              fontSize: 18,
              fontWeight: 'bold',              
            },

            container4: {
              flexDirection: 'row',
              height: 40,
              width: '100%',
              marginTop: 3,            
              },

            itens3: {
              width: '100%',               
              flexDirection: 'row',
              justifyContent: 'center',
            },


          itens2: {
            fontSize: 17,
            borderWidth: 1,
            width: '50%', 
            margin: 1,
            textAlign: 'center',
            
            
          },

          quantidade2: {
            borderWidth: 1,
           margin: 1,
            width: '50%', 
            textAlign: 'center',
            fontSize: 17,
          },
    
    });