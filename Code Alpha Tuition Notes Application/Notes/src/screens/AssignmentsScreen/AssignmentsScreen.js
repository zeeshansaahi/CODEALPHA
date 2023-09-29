// AssignmentsScreen.js

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const AssignmentsScreen = ({route, navigation}) => {
  const {course} = route.params;
  const [assignments, setAssignments] = useState([
    {id: '1', title: 'Assignment 1', description: 'Description 1'},
    {id: '2', title: 'Assignment 2', description: 'Description 2'},
    // Add more assignments here
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assignments for {course.name}</Text>

      <FlatList
        data={assignments}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.assignmentItem}
            onPress={() =>
              navigation.navigate('EditAssignment', {assignment: item})
            }>
            <Text style={styles.assignmentTitle}>{item.title}</Text>
            <Text style={styles.assignmentDescription}>{item.description}</Text>
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
  assignmentItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 300,
    alignItems: 'center',
  },
  assignmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  assignmentDescription: {
    fontSize: 14,
  },
});

export default AssignmentsScreen;
