import { StyleSheet,View } from 'react-native'
import React,{ useState } from 'react';
import Header from '../Components/Header';
import List from '../Components/List';
import TodoModal from '../Components/TodoModal';

const Layaout = () => {

    const [todoList,setTodoList] = useState([]);
    const [modalVisible,setModalVisible] = useState(false);
    const [idSelected,setIdSelected] = useState('');

    const addTodo = (input) => {
        setTodoList([...todoList,{ id: Math.random(),todo: input }]);
    }

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(item => item.id !== id));
    }

    const handleModal = (id) => {
        setModalVisible(true);
        setIdSelected(id);
    }

    const editTodo = (id,input) => {
        setTodoList(todoList.map(item => item.id === id ? { id,todo: input } : item));
    }

    return (
        <View style={styles.container}>
            <Header addTodo={addTodo} />
            <List handleModal={handleModal} deleteTodo={deleteTodo} editTodo={editTodo} todoList={todoList} />
            <TodoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}

export default Layaout

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 25,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
})