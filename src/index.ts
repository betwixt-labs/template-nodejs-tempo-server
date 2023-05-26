import { ConsoleLogger } from '@tempojs/common';
import { IncomingMessage, ServerResponse, createServer } from 'http';
import { TempoRouterConfiguration } from '@tempojs/server';
import { TempoRouter } from '@tempojs/node-http-router';
import * as Services from './services';

const logger = new ConsoleLogger('Router');
const config = new TempoRouterConfiguration();
const registry = new Services.TempoServiceRegistry(logger);

const router = new TempoRouter<object>(logger, registry, config);
const listenPort = process.env.PORT || 3000; 
const hostname = process.env.LISTEN_HOSTNAME || "0.0.0.0";
const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
	await router.process(req, res, {});
});
server.listen(Number(listenPort), hostname, () => {
	logger.info(`Listening on port: ${hostname}:${listenPort}`);
});