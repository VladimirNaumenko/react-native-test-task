
import {StyleSheet, Text, View, ScrollView, Dimensions, AppRegistry, Button, TouchableOpacity} from 'react-native'
import React from "react";

export default function Track({navigation,props}) {
    const {item,index,videoList} = props
    const {videoTitle, time, author} = item
    const {playlistStyle, idStyle, authorStyle, videoTitleStyle, timeStyle,container} = styles

    return (
        <View style={playlistStyle}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Player', {navigation,props})
            }}><Text>fds</Text>
                <View style={container}>
                    <Text style={idStyle}>
                        {index + 1}
                    </Text>
                    <Text style={authorStyle}>
                        {author}
                    </Text>
                </View>
                <View>
                    <Text style={videoTitleStyle}>
                        {videoTitle}
                    </Text>
                </View>
                <View>
                    <Text style={timeStyle}>
                        {time}
                    </Text>
                </View>

            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    playlistStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
        flex: 1,
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        position: "relative"
    },
    videoTitleStyle: {
        paddingVertical: 10,
        fontSize: 14,
        borderBottomColor: '#951EBC',
        borderBottomWidth: 3,
    },
    authorStyle: {
        fontSize: 20,
    },
    timeStyle: {
        position: 'absolute',
        top: -110,
        right: 0,
        fontSize: 16,
        paddingLeft: 20,
        color: '#aaa'
    },
    idStyle: {
        fontSize: 30,
        marginRight: 10,
        color: "#951EBC",
    }
})
