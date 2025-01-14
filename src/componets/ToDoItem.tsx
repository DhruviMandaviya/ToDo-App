import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ToDo } from '../types';

interface ToDoItemProps {
    todo: ToDo;
}

const ToDoItem: React.FC<ToDoItemProps> = (todo) => {
    console.log(todo,'todo from list');
    return <View>
        <Text>ToDoItem</Text>
        </View>
}

const styles = StyleSheet.create({
    
});

export default ToDoItem;
