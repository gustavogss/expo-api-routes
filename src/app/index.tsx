
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import { api } from '@/server/api';
import { useState } from 'react';
import { isAxiosError } from 'axios';

export default function app() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    async function handleSigmIn() {
        try {
            const response = await api.post("/user",{
                username: user,
                password: password
            })
            Alert.alert(`Seja bem-vindo, ${response.data.username}`)
        } catch (error) {
            if(isAxiosError(error)){
                return Alert.alert(error.response?.data)
            }

            Alert.alert("Não foi possível logar")
        }

        
    }

  return (
    <View style={styles.container}>
        <Text style={styles.btnTitle}>LOGIN</Text>
       <TextInput style={styles.input} placeholder='Usuário:' onChangeText={setUser}/>
       <TextInput style={styles.input} placeholder='Senha: ' secureTextEntry onChangeText={setPassword}/>
       <TouchableOpacity style={styles.btnLogin} onPress={handleSigmIn}>
        <Text style={styles.btnText}>Entrar</Text>
       </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 16
        
    },
    btnTitle:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    input:{
        width: '100%',
        height: 50,
        backgroundColor: '#eee',
        borderRadius: 5,
        padding: 16
    },
    btnLogin:{
        width: '100%',
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 16,      
        
    },
    btnText:{
        textAlign: 'center',
        color: 'white',        
        fontSize: 16
    }
});