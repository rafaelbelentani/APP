import { BackgroundImage } from '@rneui/base';
import { View, StyleSheet } from 'react-native';

export default function AddItem({navigation}) {

    navigation.navigate("Adicionar Item");       
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
            flexDirection: 'row',         },

            botaoText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
            padding: 10,
            },
    
                input: {
                marginBottom: 10,
                marginLeft: 5,
                marginRight: 10,
                },
              
    
    });

