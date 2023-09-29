// NotesScreen.js

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const NotesScreen = ({route}) => {
  const {course} = route.params;

  // Sample data for notes related to the selected course
  const [notes, setNotes] = useState([
    {id: '1', title: 'Note 1', content: 'This is the content of Note 1'},
    {id: '2', title: 'Note 2', content: 'This is the content of Note 2'},
    // Add more notes here
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes for {course.name}</Text>

      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.noteItem}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noteItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NotesScreen;
