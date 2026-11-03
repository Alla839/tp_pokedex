import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({ number, name, type }) {
    const [captured, setcaptured] = useState(false);

    return (

        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: captured ? "#d6255d" : "#3bed70" }}>

            <Image source={{ uri: `${ARTWORK}${number}.png` }}
                style={{ width: 80, height: 80 }} />

            <View style={{ marginLeft: 15 }}>

                <Text>#{number}</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
                <Text>{type}</Text>

            </View>

            <Pressable
                onPress={() => setcaptured(!captured)}
                style={{ backgroundColor: captured ? "#9234f0" : "#f9f103", padding : 8, marginLeft: "auto" }}
            >
                <Text style={{ color: captured ? "white" : "#111213" }}>
                    {captured ? "capturé ✌️" : "Capturer"}
                </Text>
            </Pressable>

        </View>

    );
}




