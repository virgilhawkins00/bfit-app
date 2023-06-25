import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(0,0,0,${interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.5],
      Extrapolate.CLAMP

      

      
    )})`,
  }));

  // styles
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style]
  );

  const blurViewProps = useAnimatedProps(() => {
    return {
      intensity: interpolate(
        animatedIndex.value,
        [-1, 0],
        [0, 20],
        Extrapolate.CLAMP,

        
      ),
    };
  
    
  });

  return (
    <AnimatedBlurView animatedProps={blurViewProps} style={containerStyle} />
  );
};

export default CustomBackdrop;

import CustomBottomTabs from "./CustomBottomTabs";


// Review the code!
// this._animatedValue = new Animated.Value(0);

// const scaleAndFlipOnReverse = this._animatedValue.y.interpolate({
//   inputRange: [0, deviceHeight],
//   outputRange: [0.1, 2],
//   extrapolateLeft: "extend",
//   extrapolateRight: "clamp",
// });

// <Animated.View style={{ transform: [{ scale: scaleAndFlipOnReverse }] }} />;