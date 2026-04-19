import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Task from '../components/task';

type TaskType = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoApp() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;

    const newTask: TaskType = {
      id: Date.now().toString(),
      text: task,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const handleDeleteTask = (id: string) => {
    setTaskList(taskList.filter(item => item.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTaskList(
      taskList.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      {/* INPUT */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add something..."
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            text={item.text}
            completed={item.completed}
            onDelete={() => handleDeleteTask(item.id)}
            onToggle={() => toggleComplete(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f6ec',
    paddingTop: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
  },

  button: {
    backgroundColor: '#3c88f2',
    width: 80,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});