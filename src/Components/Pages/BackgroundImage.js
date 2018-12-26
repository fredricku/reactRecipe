import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image

} from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <Image src={process.env.PUBLIC_URL + '/image/Rectangle.png'}
                  style={styles.backgroundImage}>

            </Image>
        )
    }
}

class Background extends Component {
    render() {
        return (
            <BackgroundImage>
              <Text style={styles.text}>Fullscreen!</Text>
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});
export default Background
