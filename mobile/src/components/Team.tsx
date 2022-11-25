import { HStack } from 'native-base';
import CountryFlag from "react-native-country-flag";

import { useState } from 'react';

import { Input } from './Input';

interface Props {
  code: string;
  position: 'left' | 'right';
  onChangeText: (value: string) => void;
  palpite:string;
}

export function Team({ code, position, onChangeText,palpite }: Props) {

  const [palpiteAtual,setNewPalpite] = useState(palpite);

  function atualizaPontos(event){
    setNewPalpite(event);
    onChangeText(event);
  }
  

  
  return (
    <HStack alignItems="center">
      {position === 'left' && <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />}

      <Input
        w={12}
        h={9}
        textAlign="center"
        fontSize="xs"
        keyboardType="numeric"
        value={palpiteAtual}
        onChangeText={atualizaPontos}
        
      />
      {position === 'right' && <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />}
    </HStack>
  );
}