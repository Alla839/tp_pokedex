import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import POKEMONS from "../../data/pokemons";


// const POKEMONS = [
//   { number: 1, name: "Bulbizarre", type: "Plante" },
//   { number: 4, name: "Salamèche", type: "Feu" },
//   { number: 7, name: "Carapuce", type: "Eau" },
//   { number: 25, name: "Pikachu", type: "Électrik" },
//   { number: 37, name: "Goupix", type: "Feu" },
//   { number: 43, name: "Mystherbe", type: "Plante" },
// ];



export default function Index() {
  // fct
  const [captured, setCaptured] = useState ([]); 
  const [capturedonly, Setcapturedonly]= useState (false)

  // fct qui capture 

  const onCapture = (number) => {
    if (captured.includes (number)) {
      setCaptured (captured.filter ((n) => n!== number));
    } else {setCaptured ([...captured, number])}
  };

  const visible = capturedonly ? POKEMONS.filter((p) => captured.includes(p.number)):POKEMONS; 
  



  return (
    
    <View style={{ flex: 1 }} >
     {/* flatlist garde l'etat des premiers elments   */}

    <FlatList 

      data = {visible}
      extraData = {captured}
      keyExtractor = {(item)=> String (item.number)}
      numColumns = {2}
      
      ListHeaderComponent = {
        <View>
          <Text>{POKEMONS.length} pokémon. {captured.length} capturé 🎶🎶</Text>
          <Pressable onPress = {()=> Setcapturedonly (!capturedonly) }
           style = {{
            backgroundColor : "purple",
              padding : 10,}}
          >

          <Text style={{ color: "white" }}>
          {capturedonly ? "Tt afficher" : "Mes captures"}</Text>
          </Pressable>
        </View>

      }

     renderItem = {({item}) => (
     
     <Pressable onPress= {() => router.push(`/pokemon/${item.number}`)}> 
      <PokemonCard number = {item.number} name = {item.name} type=  {item.type}
      captured = {captured.includes (item.number)}
      onCapture = {() => onCapture (item.number)} /> 
      
    
    
    </Pressable>
      )}
      
    />
    
    </View>

  );
}
      
// <Compteur/>  
//     <Aide/>  
//     {/* // <Titre nombre = {POKEMONS.length} /> */}

//     <Titre nombre = {POKEMONS.length} /> 
//     <Pressable onPress = {() => Setcapturedonly (!capturedonly)}
//       
//       >
        
        
//         {/* il marche  */}
//         {/* <Text style = {{color: "white"}}>
//           {feu ? "tt afficher": "Vive le feu"}
//         </Text> */}

//       </Pressable>

//     {/* {POKEMONS.map ((p) => (
//       <PokemonCard key = {p.number} 
//       number = {p.number}
//       name= {p.name}
//       type= {p.type} 

//       />
//     ))} */}

    

//     {/* </ScrollView> */}
//     </View>
    
    
//   );

// }
