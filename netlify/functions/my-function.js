// server-less function should be in the folder: netlify/functions/

exports.handler = async (event, context) => {
  try {
    const catFact = await fetchData();
    return {
      statusCode: 200,
      body: JSON.stringify({ catFact }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

function fetchData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = "https://catfact.ninja/fact";
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.responseText;
        resolve(response);
      } else {
        reject(new Error("Request failed with status: " + xhr.status));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Network error occurred"));
    };
    xhr.send();
  });
}

/*
const fetch = require('node-fetch'); // Import the 'node-fetch' library

exports.handler = async (event, context) => {
  const apiUrl = 'https://catfact.ninja/fact';
  const headers = {
    'Content-Type': 'application/json',
  };

  const requestOptions = {
    method: 'GET',
    headers: headers,
  };

  async function fetchData() {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  try {
    const data = await fetchData();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
*/


/////////////////////////////////////////////////////////////////

/*
exports.handler = async (event, context) => {
  const testMessage = "hello from my server-less function";
  return {
    statusCode: 200,
    body: JSON.stringify({ message: testMessage }),
  };
};
*/

////////////////////////////////////////////////////////////////

/*
const fetch = require('node-fetch'); // Import the 'node-fetch' library
exports.handler = async (event, context) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer 9cd88f37769012e956a2047194fd68f58e4763d6abf60ab5c68fe7249266660c',
    },
  };

  async function fetchData() {
    try {
      const response = await fetch('https://api.webflow.com/v2/sites/652cd61429f6f7d9d21bb49e', options);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      throw err; // You can also throw the error if needed
    }
  }

  try {
    const responseData = await fetchData();

    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    return {
      statusCode: 500, // or any appropriate error code
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};
*/