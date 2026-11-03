import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Compteur({}) {

const [count, setCount] = useState(0);

    return (
        <View>
        <View>
            <Text>Compteur = {count}</Text>
        <Pressable onPress = {() => setCount(count+1)}>
        
            {/* <onclick> */}
                <Text>+1</Text>
                {/* </onclick> */}
            
        </Pressable>

        <Pressable onPress = {() => setCount(count-1)}>
            
            {/* <onclick> */}
                <Text>-1</Text>
                {/* </onclick> */}

        </Pressable>
        <Pressable onPress = {() => setCount(0)} >
            {/* <onclick> */}
                <Text>RESET</Text>
                {/* </onclick> */}
            
        </Pressable>

        </View>
        </View>

    )
}