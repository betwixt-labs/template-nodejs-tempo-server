import { ConsoleLogger } from '@tempojs/common';
import { IncomingMessage, ServerResponse, createServer } from 'http';
import { TempoRouterConfiguration } from '@tempojs/server';
import { TempoRouter } from '@tempojs/node-http-router';
import * as Services from './services';

const logger = new ConsoleLogger('Router');
const config = new TempoRouterConfiguration();
const registry = new Services.TempoServiceRegistry(logger);

const router = new TempoRouter<object>(logger, registry, config);
logger.info(`Listening on port 3000`);
const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
	await router.process(req, res, {});
});
server.listen(443);
