import { Button, HStack, Text, useTheme, VStack } from 'native-base';
import { X, Check, CaretCircleDoubleDown, CaretCircleDown } from 'phosphor-react-native';
import { getName } from 'country-list';
import dayjs  from 'dayjs';
import ptBR from 'dayjs/locale/pt-br'

import { Team } from './Team';

interface GuessProps {
  id: string;
  gameId: string;
  createdAt: string;
  participantId: string;
  firstTeamPoints: number;
  secondTeamPoints: number;
}

export interface GameProps {
  id: string;
  date: string;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;
  guess: null | GuessProps;
};

interface Props {
  data: GameProps;
  onGuessConfirm: () => void;
  setFirstTeamPoints: (value: string) => void;
  setSecondTeamPoints: (value: string) => void;
  isLoaded:boolean;
};



export function Game({ data, setFirstTeamPoints, setSecondTeamPoints, onGuessConfirm, isLoaded }: Props,{firstTeamPoints}:GuessProps) {
  const { colors, sizes } = useTheme();
  const altDate=data.date;
  const dates=altDate.substring(0,altDate.length-1);
  const when= dayjs(dates).locale(ptBR).format("DD [de] MMMM [de] YYYY [às] HH:00[h]");
  console.log(data);
  
  return (
    <VStack
      w="full"
      bgColor="gray.800"
      rounded="sm"
      alignItems="center"
      borderBottomWidth={3}
      borderBottomColor="yellow.500"
      mb={3}
      p={4}
    >
      <Text color="gray.100" fontFamily="heading" fontSize="sm">
        {getName(data.firstTeamCountryCode)} vs. {getName(data.secondTeamCountryCode)}
      </Text>

      <Text color="gray.200" fontSize="xs">
        {when}
      </Text>
    
      <HStack mt={4} w="full" justifyContent="space-between" alignItems="center">
        <Team
          code={data.firstTeamCountryCode}
          position="right"
          onChangeText={setFirstTeamPoints}
          palpite={data.guess === null ? '': data.guess.firstTeamPoints.toString()}
        />
  
        <X color={colors.gray[300]} size={sizes[6]} />

        <Team
          code={data.secondTeamCountryCode}
          position="left"
          onChangeText={setSecondTeamPoints}
          palpite={data.guess === null ? '' : data.guess.secondTeamPoints.toString()}
        />
      </HStack>

      {
        !data.guess && new Date(data.date).getTime() > new Date().getTime() ? 
        <Button size="xs" w="full" 
            bgColor="green.500" 
            mt={4} 
            onPress={onGuessConfirm} 
            isLoading ={isLoaded}
             _loading={{
              bg: "amber.400:alpha.70",
              _text: {
                color: "coolGray.700"
              }
            }} _spinner={{
              color: "white"
            }}
        >
          <HStack alignItems="center">
            <Text color="white" fontSize="xs" fontFamily="heading" mr={3}>
              CONFIRMAR PALPITE
            </Text>

            <Check color={colors.white} size={sizes[4]} />
          </HStack>
        </Button>
        :
        !data.guess 
         ?
         <Button size="xs" w="full" 
              bgColor="red.500" 
              mt={4} 
          >
            <HStack alignItems="center">
              <Text color="white" fontSize="xs" fontFamily="heading" mr={3}>
                Tempo de palpite esgotado
              </Text>

              <CaretCircleDown color={colors.white} size={sizes[4]} />
            </HStack>
          </Button>
         :
         ""
      }
    </VStack>
  );
}