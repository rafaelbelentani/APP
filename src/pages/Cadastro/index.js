import { fonts } from '@rneui/base';
import React, { useState } from 'react';
import { Text, View, Alert, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import usuarioService from '../../services/UsuarioService';



export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [nome, setNome] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [contrato, setContrato] = useState(null)
  const [cnpj, setCNPJ] = useState(null)
  const [filial, setFilial] = useState(null)
  const [gestor, setGestor] = useState(null)
  const [telefone_gestor, setTelefoneGestor] = useState(null)
  const [cliente, setCliente] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorNome, setErrorNome] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  const [errorContrato, setErrorContrato] = useState(null)
  const [errorCNPJ, setErrorCNPJ] = useState(null)  
  const [errorSenha, setErrorSenha] = useState(null)
  const [errorFilial, setErrorFilial] = useState(null)
  const [errorGestor, setErrorGestor] = useState(null)
  const [errorTelefoneGestor, setErrorTelefoneGestor] = useState(null)
  const [errorCliente, setErrorCliente] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  let telefoneField = null
  let cnpjField = null
  let contratoField = null
  let telefoneGestorField = null

  const validar = () => {
    let error = false
    setErrorNome(null)
    setErrorEmail(null)
    setErrorTelefone(null)
    setErrorContrato(null)
    setErrorCNPJ(null)
    setErrorSenha(null)
    setErrorCliente(null)
    setErrorFilial(null)
    setErrorGestor(null)
    setErrorTelefoneGestor(null)
    

    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-A\-0-9]+\.)+[a-zA-Z]{2,}))$/
     if (nome ==null){
    setErrorNome("Preencha seu Nome corretamente")
    error = true  
    } 

  if (!re.test(String(email).toLowerCase())){
    setErrorEmail("Preencha seu E-Mail corretamente")
    error = true  
  } 
  if (!telefoneField.isValid()){
    setErrorTelefone("Preencha seu Telefone corretamente")
    error = true  
  } 

  if (!contratoField.isValid()){
    setErrorContrato("Preencha o Contrato corretamente")
    error = true  
  } 

  if (!cnpjField.isValid()){
    setErrorCNPJ("Preencha o CNPJ corretamente")
    error = true  
  }   

  if (filial ==null){
    setErrorFilial("Preencha a Filial corretamente")
    error = true  
    } 

    if (gestor ==null){
      setErrorGestor("Preencha o Gestor corretamente")
      error = true  
      } 

      if (!telefoneGestorField.isValid()){
        setErrorTelefoneGestor("Preencha o Telefone do Gestor corretamente")
        error = true  
      } 


  if (cliente ==null){
    setErrorCliente("Preencha o Cliente corretamente")
    error = true  
    } 

  if (senha ==null){
    setErrorSenha("Preencha sua Senha corretamente")
    error = true  
  }
  return !error
  }

  const salvar = () => {
    if(validar()){
      setLoading(true)

      let data = {      
        nome: nome,
        email: email,
        telefone: telefone,
        filial: filial,
        gestor: gestor,
        telefone_gestor: telefone_gestor,
        cliente: cliente,
        cnpj: cnpj,
        contrato: contrato,
        senha: senha,
      }

    usuarioService.cadastrar(data)
    .then((response) => {
      setLoading(false)
      const titulo = (response.data.status) ? "Sucesso!" : "Erro!"
      Alert.alert(titulo, response.data.mensagem)
      console.log(response.data)
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert("Erro", "Houve um erro inesperado.")
      console.log(response.data)
    })
   
    }
    
  }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding": "height"}
    style = {[styles.container]}
    keyboardVerticalOffset={100}
    >

      <ScrollView style={[styles.container2]} contentContainerStyle={styles.container}>

         <BackgroundImage
            source={require('../Login/logo.png')}
            style={styles.logo} 
            resizeMode='contain'
             />

            <Input  style={styles.containerMask}           
              placeholder= 'Nome'
              onChangeText={value => {
                setNome(value)
                setErrorNome(null)
              }}
              errorMessage={errorNome}              
            />

            <Input style={styles.containerMask}            
              placeholder= 'E-mail'
              onChangeText={value => setEmail(value)}
              errorMessage={errorEmail}
            />            

            <View style={styles.telefone} >
            <TextInputMask 
            placeholder='Telefone'
            type={'cel-phone'}
            options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
            validator: function(val, settings){
              if (val.length == 9){
                return true
              } else
              return false
            }
           }}            
            value={telefone}        
            onChangeText={value => setTelefone(value)}
            keyboardType='phone-pad'
            returnKeyType='done'
            ref={(ref) => telefoneField = ref}
            style={styles.maskedInput}            
            />
            </View>

             <Text style={styles.errorMessage}>{errorTelefone}</Text>

             <Input  style={styles.input}           
              placeholder= 'Filial'
              onChangeText={value => {
                setFilial(value)
                setErrorFilial(null)
              }}
              errorMessage={errorFilial}              
            />

