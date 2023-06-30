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


const ProfileSettings = [
  {
      id: 1,
      imageUrl: "https://i.imgur.com/3JNeMRX.png",
      title: "My Goals",
      
    },
    {
      id: 2,
      imageUrl: "https://i.imgur.com/3Dx3q5h.png",
      title: "Body Measurements",
      
    },
    {
      id: 3,
      imageUrl: "https://i.imgur.com/pCIwc5k.png",
      title: "Appointments",
      
    },
    {
      id: 4,
      imageUrl: "https://i.imgur.com/jquclMn.png",
      title: "Invite Friends",
     
    },
    {
      id: 5,
      imageUrl: "https://i.imgur.com/LnokuoN.png",
      title: "My Payment",
     
    },
    {
      id: 6,
      imageUrl: "https://i.imgur.com/2R22cO2.png",
      title: "My Address",
     
    },
    {
      id: 7,
      imageUrl: "https://i.imgur.com/0KG9g1E.png",
      title: "Edit Account",
     
    },
    {
      id: 8,
      imageUrl: "https://i.imgur.com/M9YXtXf.png",
      title: "Settings",
     
    },
 ]     

const ProfileScreen = () => {
  const {colors} = useTheme()
  const navigation = useNavigation

  return (
  <ScrollView>
    <View>
      <SafeAreaView>
      <View style={{paddingHorizontal: 24, paddingVertical: 30, flexDirection: "row", alignItems: 'center', gap:8}}>
                    <TouchableOpacity onPress={HomeScreen}>
                        <Icons name="keyboard-arrow-left" size={30} color={colors.text}></Icons>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", height: 150, marginTop: 30, marginBottom: 100}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/profileok.png')}></Image>
                        </TouchableOpacity>   
                    </View>
                    {/* MasonryList */}
                    <MasonryList
                        data={ProfileSettings}
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
  );
};

export default ProfileScreen;
