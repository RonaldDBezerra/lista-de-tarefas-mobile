import React, { useState, useContext } from 'react'
import { TarefContext } from '../../context/TarefContext'
import { Button, Container, Input, Text, VStack } from 'native-base'
import Lottie from 'lottie-react-native';


export function Login({navigation}) {
  const {setName} = useContext(TarefContext)
  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoding] = useState(false)

  const loginApp = () => {
    setIsLoding(true)
    setName(userName)

    navigation.navigate("Tab")

    setIsLoding(false)
  }

  return(
      <VStack  width={"100%"} h={"100%"} alignItems={"center"} paddingTop={"20%"}>

        <Container w={"250px"} h={"250px"}>
            <Lottie source={require("../../asserts/animationLogin.json")} autoPlay loop />
        </Container>

        <Text  fontSize={"28px"} alignSelf={"center"}>Gostaria de inserir seu nome?</Text>

        <Input 
          fontSize={"14px"}
          placeholderTextColor={"black"} 
          placeholder='Qual seu nome?'
          value={userName}
          maxLength={8}
          onChangeText={setUserName}
          mt={"8px"} w={"80%"} 
          backgroundColor={"gray.300"}/>

        <Button isLoading={isLoading} bg={"blue.500"} mt={"15px"} w={"80%"} borderRadius={'2xl'} onPress={loginApp}>Entrar</Button>

      </VStack>
  )
} 