import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import InputSpinner from "react-native-input-spinner";
import API from '../Api.js';
import Toast from 'react-native-toast-message';
import { Picker } from '@react-native-community/picker';
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { Input, Button } from 'react-native-elements';

export default class ScheduleCard extends Component{

    constructor(props){
        super(props)
        this.info = this.props.info
        this.state = {
            confirmation: null
        }
    }

    postConfirmation(){

    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.cardTitle}>Date : {this.info.date} / Code : {this.info.worktime.type}</Text>
                {this.info.confirmation === 0 ?
                <>
                    <Text style={styles.cardTitle}>A discuter, Raison: {this.info.reason}</Text>
                    <Picker selectedValue="0" onValueChange={(itemValue) => this.setState({ confirmation: itemValue })}>
                         <Picker.Item label="Confirmer" value="1"></Picker.Item>
                    </Picker>
                </>
                : 
                <>
                    <Text style={styles.cardTitle}>A confirmer</Text>
                    <Picker selectedValue={this.state.confirmation} onValueChange={(itemValue) => this.setState({ confirmation: itemValue })}>
                         <Picker.Item label="Confirmer" value="1"></Picker.Item>
                         <Picker.Item label="A discuter" value="0"></Picker.Item>
                    </Picker>
                </>
                }
                {
                    this.state.confirmation == 0 ?
                        <Input placeholder='Raison' onChange={e => this.setState({initials: e.target.value})}/>
                    : null
                    
                }
                <TouchableOpacity  onPress={() => {this.postConfirmation()}} style={styles.submitButton}><Text style={styles.submitButtonText}>Envoyer</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#f1f1f1",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        alignItems: 'center',
        justifyContent: "center",
    },
    inputSpinner:{
        flex: 2,
    },
    text:{
        padding: 5,
        flex: 3,
        fontSize: 15,
    },
    submitButton:{
        margin: 12,
        height: 40,
        width: 150,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3e525f",
        padding: 5,
        flex: 3
    },
    submitButtonText:{
        color: "white"
    },
    cardTitle: {
        textAlign: 'left', 
        alignSelf: 'stretch',
        padding: 10
    }
  });