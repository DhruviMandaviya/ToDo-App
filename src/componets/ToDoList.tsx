import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ToDo } from '../types';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
    todoList: ToDo[];
}

const ToDoList: React.FC<ToDoListProps> = ({todoList}) => {
    return (
        <ScrollView style={styles.container}>
            {todoList.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {    
        flex: 1,

    },
});

export default ToDoList;
