// CourseDetailScreen.js

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CourseDetailScreen = ({route, navigation}) => {
  const {course} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Details</Text>
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.instructor}>Instructor: {course.instructor}</Text>

      <View style={styles.buttonsContainer}>
        <Button
          title="View Assignments"
          onPress={() => navigation.navigate('Assignments', {course})}
        />
        <Button
          title="View Notes"
          onPress={() => navigation.navigate('Notes', {course})}
        />
      </View>
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
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructor: {
    fontSize: 14,
  },
  buttonsContainer: {
    marginTop: 20,
  },
});

export default CourseDetailScreen;
