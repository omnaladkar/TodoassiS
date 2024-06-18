import { SQLiteProvider } from "expo-sqlite";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { initializeDatabase } from "@/database";

import { Slot } from "expo-router";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <SQLiteProvider databaseName="task" onInit={initializeDatabase}>
        <Slot />
      </SQLiteProvider>
    </GestureHandlerRootView>
  )
}