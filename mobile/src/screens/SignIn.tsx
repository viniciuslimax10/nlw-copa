import { Text,Center,Icon } from "native-base";
import {Button} from '../components/Button';
import{Fontisto} from '@expo/vector-icons';
import {useAuth} from '../hooks/useAuth';


import Logo from '../assets/logo.svg';

export function SignIn(){

  const {signIn,user} =useAuth();

  

    return(
        <Center flex={1} bgColor="gray.900" p={7}>
        <Logo width={212} height={40}/>
        <Button 
          type="SECONDARY"
          title="ENTRAR COM O GOOGLE"
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>}
          mt={10}
          onPress={signIn}
        />
        <Text color="white" textAlign="center" mt={4}>
          Não utilizamos nenhuma informação além {'\n'} do seu e-mail para a criação de sua conta
        </Text>
      </Center>
    )
}