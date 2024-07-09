exports.handler = async (event, context) => {
  const fs = require('fs');
  let data = '';

  try {
    data = fs.readFileSync('/tmp/data.txt', 'utf8');
  } catch (err) {
    data = 'No data available';
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
