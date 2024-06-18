import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity, type TouchableOpacityProps } from "react-native-gesture-handler"

export const AddTaskFAB = ({ ...rest }: TouchableOpacityProps ) => {
  return (
    <TouchableOpacity 
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#6200ea',
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...rest}
    >
      <Ionicons name="add" size={24} color="white" />
    </TouchableOpacity>
  )
}