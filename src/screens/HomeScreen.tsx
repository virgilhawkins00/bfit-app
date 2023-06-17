import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native';
import { StatusBarAnimation } from 'expo-status-bar';

const AVATAR_URL = 'https://lh3.googleusercontent.com/R1TMn-cM_Ay9ne7lSDrNo-QhETa6RWB9xXPMZ5fP2lzLg-dheBgR7asf8YUspM_cHKveFLH44jDrV8rLf9e7eODq_g4SuLO1PjSDD2_IaforAJgWZRgjMHknsqJ98rtMONmpiPpDAFFvlr8QA2MvDhl-vwIqNdOJanZ351BH3U9klIodtwWT6w41tavRLIrwXMW57q0q9OqGZfjz_UNqah9TqPexCU7XOa3flFh50lreqGvDDV0kx7tgDJ7_OVMTn_U8RAHZCHYFwHmv3vUNDl1qAS19MsZ96fn3lWa8w0mPUynzyDVewHQtNzUadC4JRgMbZVjrwLg62gcCpqGrtKWqza5RCtIqHx5CbVY_TxgHAcjeXA9jQe0wbJuIg7TWg3m8JgVZgJxDRX1NE7divhi3QLbktqHuO5wVPPPanrFDgYV7qoWYkOcfBJyet4fb-SvRc12fjk3k2LJnYqfGGdWEqqjcWotiNEJJ49hKFUIsMplW4UBbMMhQDrLPoSnhgrCfc8pIjB-cLsicXV9MEJbMCSAJ_E4O4TM8piTTzVQdKOn8wsV2k4stSoKYTJslF9Xx0V28f7lIuD8RHwTHdTnKiGC7MH-LXI5tz0nyWwhuWM9IAn5kwj7eYSH7XziV4evr64jBMu1uA507HhBTVtehWix2YZdDZkVuBfUupCRzgZ7w8I_dLBdcMViFxN_JgzZXMK833UxsjanUUeK_SkQMwILzdl3fS1j6yC796JS2oxNBavL53-6JTZZ68ywNjKtE11I-LDOEAxaIyWPFYfv-PvGWcth5hlr04ZF6n1YE1nZeBp5SzdDNtq-axJoT9riUwZhE6yjFkh98OZz-yiZ4CAUHimalYd0K-geuU5UwADR8iBM2yzqmlz-vEABkkTD2M2PZfosyOhNzzlEwusG8YJIjmroSfVqO0TF7undd8sy01potIv43wB3Nl4rUheU0oFZ8ChRTE7clLVwFn6tIndxYcLrShkIlj4kuv29kOdCFNX4avvl-5qebdl-ienwSHiPsEHDzAy4W-UXm_3Q5bq0=w41-h43-s-no?authuser=1';

const HomeScreen = () => {
    const {colors} = useTheme()
  return (
    <View>
      <SafeAreaView>
        {/* Header Section*/}
        <View style={{paddingHorizontal: 24, paddingVertical: 30, flexDirection: "row", alignItems: 'center', gap:8}}>
            <Image source={{uri: AVATAR_URL, }} style={{width: 52, aspectRatio: 1, borderRadius: 52}} resizeMode="cover"/>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, fontWeight: "600", marginBottom: 5}} numberOfLines={1}>Olá, Lucy! 👋</Text>
              <Text style={{ color: colors.text, opacity: 0.75 }} numberOfLines={1}>Bom dia! </Text>
            </View>
            <TouchableOpacity style={{width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: colors.border,}}>
              <Icons name="notifications" size={30} color={colors.text}></Icons>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: colors.border,}}>
              <Icons name="event" size={30} color={colors.text}></Icons>
            </TouchableOpacity>
        </View>
        {/*Status Bar Section*/}
        <View style={{flexDirection: 'row', paddingHorizontal: 24, }}>
          <TouchableOpacity style={{flex: 1, height: 60, borderRadius: 60, borderWidth: 1, borderColor: colors.primary, alignItems: "center", paddingHorizontal: 24, gap: 12}}>
            <Text style={{fontSize: 12, fontWeight: "600", color: colors.primary, alignItems: 'center', justifyContent: 'center', marginRight: 180, marginTop: 8}}>Peso Alvo: 52Kg</Text>
            <Text style={{fontSize: 12, fontWeight: "600", color: colors.primary, alignItems: 'center', justifyContent: 'center', marginLeft: 180, marginVertical: -25, opacity: 0.50}}>Peso Alvo: 65Kg</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen