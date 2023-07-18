import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 33, color: '#171433', paddingHorizontal: 10, width: 343, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, padding: 20}}
      placeholderTextColor={'#171433'}></TextInput>
  );
};

export default Field;