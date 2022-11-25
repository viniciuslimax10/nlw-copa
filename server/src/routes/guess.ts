import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";
import { gameRoutes } from "./game";


export async function guessRoutes(fastify:FastifyInstance){
    fastify.get('/guesses/count',async ()=>{
        const count= await prisma.guess.count();
        return {count}
    });

    fastify.post('/guesses/:poolId/games/:gameId/guesses',{
        onRequest:[authenticate],
    },async (request,reply)=>{
        const createGuessParams = z.object({
            poolId: z.string(),
            gameId: z.string(),
        })

        const createGuessBody= z.object({
            firstTeamPoints:z.number(),
            secondTeamPoints:z.number(),
        })

        const { poolId, gameId } = createGuessParams.parse(request.params);
        const { firstTeamPoints, secondTeamPoints } = createGuessBody.parse(request.body);

        const participant = await prisma.participant.findUnique({
            where:{
                userId_poolId:{
                    poolId,
                    userId:request.user.sub,
                }
            }
        })

        if(!participant){
            return reply.status(400).send({
                message:'Você não pode dar um palpite nesse bolão'
            })
        }

        const guess = await prisma.guess.findUnique({
            where:{
                participantId_gameId:{
                    participantId:participant.id,
                    gameId
                }
            }
        })

        if(guess){
            return reply.status(400).send({
                message:'Você já deu um palpite nesse jogo',
            })
        }

        const game= await prisma.game.findUnique({
            where:{
                id:gameId,
            }
        })

        if(!game){
            return reply.status(400).send({
                message:'Jogo não encontrado',
            })
        }

        if(new Date(game.date).getTime() < new Date().getTime()){
            return reply.status(400).send({
                message:'Desculpe mas esse jogo já aconteceu',
            })
        }

        await prisma.guess.create({
            data:{
                gameId,
                participantId:participant.id,
                firstTeamPoints,
                secondTeamPoints,
            }
        })

        return reply.status(201).send()

    })

    fastify.get('/guesses/results/:id',async (request)=>{
        const getPoolParams = z.object({
            id:z.string(),
        })

        const {id} = getPoolParams.parse(request.params)

        const guesses = await prisma.guess.findMany({
            
           
            where:{
               participant:{
                poolId:id,
               },      
            },
            include:{  
                game:{
                    select:{
                        id:true,
                        resultFirstTeamPoints:true,
                        resultSecondTeamPoints:true,
                        date:true,
                    },
                },
                participant:{
                    select:{
                        user:{
                            select:{
                                avatarUrl:true,
                                name:true
                            }
                        }
                    }
                }
            },
            
            
           
           
        })
        return {guesses}
    })

}

