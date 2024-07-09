javascriptCopyexports.handler = async function(event, context) {
    const fs = require('fs').promises;
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Metodo non permesso" };
    }
    
    const valore = event.queryStringParameters.valore;
    const ora = new Date().toLocaleTimeString('it-IT');
    const contenuto = `Aggiornamento ore ${ora}, valore ricevuto = ${valore}`;
    
    await fs.writeFile('/tmp/valore.txt', contenuto, 'utf8');
    
    return {
        statusCode: 200,
        body: "Valore aggiornato con successo"
    };
};
