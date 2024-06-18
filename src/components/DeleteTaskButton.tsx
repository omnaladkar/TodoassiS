import { useTaskDatabase } from "@/database";
import { Text, TouchableOpacity } from "react-native";


type DeleteTaskButtonProps = {
  id: number;
}

export const DeleteTaskButton = ({ id }: DeleteTaskButtonProps) => {
  const { remove } = useTaskDatabase();

  return (
    <TouchableOpacity 
      style={{
        backgroundColor: '#b64a4a',
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: '100%',
        marginLeft: -20,
        borderRadius: 8,
      }} 
      onPress={async() => await remove(id)}
    >
      <Text 
        style={{
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        Deletar
      </Text>
    </TouchableOpacity>
  )
}