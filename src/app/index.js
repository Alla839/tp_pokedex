import { ScrollView } from "react-native";
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
  return (

    <ScrollView
      style = {{backgroundColor: "#c9afce"}}
    >
    
    <Titre nombre = {POKEMONS.length} />


    {POKEMONS.map ((p) => (
      <PokemonCard key = {p.number} 
      number = {p.number}
      name= {p.name}
      type= {p.type} 

      />
    ))}

    

    </ScrollView>
  );

}