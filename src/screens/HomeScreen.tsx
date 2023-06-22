import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native';


const CATEGORIES =  [
  "Daily",
  "Weekly",
  "Monthly",
  "Yearly"]


const AVATAR_URL = 'https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=360&t=st=1687176152~exp=1687176752~hmac=fbf8afa8c65b18c275ddb246dc36e15278fd4dbcdde99c19acb391f80a027662';

const HomeScreen = () => {
    const {colors} = useTheme()
    const [categoryIndex, setCategoryIndex] = useState(0)
  return (
    <ScrollView>
    <View>
      <SafeAreaView style={{paddingVertical: 24, gap: 24}}>
        {/* Header Section*/}
        <View style={{paddingHorizontal: 24, paddingVertical: 30, flexDirection: "row", alignItems: 'center', gap:8}}>
            <Image source={{uri: AVATAR_URL, }} style={{width: 52, aspectRatio: 1, borderRadius: 52}} resizeMode="cover"/>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, fontWeight: "600", marginBottom: 5}} numberOfLines={1}>Olá, Lucy! 👋</Text>
              <Text style={{ color: colors.text, opacity: 0.75 }} numberOfLines={1}>Bom dia! </Text>
            </View>
            <TouchableOpacity style={{width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: colors.border,}}>
              <Icons name="event" size={30} color={colors.text}></Icons>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: colors.border,}}>
              <Icons name="notifications" size={30} color={colors.text}></Icons>
            </TouchableOpacity>
        </View>
        {/*Status Bar Section*/}
        <View style={{flexDirection: 'row', paddingHorizontal: 24, }}>
          <TouchableOpacity style={{flex: 1, height: 52, borderRadius: 52, borderWidth: 1, borderColor: colors.border, alignItems: "center", paddingHorizontal: 24, gap: 12, flexDirection: "row" }}>
            <Icons name="search" size={24} color={colors.text} style={{opacity: 0.5}}></Icons>
            <Text style={{flex: 1, fontSize: 16, color: colors.text, opacity: 0.5}}>Search here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: "center", borderRadius: 52, borderWidth: 1, backgroundColor: colors.primary, borderColor: colors.primary}}>
              <Icons name="mic" size={30} color={colors.background}></Icons>
            </TouchableOpacity>
          
        </View>
        
        {/*Title bar*/}
        <View>
        <TouchableOpacity>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", height: 200, marginTop: 20}}>
            <Image source={require('../assets/images/banner1.png')}/>
          </View> 
        </TouchableOpacity>
        </View>
         {/*Flatlist Section*/}
        <FlatList 
        data={CATEGORIES} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 10,
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
                borderColor: colors.border
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
        {/*Title Section*/}
        <Text style={{ fontSize: 20, fontWeight: "700", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24}}>Today's Activity</Text>
        {/*Cards */}
        <View style={{flexDirection: "row", height: 200, gap: 12}}> 
          <Card/>
         <View style={{ flex: 1}}/>
         <Card/>

         <Card/>
        </View>
        {/*Flatlist Section*/}
        <FlatList data={CATEGORIES} horizontal renderItem={({item}) => <Text>{item}</Text>} />

      </SafeAreaView>
    </View>
    </ScrollView>
  )
}


export default HomeScreen

const Card = () => {
  return (
    <View style={{flexDirection: "column", height: "200", position: "relative",borderRadius: 24, overflow: "hidden"}}>
          <Image source={require('../assets/images/walk.png')} style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0}}/>
          <Image source={require('../assets/images/sleep.png')} style={{position: "relative", top: 0, left: 0, bottom: 0, right: 0}}/>
         </View>

    )
}