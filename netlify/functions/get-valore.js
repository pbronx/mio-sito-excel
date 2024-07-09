exports.handler = async function(event, context) {
    const fs = require('fs').promises;
    try {
        const data = await fs.readFile('/tmp/valore.txt', 'utf8');
        return {
            statusCode: 200,
            body: data
        };
    } catch (error) {
        return {
            statusCode: 200,
            body: "Nessun aggiornamento disponibile"
        };
    }
};
