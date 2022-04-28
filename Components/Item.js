import { StyleSheet,Text,View,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Item = ({ handleModal,myid,item,deleteTodo }) => {

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={handleModal}>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => deleteTodo(myid)} >
                <Text style={styles.textButton}>Delete Todo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.darkBrown,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    text: {
        color: colors.white,
        fontSize: 15,
    },
    textButton: {
        color: colors.white
    },
    button: {
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.gray,
    }

})