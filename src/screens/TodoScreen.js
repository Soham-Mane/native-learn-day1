// import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import { IconButton } from 'react-native-paper';
// import Fallback from '../components/Fallback';

// const dummyData=[{
//     id: "01",
//     title: "Wash Car",   
// },
// {
//     id: "02",
//     title: "Read A Book",
// },
// {
//     id: "03",
//     title: "Soham is great"
// }
// ];
// console.log(Date.now().toString());

// const TodoScreen = () => {
//     const [toDo,setToDo]=useState("");
//     const [todolist,setTodolist]=useState([])
//     const [editedTodo,setEditedTodo]=useState(null);


//     // handle Add To
//     const handleToDo=()=>{
//         // structure of single to do item
//         setTodolist([...todolist,{
//             id: Date.now().toString(),
//             title: toDo
//         }])
//     };
//     const handleDelete=(id)=>{
//         const upadtedTodoList=todolist.filter((todo)=>todo.id!==id);

//         setTodolist(upadtedTodoList);
//     }
//     const handleEdit = (toDo) => {
//             setEditedTodo(toDo)
//             setToDo(toDo.title)
//     }
//     const handleUpdatedTodo=()=>{
//         const updatedTodos = todolist.map((item)=>{
//             if(item.id===editedTodo.id){
//                 return {...item, title: todo}
//             }
//             return item;


//         });
        
//             setTodolist(updatedTodos)
//             setEditedTodo(null)
//             setToDo("");
//     };
//     const renderTodos=({item,index})=>{
//         return (
//             <View style={{
//                 backgroundColor: "#1e90ff",
//                 borderRadius: 6,
//                 paddingHorizontal: 6,
//                 paddingVertical: 8,
//                 marginBottom: 12,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 shadowColor: "#000",
//                 shadowOffset: {width: 0, height: 2},
//                 shadowOpacity: 0.8,
//                 shadowRadius: 3,
//                 }}>
          
//                 <Text style={{
//                     color: "#fff",
//                     fontSize: 20,
//                     fontWeight: "800",
//                     flex: 1,
//                 }}>{item.title}</Text>
//       <IconButton icon="pencil" iconColor='#fff'
//       onPress={()=>handleEdit(item)}
//       />
//       <IconButton icon="trash-can"
//       onPress={()=>handleDelete(item.id)}
//       iconColor='#fff'/>

//             </View>
//         )
//     }
//   return (
 
//    <View style={{marginHorizontal: 16}}>
//     <TextInput
//     style={{
//         borderWidth: 2,
//         borderColor: "#1e90ff",
//         borderRadius: 6,
//         paddingVertical: 12,
//         paddingHorizontal: 16,
//         shadowColor: "#000",
//     }}
//     placeholder='Add a task'
//     value={toDo}
//     onChangeText={(userText)=>{setToDo(userText)}}
//     />
// <TouchableOpacity
// style={{
//     backgroundColor: "#000",
//     borderRadius: 6,
//     paddingVertical: 8,
//     marginVertical: 34,
//     alignItems: "center",
// }}
// onPress={()=>handleToDo()}
// >
// <Text style={{
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 20
// }}>
//     Add
// </Text>
// </TouchableOpacity>
// {/* Render To do list */}
// <FlatList data={todolist} renderItem={renderTodos}/>
// {
//     todolist.length <=0 && <Fallback/>
// }
//     </View>

 
//   )
// }

// export default TodoScreen

// const styles = StyleSheet.create({})


import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
  import { IconButton } from 'react-native-paper';
  import Fallback from '../components/Fallback';
  
  const TodoScreen = () => {
    const [toDo, setToDo] = useState('');
    const [todolist, setTodolist] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);
  
    // Handle adding a new to-do item
    const handleToDo = () => {
      if (toDo.trim() === '') {
        alert('Please enter a task');
        return;
      }
  
      setTodolist([
        ...todolist,
        {
          id: Date.now().toString(),
          title: toDo,
        },
      ]);
  
      setToDo(''); // Clear the input field
    };
  
    // Handle editing an existing to-do item
    const handleEdit = (todo) => {
      setEditedTodo(todo);
      setToDo(todo.title); // Set the current task title in the input field
    };
  
    // Update the edited to-do item
    const handleUpdatedTodo = () => {
      const updatedTodos = todolist.map((item) => {
        if (item.id === editedTodo.id) {
          return { ...item, title: toDo }; // Update the title
        }
        return item;
      });
  
      setTodolist(updatedTodos); // Update the list
      setEditedTodo(null); // Reset editing state
      setToDo(''); // Clear the input field
    };
  
    // Handle deleting a to-do item
    const handleDelete = (id) => {
      const updatedTodoList = todolist.filter((todo) => todo.id !== id);
      setTodolist(updatedTodoList);
    };
  
    // Render each to-do item
    const renderTodos = ({ item }) => {
      return (
        <View
          style={{
            backgroundColor: '#1e90ff',
            borderRadius: 6,
            paddingHorizontal: 6,
            paddingVertical: 8,
            marginBottom: 12,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: '800',
              flex: 1,
            }}
          >
            {item.title}
          </Text>
          <IconButton
            icon="pencil"
            iconColor="#fff"
            onPress={() => handleEdit(item)} // Edit button
          />
          <IconButton
            icon="trash-can"
            iconColor="#fff"
            onPress={() => handleDelete(item.id)} // Delete button
          />
        </View>
      );
    };
  
    return (
      <View style={{ marginHorizontal: 16 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#1e90ff',
            borderRadius: 6,
            paddingVertical: 12,
            paddingHorizontal: 16,
            shadowColor: '#000',
          }}
          placeholder="Add a task"
          value={toDo}
          onChangeText={(userText) => setToDo(userText)} // Update input value
        />
        <TouchableOpacity
          style={{
            backgroundColor: editedTodo ? '#ffa500' : '#000', // Change color if editing
            borderRadius: 6,
            paddingVertical: 8,
            marginVertical: 34,
            alignItems: 'center',
          }}
          onPress={editedTodo ? handleUpdatedTodo : handleToDo} // Toggle between Add and Update
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            {editedTodo ? 'Update' : 'Add'} {/* Button text changes */}
          </Text>
        </TouchableOpacity>
  
        {/* Render To-Do list */}
        <FlatList
          data={todolist}
          keyExtractor={(item) => item.id}
          renderItem={renderTodos}
        />
  
        {/* Show fallback if the to-do list is empty */}
        {todolist.length <= 0 && <Fallback />}
      </View>
    );
  };
  
  export default TodoScreen;
  
  const styles = StyleSheet.create({});
  