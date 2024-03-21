import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination }from 'react-native-snap-carousel';
import { CarouselData } from '../data/CarouselData';

const sliderWidth = Dimensions.get('screen').width;

function CarouselSlider(){

    const carouselRef = useRef(null); 
    const [activeSlide, setActiveSlide] = useState(0);

    function renderItem({item, index}){
        return(
            <View style={styles.slide}>
                <Image source={item.imgUrl} style={styles.imgStyles} />
            </View>
        )
    }

    useEffect(() => console.log(CarouselData))

    return(
        <View style={styles.carouselContainer}>
            <Carousel 
                ref={carouselRef}
                sliderWidth={sliderWidth}
                itemWidth={400}
                data={CarouselData}
                renderItem={renderItem}
                onSnapToItem={index => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={CarouselData.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    position: 'absolute',
                    bottom: 0,
                    left: '15%'
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                dotColor="green"
                inactiveDotColor="white"
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    carouselContainer:{
        position: 'relative'
    },
    slide: {
        height:250
    },
    imgStyles: {
        height:250,
        width: '100%'
    },
    title: {

    }
})

export default CarouselSlider;
