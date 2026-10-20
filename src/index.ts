#!/usr/bin/env node

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { makeFile } from "./makeFile.js";
import { createDir } from "./makeDirectory.js";


// parent folder
const parentFolder = "src/modules";
if (!parentFolder) {
    console.error("Module folder not found, please create a module folder inside the src folder");
    process.exit(1)
}

createDir(parentFolder)
