import Airtable from 'airtable';

const table =  new Airtable({apiKey : process.env.AIRTABLE_API_KEY})
const base = table.base(process.env.AIRTABLE_BASE_ID);

export default base;
