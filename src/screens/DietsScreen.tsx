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
import WorkoutScreen from './WorkoutScreen';


  const DietCategories = [
    "Vegan Diet",
    "Vegetarian Diet",
    "The Zone Diet"
  ];

  const PopularDiets = [
    "Lemon curd & blueberry loaf",
    "Almond Pancake",
    "Banana Bread"
  ]
  const DietScreen = () => {
    const {colors} = useTheme()
    const [categoryIndex, setCategoryIndex] = useState(0)
    const navigation = useNavigation();
    
  
    return (
        <ScrollView>
            <View>
                <SafeAreaView>
                <View style={{paddingHorizontal: 24, paddingVertical: 30, flexDirection: "row", alignItems: 'center', gap:8}}>
                    <TouchableOpacity onPress={HomeScreen}>
                        <Icons name="keyboard-arrow-left" size={30} color={colors.text}></Icons>
                        </TouchableOpacity>
                    <Text style={{fontSize: 24, fontWeight: "700", marginBottom: 5}} numberOfLines={1}>Diet</Text>
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
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 5, marginHorizontal: 10, marginTop: 30}} numberOfLines={1}>Plano de dieta hoje</Text>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100, marginTop: 80}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/breakfastbanner.png')}></Image>
                        </TouchableOpacity>   
                    </View>
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 5, marginHorizontal: 10, marginTop: 30}} numberOfLines={1}>Categorias de dieta</Text>
                    <FlatList
                    data={DietCategories}
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
                                paddingHorizontal: 30,
                                paddingVertical: 60,
                                borderRadius: 40,
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
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 5, marginHorizontal: 10, marginTop: 30}} numberOfLines={1}>Dieta da moda</Text>
                    <FlatList
                    data={PopularDiets}
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
                                paddingVertical: 100,
                                borderRadius: 40,
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
                    <Text style={{fontSize: 20, fontWeight: "600", marginBottom: 5, marginHorizontal: 10, marginTop: 30}} numberOfLines={1}>Receitas para essa semana</Text>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100, marginTop: 50}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/WeekRecipe.png')}></Image>
                        </TouchableOpacity>   
                    </View>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

export default DietScreen