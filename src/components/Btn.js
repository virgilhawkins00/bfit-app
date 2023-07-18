import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: '#1E0BED',
        borderRadius: 100,
        alignItems: 'center',
        width: 346,
        height: 66,
        paddingVertical: 5,
        marginVertical: 10
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold', marginTop: 10}}>
        Iniciar
      </Text>
    </TouchableOpacity>
  );
}