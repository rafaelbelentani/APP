import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from "react-native";


const OPTIONS = ['Apartamento 1', 'Apartamento 2', 'Apartamento 3', 'Apartamento 4', 'Apartamento 5', 'Apartamento 6',
'Apartamento 7', 'Apartamento 8', 'Apartamento 9', 'Apartamento 10', 'Apartamento 11', 'Apartamento 12', 'Apartamento 13', 'Apartamento 14'


];
const WIDTH = Dimensions.get ('window').width;
const HEIGHT = Dimensions.get ('window').height;
const ModalPicker = (props) => {

    const onPressItem = (option) => {   
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const options = OPTIONS.map((item, index) => {
        return(
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item) }            
            >
                <Text style={styles.text}>
                {item}


                </Text>
            </TouchableOpacity>

        )

    })

    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}>

                <View style={[styles.modal, {width: WIDTH - 50, height: HEIGHT/2}]}>
                    <ScrollView>
                        {options}
                    </ScrollView>
                </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modal:{
        backgroundColor: '#DCDCDC',
        borderRadius: 20,
       
    },

    option: {
        alignItems: 'center'
    },

    text: {
        margin: 10,
        fontSize: 15,
        fontWeight: 'bold',


    },
    


})
export {ModalPicker}