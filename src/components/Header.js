import React, { useState, useEffect, useRef } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

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
  ScrollView
} from "native-base"

export function Header({props}) {

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen)
  }

  return(
    <Container width={"full"}>
      <Flex paddingTop={'10'} padding={6} direction='row' width={"395px"} backgroundColor={"#3a49f9"} alignItems={"center"}>
        <Container marginRight={9}>
          <Icon name="arrow-left-thin" size={22} color={"#e5eafc"} onPress={() => onChangeScreen("home")} />
        </Container>
        <Heading marginLeft={'16'} color={"#e5eafc"}>
          Criar tarefa
        </Heading>
      </Flex>
    </Container>
    )
}