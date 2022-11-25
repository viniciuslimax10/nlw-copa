import { Text,Center,Icon } from "native-base";
import {Button} from '../components/Button';
import{Fontisto} from '@expo/vector-icons';
import {useAuth} from '../hooks/useAuth';


import Logo from '../assets/logo.svg';

export function SignIn(){

  const {signIn,isUserLoading} =useAuth();

  

    return(
        <Center flex={1} bgColor="gray.900" p={7}>
        <Logo width={212} height={40}/>
        <Button 
          type="SECONDARY"
          title="ENTRAR COM O GOOGLE"
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>}
          mt={10}
          onPress={signIn}
          isLoading={isUserLoading}
          _loading={{_spinner:{color: 'white'}}}
        />
        <Text color="white" textAlign="center" mt={4}>
          Não utilizamos nenhuma informação além {'\n'} do seu e-mail, nome e foto de perfil {'\n'} para a criação de sua conta
        </Text>
      </Center>
    )
}