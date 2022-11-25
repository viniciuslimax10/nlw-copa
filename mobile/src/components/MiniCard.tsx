import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Text, VStack,Avatar,Center, Badge } from 'native-base';
import React from 'react';


// import { ParticipantsList,ParticipantPropsList } from './ParticipantsList';

export interface MiniCardProps {
  participantId: string;
  avatarUrl: string;
  name: string;
  points: number;
}

interface Props extends TouchableOpacityProps {
  data: MiniCardProps;
  position:number
}

export function MiniCard({ data,position, ...rest }: Props) {
  console.log(data);
  return (
    <TouchableOpacity {...rest}

    >
      <HStack
        w="full"
        h={20}
        bgColor="gray.800"
        borderBottomWidth={3}
        borderBottomColor="yellow.500"
        justifyContent="space-between"
        alignItems="center"
        rounded="sm"
        mb={3}
        p={4}
  
      >
        <VStack>
          <Avatar
              key={data.participantId}
              source={{ uri: data.avatarUrl}}
              w={16}
              h={16}
              rounded="full"
              borderWidth={2}
              marginRight={-3}
              borderColor="gray.800"
            >
            
            </Avatar>
          {/* <Heading color="white" fontSize="md" fontFamily="heading">
            {data.title}
          </Heading>*/}
        </VStack>
        <Center>
          <Text color="gray.100" fontSize="xs" fontFamily="medium">
            {data.name?.toUpperCase()}
           
          </Text>
          <Text color="gray.100" fontSize="xs" fontFamily="medium">
            {data.points} ponto(s)
          </Text>
      </Center>
      
        <Text>
          <Badge colorScheme="success" w={12} h={8} bgColor="yellow.500" rounded="full" borderWidth={2} borderColor="gray.800">
            <Text>{position+1}º</Text>
          </Badge>
        </Text> 
        {/* <ParticipantsList
          participants={data}
        /> */}
      </HStack>
    </TouchableOpacity>
  );
}