<Input  style={styles.input}           
              placeholder= 'Gestor'
              onChangeText={value => {
                setGestor(value)
                setErrorGestor(null)
              }}
              errorMessage={errorGestor}              
            />

<View style={styles.telefone} >
            <TextInputMask 
            placeholder='Telefone Gestor'
            type={'cel-phone'}
            options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
            validator: function(val, settings){
              if (val.length == 9){
                return true
              } else
              return false
            }
           }}            
            value={telefone_gestor}        
            onChangeText={value => setTelefoneGestor(value)}
            keyboardType='phone-pad'
            returnKeyType='done'
            ref={(ref) => telefoneGestorField = ref}
            style={styles.maskedInput}            
            />
            </View>

             <Text style={styles.errorMessage}>{errorTelefoneGestor}</Text>


             <Input  style={styles.input}           
              placeholder= 'Cliente'
              onChangeText={value => {
                setCliente(value)
                setErrorCliente(null)
              }}
              errorMessage={errorCliente}              
            />





          <View style={styles.telefone} >
            <TextInputMask 
            placeholder='CNPJ'
            type={'cnpj'}
            options={{
            validator: function(val, settings){
              if (val.length == 9){
                return true
              } else
              return false
            }
           }}            
            value={cnpj}        
            onChangeText={value => setCNPJ(value)}
            keyboardType='phone-pad'
            returnKeyType='done'

            ref={(ref) => cnpjField = ref}
            style={styles.maskedInput}            
            />
            </View>


    <Text style={styles.errorMessage}>{errorCNPJ}</Text>

    <View style={styles.telefone} >
            <TextInputMask 
            placeholder='Contrato'
            type={'custom'}
            options={{ 
              mask:'A999999',
               validator: function(val, settings){
              if (val.length == 7){
                return true
              } else
              return false
            }
           }}
            
            value={contrato}        
            onChangeText={value => setContrato(value)}
            keyboardType='default'
            returnKeyType='done'

            ref={(ref) => contratoField = ref}
            style={styles.maskedInput}            
            />
            </View>
            
             <Text style={styles.errorMessage}>{errorContrato}</Text>

            <Input 
              placeholder= 'Senha'
              style={styles.input}
              errorMessage={errorSenha}
              onChangeText={value => setSenha(value)}
              secureTextEntry={true}
              />   

            { isLoading &&
            <Text>Carregando...</Text>
            }


              {!isLoading &&
            <TouchableOpacity
             style={styles.cadastrar}
             onPress={ () => {salvar ()} }
            >
            <Text style={styles.botaoText} >Cadastrar</Text>
            </TouchableOpacity>
            }
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
  

    barra: {
      width: "110%",
      padding: 5,
      cadastrar: 'center',
      marginBottom: -100,   
    },

    


  logo: {
    width: 200,
    height: 200,
    marginTop: -30,
    

    },
    
 
    botao: {
      width: 300,
      height: 42,
      backgroundColor: '#1E90FF',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      },

   
    botaoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      },

    cadastrar: {
      width: 300,
      height: 42,
      backgroundColor: '#1E90FF',
      marginTop: 50,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 100,
      },

    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf: "flex-start",
      marginBottom: -1,
      marginTop: 10,
      },

    containerMask: {
      flexDirection: "row",
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 0,
      
      },

    telefone: {
      flexDirection: "row",
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 0,
      },

    errorMessage:{
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "red",     
      fontSize: 12,
      marginTop: -5,
      marginBottom: 10,
      },

      input: {
      marginBottom: 10,
      marginLeft: 5,
      marginRight: 10,
      
      

      },

    
     
     

  
});