import React, { Component } from "react";
import { 
    View, Text, AppRegistry, FlatList, Image, Alert, 
    Platform, TouchableHighlight, Dimensions, TextInput,
    StyleSheet
} from "react-native";
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            releaseYear: ''
        };
    }
    showEditModal = (item) => {
        this.setState({
            id: item.id.toString(),
            name: item.name,
            releaseYear: item.releaseYear.toString(),
        });
        this.refs.myModal.open();
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10, width: screen.width - 80, height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={()=>{
                    //
                }}
            >
                <Text 
                    style={{ 
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 40
                    }}
                >
                    Movie's information
                </Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1

                    }}
                    onChangeText={(text)=> this.setState({name: text})}
                    placeholder="Movie's name"
                    value={this.state.name}
                >

                </TextInput>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1

                    }}
                    onChangeText={(text)=> this.setState({releaseYear: text})}
                    placeholder="Movie's releaseYear"
                    value={this.state.releaseYear}
                >

                </TextInput>
                <Button 
                    style={{fontSize: 18, color: 'white'}}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress = {()=>{
                        if( this.state.name.length == 0 || this.state.releaseYear.length == 0){
                            alert("Tên file và năm sx không được trống");
                            return;
                        }
                        this.props.movieComponent.props.onUpdateItemAction(this.state);
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 34 : 0
    }
});