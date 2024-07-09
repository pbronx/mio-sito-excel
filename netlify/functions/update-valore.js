let ultimoValore = "Nessun aggiornamento disponibile";

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Metodo non permesso" };
    }
    
    const valore = event.queryStringParameters.valore;
    const ora = new Date().toLocaleTimeString('it-IT');
    ultimoValore = `Aggiornamento ore ${ora}, valore ricevuto = ${valore}`;
    
    return {
        statusCode: 200,
        body: "Valore aggiornato con successo"
    };
};
