import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { ToDo } from '../types';
import ToDoEdit from './ToDoEdit';

interface ToDoItemProps {
    todo: ToDo;
    onDelete: () => void;
    onToggle: () => void;
    onEdit: (newTodo: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, onDelete, onToggle, onEdit }) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (newTodo: string) => {
        onEdit(newTodo);
    }

    if (isEditing) {
        return <ToDoEdit todo={todo}
            onSave={(newTodo) => {
                handleEdit(newTodo);
                setIsEditing(false)
            }}
            onCancel={() => setIsEditing(false)} />
    }

    return (<View style={styles.container}>
        <TouchableOpacity onPress={onToggle}>
            <Text style={[styles.textStyle, todo?.completed && styles.completedToDo]}>{todo.title}</Text>
        </TouchableOpacity>
        <View style={styles.btnAlignment}>
            <TouchableOpacity onPress={() => {
                    if (!todo?.completed) {
                        setIsEditing(true);
                    }}}> 
                <Text style={[styles.btnTextStyle, todo?.completed && styles.disabledTextStyle]} > Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.DeleteTextStyle} > Delete</Text>
            </TouchableOpacity>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'balck',
        textAlign: 'center',
        marginEnd: 10,
        marginStart: 10,
        paddingVertical: 10,
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginLeft: 10,
        flex: 1,
    },
    completedToDo:
    {
        textDecorationLine: 'line-through',
        color: '#888888',
    },
    btnTextStyle: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        marginLeft: 10,
        padding: 5,
        borderRadius: 5,
        color: 'white',
        backgroundColor: 'green',
    },
    DeleteTextStyle: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        marginLeft: 10,
        padding: 5,
        borderRadius: 5,
        color: 'white',
        backgroundColor: 'red',
    },
    btnAlignment: {
        marginLeft: 'auto',
        flexDirection: 'row',
    },
    disabledTextStyle: {    
        backgroundColor: 'grey',
    },

});

export default ToDoItem;
