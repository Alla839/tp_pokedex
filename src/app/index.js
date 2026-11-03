import { useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import Aide from "../components/Aide";
import Compteur from "../components/Compteur";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";


const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];



export default function Index() {
  
  const [feu, setFeu] = useState (false); 

  const visible = feu ? POKEMONS.filter((p) => p.type == "Feu"):POKEMONS; 
  
  
  
  
  return (

    

    <ScrollView
      style = {{backgroundColor: "#c9afce"}}
    >
    
    {/* <Titre nombre = {POKEMONS.length} /> */}

    <Titre nombre = {visible.length} /> 
    <Pressable onPress = {() => setFeu (!feu)}
      style = {{
        backgroundColor : "black",
        padding : 10,
      }}
      
      >
        <Text style = {{color: "white"}}>
          {feu ? "tt afficher": "Vive le feu"}
        </Text>

      </Pressable>

    {visible.map ((p) => (
      <PokemonCard key = {p.number} 
      number = {p.number}
      name= {p.name}
      type= {p.type} 

      />
    ))}

    <Compteur/>  
    <Aide/>

    </ScrollView>
  );

}