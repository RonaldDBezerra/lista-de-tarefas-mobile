import React, { useState, useEffect, useRef, useContext } from 'react'
import { getRealm } from '../../services/realme'
import { TarefContext } from '../../context/TarefContext'
import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Button,
  Flex,
  FlatList,
  ScrollView
} from "native-base"

import { ListTaref } from '../../components/ListTaref'
import { ListInfoTaref } from '../../components/ListInfoTaref'
import { size } from 'lodash'

export function Home(props) {

  const [tarefDate, setTarefDate] = useState([{}])
  const [data, setData] = useState([{}])
  const {toggleTaref, loading, toggleLoading} = useContext(TarefContext)

  useEffect(() => {
    async function loadTaref() {
      const realm = await getRealm()

      const response = realm.objects('Taref')
      
      setTarefDate(response)

      tarefCount()
    }

    loadTaref()
  }, [loading])

    const tarefCount = async () => {
      const aberta = size(tarefDate.filter((elem) => elem.status === "Aberta"))
      const emAndamento = size(tarefDate.filter((elem) => elem.status === "Em andamento"))
      const todasAsTarefas = size(tarefDate)
  
      setData([{    
        title: "Total de tarefas",
        number: todasAsTarefas
      },
      {    
        title: "Aberta",
        number: aberta
      }, 
      {    
        title: "Em andamento",
        number: emAndamento
      }, 
    ])
    }

    const createTaref = (screen, action) => {
      toggleTaref(action)
      toggleLoading(!loading)
      onChangeScreen(screen)
    }

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen)
  }


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
          <Button borderRadius={'full'} padding={'4'} size={"sm"} width={"32"} onPress={() => createTaref("create", "create")}>+ Add tarefa</Button>
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
          data={tarefDate}
          renderItem={({item}) => <ListInfoTaref props={props} item={item}/>}
          />
      </Flex>
      </ScrollView>
    </Container>
  )
} 