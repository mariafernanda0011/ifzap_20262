import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { criarContato } from '@/src/api/contatosApi';

export default function newPage() {

    /*
    Funções Hooks: Que retorna uma variável (contador),
    que representa o estado & uma função(setContador) que altera o estado dessa variável dentro de um vetor. 
    const [contador, setContador] = useState(0); // Os [] são usados para desetruturar vetores //

    function incrementar() {
        setContador(contador + 1); // Forma não recomendada 
        setContador((valorAnterior) => valorAnterior + 1);
    }
    */

    const [nome, setNome] = useState(" ");
    const [telefone, setTelefone] = useState("");
    const router = useRouter();
    const [carregando, setCarregando] = useState(false);

    async function salvarContato() { // Retorna uma Promisse - é uma função assíncrona
        
        try {
            setCarregando(true);
            await criarContato(nome, telefone);
            alert("Contato criado com sucesso!");
            router.back();
        } catch (erro) {
            alert("Erro ao criar contato.");
        } finally {
            setCarregando(false);
        }

        /*
        criarContato(nome, telefone)
        .then(() => {
            alert("Contato criado com sucesso!");
            router.back();
        }).catch((error) => {
            alert("Erro ao criar contato: " + error.mensage);
        }).finally(() => {
            console.log("Operação de criação de contato finalizada.");
        });
        */
    }


    return (
        <> {/* Fragmento - componente genérico */}
            {!carregando && ( // Se não estiver carregando 
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
                        onPress={() => salvarContato() }
                    />

                </View>
            )}
            {carregando && ( // Se estiver carregando 
                <View>
                    <Text> Salvando contato...</Text>
                </View>
            )}
        </>
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
