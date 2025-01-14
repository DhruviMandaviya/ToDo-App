import React, { useState } from 'react';
import ToDoInput from './src/componets/ToDoInput';
import { ToDo } from './src/types';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ToDoList from './src/componets/ToDoList';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [TodoList, setAddToDoList] = useState<ToDo[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addToDo = (todo: string) => {
    console.log(todo);
    setAddToDoList([...TodoList,
    {
      id: Date.now().toString(),
      title: todo,
      completed: false
    }]);
  };

  console.log(TodoList);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.sectionContainer}>
        <Text style={styles.textHeading}> TODO APP </Text>
      </View>
      <ToDoInput onAddTodo={addToDo} />
      <ToDoList todoList={TodoList} />  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: Colors.white,
    marginBottom: 10,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Arial',
    color: 'white',
    backgroundColor: '#219',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
