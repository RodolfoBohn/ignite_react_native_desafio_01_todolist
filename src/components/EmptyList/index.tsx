import { View, Text, Image } from "react-native";
import EmptyClipboard from "../../../assets/empty_clipboard.png"

import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.wrapper}>
        <Image source={EmptyClipboard} />
        <Text style={styles.title}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.subtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
    </View>
  )
}