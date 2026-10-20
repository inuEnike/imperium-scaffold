import path from "node:path"
import { makeFile } from "./makeFile.js"
import { mkdir } from "node:fs/promises"

export const createDir = async (parentFolder: string) => {
    // collecting the folder name from the process argv
    const DirName = process.argv[2]
    if (!DirName) {
        console.error(("Please provide a module name"))
        process.exit(1)
    }
    const dirPath = path.join(parentFolder, DirName)
    try {
        const result = await mkdir(dirPath, { recursive: true })
        await makeFile(dirPath);
        if (result) {
            console.log("Directory created successfully");
        } else {
            console.log("Directory already exists");
        }
    } catch (error: unknown) {
        if (
            error instanceof Error &&
            "code" in error &&
            error.code === "EEXIST"
        ) {
            console.error("Directory already exists");
        } else {
            console.error("Failed to create directory:", error);
            process.exit(1);
        }
    }

}