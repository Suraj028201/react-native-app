import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Suggestions = ({handleAddSkill, handleRemoveSkill}) => {

  const handleAdd = (skill) => {
    handleAddSkill(skill);
  };

  const handleRemove = (skill) => {
    handleRemoveSkill(skill);
  };

  const renderSuggestionTags = () => {
    const suggestions = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

    return suggestions.map((skill) => (
      <TouchableOpacity
        key={skill}
        style={styles.suggestionTag}
        onPress={() => handleAdd(skill)}
      >
        <Text style={styles.suggestionText}>{skill}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemove(skill)}
        >
          <Text style={styles.removeButtonText}>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text> Add Suggestions Tags</Text>
      <View style={styles.suggestionsContainer}>{renderSuggestionTags()}</View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  suggestionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  suggestionTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },
  suggestionText: {
    marginRight: 8,
  },
  removeButton: {
    marginLeft: 8,
  },
  removeButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
   saveButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 30
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Suggestions;
