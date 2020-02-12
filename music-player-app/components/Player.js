import {StyleSheet, Text, View, ScrollView, Dimensions, AppRegistry, TouchableOpacity, Button,} from 'react-native'
import {Video} from 'expo-av';
import React, {useState} from 'react';

import List from "./List";

function Player({navigation}) {
    const props = navigation.getParam("props")
    const {index, videoList} = {...props}
    const [currentIndex, setCurrentIndex] = useState(index)
    const track = videoList[currentIndex]
    const {url, author, videoTitle} = track
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height
    const {container, buttons, button, videoName, videoAuthor} = styles


    return (
        <View style={{width, height}}>
            <View style={container}>
                <View style={{justifyContent:"left", width}}>
                <TouchableOpacity
                    style={button}
                    onPress={() => {navigation.navigate('List',{props})}}
                >
                    <Text style={{color: "#FFF", textAlign: "center"}}>
                        Go back
                    </Text>
                </TouchableOpacity>
                </View>
                <View><Text style={styles.title}>{author}</Text></View>
                <View style={{height: 100}}><Text style={styles.videoName}>{videoTitle}</Text></View>
                <Video
                    source={{
                        uri: url
                    }}
                    rate={1.0}
                    volume={1.0}
                    useNativeControls={true}
                    resizeMode="cover"
                    style={{width: width - 20, height: 300}}
                />
                <View style={buttons}>
                    <TouchableOpacity
                        style={button}
                        onPress={() => {
                            currentIndex !== 0 ? setCurrentIndex(prevState => prevState - 1) : setCurrentIndex(videoList.length - 1)}}>
                        <Text style={{color: "#FFF", textAlign: "center"}}>
                            Previous
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={button}
                        onPress={() => {
                            currentIndex !== videoList.length - 1 ? setCurrentIndex(prevState => prevState + 1) : setCurrentIndex(0)}}>
                        <Text style={{color: "#FFF", textAlign: "center"}}
                        >Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Player;
const styles = StyleSheet.create({
    navBar: {flex: 1, flexDirection: 'row'},
    navButton: {
        padding: 10,
        backgroundColor: '#454654',
        margin: 10,
        borderRadius: 5,
        width: 80,
        height: 40,
        flex: 1,
        justifyContent: "center"
    },
    title: {
        ontSize: 24,
        fontWeight: 'bold',
        textAlign: "left"
    },
    mainContent: {
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    videoName: {
        fontSize: 16,
        marginTop: 3,
        marginBottom: 3,
        textAlign: "left"
    },
    videoAuthor: {
        fontSize: 14,
        color: '#888',
        textAlign: "right"
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        color: "#FFF",
        marginTop: 30
    },
    button: {
        padding: 10,
        backgroundColor: '#951EBC',
        margin: 10,
        borderRadius: 5,
        width: 80, height: 40,
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 20
    },
});


