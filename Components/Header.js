import { StyleSheet,Text,View,TextInput,Button } from 'react-native'
import React,{ useState } from 'react';

const Header = ({ addTodo }) => {

    const [input,setInput] = useState('');

    const addTodoAux = () => {
        if (input !== '') {
            addTodo(input);
            setInput('');
        }
    }

    return (
        <View style={styles.topContainer}>
            <TextInput
                style={styles.input}
                placeholder='Add todo'
                onChangeText={setInput}
                value={input}
            />
            <Button title="Add ToDo" onPress={() => addTodoAux()} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    topContainer: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: '70%',
        marginRight: 20,
        padding: 10,
    },
})