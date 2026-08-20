import { FastifyPluginCallback } from "fastify";

export const hello:FastifyPluginCallback = async (app) => {
    app.get('/hello', async (request, reply) => {
        return reply.status(200).send('Ola mundo')
    })
}