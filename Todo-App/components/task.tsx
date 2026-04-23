import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type TaskProps = {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
};

const Task = ({ text, completed, onDelete, onToggle }: TaskProps) => {
  return (
    <View style={styles.row}>

      {/* Checkbox */}
      <TouchableOpacity
        style={[
          styles.checkbox,
          { backgroundColor: completed ? '#007BFF' : 'white' }
        ]}
        onPress={onToggle}
      >
        {completed && <Text style={{ color: 'white' }}>✓</Text>}
      </TouchableOpacity>

      {/* Task */}
      <View style={styles.box}>
        <Text
          style={{
            fontSize: 16,
            textDecorationLine: completed ? 'line-through' : 'none',
            color: completed ? 'gray' : 'black'
          }}
        >
          {text}
        </Text>

        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete" size={26} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    flex: 1,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    elevation: 2,
  },
}); 