import {useToast, VStack, HStack,Button,Modal,Text} from "native-base";
import { Header } from "../components/Header";
import {useRoute} from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import {api} from '../services/api';
import {PoolCardProps} from  '../components/PoolCard';
import { PoolHeader } from "../components/PoolHeader";
import {Option} from "../components/Option";
import {Share} from 'react-native';
import {Guesses} from "../components/Guesses";
import {useNavigation} from '@react-navigation/native';
import { RankCard } from "../components/RankCard";
import { ModalRegras } from "../components/ModalRegras";




interface RouteParams{
    id:string;
}

export function Details(){
    const [optionSelected,setOptionSelected] = useState<'guesses' | 'ranking'>('guesses');
    const [isLoading,setIsLoading] = useState(true);
    const [poolDetails,setPoolDetails] = useState<PoolCardProps>({} as PoolCardProps);
    const [showModal, setShowModal] = useState(false);

    const route = useRoute();
    const {id} = route.params as RouteParams;
    const toast = useToast();

    const {navigate} = useNavigation(); 

    async function fetchPoolDetails(){
        try {
            setIsLoading(true);

            const response = await api.get(`/pools/${id}`);
            setPoolDetails(response.data.pools);

        } catch (error) {
            console.log(error);
            toast.show({
                title: "Não foi possível carregar os detalhes do bolão",
                placement:"top",
                bgColor: 'red.500'
            })
        }finally{
            setIsLoading(false);
        }
    }

    async function handleCodeShare(){
        await Share.share({
            message:"Acesso o Aplicativo NLW Copa bolões e use o código: "+poolDetails.code
        });
    }

    useEffect(() => {
      fetchPoolDetails()
    }, [id])
    

    if (isLoading){
        return (
            <Loading/>
        );
    }

    return(
        <VStack flex={1} bgColor="gray.900">
            <Header title={poolDetails.title} showBackButton showShareButton onShare={handleCodeShare}/>
            {
                poolDetails._count?.participants >0 ?
                <VStack px={5} flex={1}>
                    <PoolHeader data ={poolDetails}/>

                    <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
                   
                        <Option 
                            isSelected={true}
                            title="Regras do bolão" 
                            onPress={() => setShowModal(true)}
                        />

                       <ModalRegras
                            showModal={showModal}
                            setShowModal={() => setShowModal(false)}
                       />
                    </HStack>
                    <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
                        <Option 
                            title="Seus palpites" 
                            isSelected={optionSelected === 'guesses'}
                            onPress={()=> setOptionSelected('guesses')}
                        />
                        <Option 
                            title="Ranking do grupo" 
                            isSelected={optionSelected === 'ranking'}
                            onPress={()=> setOptionSelected('ranking')}
                        />
                    </HStack>
                    {
                        optionSelected === 'guesses' ?
                        <Guesses poolId={poolDetails.id} code={poolDetails.code}/>
                        : <RankCard poolId={poolDetails.id} code={poolDetails.code}/>
                    }
                    
                </VStack>
                :
                <EmptyMyPoolList code={poolDetails.code}/>

            }
        </VStack>
    )
}