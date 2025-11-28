import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import Button from '@/components/shared/Button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import IniciarTela from '@/components/programacao/IniciarTela';

export default function HomeScreen() {
  return (
    // ➤ Aqui você escolhe qual versão quer renderizar:
    // 1) A versão com ParallaxScrollView (com tela completa)
    // 2) Ou apenas <IniciarTela/>

    // <<< OPÇÃO 1 — Mantive essa como padrão:
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo ao Connect!</ThemedText>
        <HelloWave />
      </ThemedView>

      <Button title="connect IF" onPress={() => console.log('hello')} key={12} />

      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>

      {/* Descomente aqui se quiser abrir a tela de login direto */}
      {/* <IniciarTela /> */}

      <Link href="/sorteio" asChild>
        <TouchableOpacity
          style={{
            marginTop: 24,
            padding: 12,
            backgroundColor: '#2563EB',
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Ir para os filtros !
          </Text>
        </TouchableOpacity>
      </Link>
    </ParallaxScrollView>

    // <<< OPÇÃO 2 — Caso queira manter só a tela inicial:
    // <IniciarTela />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
