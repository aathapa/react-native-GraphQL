import React, { Component } from 'react';
import { View,Text,Image,ActivityIndicator } from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class ShowImage extends Component {
    constructor(props){
        super(props);
    }

    renderImage({id,imageURL,description}) {
        return(
            <View>
                 <Image source={{uri: imageURL}} style={{height: 200,width: 200}} />
                 <Text style={{textAlign:'center',marginBottom: 40}}> Hey {description}</Text>
            </View>
        );
       
    }
    render() {
        if(this.props.data.loading){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator />
                </View>
                
            )
        }
            return (
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems:'center',
                }}
            >
                {this.props.data.allDatas.map(this.renderImage)}
            </View>
            );
    }
}

const ImageQuery = gql`
    query {
        allDatas {
            id,
            imageURL,
            description
        }
    }
`
const ShowImageWithData = graphql(ImageQuery)(ShowImage)

export default ShowImageWithData;


