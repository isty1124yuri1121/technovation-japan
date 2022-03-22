/**
 * Exports the Airtable object after connecting with our API values.
 */
import Airtable from 'airtable';

// Using Cloud Data:
//   Like firebase, we have to tell Airtable our API values.
//   What API values does Airtable need?
//   How do we store these API values in a .env file?
const table =  new Airtable({apiKey : process.env.AIRTABLE_API_KEY})
const base = table.base(process.env.AIRTABLE_BASE_ID);

export default base;
