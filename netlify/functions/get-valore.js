const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY
});

exports.handler = async function(event, context) {
  try {
    const result = await client.query(
      q.Get(q.Match(q.Index("valore_by_id"), "ultimo_valore (pda)"))
    );
    return {
      statusCode: 200,
      body: result.data.contenuto,
      headers: {
        'Content-Type': 'text/plain'
      }
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: "Nessun aggiornamento disponibile (pda)",
      headers: {
        'Content-Type': 'text/plain'
      }
    };
  }
};
