import { Container, VStack } from 'native-base'
import React from 'react'
import Lottie from 'lottie-react-native';

export function Notification(props) {
  return(
      <VStack backgroundColor={"white"} safeArea h={'full'} w={'full'} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
          <Container w={"500px"} h={"500px"}>
              <Lottie source={require("../../asserts/109661-under-construction.json")} autoPlay loop />
          </Container>
      </VStack>
  )
} 