import { View, Text, TouchableOpacity } from "react-native";
import { Task } from '../../screens/Home'

import { styles } from './styles'
import { Check, Trash } from "phosphor-react-native";

interface Props {
  task: Task
  onRemoveTask: () => void
  onCompleteTask: () => void
}


export function ListItem({ task, onCompleteTask, onRemoveTask }: Props) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onCompleteTask}>
        <View style={[styles.baseCheck, task.isCompleted && styles.checkedCheck]}>
          {task.isCompleted && (
            <Check size={8} color="#DEDEDE" />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.description, task.isCompleted && styles.descriptionChecked]}>
        {task.description}
      </Text>
      <TouchableOpacity onPress={onRemoveTask}>
        <Trash size={24} color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}