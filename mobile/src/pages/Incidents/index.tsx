import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { assets } from '../../config/assets';
import styles from './styles';

export default function Incidents(){
    return(
        <View style={styles.container}>   
            <View style={styles.header}>
                <Image source= {assets.logo} /> 
                <Text style={styles.headerText}>
                        Total de  <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.decription}>Escolha um dos casos abaixo e salve o dia.</Text>

        <View style={styles.incidentList}>
            <View style={styles.incident} >
                <Text style={styles.incidentProperty}> ONG: </Text>
                <Text style={styles.incidentValue}> APAD: </Text>
               
                <Text style={styles.incidentProperty}> CASO: </Text>
                <Text style={styles.incidentValue}> Cadelinha Atropelada </Text>
               
                <Text style={styles.incidentProperty}> Valor: </Text>
                <Text style={styles.incidentValue}> R$ 120,00</Text>
                
                <TouchableOpacity 
                    style={styles.detailButton}
                >
                    <Text style={styles.detailsButtonText}> ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                </TouchableOpacity>
             
                 </View>

                 <View style={styles.incident} >
                <Text style={styles.incidentProperty}> ONG: </Text>
                <Text style={styles.incidentValue}> APAD: </Text>
               
                <Text style={styles.incidentProperty}> CASO: </Text>
                <Text style={styles.incidentValue}> Cadelinha Atropelada </Text>
               
                <Text style={styles.incidentProperty}> Valor: </Text>
                <Text style={styles.incidentValue}> R$ 120,00</Text>
                
                <TouchableOpacity 
                    style={styles.detailButton}
                >
                    <Text style={styles.detailsButtonText}> ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                </TouchableOpacity>
             
                 </View>

                 <View style={styles.incident} >
                <Text style={styles.incidentProperty}> ONG: </Text>
                <Text style={styles.incidentValue}> APAD: </Text>
               
                <Text style={styles.incidentProperty}> CASO: </Text>
                <Text style={styles.incidentValue}> Cadelinha Atropelada </Text>
               
                <Text style={styles.incidentProperty}> Valor: </Text>
                <Text style={styles.incidentValue}> R$ 120,00</Text>
                
                <TouchableOpacity 
                    style={styles.detailButton}
                >
                    <Text style={styles.detailsButtonText}> ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                </TouchableOpacity>
             
                 </View>

            </View>
        </View>
    );
}