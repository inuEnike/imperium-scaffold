export const content = (name: string) => {
    return [
        `
        interface I${name} {
        }
        export class ${name} implements I${name}{
            constructor () {}
        }
     `
    ]
}