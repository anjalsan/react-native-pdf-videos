import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const pdfImage = require('./assets/pdf.png');
const playButton = require('./assets/play-button.png');

export default class ListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: '1',
          type: 'pdf',
          isLocal: false,
          url: 'http://www.africau.edu/images/default/sample.pdf',
          text: 'A Simple PDF File'
        },
        {
            id: '2',
            type: 'pdf',
            isLocal: false,
            url: 'https://www.nipissingu.ca/departments/student-development-and-services/academic-skills/resources/Documents/Independent-Samples-vs-Dependent-Samples.pdf',
            text: 'Independent Samples vs. Dependent Samples'
        },
        {
            id: '3',
            type: 'video',
            isLocal: false,
            url: 'https://img.fifa.com/images/fwc/2018/opengraph/generic.png',
            video_urls: [
                {
                    id: '1',
                    type: 'youtube',
                    video_preview: 'https://img.youtube.com/vi/N5F1hqWW_5w/hqdefault.jpg',
                    url: 'https://www.youtube.com/watch?v=N5F1hqWW_5w',
                    text: 'England v Belgium - 2018 FIFA World Cup Russia™ - Match 45'
                },
                {
                    id: '2',
                    type: 'youtube',
                    video_preview: 'https://img.youtube.com/vi/RmlkAOwJ1gI/hqdefault.jpg',
                    url: 'https://www.youtube.com/watch?v=RmlkAOwJ1gI',
                    text: 'Nigeria v Argentina'
                },
                {
                    id: '3',
                    type: 'vimeo',
                    video_preview: 'https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F707185315_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png',
                    url: 'https://vimeo.com/274999261',
                    text: 'BBC World Cup Title Sequence 2018 '
                },
                {
                    id: '4',
                    type: 'youtube',
                    video_preview: 'https://img.youtube.com/vi/4rp2aLQl7vg/hqdefault.jpg',
                    url: 'https://www.youtube.com/watch?v=4rp2aLQl7vg',
                    text: 'Portugal v Spain - 2018 FIFA World Cup Russia™ - Match 3'
                }
            ],
            text: "Fifa worldcup video's"
        },
        {
            id: '4',
            type: 'pdf',
            isLocal: false,
            url: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
            text: 'The secrets of mental math Everyone can do it in a flash'
        },
        {
            id: '5',
            type: 'pdf',
            isLocal: false,
            url: 'http://www.matsugov.us/docman/doc_view/1950-sample-minutes-format',
            text: 'Independent Samples vs. Dependent Samples'
        },
        {
            id: '6',
            type: 'video',
            isLocal: false,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WSYCHLuvm_vOZYnGUjm2grDnhjycX7tnS3aHWa8iQyFH4mdpvw',
            video_urls: [
                {
                    id: '1',
                    type: 'youtube',
                    video_preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WSYCHLuvm_vOZYnGUjm2grDnhjycX7tnS3aHWa8iQyFH4mdpvw',
                    url: 'https://www.youtube.com/watch?v=SqEo107j-uw&t=667s',
                    text: 'Elon Musk and Y Combinator President on Thinking for the Future'
                },
                {
                    id: '2',
                    type: 'youtube',
                    video_preview: 'https://img.youtube.com/vi/UqszUNk_vQU/hqdefault.jpg',
                    url: 'https://www.youtube.com/watch?v=UqszUNk_vQU',
                    text: 'Sam Altmans Secret Recipe'
                },
                {
                    id: '3',
                    type: 'vimeo',
                    video_preview: 'https://cdn.tech.com.pk/wp-content/uploads/2016/07/Elon-Musk-Story-1.jpg',
                    url: 'https://vimeo.com/105241023',
                    text: 'Elon Musk Ingenuity '
                },
                {
                    id: '4',
                    type: 'vimeo',
                    video_preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlef37E7Dj5x81yk8JWRbcMR42mQR6YKYwxeullDegSKGwY4dGw',
                    url: 'https://vimeo.com/261728183',
                    text: 'Elon Musk (born June 28, 1971 in Pretoria) is a South African-born American entrepreneur.'
                }
            ],
            text: 'Elon Musk Ingenuity'
        },
      ]
    };
  }

  _renderItem(item) {
    return (
        item.type === 'pdf'
        ? <TouchableOpacity
            style={{borderColor: '#92929244', shadowColor: '#000000', shadowOffset: { width: 0.5, height: 0.5 },
            shadowOpacity: 0.06, shadowRadius: 2, borderRadius: 3, borderWidth: 1, margin: 10, marginHorizontal: 16}}
            onPress={() => {
                Actions.pdfdetail({item});
            }}>
        
            <Text style={{marginLeft: 10, fontSize: 14, color: '#000000', marginTop: 5, fontWeight: '500'}}>
                {item.text}
            </Text>
            
            <Image
              source={pdfImage}
              style={{
                height: 120,
                width: 120,
                marginVertical: 20,
                alignSelf: 'center'
              }} />

            <View style={{backgroundColor: '#92929222', height: 22, width: '100%'}} />
        </TouchableOpacity> 
        : <TouchableOpacity
            style={{borderColor: '#92929244', shadowColor: '#000000', shadowOffset: { width: 0.5, height: 0.5 },
            shadowOpacity: 0.06, shadowRadius: 2, borderRadius: 3, borderWidth: 1, margin: 10, marginHorizontal: 16}}
            onPress={() => {
                Actions.videoList({item});
            }}>
        
            <Text style={{marginLeft: 10, fontSize: 14, color: '#000000', marginTop: 5, fontWeight: '500'}}>
                {item.text}
            </Text>
            
            <ImageBackground
                source={{uri: item.url}}
                style={{
                    height: 150,
                    width: '100%',
                    marginVertical: 20,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >

                <Image
                    source={playButton}
                    style={{
                        height: 40,
                        width: 40,
                        opacity: 1
                    }} />
            </ImageBackground>
        </TouchableOpacity>
    );
  }


  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 10}}>
            <StatusBar barStyle='dark-content' backgroundColor='#911a23' />
            <FlatList
                style={{marginTop: 5}}
                data={this.state.list}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (this._renderItem(item))}
            />
        </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
