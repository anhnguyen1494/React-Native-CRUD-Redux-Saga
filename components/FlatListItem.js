import React, { Component } from "react";
import { 
    View, Text, Alert,
    Platform, TextInput,
    StyleSheet
} from "react-native";
import Button from 'react-native-button';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            right: [
                {
                    onPress: () => {
                        const {movieComponent} = this.props;
                        //show edit modal
                        movieComponent.refs.editModal.showEditModal({...this.props});
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Bạn có muốn xóa?',
                            [
                                {text: 'Không', onPress: () => console.log('Hủy'), style: 'cancel'},
                                {
                                    text: 'Có', onPress: () => {
                                        const {movieComponent} = this.props;
                                        //call event, map in container
                                        movieComponent.props.onDeleteItemAction(this.props.id);
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.id,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSettings}>
                <View style={styles.container}>
                    <Text style={{
                            padding: 10,
                            fontWeight: 'bold',
                            fontSize: 17, 
                            color: 'white',
                            backgroundColor: (this.props.itemIndex % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                        }}>
                            {`Film: ${this.props.name}`}
                        </Text>
                        <Text style={{
                            padding: 10,
                            fontWeight: 'bold',
                            fontSize: 14, 
                            color: 'white',
                            backgroundColor: (this.props.itemIndex % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                        }}>
                            {`Năm sx: ${this.props.releaseYear}`}
                        </Text>
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});