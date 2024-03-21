import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import CarouselSlider from '../components/CarouselSlider';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Brands from '../components/Brands';


function HomeScreen(){
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            <SubHeader />
            <Category />
            <CarouselSlider /> 
            <Services />
            <Deals />
            <Brands />
        </ScrollView>
    )
}

export default HomeScreen;