import { Box, useToast,FlatList,VStack } from 'native-base';
import { useState,useEffect } from 'react';
import {api} from '../services/api';
import {Game,GameProps} from  '../components/Game';
import { Loading } from './Loading';
import { EmptyRakingList } from './EmptyRakingList';
import { MiniCard } from './MiniCard';
import {useNavigation} from '@react-navigation/native'
import {Header} from "../components/Header";

interface Props {
  poolId: string;
  code:string;
}

export function RankCard({ poolId ,code}: Props) {
  const [isLoading,setIsLoading] = useState(true);
  const [info,setInfo] = useState([]);
  const {navigate} = useNavigation(); 
  const [rank,setRanking] = useState([]);


  const toast = useToast();

  async function fetchRanking(){
    try {
      setIsLoading(true);
      
      const response = await api.get(`/guesses/results/${poolId}`);
     
      setInfo(response.data.guesses);

    
    } catch (error) {
      console.log(error);
      toast.show({
          title: "Ainda não foram realizados palpites nesse bolão.",
          placement:"top",
          bgColor: 'red.500'
      })
    }finally{
      setIsLoading(false);
    }
  }

  


  // console.log(info);
//   interface GuessRanking{
//      firstTeamPoints:String,
//      secondTeamPoints:String,
//      resultFirstTeamPoints:String,
//      resultSecondTeamPoints:String
//   }

  function validatePoints(info){
      console.log(info);
        const points =0;
        let dadosRanking;
        dadosRanking=info.map(function(dados){ 
          console.log(new Date().getTime())
          if (new Date(dados.game.date).getTime() <=  new Date().getTime()) 
            if(dados.firstTeamPoints === dados.game.resultFirstTeamPoints && dados.secondTeamPoints === dados.game.resultSecondTeamPoints)
            {
              console.log("PLACAR COMPLETO");
                return {dados,'pontuacao':points+4};
                
            }
            else if(dados.firstTeamPoints > dados.secondTeamPoints && dados.game.resultFirstTeamPoints > dados.game.resultSecondTeamPoints){
              console.log("ACERTOU GANHADOR");
              return {dados,'pontuacao':points+2};
            }
            else if(dados.firstTeamPoints === dados.secondTeamPoints && dados.game.resultFirstTeamPoints === dados.game.resultSecondTeamPoints && dados.game.resultFirstTeamPoints !== -1  && dados.game.resultSecondTeamPoints !== -1){
              console.log("ACERTOU GANHADOR");
              return {dados,'pontuacao':points+1};
            }
            else
            {
                console.log("Errou");
                return {dados,'pontuacao':points};
            }
          else
          {
            console.log("Errou");
            return {dados,'pontuacao':points};
          }


            
            
        });


        console.log(dadosRanking);
        // let totalPoints=0;


        let posicaoRanking = dadosRanking.reduce(function(totalPontos, dado,index) {
         
          if (totalPontos[dado.dados.participantId]) {
            
            totalPontos[dado.dados.participantId].points += dado.pontuacao;
          } else {
            totalPontos[dado.dados.participantId] = { participantId: dado.dados.participantId,name:dado.dados.participant.user.name,avatarUrl:dado.dados.participant.user.avatarUrl, points: dado.pontuacao };
          }
          return totalPontos;
      }, {});


      // console.log(Object.values(posicaoRanking));

        // let posicaoRanking = dadosRanking.reduce(function (totalPontos, dado,currentIdex,arr) {
        //     // console.log(dado.dados);
        // if (dado.dados.participantId in totalPontos) {
        //     totalPontos[dado.dados.participantId]++;
        //     // totalPontos.push(dado.dados.participant.user.avatarUrl);
        // }
        // else {
        //     totalPontos[dado.dados.participantId] = 1;
        // }
        // return {...totalPontos,arr};
        // }, {});

        // let posicaoRanking = dadosRanking.filter(function(dados) {
        //     return dados;
        //   });
        // return posicaoRanking;
        // console.log(info);
        setRanking (Object.values(posicaoRanking));
        
  }



//   async function handleGuessConfirm(gameId:string){
//     try {
//         if(!firstTeamPoints.trim() || !secondTeamPoints.trim()){
//            return toast.show({
//             title: "Informe o placar do palpite",
//             placement:"top",
//             bgColor: 'red.500'
//         })
//       }
//       await api.post(`/guesses/${poolId}/games/${gameId}/guesses`,{
//         firstTeamPoints:Number(firstTeamPoints),
//         secondTeamPoints:Number(secondTeamPoints),
//       });

//       toast.show({
//         title: "Palpite efetuado com sucesso",
//         placement:"top",
//         bgColor: 'green.500'
//       })

//       fetchGames();

      
//     } catch (error) {
//       console.log(firstTeamPoints );
//       console.log(error);
//       toast.show({
//           title: "Não foi possível enviar o palpite, ocorreu um erro ou esse jogo já aconteceu.",
//           placement:"top",
//           bgColor: 'red.500'
//       })
//     }
//   }

  useEffect(()=>{
    fetchRanking();

  },[poolId])
  useEffect(()=>{
    validatePoints(info);
 },[info])
  rank.sort();
  rank.reverse(); 
  return (

    <VStack flex={1} bgColor="gray.900">
    
       {
                
                isLoading ? <Loading/> :
               
                    <FlatList
                    data={rank}
                    keyExtractor={item => item.participantId}
                    renderItem={ ({item,index})=> (
                        <MiniCard 
                            key={item.participantId}
                            data={item}
                            position={index}
                        />
                        
                    )}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={()=> <EmptyRakingList/>}
                    _contentContainerStyle={{pb:10}}
                    px={5}
            />
            }
            
    </VStack>
    
    // <FlatList
    //   data={games}
    //   keyExtractor={item =>item.id}
    //   renderItem={({item}) =>(
    //     <Game
    //       data={item}
    //       key={item.id}
    //       setFirstTeamPoints={setFirstTeamPoints}
    //       setSecondTeamPoints={setSecondTeamPoints}
    //       onGuessConfirm={()=>{handleGuessConfirm(item.id)}}
    //     />
    //   )}
    //   _contentContainerStyle={{pb:10}}
    //   ListEmptyComponent={()=> <EmptyMyPoolList code={code}/>}
    // />
  )
}
