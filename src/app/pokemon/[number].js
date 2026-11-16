import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import POKEMONS from "../../data/pokemons";

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

export default function pagePokemon () {
    const {number} = useLocalSearchParams ();

    const pokemon = POKEMONS.find((p) => p.number === Number(number)) ;


    return (
        <View style={{ flex: 1, alignItems: "center", padding: 24 }}> 
            <Stack.Screen options = {{title:pokemon.name }}/>

            <Image source={{ uri: `${ARTWORK}${number}.png` }} style={{ width: 250, height: 250 }} />
            <Text>#{pokemon.number}</Text>
            <Text>{pokemon.type}</Text>

        </View>
    );
}