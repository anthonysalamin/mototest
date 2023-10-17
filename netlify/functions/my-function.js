// server-less function should be in the folder: netlify/functions/

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from my serverless function!" }),
  };
};


/*
exports.handler = async (event, context) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization:
        "Bearer 9cd88f37769012e956a2047194fd68f58e4763d6abf60ab5c68fe7249266660c"
    }
  };

  async function fetchData() {
    console.log("fetchData is working");
    try {
      const response = await fetch("https://api.webflow.com/v2/sites/652cd61429f6f7d9d21bb49e", options);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      throw err; // You can also throw the error if needed
    }
  }

  const testMessage = "this is a test";

  try {
    const responseData = await fetchData();

    return {
      statusCode: 200,
      // body: JSON.stringify(responseData),
      body: JSON.stringify(testMessage)
    };
  } catch (error) {
    return {
      statusCode: 500, // or any appropriate error code
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};
*/