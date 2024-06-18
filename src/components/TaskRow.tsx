import { DeleteTaskButton } from "@/components";
import { TaskDatabase, useTaskDatabase } from "@/database";
import { Text, View, ViewProps } from "react-native";
import { Swipeable, TapGestureHandler } from 'react-native-gesture-handler';


type TaskRowProps = {
  item: TaskDatabase
} & ViewProps

export function TaskRow({ item, ...rest }: TaskRowProps) {
  const { update } = useTaskDatabase();

  const onSwipeRight = (id: number) => {
    return (
      <DeleteTaskButton id={id} />
    );
  };

  return (
    <Swipeable 
      renderRightActions={() => onSwipeRight(item.id)}
      rightThreshold={100}
      overshootRight={false}
    >
      <TapGestureHandler 
        numberOfTaps={2}
        onActivated={() => (
          update({
            ...item,
            hasDone: !item.hasDone
          })
        )}
      >
        <View
          style={{
            height: 64,
            borderRadius: 8,
            backgroundColor: item.hasDone ? "#1a1a1a" : "#3b3b3b",
            paddingHorizontal: 16,
            flex: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
          {...rest}
        >
          <Text style={{ color: '#fff', textDecorationLine: item.hasDone ? 'line-through' : 'none'}}>{item.name}</Text>
        </View>
      </TapGestureHandler>
    </Swipeable>
  )
}