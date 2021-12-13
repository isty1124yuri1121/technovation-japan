import Airtable from 'airtable';

const table =  new Airtable({apiKey : process.env.AIRTABLE_API_KEY})
const base = table.base('appwPdl5QXUtRh8Rz');

export default base;
