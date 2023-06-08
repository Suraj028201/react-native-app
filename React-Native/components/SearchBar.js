import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import Suggestions from './Suggestions';

// <Text style={{ margin: 10 }}>Skills: {skills.join(', ')}</Text>

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    const dummySuggestions = ['ReactJS', 'Redux', 'React-native', 'Python', 'Typescript', 'JavaScript', 'Django', 'EmberJS'];
    const filteredSuggestions = dummySuggestions.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleAddSkill = (skill) => {
    setSearchText('');
    setSkills((prevSkills) => [...prevSkills, skill]);
  };

  const handleRemoveSkill = (skill) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  const renderSuggestionItem = ({ item }) => {
    return (
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ flex: 1 }}>{item}</Text>
        <TouchableOpacity onPress={() => handleAddSkill(item)}>
          <Text style={{ color: 'blue' }}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        onChangeText={handleSearch}
        value={searchText}
        placeholder="Type here to search"
      />

      {searchText &&
      <FlatList
        data={suggestions}
        renderItem={renderSuggestionItem}
        keyExtractor={(item, index) => index.toString()}
      />}

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
        {skills.map((skill) => (
          <View key={skill} style={{ flexDirection: 'row', alignItems: 'center', margin: 5,  backgroundColor:'skyblue', borderRadius:'10px' }}>
            <Text style={{ flex: 1, margin: 10 }}>{skill}</Text>
            <TouchableOpacity onPress={() => handleRemoveSkill(skill)}>
              <Text style={{ color: 'red', marginLeft: 10, marginRight: 5 }}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

<Suggestions handleAddSkill={handleAddSkill} handleRemoveSkill={handleRemoveSkill} />

    </View>
  );
};

export default SearchBar;

