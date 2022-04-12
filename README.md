# @heusalagroup/create-ssr-server

Create Server Side Rendering ReactJS server:

```shell
npm init @heusalagroup/ssr-server ./ssr-server
```

The SSR server requires access to your frontend source codes as well as the built version. 

You will need to edit paths in the generated `src/ssr-server.ts` and `src/App.ts`.

You probably also need to check generated `package.json` to match your frontend dependencies.

## Change log level

Log level can be changed using `LOG_LEVEL`, which defaults to `INFO`.

```shell
LOG_LEVEL=DEBUG npm init @heusalagroup/ssr-server ./foo-ssr-server
```

### License

Copyright (c) Heusala Group. All rights reserved. Licensed under the MIT License (the "[License](./LICENSE)");
