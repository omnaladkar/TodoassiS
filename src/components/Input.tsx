import { TextInput, TextInputProps } from "react-native"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#a3a3a3"
      style={{
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#4e4e4e",
        backgroundColor: "#383838",
        color: "#fff",
        paddingHorizontal: 16,
        
      }}
      {...rest}
    />
  )
}