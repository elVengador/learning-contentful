const contentful = require('contentful')
require('dotenv').config();


let client = contentful.createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN
})

const getEntry = async () => {

    const exampleEntryId = '4GItg7FOB8isIGFYL0wJCJ'
    const entry = await client.getEntry(exampleEntryId)
    console.log('entry:', entry);
}

const getEntries = async () => {

    const entries = await client.getEntries()
    entries.items.forEach(cur => {
        console.log('cur', cur);
    });
}

// getEntry()

getEntries()