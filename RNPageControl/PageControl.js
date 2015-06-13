
var React = require('react-native');

var {
    StyleSheet,
    View
} = React;

var PageControl = React.createClass({

    propTypes: {
        numberOfPages: React.PropTypes.number,
        currentPage: React.PropTypes.number,
        hidesForSinglePage: React.PropTypes.bool,
        pageIndicatorTintColor: React.PropTypes.string,
        currentPageIndicatorTintColor: React.PropTypes.string,
        indicatorSize: React.PropTypes.object
    },

    getDefaultProps: function () {
        return {
            numberOfPages: 0,
            currentPage:0,
            hidesForSinglePage: false,
            pageIndicatorTintColor: 'gray',
            currentPageIndicatorTintColor: 'white',
            indicatorSize: {width:8, height:8}
        };
    },

    render: function () {
        var { style, ...props } = this.props;
        var defaultStyle = {
            height: this.props.indicatorSize.height
        };
        var indicatorStyle = {
            width: this.props.indicatorSize.width,
            height: this.props.indicatorSize.height,
            borderRadius: this.props.indicatorSize.height / 2,
            marginLeft:5,
            marginRight:5
        };
        var indicatorColor = {
            backgroundColor: this.props.pageIndicatorTintColor
        };
        var currentIndicatorColor = {
            backgroundColor: this.props.currentPageIndicatorTintColor
        }
        var pages = [];
        for (var i = 0; i < this.props.numberOfPages; i++) {
            pages.push(i);
        }
        return (
            this.props.hidesForSinglePage && pages.length <= 1 ? <View style={{backgroundColor:'yellow'}}></View> :
            <View style={[styles.container, defaultStyle, style]}>
                {pages.map((el, i) => <View key={i} style={[indicatorStyle, i == this.props.currentPage ? currentIndicatorColor : indicatorColor]}></View> )}
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row'
    }
});

module.exports = PageControl;