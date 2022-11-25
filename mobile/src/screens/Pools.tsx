import React, { useCallback, useState } from "react";
import { View } from "native-base";
import { VStack,Icon, useToast,FlatList } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import {Button} from "../components/Button";
import {Header} from "../components/Header";
import {Octicons} from "@expo/vector-icons";
import Logo from "../assets/logo.svg";
import {useNavigation} from '@react-navigation/native'
import {api} from '../services/api';
import { PoolCard,PoolCardProps } from "../components/PoolCard";
import { Loading } from "../components/Loading";
import { EmptyPoolList } from "../components/EmptyPoolList";
import { ItemClick } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";
import { SafeAreaView,SelectBox } from "react-native";

export function Pools(){

    
    const[isLoading,setIsLoading] =useState(true);
    const[pools,setPools] = useState<PoolCardProps[]>([]);

    const {navigate} = useNavigation(); 
    const toast= useToast();
   

    async function fetchPools(){
        try{
            setIsLoading(true)
            const response = await api.get('/pools');
            setPools(response.data.pools)
        }catch(error){
            console.log(error);
            toast.show({
                title: "Não foi possível carregar os bolões",
                placement:"top",
                bgColor: 'red.500'
            })
        }finally{
            setIsLoading(false)
        }
    }

    useFocusEffect(useCallback(()=>{
        fetchPools();
    }, [navigate]));
    // console.log(pools);
    return(
        <VStack flex={1} bgColor="gray.900">
            
            <Header title="Meus bolões"/>
            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
                <Button title="BUSCAR BOLÃO POR CÓDIGO"
                leftIcon={<Icon as={Octicons} name="search" color="black" size="md"/>}
                onPress={()=>navigate('find')}
                />
            </VStack>
            
            {
                
                isLoading ? <Loading/> :
                    <FlatList
                    data={pools}
                    keyExtractor={item => item.id}
                    renderItem={ ({item})=> (
                        <PoolCard 
                            key={item.id}
                            data={item}
                            onPress={()=>navigate('details',{id:item.id})}
                        />
                        
                    )}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={()=> <EmptyPoolList/>}
                    _contentContainerStyle={{pb:10}}
                    px={5}
            />
            
            }
          
        </VStack>
    )
}