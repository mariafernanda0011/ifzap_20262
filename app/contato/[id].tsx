import { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { getContato, atualizarContato } from "@/src/api/contatosApi";
import FormularioContato from "@/src/componentes/FormularioContato";
import { ContatoType } from "@/src/tipos/types";

export default function EditarContato() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [contato, setContato] = useState<ContatoType | null>(null);

  useEffect(() => {
    async function carregarContato() {
      const dado = await getContato(Number(id));
      setContato(dado);
    }
    carregarContato();
  }, [id]);

  async function salvarEdicao(contatoAtualizado: ContatoType) {
    await atualizarContato(contatoAtualizado);
    alert("Contato atualizado!");
    router.back();
  }

  return (
    <>
      {contato && (
        <FormularioContato contato={contato} onSalvar={salvarEdicao} />
      )}

      {!contato && <Text>Carregando...</Text>}
    </>
  );
}

const styles = StyleSheet.create({});
