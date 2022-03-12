// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { parseReadonlyJsonObject, ReadonlyJsonObject } from "./fi/hg/core/Json";
import { CreatePackageConfig } from "./fi/hg/create/types/CreatePackageConfig";

export function modifyPackageJson (
    pkgJSON: ReadonlyJsonObject,
    config: CreatePackageConfig
): ReadonlyJsonObject {
    const scriptsObject: ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.scripts) ?? {};
    const binObject: ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.bin) ?? {};
    const dependencies: ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.dependencies) ?? {};
    const distFile = config.getDistFile();
    const mainName = config.getMainName();
    const mainSrcFileName = config.getMainSourceFileName();
    return {
        ...pkgJSON,
        private: true,
        main: distFile,
        bin: {
            ...binObject,
            [mainName]: distFile
        },
        scripts: {
            ...scriptsObject,
            "start-prod": `node ${distFile}`,
            "start": `ts-node ${mainSrcFileName}`,
            "build": "rollup -c"
        },
        dependencies: {},
        devDependencies: dependencies
    };
}
