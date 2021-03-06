import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../helpers/Styles';
import { createHeader } from '../helpers/NavigationOptions';

export default class TrolInfoScreen extends Component {
  static navigationOptions = {
    ...createHeader('TROL ry')
  };

  render () {
    return (
      <ScrollView style={styles.background}>
        <View style={[styles.container, styles.containerLast]}>
          <Text style={[styles.text, styles.title]}>Tradenomiopiskelijaliitto TROL ry</Text>
          <Text style={styles.text}>Tradenomiopiskelijaliitto TROL ry on valtakunnallinen tradenomiopiskelijoiden
            edunvalvontajärjestö, jonka jäseneksi voivat liittyä kaikki tradenomi- ja BBA- opiskelijat. TROL on
            Tradenomiliitto TRAL ry:n itsenäinen jäsenliitto.</Text>
          <Text style={styles.text}>Toimintamme keskittyy tradenomiopiskelijoiden ammatilliseen edunvalvontaan ja
            tutkintoidentiteetin vahvistamiseen. Olemme aidosti kiinnostuneita tutkintomme kehittämisestä, sen
            tunnettuuden kasvattamisesta sekä opiskelijoiden työelämätietouden lisäämisestä.</Text>
          <Text style={styles.text}>Edunvalvonnassa keskeisiä painopistealueita ovat opiskeluajan koulutuspoliittiset
            kysymykset, urasuunnittelu sekä opiskelun ja työelämän yhteensovittaminen. </Text>
          <Text style={styles.text}>Autamme jäseniämme esimerkiksi työharjoitteluun ja kesätöihin liittyvissä
            kysymyksissä. Lisäeväitä opiskelijan arkeen tuomme myös yhteisillä tapahtumilla, koulutuksilla, bileillä ja
            matkoilla!</Text>
          <Text style={styles.text}>Toiminnasta vastaa vuosittain liittokokouksessa valittava hallitus, joka koostuu eri
            jäsenyhdistysten edustajista. Lisäksi toimintaa koordinoi liiton toiminnanjohtaja. Liitto toimii
            liittokokouksessa yhdessä päätetyn toimintasuunnitelman mukaisesti. TROL on perustettu vuonna 2002 ja
            jäseniä on yli 13 000.</Text>
          <Text style={styles.text}>TROL vaikuttaa Tradenomiliitto TRAL ry:n toimintaan; edustajamme osallistuvat TRAL:n
            hallituksen, valtuuston sekä toimikuntien toimintaan.</Text>
          <Text style={styles.text}>TROL on myös osa akavalaista korkeakouluopiskelijoiden yhteisöä; Akavan
            opiskelijoiden valtuuskunta edustaa yli 102 000 korkeakouluopiskelijaa ammattikorkeakoulu- ja
            yliopistosektorilla. TROL:n edustajat osallistuvat aktiivisesti Akavan opiskelijoiden toimintaan. </Text>
        </View>
      </ScrollView>
    );
  }
}