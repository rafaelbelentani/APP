import React, {useState } from 'react';
import { Text, View, Modal, Dimensions, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';



const {width} = Dimensions.get('window');

export default function Select1 ({options, onChangeSelect, text, navigation}) {
    const addcliente = () => {
        navigation.navigate("Adicionar Cliente")
    }

const [txt, setTxt] = useState(text);
const [modalVisible, setModalVisible] = useState(false);
 

function renderOption(item){
    return (<TouchableOpacity style={styles.option} onPress={() => {
        onChangeSelect(item.id)
        setTxt(item.nome)
        setModalVisible(false)
    }}>
        <Text style={styles.optionTxt}>{item.nome}</Text>
        </TouchableOpacity>
    )
}

return(
    
            <><TouchableOpacity
            style={styles.Select}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.cliente} numberOfLines={1}>{txt}</Text>
            <AntDesign name="caretdown"/>
            </TouchableOpacity>
    
            <Modal animationType='slide' visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>

            <SafeAreaView>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
            <AntDesign name="leftcircleo" size={25} color="black"/>
            </TouchableOpacity>
            <Text style={styles.titulo}>{text}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelar}>Cancelar</Text>
            </TouchableOpacity>                    
            </View>
            <FlatList data={options}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => renderOption(item)}
           />    
            </SafeAreaView>
            
            
            </Modal>
            </>   
              
);
};




const styles = StyleSheet.create({
        Select: {
        height: 50,  
        backgroundColor: '#F8F9FA',  
        paddingHorizontal: 30,
        marginHorizontal: 20,
        borderRadius: 5,
        fontSize: 18,
        borderColor: '#CCC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        },

        cliente: {                 
        fontSize: 20,
        color: '#808080',
        width: width - 90,
            
            },       

        

        header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',        
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 12,


        },

        titulo: {
            fontSize: 18,
            color: '#555',
            
            
        },

        cancelar: {
            fontSize: 14,
            fontWeight: 'bold',
        },

        option: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#eee',
            borderBottomWidth: '1',
            padding: 10,            
        },

        optionTxt: {
            fontSize: 18,
            color: '#555',
        },

        cadastrar: {
            width: 300,
            height: 42,
            backgroundColor: '#1E90FF',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            marginTop: 50,
            marginLeft: 50,

            
            },

            botaoText: {
            fontSize: 18,
            color: 'white',
            marginRight: 15,
            },

       

            



})