import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Button,
  Flex,
  FlatList,
  Icon,
  SectionList,
  ScrollView
} from "native-base"

import { ListTaref } from '../../components/ListTaref'
import { ListInfoTaref } from '../../components/ListInfoTaref'

export function Home(props) {

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen)
  }

  const data = [
  {
    title: "Total de tarefas",
    number: 10,
    date: "10/06/22",
    nome: "Ronald",
    tarefa: "Desenvolver Componente",
    status: "Aberta"
  },
  {
    title: "Abertas",
    number: 2,
    date: "10/06/22",
    nome: "Ronald",
    tarefa: "Desenvolver Componente",
    status: "Em andamento"
  },
  {
    title: "Concluidas",
    number: 3,
    date: "10/06/22",
    nome: "Ronald",
    tarefa: "Desenvolver Componente",
    status: "Concluida"
  },
  {
    title: "Concluidas",
    number: 3,
    date: "10/06/22",
    nome: "Ronald",
    tarefa: "Desenvolver Componente",
    status: "Concluida"
  },
]

  return(
    <Container safeArea marginLeft={0} marginTop={5}>
      <Avatar marginLeft={5} size={50} bg="green.500" source={{
        uri: "https://media.licdn.com/dms/image/D4D0BAQHHMDZtLlm1Qg/company-logo_200_200/0/1681754151318?e=1690416000&v=beta&t=5EbgdckZGcGSccfnwVsTFDT6lPIz9dzS5NUgkIZELx0"
    }}/>
      <Container marginLeft={5} alignItems={"center"} flex={0} flexDirection={"row"} display={"flex"} width={"full"}>
        <Flex marginTop={3} width={'56'}>
          <Heading fontSize={'4xl'}>
            Olá Tiago!
          </Heading>

          <Text bold fontSize={'md'} width={"md"} opacity={0.5}>
            Tenha um ótimo dia
          </Text>
        </Flex>
        <Flex marginLeft={'1'} marginTop={"2.5"}>
          <Button borderRadius={'full'} padding={'4'} size={"sm"} width={"32"} onPress={() => onChangeScreen("create")}>+ Add tarefa</Button>
        </Flex>
      </Container>


      <Container marginLeft={5}>
        <Flex marginLeft={4} justifyContent={'space-between'} width={'80'} direction='row' marginTop={'10'}>
          <Container>
            <Text fontSize={'xl'}>
              Minhas tarefas
            </Text>
          </Container>
          <Container>
            <Text fontSize={'xl'}>
              Todas as tarefas
            </Text>
          </Container>
        </Flex>
      </Container>
  

      <Flex width={'399px'}>
          <FlatList
            data={data}
            renderItem={({item}) => <ListTaref item={item} />} 
            horizontal
            showsHorizontalScrollIndicator={false}
          />
      </Flex>

      <ScrollView width={"390px"} h="450px" showsVerticalScrollIndicator={false}>

      <Flex marginLeft={5} width={'360px'}>
        <FlatList
          data={data}
          renderItem={({item}) => <ListInfoTaref item={item} />}
          />
      </Flex>
      </ScrollView>
    </Container>
  )
} 