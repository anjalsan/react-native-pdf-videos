import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const pdfImage = require('./assets/pdf.png');
const youtubeImage = require('./assets/youtube.png');
const vimeoImage = require('./assets/vimeo.png');

export default class ListScreen extends React.Component {

  componentWillMount() {
    const {setParams} = this.props.navigation;
      setParams({ title: this.props.item.text });
  }

  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  _renderItem(item) {
    return (
        item.type === 'youtube'
        ? <TouchableOpacity
            style={{borderColor: '#92929244', shadowColor: '#000000', shadowOffset: { width: 0.5, height: 0.5 },
            shadowOpacity: 0.06, shadowRadius: 2, borderRadius: 3, borderWidth: 1, margin: 10, marginHorizontal: 16,
            flexDirection: 'row', alignItems: 'center', height: 100}}
            onPress={() => {
                Actions.videodetail({item});
            }}>
            
            <ImageBackground
                source={{uri: item.video_preview}}
                style={{
                    height: 80,
                    width: 120,
                    marginLeft: 10,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >

                <Image
                    source={youtubeImage}
                    style={{
                        height: 40,
                        width: 40,
                        opacity: 1
                    }} />

            </ImageBackground>

            <Text style={{marginLeft: 10, marginRight: 130, fontSize: 14, color: '#000000', fontWeight: '500'}}>
                {item.text}
            </Text>
        </TouchableOpacity>
        : <TouchableOpacity
            style={{borderColor: '#92929244', shadowColor: '#000000', shadowOffset: { width: 0.5, height: 0.5 },
            shadowOpacity: 0.06, shadowRadius: 2, borderRadius: 3, borderWidth: 1, margin: 10, marginHorizontal: 16,
            flexDirection: 'row', alignItems: 'center', height: 100}}
            onPress={() => {
                Actions.videodetail({item});
            }}>
            
            <ImageBackground
                source={{uri: item.video_preview}}
                style={{
                    height: 80,
                    width: 120,
                    marginLeft: 10,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >

                <Image
                    source={vimeoImage}
                    style={{
                        height: 40,
                        width: 40,
                        opacity: 1
                    }} />

            </ImageBackground>

            <Text style={{marginLeft: 10, marginRight: 130, fontSize: 14, color: '#000000', fontWeight: '500'}}>
                {item.text}
            </Text>
        </TouchableOpacity>
    );
  }


  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 10}}>
            <StatusBar barStyle='dark-content' backgroundColor='#911a23' />
            <FlatList
                style={{marginTop: 5}}
                data={this.props.item.video_urls}
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
