import React, { useState, useEffect, useContext } from 'react';
import { getRealm } from '../../services/realme';
import { TarefContext } from '../../context/TarefContext';
import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Button,
  FlatList,
  ScrollView,
  VStack,
  SectionList,
} from 'native-base';

import { ListTaref } from '../../components/ListTaref';
import { ListInfoTaref } from '../../components/ListInfoTaref';
import { size } from 'lodash';

export function Home(props) {
  const [tarefDate, setTarefDate] = useState([]);
  const [data, setData] = useState([{}]);
  const { toggleTaref, loading, toggleLoading, name } =
    useContext(TarefContext);

  useEffect(() => {
    const test = async () => {
      const realm = await getRealm();
      const response = realm.objects('Taref');

      const aberta = size(response.filter(elem => elem.status === 'Aberta'));
      const emAndamento = size(
        response.filter(elem => elem.status === 'Em andamento')
      );
      const todasAsTarefas = size(response);

      setTarefDate(response);

      setData([
        {
          title: 'Total de tarefas',
          number: todasAsTarefas,
        },
        {
          title: 'Aberta',
          number: aberta,
        },
        {
          title: 'Em andamento',
          number: emAndamento,
        },
      ]);
    };

    test();
  }, [loading]);

  const createTaref = (screen, action) => {
    toggleTaref(action);
    toggleLoading(!loading);
    onChangeScreen(screen);
  };

  const onChangeScreen = screen => {
    props.navigation.navigate(screen);
  };

  const renderTarefDate = () => {
    if (size(tarefDate) < 1) {
      return (
      <>
        <Box
          w={'full'}
          marginTop={"35%"}
          justifyContent={'center'}
          alignItems={'center'}
          >
          <Heading color={"gray.800"}>Nenhuma tarefa adicionada!</Heading>
        </Box>
      </>
      );
    }
    return (
      <ScrollView
        width={'390px'}
        h="450px"
        showsVerticalScrollIndicator={false}
      >
        <Box marginLeft={5} paddingBottom={'110px'} width={'100%'}>
          {tarefDate.map(item => (
            <ListInfoTaref props={props} item={item} key={item._id} />
          ))}
        </Box>
      </ScrollView>
    );
  };

  return (
    <VStack safeArea marginLeft={0} marginTop={5}>
      <Avatar
        marginLeft={5}
        size={50}
        bg="green.500"
        source={{
          uri: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000',
        }}
      />
      <Container
        marginLeft={5}
        alignItems={'center'}
        flex={0}
        flexDirection={'row'}
        display={'flex'}
        width={'full'}
      >
        <Box marginTop={3} width={'56'}>
          <Heading fontSize={'4xl'}>Olá {name ? name : 'Usuário'}</Heading>

          <Text bold fontSize={'md'} width={'md'} opacity={0.5}>
            Tenha um ótimo dia
          </Text>
        </Box>

        <Box marginLeft={'1'} marginTop={'2.5'}>
          <Button
            backgroundColor={'blue.500'}
            borderRadius={'full'}
            padding={'4'}
            size={'sm'}
            width={'32'}
            onPress={() => createTaref('create', 'create')}
          >
            + Add tarefa
          </Button>
        </Box>
      </Container>

      <Container marginLeft={5}>
        <Box
          alignItems={'center'}
          ml={4}
          justifyContent={'space-between'}
          width={'80'}
          direction="row"
          marginTop={'10'}
        >
          <Container>
            <Text fontSize={'xl'}>Minhas tarefas</Text>
          </Container>
        </Box>
      </Container>

      <FlatList
        data={data}
        renderItem={({ item }) => <ListTaref item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {renderTarefDate()}
    </VStack>
  );
}
