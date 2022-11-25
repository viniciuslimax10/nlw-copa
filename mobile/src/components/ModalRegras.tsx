
import {HStack, VStack, Button,Modal,Text} from "native-base";



interface RegrasModal {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
  }
  
 
export function ModalRegras({showModal,setShowModal}:RegrasModal){

  
    return(
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
            <Modal.Content maxWidth="350">
        <Modal.CloseButton />
        <Modal.Header>Regras do Bolão da Copa</Modal.Header>
            <Modal.Body>
                <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium" mb='4'>As regras da pontuação são distribuídas da seguinte forma: </Text>
                </HStack>
                <VStack space={3}>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium">Acertou Palpite Completo</Text>
                        <Text color="green.500">4 pontos</Text>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium">Acertou Vencedor</Text>
                        <Text color="green.500">2 pontos</Text>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium">Acertou empate mas errou o placar</Text>
                        <Text color="green.500">1 pontos</Text>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium">Errou Palpite</Text>
                        <Text color="red.500">0 pontos</Text>
                    </HStack>
                </VStack>
            </Modal.Body>
             <Modal.Footer>
                <Button flex="1" onPress={() => {
                    setShowModal(true);
                }}>
                 Fechar Regras
            </Button>
        </Modal.Footer>
        </Modal.Content>
    </Modal>
    )
}