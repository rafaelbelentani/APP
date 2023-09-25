import React, {useState } from 'react';
import { Text, View, Modal, Dimensions, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const {width} = Dimensions.get('window');

const Select = ({options, onChangeSelect, text}) => {
const [txt, setTxt] = useState(text);
const [modalVisible, setModalVisible] = useState(false);

return(
    
            <><TouchableOpacity
        style={styles.Select}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.cliente} numberOfLines={1}>{txt}</Text>
        <AntDesign name="caretdown"
            size={15}
            color="black"
            marginLeft={-30}          
             />
    </TouchableOpacity><Modal animationType='slide' visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
            <SafeAreaView>
                <View marginLeft={20}
                    marginTop={10}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <AntDesign name="leftcircle" size={24} color="black" />
                    </TouchableOpacity>
                    <Text>{txt}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal></>   
              
);
};

export default Select

const styles = StyleSheet.create({
    Select: {
        height: 50,    
        width: 380,  
        backgroundColor: '#F8F9FA',       
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 40,
        paddingRight: 20,      
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
       
        },

        cliente: {     
            marginLeft: -300,      
            fontSize: 20,
            color: '#808080',
            marginTop: 2,      
            flexDirection: 'row',
            paddingLeft: 280,
            
            },



})