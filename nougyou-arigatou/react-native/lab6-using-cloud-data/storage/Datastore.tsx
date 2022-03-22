/**
 * Exports the Airtable object after connecting with our API values.
 */
import Airtable from 'airtable';

// Using Cloud Data Lab Exercise:
//   Like firebase, we have to tell Airtable our API values.
//   What API values does Airtable need?
//   What .env variables should we use?
const table =  new Airtable({apiKey : ''})
const base = table.base('');

export default base;
