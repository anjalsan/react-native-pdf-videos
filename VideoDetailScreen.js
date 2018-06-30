import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, StatusBar, Image, WebView } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const pdfImage = require('./assets/pdf.png');

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

  render() {
    console.log(this.props.item.url);
    return (
        <View style={styles.container}>
            <WebView
                style={{width: deviceWidth, height: deviceHeight}}
                javaScriptEnabled
                domStorageEnabled
                startInLoadingState={false}
                scalesPageToFit
                source={{uri: this.props.item.url}}
            />
        </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});
