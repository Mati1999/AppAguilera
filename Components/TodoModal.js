import { StyleSheet,Text,View,Modal,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors';

const TodoModal = ({ modalVisible,setModalVisible }) => {

    return (
        <Modal animationType='fade' transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} style={styles.listModal}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} >
                        <Text style={styles.colseModalBtn}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default TodoModal

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: colors.darkBrown,
        height: '90%',
        width: '90%',
        padding: 20,
        borderRadius: 10,
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colseModalBtn: {
        fontSize: 30,
    }
})