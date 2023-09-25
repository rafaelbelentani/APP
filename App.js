import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/index/';
import PaginaPrincipal from './src/pages/PaginaPrincipal/index/';
import Cadastro from './src/pages/Cadastro/index/';
import CheckList from './src/pages/CheckList';
import Apontamento from './src/pages/Apontamento'
import Select1 from './src/pages/Apontamento/Select1';
import AddItem from './src/pages/additem';
import Contarpecas from './src/pages/contarpecas';
import Saldocliente from './src/pages/saldocliente';
import PedidoAdicional from './src/pages/pedidoadicional';
import Addcliente from './src/pages/adicionarcliente';
import Configuracao from './src/pages/Configuracao';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Pagina Principal" component={PaginaPrincipal} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Check List" component={CheckList} />
        <Stack.Screen name="CS" component={Apontamento} />
        <Stack.Screen name="Contar Peças" component={Contarpecas} />
        <Stack.Screen name="Saldo Cliente" component={Saldocliente} />
        <Stack.Screen name="Pedido Adicional" component={PedidoAdicional} />
        <Stack.Screen name="Adicionar Cliente" component={Addcliente} />
        <Stack.Screen name="Select1" component={Select1} />
        <Stack.Screen name="Configuração" component={Configuracao} />
        <Stack.Screen name="Adicionar Item" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
