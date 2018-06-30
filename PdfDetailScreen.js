import React from 'react';
import { StyleSheet, Text, View, FlatList, WebView, Dimensions, ActivityIndicator } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';

const pdfImage = require('./assets/pdf.png');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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

  displaySpinner() {
    return (
      <View>
          <ActivityIndicator color='#000000' size='large' />
      </View>
    );
  }

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
            renderLoading={() => {
                return this.displaySpinner();
            }}
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
