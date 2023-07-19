import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { errorHandler } from './http/handlers/error-handler'
import cors from '@fastify/cors'

export const app = fastify()

// should configure cors to allow only the frontend url
app.register(cors)

app.register(appRoutes)

app.setErrorHandler(errorHandler)
