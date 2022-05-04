import { StyleSheet,Text,View,TouchableOpacity,TextInput } from 'react-native'
import React,{ useState } from 'react'
import { colors } from '../../Styles/Colors'

const Item = ({ handleModal,myid,todo,deleteTodo,editTodo }) => {

    const [isEdit,setIsEdit] = useState(false);

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.text}>
                {!isEdit ?
                    <Text onPress={handleModal} style={styles.textText}>{todo}</Text>
                    :
                    <TextInput
                        style={styles.editInput}
                        onChangeText={(text) =>
                            text == '' ?
                                setIsEdit(false)
                                :
                                editTodo(myid,text)
                        }
                        value={todo}
                    />
                }
            </TouchableOpacity>
            <View style={styles.actionBtns}>
                <TouchableOpacity style={styles.button} onPress={() => deleteTodo(myid)} >
                    <Text style={styles.textButton}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    {!isEdit ?
                        <Text style={styles.textButtonEdit} onPress={() => setIsEdit(true)}>Edit</Text>
                        :
                        <Text style={styles.textButtonEdit} onPress={() => { setIsEdit(false) }}>Confirm</Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        backgroundColor: colors.darkBrown,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    text: {
        width: '65%'
    },
    textText: {
        color: colors.white,
        fontSize: 20,
    },
    textButton: {
        color: colors.white
    },
    actionBtns: {
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: colors.gray,
    },
    editInput: {
        height: 30,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    textButtonEdit: {
        color: colors.white,
    }
})