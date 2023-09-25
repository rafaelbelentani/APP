import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../pages/Login/index'
import PaginaPrincipal from '../pages/PaginaPrincipal'
import CheckList from '../pages/CheckList'
import AddItem from "../pages/additem";
import Contarpecas from "../pages/contarpecas";
import Saldocliente from "../pages/saldocliente";
import PedidoAdicional from "../pages/pedidoadicional";
import Configuracao from "../pages/Configuracao";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
            <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Pagina Principal"
            component={PaginaPrincipal}
            options={{ headerShown: false}}
            />

              <Stack.Screen
            name="Check List"
            component={CheckList}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="CS"
            component={CS}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Contar Peças"
            component={Contarpecas}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Saldo Cliente"
            component={Saldocliente}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="Pedido Adicional"
            component={PedidoAdicional}
            options={{ headerShown: false}}
            />

   

             <Stack.Screen
            name="Configuração"
            component={Configuracao}
            options={{ headerShown: false}}
            />    

            <Stack.Screen
            name="Adicionar Item"
            component={AddItem}
            options={{ headerShown: false}}
            />  
         
        </Stack.Navigator>
    )
}