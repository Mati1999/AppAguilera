import { StyleSheet,Text,View,Button,TextInput,FlatList,Modal,TouchableOpacity } from 'react-native'
import React,{ useState } from 'react';
import Item from '../Components/Item';
import { colors } from '../Styles/Colors';

const Layaout = () => {

    const [input,setInput] = useState('');
    const [todoList,setTodoList] = useState([]);
    const [modalVisible,setModalVisible] = useState(false);
    const [idSelected,setIdSelected] = useState('');

    const addTodo = () => {
        if (input !== '') {
            setTodoList([...todoList,{ id: Math.random(),todo: input }]);
            setInput('');
        }
    }

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(item => item.id !== id));
    }

    const handleModal = (id) => {
        setModalVisible(true);
        setIdSelected(id);
    }

    const renderTodo = ({ item }) => <Item handleModal={handleModal} item={item.todo} myid={item.id} deleteTodo={deleteTodo} />;

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add todo'
                    onChangeText={setInput}
                    value={input}
                />
                <Button title="Add todo" onPress={addTodo} />
            </View>
            <View style={styles.itemList}>
                {todoList.length === 0 ?
                    <View style={styles.noTodoContainer}>
                        <Text style={styles.noTodoText}>No todo's</Text>
                    </View>
                    :
                    <FlatList
                        style={styles.flatListStyle}
                        data={todoList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderTodo}
                    />
                    // todoList.map(item => (
                    //     <Item key={item.id} myid={item.id} item={item.todo} deleteTodo={deleteTodo} />
                    // ))
                }

                {/* <Item item={{ id: 1,todo: 'Estudiar React Native' }}></Item> */}
            </View>
            <Modal animationType='fade' transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} style={styles.listModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} >
                            <Text style={styles.colseModalBtn}>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    itemList: {
        height: '90%',
        width: '100%',
        padding: 10,
    },
    noTodoContainer: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.brown,
        borderRadius: 10,
    },
    noTodoText: {
        color: colors.white,
        fontSize: 20
    },
    flatListStyle: {
        backgroundColor: colors.brown,
        height: '100%',
        borderRadius: 10,
        padding: 10
    },
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