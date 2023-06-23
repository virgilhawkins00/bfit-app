import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {RootStackScreenProps} from "../navigators/RootNavigator";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons"

const DetailsScreen = ({
  navigation,
  route: {
    params: {id},
  },
  }: RootStackScreenProps<"Details">) => {
    const {colors} = useTheme();
    return (
      <View style={{ flex: 1}}>
        <SafeAreaView edges={["top"]}>
          <View style={{ flexDirection: "row", alignItems: "center"}}>
            <TouchableOpacity
                style={{
                  width: 52,
                  aspectRatio: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 52,
                  borderWidth: 1,
                  borderColor: colors.border,
                }}>
                  <Icons name="notifications" size={24} color={colors.text} />
                </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Text>DetailsScreen</Text>
      </View>
    )
  }

export default DetailsScreen