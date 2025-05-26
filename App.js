import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList } from "react-native";
import logo from "./assets/todologo.png";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function App() {
  const [data, setData] = useState([
    { dt_criacao: "2023-10-01", tarefa: "Tarefa 1", realizada: true },
    { dt_criacao: "2023-10-02", tarefa: "Tarefa 2", realizada: false },
    { dt_criacao: "2023-10-03", tarefa: "Tarefa 3", realizada: false },
    { dt_criacao: "2023-10-04", tarefa: "Tarefa 4", realizada: true },
  ]);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "column" }}>
      <View>
        <Checkbox value={item.realizada} />
      </View>
      <View>
        <Text>{item.tarefa}</Text>
        <Text>{item.dt_criacao}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text>Todo List</Text>
      </View>
      <View style={styles.addTodoView}>
        <TextInput style={styles.todoInputText} placeholder="Adicionar Nova Tarefa" />
        <Button title="Adicionar" />
      </View>
      <FlatList style={styles.list}
        data={data}
        keyExtractor={(item) => item.dt_criacao}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  list: {
    flex: 1
  },
  addTodoView: {
    flexDirection: "row",
  },
  todoInputText: {
    flex: 1
  }
});
