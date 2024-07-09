exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: "Nessun aggiornamento disponibile perbacco",
        headers: {
            'Content-Type': 'text/plain'
        }
    };
};
