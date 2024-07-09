exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body).data;

  // Memorizzare il dato in un file o database, qui usiamo un file per semplicità
  const fs = require('fs');
  fs.writeFileSync('/tmp/data.txt', data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Data received successfully' }),
  };
};

