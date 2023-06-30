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
    import HomeScreen from './HomeScreen';
import { ListItemAvatar } from '@mui/material';


    const CATEGORIES =  [
        "Daily",
        "Weekly",
        "Monthly",
        "Yearly"];


   const imagesDaily = [
    {
        id: 1,
        imageUrl: "https://i.imgur.com/nFKUiQC.png",
        title: "Steps",
        
      },
      {
        id: 2,
        imageUrl: "https://i.imgur.com/VAxZ2i9.png",
        title: "Sleep",
        
      },
      {
        id: 3,
        imageUrl: "https://i.imgur.com/wnPYkUF.png",
        title: "Heart",
        
      },
      {
        id: 4,
        imageUrl: "https://i.imgur.com/0LngroW.png",
        title: "Calories",
       
      },
      {
        id: 5,
        imageUrl: "https://i.imgur.com/8i91eDh.png",
        title: "Water",
       
      },
      {
        id: 6,
        imageUrl: "https://i.imgur.com/6IX69GX.png",
        title: "Exercices",
       
      },
   ]     
  const DailyWorkoutScreen = () => {
    const {colors} = useTheme()
    const [categoryIndex, setCategoryIndex] = useState(0)
    const navigation = useNavigation();
    
  
    return (
        <ScrollView>
            <View>
                <SafeAreaView>
                    <View style={{paddingHorizontal: 18, paddingVertical: 30, flexDirection: "row", alignItems: "center", gap: 8}}>
                        <TouchableOpacity onPress={HomeScreen}>
                        <Icons name="keyboard-arrow-left" size={30} color={colors.text}></Icons>
                        </TouchableOpacity>
                        <Text style={{fontSize: 24, fontWeight: "600", marginBottom: 5, alignItems: "center", justifyContent: "center"}} numberOfLines={1}>Daily Goals</Text>
                    </View>
                    {/*StatusBar Section*/}
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100, marginTop: 5}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/goal-target.png')}></Image>
                        </TouchableOpacity>   
                    </View>
                    {/*Flatlist Section*/}
                    <FlatList 
                    data={CATEGORIES} 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingVertical: 50,
                    gap: 12
                    }}
                    renderItem={({ item, index }) => { 
                    const isSelected = categoryIndex === index; 
                    return (
                        <TouchableOpacity onPress={() => setCategoryIndex(index)}
                        style={{
                            backgroundColor: isSelected ? colors.primary : colors.card, 
                            paddingHorizontal: 30,
                            paddingVertical: 18,
                            borderRadius: 100,
                            borderWidth: isSelected ? 0 : 1,
                            borderColor: colors.border,
                            marginLeft: 10
                        }}
                        >
                        <Text 
                        style={{
                        color: isSelected ? colors.background : colors.text, 
                        fontWeight: "600",
                        fontSize: 16,
                        opacity: isSelected ? 1 : 0.5,
                        }}
                        >
                    {item}
                    </Text> 
                    </TouchableOpacity>)}} />
                    {/* MasonryList */}
                        <MasonryList
                        data={imagesDaily}
                        keyExtractor={(item: string): string => item}
                        numColumns={2}
                        contentContainerStyle={{paddingHorizontal: 0}}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, i}: any) => {
                            return <View style={{ padding: 0 }}>
                                <View style={{
                                    aspectRatio: i === 0 ? 1 : 2 / 3,
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: 10
                                }}>
                                    <Image source={{ uri: item.imageUrl, }}
                                        resizeMode="contain"
                                        style={StyleSheet.absoluteFill} />

                                </View>
                            </View>;
                        }}
                        />
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

export default DailyWorkoutScreen