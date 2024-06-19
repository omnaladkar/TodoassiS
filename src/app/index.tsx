import "expo-router/entry";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AddTaskFAB, Input } from "@/components";
import { TaskRow } from "@/components/TaskRow";
import { TaskDatabase, useTaskDatabase } from "@/database";
import { useEffect, useState } from "react";

import { router } from "expo-router";

export default function Index() {
  const database = useTaskDatabase();

  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState<TaskDatabase[]>([]);

  const filteredAndSortedTasks = tasks.filter((task) => task.name.includes(search)).sort((a, b) => a.hasDone === b.hasDone ? 0 : a.hasDone ? 1 : -1);

  useEffect(() => {
    async function loadTasks() {
      const tasks = await database.getAll();
      setTasks(tasks);
    }

    loadTasks();
  }, [database]);

  const handleAddTodo = () => {
    router.navigate('/add'); 
  };

  const handleSearch = (name: string) => {
    setSearch(name);
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between", padding: 32, gap: 64, backgroundColor: '#181818'}}>
      <View style={{ gap: 12 }}>
        <Input placeholder="Search for your task." value={search} onChangeText={(e) => handleSearch(e)}/>
        <Text style={{ color: '#363636', textAlign: 'center'}}>Double tap completes the task. Drag to delete.</Text>
      </View>
      <FlatList
        data={filteredAndSortedTasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TaskRow
            item={item}
          />
        )}
        contentContainerStyle={{ gap: 16 }}
      />
      <AddTaskFAB onPress={handleAddTodo}/>
    </SafeAreaView>
  )
}