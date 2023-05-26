import { ConsoleLogger } from '@tempojs/common';
import { IncomingMessage, ServerResponse, createServer } from 'http';
import { TempoRouterConfiguration } from '@tempojs/server';
import { TempoRouter } from '@tempojs/node-http-router';
import * as Services from './services';

const logger = new ConsoleLogger('Router');
const config = new TempoRouterConfiguration();
const registry = new Services.TempoServiceRegistry(logger);

const router = new TempoRouter<object>(logger, registry, config);
const listenPort = process.env.LISTEN_PORT || 3000; 
logger.info(`Listening on port: ${listenPort}`);
process.env.USER_ID; 
const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
	await router.process(req, res, {});
});
server.listen(Number(listenPort), "0.0.0.0")
