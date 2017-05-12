import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { Icon } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGES = [
  {
    name: "Karan's Dog",
    source: require('./assets/dog_1.jpg')
  },
  {
    name: "Avi's Dog",
    source: require('./assets/dog_2.jpg')
  },
  {
    name: "Monte's Dog",
    source: require('./assets/dog_3.jpg')
  }
]

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      index: 0
    }
  }

  onPressLeftButton() {
    const { index } = this.state
    let newIndex = index

    if( index <= 0 ) {
      newIndex = IMAGES.length - 1
    } else {
      newIndex = index - 1
    }

    this.setState({
      index: newIndex
    })
  }

  onPressRightButton() {
    const { index } = this.state
    let newIndex = index

    if( index >= IMAGES.length - 1 ) {
      newIndex = 0
    } else {
      newIndex = index + 1
    }

    this.setState({
      index: newIndex
    })
  }

  renderImage() {
    const { index } = this.state

    return (
      <Image
        source={(IMAGES[index].source)}
        style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.6}}
        resizeMode='cover'
      />
    )
  }

  render() {
    console.log(this.state)

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {this.renderImage()}
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.leftButtonContainer}>
            <Icon
              name='ios-arrow-round-back'
              type='ionicon'
              size={100}
              color='green'
              containerStyle={{borderRadius: 50, width: 100, height: 100, borderWidth: 2, borderColor: 'red'}}
              onPress={this.onPressLeftButton.bind(this)}
            />
          </View>
          <View style={styles.rightButtonContainer}>
            <Icon
              name='ios-arrow-round-forward'
              type='ionicon'
              size={100}
              color='red'
              containerStyle={{borderRadius: 50, width: 100, height: 100, borderWidth: 2, borderColor: 'yellow'}}
              onPress={this.onPressRightButton.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    flex: 6,
  },
  buttonsContainer: {
    flex: 4,
    flexDirection: 'row'
  },
  leftButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Expo.registerRootComponent(App);
