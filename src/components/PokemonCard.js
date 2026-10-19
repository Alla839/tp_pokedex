import { Image, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({number, name, type}) {

    return (

        <View style = {{flexDirection : "row", alignItems : "center"}}>

            <Image source = {{uri : `${ARTWORK }${number}.png`}}
            style = {{width: 80, height: 80}}/>
            
            <View style = {{marginLeft: 15}}>

            <Text>#{number}</Text>
            <Text style = {{fontSize: 18, fontWeight: "bold"}}>{name}</Text>
            <Text>{type}</Text>
            
            </View>



        </View>

    );
}




