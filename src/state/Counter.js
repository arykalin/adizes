import React from 'react';
import {  View, Text, StyleSheet, TextInput} from "react-native";
import {connect} from 'react-redux';
import {increase, decrease} from './counterAction';

class Counter extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.counter);
    }

    render(){
        return (
            <View style={styles.container}>

                <Text style={styles.text}
                      onPress={()=>this.props.decreaseTheValue()}
                >
                    -
                </Text>

                <Text style={styles.text}>
                    {this.props.counter.value}
                </Text>

                <Text style={styles.text}
                      onPress={()=>this.props.increaseTheValue()}
                >
                    +
                </Text>

            </View>
        );
    }
}

const mapStateToProps=state=>{
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = dispatch => {
    return{
        increaseTheValue : () => {
            dispatch(increase());
        },

        decreaseTheValue : () => {
            dispatch(decrease());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 60,
    }
});
