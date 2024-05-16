
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Text,View } from "react-native";
import Head from "../componentes/Head";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Footer from "../componentes/Footer";

interface Produto{
    id: number;
    nome: string;
    ingredientes: string;
    preco: number;
    imagem?: string;
}

const EditarProduto: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [preco, setPreco] = useState<string>('0');
    const [imagem, setImagem] = useState<any>('');

const navigation = useNavigation();
const route = useRoute();

useEffect(() => {
    const{produto} = route.params;
    
    setNome(produto.nome);
    setIngredientes(produto.ingredientes);
    setPreco(produto.preco);
    setImagem(produto.imagem);
})
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor= "red" barStyle= "light-content"/>
            <Head/>

            <View style={styles.form}>
                <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                />

               <TextInput
                style={styles.input}
                value={ingredientes}
                onChangeText={setIngredientes}
                multiline
                />

                <TextInput
                style={styles.input}
                value={preco}
                onChangeText={setPreco}
                keyboardType="numeric"
                />

             <TouchableOpacity style={styles.button}
             onPress={() => navigation.goBack()} >
             <Text style={styles.buttonText}>Voltar</Text>
             </TouchableOpacity>

               <View style={styles.menuList}></View>
               <Footer/> 

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
       backgroundColor: "red",
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imgeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    menuList: {
        flexGrow: 1
    },
})

 export default EditarProduto;