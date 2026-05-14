import { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { criarContato } from '@/src/api/contatosApi';
import FormularioContato from '@/src/componentes/FormularioContato';
import { ContatoType } from '@/src/tipos/types';

export default function AdicionarContato() {

    /*
    Funções Hooks: Retorna uma variável (contador),
    que representa o estado & uma função(setContador) que altera o estado dessa variável dentro de um vetor. 
    const [contador, setContador] = useState(0); // Os [] são usados para desetruturar vetores //

    function incrementar() {
        setContador(contador + 1); // Forma não recomendada 
        setContador((valorAnterior) => valorAnterior + 1);
    }
    */
    const router = useRouter();
    const [carregando, setCarregando] = useState(false);

    async function salvarContato(contato: ContatoType) { // Retorna uma Promisse - é uma função assíncrona
        
        try {
            setCarregando(true);
            await criarContato(contato.nome, contato.telefone);
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
                <FormularioContato contato={{ id: 0, nome: "", telefone: "", imagem: "", online: false }} 
                onSalvar={salvarContato} 
                />
            )}
            {carregando && ( // Se estiver carregando 
                <View>
                    <Text> Salvando contato...</Text>
                </View>
            )}

        </>
    );
}

