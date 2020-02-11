/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const cadastrarNoticia = () => {
  alert('Cadastro realizado com sucesso.')
}

const pesquisarNoticia = () => {
  alert('Não localizamos nenhuma notícia relacionada a sua pesquisa.')
}

const editarNoticia = () => {
  alert('Notícia editada com sucesso.')
}

const excluirNoticia = () => {
  alert('Notícia exclusa com sucesso.')
}



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          
          

          <View style={styles.body}>
            
            <View style={styles.btn}>
                
                <Button
                title="Cadastrar"
                onPress={cadastrarNoticia}/> 
                <Button 
                title="Pesquisar"
                onPress={pesquisarNoticia}/>
            </View> 

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Titulo Noticia 1</Text>
              <Text style={styles.sectionDescription}>Texto Noticia 1</Text>
              <Text style={styles.sectionDescription}>Autor Noticia 1</Text>
              <View style={styles.btn}>
                <Button 
                title="Editar"
                onPress={editarNoticia}/> 
                <Button 
                title="Excluir"
                onPress={excluirNoticia}/> 
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Titulo Noticia 2</Text>
              <Text style={styles.sectionDescription}>Texto Noticia 2</Text>
              <Text style={styles.sectionDescription}>Autor Noticia 2</Text>
              <View style={styles.btn}>
                <Button 
                title="Editar"
                onPress={editarNoticia}/> 
                <Button 
                title="Excluir"
                onPress={excluirNoticia}/> 
              </View>  
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Titulo Noticia 3</Text>
              <Text style={styles.sectionDescription}>Texto Noticia 3</Text>
              <Text style={styles.sectionDescription}>Autor Noticia 3</Text>
              <View style={styles.btn}>
                <Button 
                title="Editar"
                onPress={editarNoticia}/> 
                <Button 
                title="Excluir"
                onPress={excluirNoticia}/> 
              </View>  
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  btn:{
    //marginTop: 8,
    //fontSize: 18,
    //fontWeight: '400',
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topo:{
    position: 'absolute',
  }
  
});

export default App;
