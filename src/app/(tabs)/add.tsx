import { Input } from '@/components';
import { useTaskDatabase } from '@/database';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddTodoScreen = () => {
  const [title, setTitle] = useState('');
  const { create } = useTaskDatabase();

  const handleAddTodo = () => {
    create({ name: title, hasDone: false });
    router.back(); 
  };

  return (
    <SafeAreaView 
      style={{ flex: 1, justifyContent: "space-between", padding: 32, gap: 64, backgroundColor: '#181818'}}
    >
      <Input placeholder="Enter your task title" value={title} onChangeText={(e) => setTitle(e)} />
      <TouchableOpacity onPress={handleAddTodo} style={{ backgroundColor: '#6200ea', padding: 12, display: 'flex', alignItems: 'center', borderRadius: 4 }}>
        <Text style={{ color: '#FFF', fontWeight: 600 }}>
          To Add
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddTodoScreen;