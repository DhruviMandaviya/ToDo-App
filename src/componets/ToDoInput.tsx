import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface ToDoInputProps {
    onAddTodo: (todo: string) => void;
}

const ToDoInput: React.FC<ToDoInputProps> = ({ onAddTodo }) => {

    const [todo, setTodo] = useState('');

    const handleAddTodo = () => {
        if (todo.trim()) {
            onAddTodo(todo.trim());
            setTodo('');
        }
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputText}
                placeholder="Add a todo .... "
                onChangeText={setTodo}
                value={todo}
            />
            <TouchableOpacity style={styles.btnBackground} onPress={handleAddTodo}>
                <Text style={styles.btnText}> Add </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#fff',
    },
    inputText: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
    },
    btnText: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        padding: 2,
        fontFamily: 'Arial',
        color: 'white',
    },
    btnBackground: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#219999',
        margin: 2 
    }
});

export default ToDoInput;


