// Copyright (c) 2021-2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { resolve as pathResolve } from 'path';
import { main } from "./fi/hg/ssr/main";
import { App } from "./fi/hg/ssr/app";

const [nodeBin, scriptName, ...args] : string[] = [...process.argv];
const appDir = args.shift() ?? pathResolve(__dirname, process?.env?.FRONTEND_DOCROOT_DIR ?? 'path/to/frontend/build');

main([
    nodeBin,
    scriptName,
    appDir,
    App
]).then((status : number) => {
    process.exit(status);
}).catch((err : any) => {
    console.error(`Error: `, err);
    process.exit(1);
});
