## Template: node-tempo-server

This template demonstrates using the [`Tempo`](https://github.com/betwixt-labs/tempo) remote procedure call framework to add real-time, end-to-end typesafe APIs with a Node.js HTTP server.

[`index.ts`](https://github.com/betwixt-labs/template-nodejs-tempo-server/blob/main/src/index.ts) is the content of the server script.

Code generation is handled by [`Bebop`](https://github.com/betwixt-labs/bebop) and you can find an example schema in [`greeter.bop`](https://github.com/betwixt-labs/template-nodejs-tempo-server/blob/main/src/schemas/greeter.bop).

The service is implemented in [`greeter.ts`](https://github.com/betwixt-labs/template-nodejs-tempo-server/blob/main/src/services/greeter.ts).

## Setup

To create a `my-project` directory using this template, run:

```sh
$ git clone  https://github.com/betwixt-labs/template-worker-tempo.git my-project
```

If you wish to generate code from your schemas run:
```sh
$ npm run build:schemas
# or
$ yarn build:schemas
# or
$ pnpm run build:schemas
```