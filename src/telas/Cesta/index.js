import React, { useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../componentes/Texto';

import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import { useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native'

export default function Cesta() {
  const route = useRoute();
  const { topoCesta, tituloItens } = useTextos();

  const {detalhes, itens, produtor} = route.params

  const animation = useRef(null);

  return <>
    <FlatList
      data={itens}
      renderItem={Item}
      keyExtractor={({ nome }) => nome }
      ListHeaderComponent={() => {
        return <>
          <Topo titulo={topoCesta} />
          <LottieView
                source={require('../../assets/banana_girl.json')} 
                style={estilos.animacao}
                loop={true}
                ref={animation}
                autoPlay={true}
          />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} produtor={produtor} />
            <Texto style={estilos.titulo}>{ tituloItens }</Texto>
          </View>
        </>
      }}
      style={estilos.lista}
    />
  </>
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  animacao: {
    position:'absolute', 
    height:250, 
    marginHorizontal: 43,
    marginVertical: 5
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});