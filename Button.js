import React from "react"
import {FlatList, StyleSheet, Pressable, View, Text} from 'react-native'
import { Icon } from 'react-native-elements'
import { color } from "react-native-elements/dist/helpers"
import { TextInput } from "react-native-gesture-handler"
//import { MessageOutlined} from '@ant-design/icons';



const styles = StyleSheet.create({

    containter:{
        flex: 1
    },
    header:{
        backgroundColor:"#325288",
        paddingTop: 56,
        paddingBottom: 10,
        paddingStart: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
    },

    headerText:{
        fontSize: 18,
        color: "white",
        textAlign: "center",
        fontWeight: "600"
    },
    body:{
        //backgroundColor: "white",
        margin: 10,
        flex:10
    }, 

    messages:{
        margin: 10,
        padding: 15,
        borderRadius: 10
    },

    messageText:{
        fontSize: 18,
        color: "white"
    },
    body2:{
        //borderColor: "grey",
        //borderWidth: 1, 
    },

    textInput:{
        padding: 20,
        borderRadius: 10,
        margin:10,
        borderColor: "grey",
        borderWidth: 1
    },    
    button:{
        backgroundColor: "#114e60",
        borderRadius: 10,
        padding: 15,
    },
    buttonText:{
        textAlign:"center",
        color: "white"
    },
    sendView:{
        //alignItems:"flex-end",
        //backgroundColor: "green",
        position:"absolute", 
        alignSelf:"flex-end",
        top: 20,
        right: 20,
        padding: 10
    },
    footer:{
        backgroundColor: "#325288",
        margin:10,
        borderRadius: 10,
        padding: 15,
        flexDirection: "row",
        justifyContent:"space-evenly"
    },

    footerText:{
        color: "#f4eee8",
        fontSize: 14
    }
})


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        message: 'Load previous messages',
        type: "load message"
    },

    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        message: 'Are daily prompts still coming up?',
        type: "message"
    },

    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        message: 'I think so!',
        type: "response"
    },    

];

const Item = ({message, type}) => {
    console.log("messages in item " + message)
    switch(type){
        case "load message":
            return(
                <View style={[styles.messages, {backgroundColor:"#114e60", alignSelf:"center"}]}>
                    <Text style={{color:"white"}}>{message}</Text>
                </View>
            ) ;
        case 'message':
            return(
                <View style={[styles.messages, {backgroundColor:"#f5cebe", alignSelf:"flex-end"}]}>
                    <Text style={{color:"black"}}>{message}</Text>
                </View>
            ) 
        default:
            return(
                <View style={[styles.messages, {backgroundColor:"#f4eee8", alignSelf:"flex-start"}]}>
                    <Text style={{color:"black"}}>{message}</Text>
                </View>
            )                       

    }
};

const renderItem = ({item})=>{
    console.log("the new message " + item.message)

    return (
    <Item message={item.message}
        type={item.type}
    />
)};


class Button extends React.Component{
    render(){
        return(
            <View style={styles.containter}>
                <View style={styles.header}>
                    <Text style={[styles.headerText, {flex:2}]}>Paired with </Text>
                    <Text style={[styles.headerText, {flex:4, textAlign:"left"}]}>MmachiTest tester </Text>
                    <Text style={[styles.headerText, {flex:1}]}>0 </Text>

                </View>
                <View style={styles.body}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}/>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                </View>
                <View style={[styles.body2]}>
                <View style={[styles.sendView]}>
                        <Icon
                        name="send"/>
                    </View> 
                    <View >
                        <TextInput
                        style={[styles.textInput]}
                        placeholder="Type a message">        
                        </TextInput>                        
                        </View>                   

                </View>
                <View style={styles.footer}>
                    <View>
                        <Icon 
                        name='message'
                        color='#f4eee8'
                        size={30}
                        /> 
                        <Text style={styles.footerText}>Learn & Chat</Text>                       
                    </View>
                    <View>
                        <Icon 
                        name='dashboard'
                        color='#f4eee8'
                        size={30}
                        />  
                        <Text style={styles.footerText}>Dashboard</Text>
                    </View>
                    <View>
                        <Icon 
                        name='account-circle'
                        color='#f4eee8'
                        size={30}
                        /> 
                        <Text style={styles.footerText}>Profile</Text>
                    </View>                                      
                </View>
            </View>
        );
    }
}

export default Button;  