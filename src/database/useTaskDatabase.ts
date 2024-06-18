import { useSQLiteContext } from "expo-sqlite"

export type TaskDatabase = {
  id: number
  name: string
  hasDone: boolean
}

export function useTaskDatabase() {
  const database = useSQLiteContext()

  async function create(data: Omit<TaskDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO task (name, hasDone) VALUES ($name, $hasDone)"
    )

    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $hasDone: data.hasDone,
      })

      const insertedRowId = result.lastInsertRowId.toLocaleString()

      return { insertedRowId }
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function update(data: TaskDatabase) {
    const statement = await database.prepareAsync(
      "UPDATE task SET name = $name, hasDone = $hasDone WHERE id = $id"
    )

    try {
      await statement.executeAsync({
        $id: data.id,
        $name: data.name,
        $hasDone: data.hasDone,
      })
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function remove(id: number) {
    try {
      await database.execAsync("DELETE FROM task WHERE id = " + id)
    } catch (error) {
      throw error
    }
  }

  async function getAll() {
    try {
      const query = "SELECT * FROM task"

      const response = await database.getAllAsync<TaskDatabase>(query)

      return response
    } catch (error) {
      throw error
    }
  }

  return { create, update, remove, getAll }
}