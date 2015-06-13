/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ScrollView,
  StyleSheet,
  View,
  Text
} = React;

var screen = require('Dimensions').get('window');

var PageControl = require('react-native-page-control');

var PageControlDemo = React.createClass({
  getInitialState: function () {
    return {
      currentPage: 0
    };
  },
  onScroll: function(event){
    var offsetX = event.nativeEvent.contentOffset.x,
        pageWidth = screen.width - 10;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'red', width:screen.width - 10, marginLeft:5,height: 160}}>
          <ScrollView ref="ad" pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} bounces={false} onScroll={this.onScroll} scrollEventThrottle={16}>
            <View style={{width:screen.width-10,  height:164}}>
              <Text>page1</Text>
            </View>
            <View style={{width:screen.width-10,  height:164,backgroundColor:'yellow'}}>
              <Text>page2</Text>
            </View>
            <View style={{width:screen.width-10,  height:164,backgroundColor:'blue'}}>
              <Text>page3</Text>
            </View>
          </ScrollView>
          <PageControl style={{position:'absolute', left:0, right:0, bottom:10}} numberOfPages={3} currentPage={this.state.currentPage} hidesForSinglePage={true} pageIndicatorTintColor='gray' indicatorSize={{width:8, height:8}} currentPageIndicatorTintColor='black' />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor:'yellow'
  }
});

AppRegistry.registerComponent('PageControlDemo', () => PageControlDemo);
