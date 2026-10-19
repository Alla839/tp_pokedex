import { StyleSheet, Text, View } from "react-native";

export default function Titre ({nombre}){
    return (
    <View>
    
    <Text style = {Styles.Titre}> Mon Pokédex </Text>
    <Text>{nombre} pokémon</Text>

    </View> 
    );
}


const Styles = StyleSheet.create ({

Titre : {
    fontSize: 30,
    fontWeight: 'bold',


},


});
