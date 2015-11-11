
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
        indicatorStyle: View.propTypes.style,
        currentIndicatorStyle: View.propTypes.style,
        indicatorSize: React.PropTypes.object
    },

    getDefaultProps: function () {
        return {
            numberOfPages: 0,
            currentPage:0,
            hidesForSinglePage: false,
            indicatorStyle: {backgroundColor: 'gray'},
            currentIndicatorStyle: {backgroundColor: 'white'},
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
        var pages = [];
        for (var i = 0; i < this.props.numberOfPages; i++) {
            pages.push(i);
        }
        return (
            this.props.hidesForSinglePage && pages.length <= 1 ? <View style={{backgroundColor:'yellow'}}></View> :
            <View style={[styles.container, defaultStyle, style]}>
                {pages.map((el, i) => <View key={i} style={[indicatorStyle, this.props.indicatorStyle, i == this.props.currentPage && this.props.currentIndicatorStyle]}></View> )}
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
