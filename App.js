import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)

    const calcImc=()=> {
        if (peso <= 0 || !peso) {
            alert('Informe o Peso')
            return
        }
        if (altura <= 0 || !altura) {
            alert('Informe a Altura')
            return
        }
        const r = peso / (Math.pow(altura, 2))
        setResultado(r.toFixed(2))

    }

    return (
        <SafeAreaView style={estilos.corpo}>

            <View style={estilos.bloco}>
                <Text> CALCURADORA DE IMC</Text>
            </View>

            <View style={estilos.bloco}>
                <Text>Informe o Peso: </Text>
                <TextInput
                    style={estilos.txt}
                    autoFocus={true}
                    keyboardType={'numeric'}
                    onChangeText={text=> setPeso(text)}
                ></TextInput>

            </View>

            <View style={estilos.bloco}>
                <Text>Imforme a Altura: </Text>
                <TextInput
                    style={estilos.txt}
                    autoFocus={false}
                    keyboardType={'numeric'}
                    onChangeText={text=> setAltura(text)}
                ></TextInput>

            </View>

            <View style={estilos.bloco}>
                <TouchableHighlight
                    style={estilos.btnCalc}
                    onPress={() => calcImc()}
                >
                <Text style={estilos.txtBtn}>Calcular IMC</Text>

                </TouchableHighlight>
            </View>

            <View style={estilos.bloco}>
                <Text> IMC IGUAL A : {resultado} </Text>
            </View>

            <View style={estilos.bloco}>
                <Image
                    source={require('./assets/tabela.jpg')}
                    style={estilos.tabela}
                />
            </View>

        </SafeAreaView>
                         
             

       
    
  );
}

const estilos = StyleSheet.create({
    corpo: {
        padding:40,
    },
    bloco: {
        marginBottom:20,
    },
    txt: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius:10,
    },
    btnCalc: {
        backgroundColor:'#048',
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        borderRadius:10,

    },
    txtBtn: {
        fontSize: 16,
        textTransform: 'uppercase',
        color:'#fff' 
    },
    tabela: {
        width: '100%',
        resizeMode: 'contain',
        padding:10
       
    }
});
