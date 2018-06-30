import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ListScreen from './ListScreen';
import VideoListScreen from './VideoListScreen';
import VideoDetailScreen from './VideoDetailScreen';
import PdfDetailScreen from './PdfDetailScreen';

export default class App extends React.Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene 
                    key="home"
                    component={ListScreen}
                    title="Pdf's and Video's"
                    initial
                    />
                <Scene
                    key="pdfdetail"
                    component={PdfDetailScreen}
                    title="PDF"
                    />
                <Scene
                    key="videodetail"
                    component={VideoDetailScreen}
                    title="Video"
                    />
                <Scene
                    key="videoList"
                    component={VideoListScreen}
                    title="Video's"
                    />
            </Scene>
    </Router>
    );
  }
}
