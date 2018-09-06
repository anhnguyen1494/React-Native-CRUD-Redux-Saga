import React, { Component } from "react";
import { 
    View, Text, TextInput,
    Platform, FlatList,
    StyleSheet
} from "react-native";
import Button from 'react-native-button';
import FlatListItem from "./FlatListItem";
import EditModal from "./EditModal";

export default class MovieComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieName: '',
            releaseYear: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20
                }}>
                    Redux Saga - Movie list
                </Text>
                <Text style={{
                    margin: 10, fontWeight: 'bold', color: 'black', fontSize: 17
                }}>
                    New movie information
                </Text>
                <View style={{height: 100, margin: 10}}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({movieName: text})}
                        value={this.state.movieName}
                        placeholder='Nhập tên film'
                    >
                    </TextInput>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', width: 100, borderWidth: 1}}
                        onChangeText={(text) => this.setState({releaseYear: text})}
                        value={this.state.releaseYear}
                        placeholder='Nhập năm sx'
                        keyboardType='numeric'
                    >
                    </TextInput>
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button 
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
                        style={{ fontSize: 18, color: 'white'}}
                        onPress={()=>{
                            this.props.onFetchMovies('asc');
                        }}
                    >
                        Fetch movies
                    </Button>
                    <Button 
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'forestgreen'}}
                        style={{ fontSize: 18, color: 'white'}}
                        onPress={()=>{
                            const {movieName, releaseYear} = this.state;
                            if(!movieName.length || !releaseYear.length ){
                                alert('Tên phim và năm sx k được để trống');
                                return;
                            }
                            this.props.onAddMovie({name: movieName, releaseYear: releaseYear});
                        }}
                    >
                        Add movie
                    </Button>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) =>  <FlatListItem {...item} itemIndex={index} movieComponent={this}>
                        
                    </FlatListItem>
                    }/>
                <EditModal
                    ref={'editModal'}
                    movieComponent={this}
                >

                </EditModal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 34 : 0
    }
});