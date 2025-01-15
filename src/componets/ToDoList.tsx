import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ToDo } from '../types';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
    todoList: ToDo[];
    onDeleteToDo: (id: string) => void;
    onToggleToDo: (id: string) => void;
    onEditToDO:(id:string,newToDo:string)=>void;
}

const ToDoList: React.FC<ToDoListProps> = ({ todoList,onDeleteToDo,onToggleToDo,onEditToDO }) => {
    return (
        <View>
            <Text>Todo List</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {todoList.length === 0 ? (
                    <Text>No tasks to display</Text>
                ) : (
                    todoList.map(todo => (
                        <ToDoItem key={todo.id} onEdit={newTodo=> onEditToDO(todo?.id, newTodo)} onDelete={()=>onDeleteToDo(todo?.id)} onToggle={()=>onToggleToDo(todo?.id)} todo={todo} />
                    ))
                )}

            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
});

export default ToDoList;
