import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ShopBanner from '../components/ShopScreenBanner';
import ShopComp1 from '../components/ShopComp1';
import ShopComp2 from '../components/ShopComp2';
import ShopComp4 from '../components/ShopComp4';

interface Props { }

const ShopScreen: React.FC<Props> = (props) => {
    return (
        <>
            <ShopBanner />
            <ScrollView style={{ backgroundColor: "#F0FFFF" }}>
                <ShopComp1 />
                <ShopComp2 />

            </ScrollView>
            <View style={{ backgroundColor: "#A7C7E7" }}>
                <ShopComp4 />

            </View >

        </>);
};
export default ShopScreen;
