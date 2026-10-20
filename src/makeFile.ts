import { writeFile } from "node:fs/promises"
import path from "node:path"
import { content } from "./contentToWrite.js";
export const makeFile = async (pathDir: string | undefined) => {
    if (!pathDir) {
        console.error("A folder name path is required");
        process.exit(1)
    }
    const getDirPath = path.basename(pathDir)

    const files = [
        `${getDirPath}.controller.ts`,
        `${getDirPath}.models.ts`,
        `${getDirPath}.types.ts`,
        `${getDirPath}.routes.ts`,
        `${getDirPath}.repository.ts`,
    ]
    try {
        for (const file of files) {
            const filePath = path.join(pathDir, file.toLowerCase());
            const fileName = path.parse(getDirPath).name;
            const className = fileName
                .replace(".repository", "")
                + "Repository";
            console.log(filePath)
            await writeFile(filePath, content(className).join());
        }
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}