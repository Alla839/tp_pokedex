import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Aide ({}) {

    const [etat, setEtat]= useState (false);// par defaut etat =false
    // etat ==> e min 
    // set Etat ==> E maj 
    return (
        <View>

        <Pressable onPress = {()=> setEtat ( !etat) }> 
            {/* on Press ==> p maj  */}
            <Text> {etat ?  "Masquer l'aide" :  "Afficher l'aide "}</Text>



        </Pressable>

        <Text> {etat  && "The bot supposed to help ur a** is not available at this moment, thanks to try again !!"} </Text>

        </View>
    )


}