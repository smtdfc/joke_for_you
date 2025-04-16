const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {

  const filePath = path.join(__dirname, 'jokes.json');
  
  try {

    const data = fs.readFileSync(filePath, 'utf8');
    const jokes = JSON.parse(data).jokes;
    

    const randomId = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomId];
    

    return {
      statusCode: 200,
      body: JSON.stringify(randomJoke),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error reading file or parsing JSON', error: error.message }),
    };
  }
};