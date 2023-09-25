import React, {useState } from 'react';
import { Text, View, Modal, Dimensions, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';


export default function Addcliente({navigation}) {
    
        navigation.navigate("Adicionar Cliente");
        return (
                <View style={styles.screen}>  
            
                <BackgroundImage
                source={require('../Login/logo.png')}
                style={styles.logo} 
                resizeMode='contain'
                />

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
    
              
    
    });

