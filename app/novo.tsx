import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import { useState} from 'react';
 
export default function novoPage(){

    // Função Hulk: Que retorna uma variável (contador),
    // que representa o estado & uma função(setContador) que altera o estado dessa variável dentro de um vetor. //
    const [contador, setContador] = useState(0); // Os [] são usados para desetruturar vetores //

    function incrementar(){
        // setContador(contador + 1); // Forma não recomendada //
        setContador((valorAnterior) => valorAnterior + 1);
    }

    const [nome, setNome] = useState(" ");
    return(
        <View style={{flex: 1}}>

            {/*
            <Text>Contador: {contador}</Text>
            <Button title= "Clique aqui!" onPress={incrementar}/> 
            */}   
                
            <Text>Nome: {nome}</Text>
            <TextInput style={styles.inputName} 
                value={nome}
                onChangeText={(novoNome) => setNome(novoNome)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputName: {
        borderColor: "#000000",
        borderWidth: 2,
        margin: 5,
    },
});
