import { getData } from "./getData.js"
import path from 'node:path'
import fs from 'node:fs/promises'

export async function addNewSighting(newSighting){


    try{

    const oldData = await getData()
    oldData.push(newSighting)
    const newData = JSON.stringify(oldData,null,2)

    const cwdPath = process.cwd()
    const pathToWrite = path.join(cwdPath,'data','data.json')
    await fs.writeFile(pathToWrite,newData,'utf-8')

    }catch(err){
        throw new Error(err)
    }

    


}