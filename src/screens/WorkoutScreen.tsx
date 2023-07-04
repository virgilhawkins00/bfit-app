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

  const WorkoutCategories = [
    "Abs Workout",
    "Cardio",
    "Core Stregth",
    "Build Muscle",
    "CrossFit",
    "Yoga",
    "Deltoids",
    "Jumba"
  ]

  const TopInstructor = [
    "Jony Cro",
    "Lui Mero",
    "Roger Cuke",
    "Maria Jesus"
  ]
  const WorkoutScreen = () => {
    const {colors} = useTheme()
    const [categoryIndex, setCategoryIndex] = useState(0)
    const navigation = useNavigation();
 

    return (
        <ScrollView>
            <View>
                <SafeAreaView >
                    <View style={{paddingHorizontal: 24, paddingVertical: 30, flexDirection: "row", alignItems: 'center', gap:8}}>
                    <TouchableOpacity onPress={HomeScreen}>
                        <Icons name="keyboard-arrow-left" size={30} color={colors.text}></Icons>
                        </TouchableOpacity>
                    <Text style={{fontSize: 24, fontWeight: "700", marginBottom: 5}} numberOfLines={1}>Dar certo</Text>
                    </View>
                    <View style={{flexDirection: "row", paddingHorizontal: 24,}}>
                        <TouchableOpacity style={{flex: 1, height: 52, borderRadius: 52, borderWidth: 1, borderColor: colors.border, alignItems: "center", paddingHorizontal: 24, gap: 12, flexDirection: "row"}}>
                            <Icons name="search" size={24} color={colors.text} style={{opacity: 0.5}}></Icons>
                            <Text style={{flex: 1, fontSize: 16, color: colors.text, opacity: 0.5}}>Search here</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity style={{width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: "center", borderRadius: 52, borderWidth: 1, backgroundColor: colors.primary, borderColor: colors.primary}}>
                             <Icons name="mic" size={30} color={colors.background}></Icons>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 20, marginHorizontal: 10, marginTop: 30}} numberOfLines={1}>Tendencias de Exercicios</Text>
                    {/*StatusBar Section*/}
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100, marginTop: 50}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/banner002.png')}></Image>
                        </TouchableOpacity>   
                    </View>
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 5, marginHorizontal: 10, marginTop: 30}} numberOfLines={1}>WorkoutCategories</Text>
                    {/* FlatList Section */}
                    <FlatList
                    data={WorkoutCategories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingVertical: 50,
                        gap: 5
                    }}
                    renderItem={({ item, index }) => {
                        const isSelected = categoryIndex === index;
                        return(
                            <TouchableOpacity onPress={() => setCategoryIndex(index)}
                            style={{
                                backgroundColor: isSelected ? colors.primary : colors.card, 
                                paddingHorizontal: 30,
                                paddingVertical: 60,
                                borderRadius: 20,
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
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 5, marginHorizontal: 10, }} numberOfLines={1}>Top Instructor</Text>
                    {/* FlatList Section */}
                    <FlatList
                    data={TopInstructor}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingVertical: 30,
                        gap: 5
                    }}
                    renderItem={({ item, index }) => {
                        const isSelected = categoryIndex === index;
                        return(
                            <TouchableOpacity onPress={() => setCategoryIndex(index)}
                            style={{
                                backgroundColor: isSelected ? colors.primary : colors.card, 
                                paddingHorizontal: 20,
                                paddingVertical: 42,
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
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 80, marginHorizontal: 10, marginTop: 30}} numberOfLines={1}>Live Sessions</Text>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100, marginTop: 5}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/bannerLive.png')}></Image>
                        </TouchableOpacity>   
                    </View>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

export default WorkoutScreen