// DashboardScreen.js

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const DashboardScreen = ({navigation}) => {
  // Sample data for enrolled courses
  const [courses, setCourses] = useState([
    {id: '1', name: 'Course 1', instructor: 'Instructor 1'},
    {id: '2', name: 'Course 2', instructor: 'Instructor 2'},
    // Add more courses here
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tuition Notes Dashboard</Text>

      {/* List of Enrolled Courses */}
      <FlatList
        data={courses}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.courseItem}
            onPress={() => navigation.navigate('CourseDetail', {course: item})}>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.instructor}>{item.instructor}</Text>
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
  courseItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 300,
    alignItems: 'center',
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructor: {
    fontSize: 14,
  },
});

export default DashboardScreen;
