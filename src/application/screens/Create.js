import React, { useState, useEffect, useRef, useContext } from 'react'

import { Header } from '../../components/Header'
import { getRealm } from '../../services/realme'
import { TarefContext } from '../../context/TarefContext' 
import { size } from 'lodash';

import Icon from "react-native-vector-icons/MaterialIcons"
import uuid from 'react-native-uuid';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert } from 'react-native';

import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Button,
  Flex,
  FlatList,
  SectionList,
  ScrollView,
  FormControl,
  Input,
  Divider,
  Select,
} from "native-base"


export function Create(props) {

  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false)
  const {tarefEdit, getTarefId, toggleTaref, actionTaref, toggleLoading, loading} = useContext(TarefContext)
  
  const [title, setTitle] = useState('')
  const [responsible, setResponsible] = useState('selecionar')
  const [description, setDescription] = useState('')
  const [dateFormated,  setDateFormated] = useState('10/06/2002')
  const [status, setStatus] = useState("Aberta")
  
  useEffect(() => {
    if (actionTaref === "edit") {
      const {tarefId} = tarefEdit
      setTitle(tarefId.title)
      setResponsible(tarefId.responsible)
      setDateFormated(tarefId.date)
      setDescription(tarefId.description)
      setStatus(tarefId.status)
    } else if (actionTaref === "create") {
      setTitle("")
      setResponsible("Selecionar")
      setDescription("")
      setDateFormated("10/06/2002")
      setStatus("Aberta")
    }

  }, [loading])
  
  const onChange = (event, selectedDate) => {
    const year = selectedDate.getFullYear()
    let month = selectedDate.getMonth() + 1
    let day = selectedDate.getDate()
    
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    
    const newFormat = `${day}/${month}/${year}`

    setDate(selectedDate);
    setShow(false)
    setDateFormated(newFormat)
  };

  const saveTaref = async () => {
    const data = {
      _id: uuid.v4(),
      title,
      responsible,
      date: dateFormated,
      description,
      status
    }

    const realm = await getRealm();

    try {

      realm.write(() => {
        const create = realm.create('Taref', data)

      })

      Alert.alert("cadastro", "cadastrado com sucesso")

    } catch (e) {
      console.log(e)
    }



    setTitle("")
    setResponsible("Selecionar")
    setDescription("")
    setDateFormated("10/06/2002")
    setStatus("Aberta")
  }

  const editTaref = async () => {
    const data = {
      _id: tarefEdit.tarefId._id,
      title,
      responsible,
      date: dateFormated,
      description,
      status
    }

    const realm = await getRealm();

    try {

      realm.write(() => {
        const response = realm.create('Taref', data, 'modified')
        toggleLoading(!loading)
      })

      Alert.alert("Editar", "Editado com sucesso")

    } catch (e) {
      console.log(e)
    }
  }
  

  return(
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box width={"510px"} backgroundColor={"#3a49f9"}>

        <Header props={props} />

        <Box padding={6} width={'400px'} backgroundColor={"#3a49f9"}>
            <Text color={"#e5eafc"} fontSize={'2xl'}>
              Título da tarefa
            </Text>
            <Input value={title} onChangeText={setTitle} bold color={"white"} borderWidth={0} fontSize={22} borderColor={"#3a49f9"} borderBottomColor={"white"}/>
            <Divider my="2" _light={{bg: "white"}} />
        </Box>

        <Box padding={6} width={'400px'} backgroundColor={"#3a49f9"}>
            <Text color={"#e5eafc"} fontSize={'2xl'}>
              Responsável
            </Text>
            <Select
              onValueChange={setResponsible}
              dropdownIcon={<Icon name="keyboard-arrow-down" size={22} color={"#e5eafc"} />} 
              placeholder='Selecionar'
              placeholderTextColor={"#e5eafc"}
              color={"white"} 
              borderWidth={0} 
              fontSize={22} 
              borderColor={"#3a49f9"} 
            >
              <Select.Item label="Ronald" value="Ronald" />
              <Select.Item label="DSG Tecnology" value="DSG Tecnology" />
              <Select.Item label="MAXIPAS" value="maxipas" />
            </Select>
            <Divider my="2" _light={{bg: "white"}} />
        </Box>

        <Box padding={6} width={'400px'} backgroundColor={"#3a49f9"}>
            <Text color={"#e5eafc"} fontSize={'2xl'}>
              Prazo
            </Text>
            <Flex direction='row' alignItems={"center"}>
              <Heading color={"#e5eafc"}>{dateFormated}</Heading>
              <Button backgroundColor={"#3a49f9"} onPress={() => setShow(true)} marginLeft={180}>
                <Icon name="calendar-today" size={22} color={"#e5eafc"} />
              </Button>
            </Flex>
            {show && (
              <DateTimePicker  
              value={date}
              mode='date'
              display='default'
              onChange={onChange}
              />
            )}
            <Divider marginBottom={10} my="2" _light={{bg: "white"}} />
        </Box>

        <Box borderTopRadius={'xl'} marginLeft={0} padding={6} width={'393px'} backgroundColor={"white"}>
            <Text fontSize={'2xl'}>
              Descrição
            </Text>
            <Input value={description} onChangeText={setDescription} marginTop={3} bold fontSize={22} borderWidth={1} borderColor={"gray.300"} borderRadius={'xl'}/>
        </Box>

        <Box padding={6} width={'400px'} backgroundColor={"white"}>
            <Text marginBottom={3} fontSize={'2xl'}>
              Status
            </Text>
            <Flex direction='row' color={"black"}>
              <Button
                onPress={() => setStatus("Aberta")}
                borderColor={(status === "Aberta") ? "#6fea8b" : "#e5eafc"} 
                borderWidth={2} 
                borderRadius={'full'}
                marginLeft={"0px"}
                marginRight={"10px"} 
                width={"100px"} 
                height={"40px"}
                padding={2}
                backgroundColor={"#e5eafc"}
              >
                <Text bold marginBottom={0}>
                  Aberta
                </Text>
              </Button>
              <Button
                onPress={() => setStatus("Em andamento")}
                borderColor={(status === "Em andamento") ? "#6fea8b" : "#e5eafc"} 
                borderWidth={2} 
                borderRadius={'full'}
                marginLeft={"1px"}
                marginRight={"10px"} 
                width={"120px"} 
                height={"40px"}
                padding={2}
                backgroundColor={"#e5eafc"}
              >
                <Text bold  marginBottom={0}>
                  Em andamento
                </Text>
              </Button>
              <Button
                onPress={() => setStatus("Concluída")}
                borderColor={(status === "Concluída") ? "#6fea8b" : "#e5eafc"} 
                borderWidth={2} 
                borderRadius={'full'}
                marginLeft={"1px"} 
                width={"100px"} 
                height={"40px"}
                padding={2}
                backgroundColor={"#e5eafc"}
              >
                <Text bold  marginBottom={0}>
                  Concluída
                </Text>
              </Button>
            </Flex>
        </Box>
        
        <Box marginLeft={0} padding={6} width={'393px'} backgroundColor={"white"}>
            <Button onPress={(actionTaref === "create") ? saveTaref : editTaref} backgroundColor={"#3a49f9"} borderRadius={"full"} height={'16'}>
              <Heading color="white">{(actionTaref === "create") ? 'Criar tarefa' : 'Editar Tarefa'}</Heading>
            </Button>
        </Box>

      </ Box>
    </ScrollView>
  )
} 