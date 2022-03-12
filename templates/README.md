# ReactJS SSR (Server Side Rendering) HTTP server for PROJECT-NAME

This is a ReactJS Server Side Rendering HTTP server built using 
[@heusalagroup/create-ssr-server](https://github.com/heusalagroup/create-ssr-server).

This project is required to optimize ReactJS for social media & search engines (e.g. SEO). 

Technically it will pre-render React App on the server side for each request and dynamically 
modify content in HTML HEAD meta tags, etc.

## Running the pre-built server for development

This project will have a pre-built version at ./dist/PROJECT_NAME-ssr-server.js.

```bash
FRONTEND_DOCROOT_DIR=../frontend/build \
BACKEND_LOG_LEVEL=DEBUG \
BACKEND_API_URL='http://localhost:3500' \
./dist/PROJECT_NAME-ssr-server.js
```

Keep in mind though, you'll need to re-compile it when frontend has modifications.

Frontend's static document root can also be provided as the first argument.

### Runtime Environment Variables

| Variable name                  | Description                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------ |
| `PUBLIC_URL`                   | Set public URL for `npm run build`                                             |
| `REACT_APP_BACKEND_TARGET_URL` | Set development backend URL where `/api` will be redirected for `npm start`    |
| `BACKEND_LOG_LEVEL`            | The log level. Defaults to `INFO`.                                               |
| `PORT`                         | The port where to run the server. Defaults to `3000`.                            |
| `BACKEND_API_URL`              | Optional path where requests to `/api` are redirected, for development purposes. |
| `FRONTEND_DOCROOT_DIR`         | Optional path where static frontend files are located. Defaults to `../frontend/build` |

## Building the server

```bash
npm run build
```

### Build Environment Variables

| Variable name     | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `BUILD_VERSION`   | The version for the build                                                   |
| `BUILD_LOG_LEVEL` | The default log level built into the bundle. Defaults to INFO.              |
| `BUILD_NODE_ENV`  | Build mode. "production" or "development"                                   |
