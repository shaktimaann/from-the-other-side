import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData() {
    const currentDir = process.cwd();
    const dataPath = path.join(currentDir,'data','data.json')

    try{
    const data = JSON.parse(await fs.readFile(dataPath,'utf-8'))
    return data

    }catch(error){
        return []
    }
    

/*
Challenge:
1. getData() should: 
    - read the json in json.data as a string 
    - parse it to JS 
    - return the parsed data. 

   If there’s an error, it should return an empty array (think, why are we doing this?).

hint.md for help
*/

  
}