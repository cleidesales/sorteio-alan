import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";

import { saveFilters } from "../../services/sorteio/filters";

export default function AdminFiltersModal({ visible, onClose }) {
  const [minPresenca, setMinPresenca] = useState("");
  const [minNotaQuiz, setMinNotaQuiz] = useState("");
  const [minFeedbacks, setMinFeedbacks] = useState("");
  const [minVotosPerguntas, setMinVotosPerguntas] = useState("");
  const [minEngajamento, setMinEngajamento] = useState("");
  const [dataAtividade, setDataAtividade] = useState("");

  function aplicarFiltros() {
    saveFilters({
      minPresenca,
      minNotaQuiz,
      minFeedbacks,
      minVotosPerguntas,
      minEngajamento,
      dataAtividade,
    });

    console.log("Filtros aplicados:", {
      minPresenca,
      minNotaQuiz,
      minFeedbacks,
      minVotosPerguntas,
      minEngajamento,
      dataAtividade,
    });

    onClose();
  }

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 16,
            padding: 20,
            maxHeight: "85%",
          }}
        >
          <ScrollView>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Filtros de Usuários
            </Text>

            {/* ===========================
                INPUT PADRÃO
                =========================== */}
            <View style={{ marginBottom: 15 }}>
              <Text>Presença mínima:</Text>
              <TextInput
                placeholder="Ex: 3"
                keyboardType="numeric"
                value={minPresenca}
                onChangeText={setMinPresenca}
                style={styles.input}
              />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text>Nota mínima no Quiz:</Text>
              <TextInput
                placeholder="0 a 10"
                keyboardType="numeric"
                value={minNotaQuiz}
                onChangeText={setMinNotaQuiz}
                style={styles.input}
              />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text>Feedbacks mínimos:</Text>
              <TextInput
                placeholder="N° de feedbacks"
                keyboardType="numeric"
                value={minFeedbacks}
                onChangeText={setMinFeedbacks}
                style={styles.input}
              />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text>Votos mínimos em perguntas:</Text>
              <TextInput
                placeholder="Ex: 10"
                keyboardType="numeric"
                value={minVotosPerguntas}
                onChangeText={setMinVotosPerguntas}
                style={styles.input}
              />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text>Engajamento geral mínimo:</Text>
              <TextInput
                placeholder="Score mínimo"
                keyboardType="numeric"
                value={minEngajamento}
                onChangeText={setMinEngajamento}
                style={styles.input}
              />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text>Atividade após data:</Text>
              <TextInput
                placeholder="AAAA-MM-DD"
                value={dataAtividade}
                onChangeText={setDataAtividade}
                style={styles.input}
              />
            </View>

            {/* BOTÃO APLICAR */}
            <Pressable
              onPress={aplicarFiltros}
              style={{
                backgroundColor: "black",
                padding: 15,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Aplicar Filtros
              </Text>
            </Pressable>

            {/* BOTÃO FECHAR */}
            <Pressable
              onPress={onClose}
              style={{
                padding: 12,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "red", textAlign: "center" }}>Cancelar</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
};
