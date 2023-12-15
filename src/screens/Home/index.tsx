import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import Logo from '../../../assets/logo.png'
import { EmptyList } from "../../components/EmptyList";
import { PlusCircle } from 'phosphor-react-native'

import {styles} from './styles'
import { useState } from "react";
import { ListItem } from "../../components/ListItem";

export interface Task {
  description: string
  isCompleted: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState('')

  function handleAddTask() {
    const newTask: Task = {
      description: task, 
      isCompleted: false,
    }

    setTasks(initialTasks => [...initialTasks, newTask])
    setTask('')
  }

  function handleRemoveTask(deletedTask: Task) {
    return Alert.alert("Remover tarefa", "Você realmente deseja remover esta tarefa?", [
    {
      text: 'Sim', 
      onPress: () => setTasks(initialTasks => initialTasks.filter(task => task.description !== deletedTask.description))
    }, 
    {
      text: "Não", 
      style: "cancel"
    }
  ])
  }

  function handleCompleteTask(completedTask:Task) {
    setTasks(initialTasks => initialTasks.map(task => {
      if (task.description === completedTask.description) {
        return {
          ...task, 
          isCompleted: !task.isCompleted
        }
      }

      return task
    }))
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor='#808080'
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleAddTask}
        >
          <View>
            <PlusCircle size={16} color="#F2F2F2" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.listWrapper}>

        <View style={styles.listHeaderWrapper}>
          <View style={styles.taskCounterTitleWrapper}>
            <Text style={styles.createdTasksText}>
              Criadas
            </Text>
            <Text style={styles.taskCounter}>
              {tasks.length}
            </Text>
          </View>
          <View style={styles.taskCounterTitleWrapper}>
            <Text style={styles.finishedTasksText}>Concluídas</Text>
            <Text style={styles.taskCounter}>
            {tasks.filter(task => task.isCompleted === true).length}
            </Text>
          </View>
        </View>

        <FlatList
          data={tasks} 
          renderItem={({item}) => (
            <ListItem 
              key={item.description}
              task={item}
              onCompleteTask={() => handleCompleteTask(item)}
              onRemoveTask={() => handleRemoveTask(item)}
            />
          )}
          ListEmptyComponent={EmptyList}
        />

      </View>
    </View>
  )
}