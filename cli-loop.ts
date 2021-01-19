import  readline from 'readline';
const nl = '\n\n';
/**
 * Command line app boiler plate code, with a callback to handle input
 */
export const cliLoop = async (inputCallback:  (input:string) => {}, question = 'Search on something')  => 
{

    const c = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const searchLoop = async () => 
    {
        while(true)
        {
            c.write(' ---------------------------------------- ')
            c.write(nl)
            const input = await new Promise<string>(resolve => 
                c.question(question + '\n', (text) => {
                    resolve(text);
                })

            );
            c.write(nl)
            await inputCallback(input)
            c.write(nl);
        }
    }
    searchLoop();
}