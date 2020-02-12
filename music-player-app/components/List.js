import {View,Dimensions} from 'react-native'
import React, {useState, Component} from 'react';
import {FlatList} from "react-native-web";
import 'react-native-gesture-handler';

import Track from "./Track";
const videoList = [
    {
        id: 0,
        author: "StreetVJ",
        videoTitle: "SHIBUYA, TOKYO, JAPAN - CIRCA MARCH 2019 : Aerial view around SHIBUYA scramble crossing. Busy crowded area in Tokyo. Wide view slow motion shot.",
        time: "00:59",
        url: "https://ak5.picdn.net/shutterstock/videos/1025659025/preview/stock-footage-shibuya-tokyo-japan-circa-march-aerial-view-around-shibuya-scramble-crossing-busy.mp4"
    },
    {
        id: 1,
        author: "Color4260",
        videoTitle: "Aerial view of a village in the lush green rain cloud cover tropical rain forest mountain during the rainy season in the northern Thailand",
        time: "00:40",
        url: "https://ak7.picdn.net/shutterstock/videos/1014673637/preview/stock-footage-aerial-view-of-a-village-in-the-lush-green-rain-cloud-cover-tropical-rain-forest-mountain-during.mp4"
    },
    {
        id: 2,
        author: "Burdov",
        videoTitle: "Top View of the Giant Waves, Foaming and Splashing in the Ocean, Sunny Day, Slow Motion Video, Indonesia, Bali",
        time: "00:40",
        url: "https://ak8.picdn.net/shutterstock/videos/27008998/preview/stock-footage-top-view-of-the-giant-waves-foaming-and-splashing-in-the-ocean-sunny-day-slow-motion-video.mp4"
    },
    {
        id: 3,
        author: "Ververidis Vasilis",
        videoTitle: "Aerial flight with drone over the famous Skogar waterfall in Iceland. It is located on the South of the island. Image taken with action drone camera causing distortion and blur. Slow motion shot",
        time: "00:47",
        url: "https://ak5.picdn.net/shutterstock/videos/25673345/preview/stock-footage-aerial-flight-with-drone-over-the-famous-skogar-waterfall-in-iceland-it-is-located-on-the-south.mp4"
    },
    {
        id: 4,
        author: "BlackBoxGuild",
        videoTitle: "Epic Table Mountain Reveal // South Africa // Cape Town // Aerial",
        time: "00:42",
        url: "https://ak5.picdn.net/shutterstock/videos/1022782345/preview/stock-footage-epic-table-mountain-reveal-south-africa-cape-town-aerial.mp4"
    },
]


function List({navigation}) {
    let width = Dimensions.get("window").width
    let height = Dimensions.get("window").height

    return (

        <View style={{height, width}}>
            <FlatList
                style={{padding:20}}
                data={videoList}
                navigation={navigation}
                renderItem={({item, index}) => {
                    return <Track navigation={navigation} props={{item,index,videoList}}
                    />
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default List;
