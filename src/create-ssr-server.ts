// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
import { resolve as pathResolve } from "path";
import { modifyPackageJson } from "./modifyPackageJson";
import { main } from "./fi/hg/create/main";
main(pathResolve(__dirname, "../create.config.json"), modifyPackageJson).catch((err) => {
    console.error(err);
});
