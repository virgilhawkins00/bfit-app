import React, {useContext, useState} from 'react';
import {Image, Switch} from 'react-native';
import {MyButton} from '../../components/MyButton';
import {MyTextInput} from '../../components/MyTextInput';
import {useAuth} from '../../contexts/Auth';

const logo = 'https://i.imgur.com/k0ySNIL.png';

import {Container} from '../SignInScreen/styles';
import {ThemeContext, ThemeType} from '../../theme/Theme';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();
  const {toggleTheme, theme} = useContext(ThemeContext);

  const darkModeIsEnabled = theme === ThemeType.dark;

  const login = (props: any) => {

  return (
    <Container>
      <Switch value={darkModeIsEnabled} onValueChange={toggleTheme} />

      <Image
        resizeMode="contain"
        source={{uri: logo, }}
        style={{width: 100, height: 100}}
      />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyButton onPress={() => signIn(email, password)} title="Entrar no App" />
    </Container>
  );
}
}