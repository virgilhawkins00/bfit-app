import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';

import Btn from '../../components/Btn';
import {darkGreen} from '../../components/Constants';
import Field from '../../components/Field';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignInScreen } from './SignInScreen';

const Signup = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  return (
    
        <SafeAreaView >
      <View style={{paddingHorizontal: 0, alignItems: "center"}}> 
        <Text
          style={{
            color: '#171433',
            paddingTop:50,
            fontSize: 30,
            fontWeight: '600',
            marginTop: 20,
            fontFamily: "Barlow"
          }}>
          Criar nova conta
        </Text>
        <Text
          style={{
            color: '#171433',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: "Barlow",
            marginBottom: 20,
            textAlign: "center",
          }}>
          Insira seus dados para criar uma conta
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 812,
            width: 375,
            
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="Nome Completo" />
          <Field
            placeholder="Email"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field  placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 10}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: '#1E0BED', fontWeight: 'bold', fontSize: 10}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 10}}>
              and {" "}
            </Text>
            <Text style={{color: '#1E0BED', fontWeight: 'bold', fontSize: 10}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('login')}>
              <Text
                style={{color:'#1E0BED', fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </SafeAreaView>
      
  );
};

export default Signup;