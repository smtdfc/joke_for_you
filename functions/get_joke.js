const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
      body: '',
    };
  }
  
  try {
    let body = JSON.parse(event.body)
    const filePath = path.join(__dirname, 'jokes.json');
    
    const raw = fs.readFileSync(filePath, 'utf8');
    const jokes = JSON.parse(raw).jokes;
    
    
    const joke = jokes[body.id ?? 0];
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        id: body.id ?? 0,
        joke: joke
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: 'Error reading file or parsing JSON',
        error: error.message,
      }),
    };
  }
};