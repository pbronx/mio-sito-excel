let ultimoValore = "Nessun aggiornamento disponibile";

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: ultimoValore,
        headers: {
            'Content-Type': 'text/plain'
        }
    };
};
