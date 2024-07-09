exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: "Nessun aggiornamento disponibile cazzo",
        headers: {
            'Content-Type': 'text/plain'
        }
    };
};
