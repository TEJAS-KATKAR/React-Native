import { StyleSheet, Text, View, ScrollView, Dimensions, Animated, Image } from 'react-native'
import React, { useState, useRef } from 'react'

const { width } = Dimensions.get('window');

const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const animatedIndex = useRef(new Animated.Value(0)).current;

  const bannerWidth = width * 0.78;
  const spacing = 10;
  const sidePadding = (width - bannerWidth) / 4;

  const banners = [
    {
      id: 1,
      image: require('../assets/header/banner1.png'),
    },
    {
      id: 2,
      image: require('../assets/header/banner2.png'),
    },
    {
      id: 3,
      image: require('../assets/header/banner3.png'),
    },
  ];

  const snapOffsets = banners.map((_, i) =>
    i * (bannerWidth + spacing * 2)
  );

  const handleScrollEnd = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / (bannerWidth + spacing * 2));
    const clamped = Math.max(0, Math.min(index, banners.length - 1));
    setActiveIndex(clamped);
    Animated.spring(animatedIndex, {
      toValue: clamped,
      useNativeDriver: false,
      speed: 20,
      bounciness: 6,
    }).start();
  };

  return (
    <View style={{ marginTop: 30 }}>

      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, marginBottom: 16 }}>
        <Text style={{ flex: 1, fontSize: 22, fontWeight: 'bold', color: '#484848' }}>
          #SpecialForYou
        </Text>
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#dd6666' }}>
          See All
        </Text>
      </View>

      {/* Carousel */}
      <View style={{ height: 190 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToOffsets={snapOffsets}
          contentContainerStyle={{
            paddingHorizontal: sidePadding,
            alignItems: 'center',
          }}
          onMomentumScrollEnd={handleScrollEnd}
          scrollEventThrottle={16}
        >
          {banners.map((item, index) => (
            <View
              key={index}
              style={{
                width: bannerWidth,
                height: 190,
                marginHorizontal: spacing,
                borderRadius: 20,
                overflow: 'hidden',
              }}
            >
              <Image
                source={item.image}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Animated Dots */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 14 }}>
        {banners.map((_, index) => {

          const dotWidth = animatedIndex.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [8, 20, 8],
            extrapolate: 'clamp',
          });

          const dotColor = animatedIndex.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['#ccc', '#e56363', '#ccc'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={{
                width: dotWidth,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>

    </View>
  )
}

export default Hero

const styles = StyleSheet.create({})