const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY
});

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Metodo non permesso" };
  }
  
  const valore = event.queryStringParameters.valore;
  const ora = new Date().toLocaleTimeString('it-IT');
  const contenuto = `Aggiornamento ore ${ora}, valore ricevuto = ${valore}`;
  
  try {
    await client.query(
      q.Replace(
        q.Select("ref", q.Get(q.Match(q.Index("valore_by_id"), "ultimo_valore"))),
        { data: { contenuto: contenuto } }
      )
    );
    return {
      statusCode: 200,
      body: "Valore aggiornato con successo (pda)"
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Errore nell'aggiornamento del valore (pda): " + error.message
    };
  }
};
