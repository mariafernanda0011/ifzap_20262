import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { criarContato } from '@/src/api/contatosApi';

export default function newPage() {

    /*
    // Função Hulk: Que retorna uma variável (contador),
    // que representa o estado & uma função(setContador) que altera o estado dessa variável dentro de um vetor. //
    const [contador, setContador] = useState(0); // Os [] são usados para desetruturar vetores //

    function incrementar() {
        // setContador(contador + 1); // Forma não recomendada //
        setContador((valorAnterior) => valorAnterior + 1);
    }
    */

    const [nome, setNome] = useState(" ");
    const [telefone, setTelefone] = useState("");
    const router = useRouter();

    function salvarContato() { // Retorna uma Promisse
        criarContato(nome, telefone).then(() => {
            alert("Contato criado com sucesso!");
            router.back();
        }).catch((error) => {
            alert("Erro ao criar contato: " + error.mensage);
        }).finally(() => {
            console.log("Operação de criação de contato finalizada.");
        });
    }


    return (
        <View style={styles.container}>

            {/*
            <Text>Contador: {contador}</Text>
            <Button title= "Clique aqui!" onPress={incrementar}/> 
            */}

            <Text>Nome:</Text>
            <TextInput style={styles.input}
                value={nome}
                onChangeText={(novoNome) => setNome(novoNome)}
            />

            <Text>Telefone:</Text>
            <TextInput style={styles.input}
                value={telefone}
                onChangeText={(novoTelefone) => setTelefone(novoTelefone)}
            />

            <Button title="Salvar"
                onPress={() => salvarContato()}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 15,
    },

    input: {
        borderColor: "#000000",
        borderWidth: 2,
        margin: 5,
    },

});
