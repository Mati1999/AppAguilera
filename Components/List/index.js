import { StyleSheet,Text,View,FlatList } from 'react-native'
import React from 'react'
import Item from './Item';
import { colors } from '../../Styles/Colors';

const List = ({ handleModal,deleteTodo,editTodo,todoList }) => {

    const renderTodo = ({ item }) => <Item handleModal={handleModal} editTodo={editTodo} todo={item.todo} myid={item.id} deleteTodo={deleteTodo} />;

    return (
        <View style={styles.itemList}>
            {todoList.length === 0 ?
                <View style={styles.noTodoContainer}>
                    <Text style={styles.noTodoText}>No ToDos</Text>
                </View>
                :
                <FlatList
                    style={styles.flatListStyle}
                    data={todoList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderTodo}
                />
            }
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    itemList: {
        height: '90%',
        width: '100%',
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
        width: '100%',
        backgroundColor: colors.brown,
        height: '100%',
        borderRadius: 10,
        padding: 10
    },
})