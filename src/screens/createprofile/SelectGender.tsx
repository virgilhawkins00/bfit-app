import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useCallback, useState, useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from 'react-native-progress'
import styles from './styles'
import { useTheme } from '@react-navigation/native';
import {colors}


const SelectGender = () => {
    const {colors} = useTheme()
    const [categoryIndex, setCategoryIndex] = useState(0)
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Select Gender</Text>
            </View>
            <View style={styles.genderContainer}>
                <View style={styles.gender}>
                    <Text style={styles.genderText}>Male</Text>
                </View>
                <View style={styles.gender}>
                    <Text style={styles.genderText}>Female</Text>
                </View>
                <View style={styles.gender}>
                    <Text style={styles.genderText}>Other</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {categoryIndex + 1} of 3
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SelectGender