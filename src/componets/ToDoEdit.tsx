import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ToDo } from "../types";
import { useState } from "react";

interface ToDoEditProps {   
    todo:ToDo;
    onSave:(newTodo:string)=>void;
    onCancel:()=>void;
}

const ToDoEdit: React.FC<ToDoEditProps> = ({todo,onSave,onCancel})=> {
    
    const[text,setText]= useState(todo?.title);

    const handleSave=()=>{
        if(text.trim())
        {
            onSave(text.trim());
        }
        
    }

    return (
        <View style={styles.container}>
            <TextInput value={text} onChangeText={setText} style={styles.input} />
            <View style={styles.btnAlignment}>
                <TouchableOpacity >
                    <Text onPress={handleSave} style={styles.saveTextStyle} > Save </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={onCancel} style={styles.cancleTextStyle} > Cancle</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
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
    input: {
        height: 30,
        margin: 12,
        flex:1,
        borderWidth: 1,
    },
    saveTextStyle: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        marginLeft: 10,
        padding: 5,
        borderRadius: 5,
        color: 'white',
        backgroundColor: 'green',
    },
    cancleTextStyle: {
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
        marginLeft:'auto',
        flexDirection: 'row',
    },
});

export default ToDoEdit;