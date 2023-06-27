import { 
    View, 
    Text, 
    Image, 
    FlatList, 
    ScrollView, 
    StyleSheet 
  } from 'react-native'
  import React, { useCallback, useState, useRef } from 'react'
  import { SafeAreaView } from 'react-native-safe-area-context'
  import { useTheme } from '@react-navigation/native';
  import Icons from "@expo/vector-icons/MaterialIcons"
  import { TouchableOpacity } from 'react-native';
  import MasonryList from 'reanimated-masonry-list';
  import { NavigationContainerProps } from '@react-navigation/native';
  import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
  import ImageListItem from '@mui/material/ImageListItem'
  import { BottomSheetModal } from '@gorhom/bottom-sheet';
  import CustomBackdrop from '../components/CustomBackdrop';
  import { useNavigation } from '@react-navigation/native';


  const DietScreen = () => {
    const {colors} = useTheme()
    const [categoryIndex, setCategoryIndex] = useState(0)
    const navigation = useNavigation();
    
  
    return (
        <ScrollView>
            <View>
                <SafeAreaView>
                    <Text>Olá, alex</Text>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

export default DietScreen