import { View, Text, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

export default function SorteioScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Filtros</Text>
      <Link href="/sorteio/modal" asChild>
        <TouchableOpacity style={{ padding: 12, backgroundColor: '#2563EB', borderRadius: 8 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Abrir filtros</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}