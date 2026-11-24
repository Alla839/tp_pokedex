import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
// import POKEMONS from "../../data/pokemons";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";



const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

export default function pagePokemon () {
    const {number} = useLocalSearchParams ();
    const [pokemon, setPokemon] = useState(null);

    // const pokemon = pokemon.find((p) => p.number === Number(number)) ;


     useEffect(() => {
    async function charger() {
      const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
      const data = await reponse.json();
      setPokemon(data);
    }
    charger();
  }, [number]);

  if (!pokemon) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

    return (
        <View style={{ flex: 1, alignItems: "center", padding: 24 }}> 
            <Stack.Screen options = {{title:pokemon.name }}/>

            <Image source={{ uri: `${ARTWORK}${pokemon.id}.png` }} style={{ width: 250, height: 250 }} />
            <Text>#{pokemon.id}</Text>
            {/* <Text>{pokemon.type}</Text> */}

            <Text style={{ fontSize: 28, fontWeight: "bold" }}>{pokemon.name}</Text>
            <Text>Type : {pokemon.types[0].type.name}</Text>
            <Text>Taille : {pokemon.height / 10} m</Text>
            <Text>Poids : {pokemon.weight / 10} kg</Text>

        </View>
    );
}