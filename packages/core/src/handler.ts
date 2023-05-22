import * as debug from "./debug"

export default function handler(lambda) {
  return async function (event, context){
    let body;
    let statusCode = 200;
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Acess-Control-Allow-Credentials': true,
    };

    debug.init(event)

    try {
      body = await lambda(event, context);
    } catch (err) {
      debug.flush(err)
      statusCode = 500;
      body = { error: err.message };
    }

    return {
      statusCode,
      body: JSON.stringify(body),
      headers,
    };
  }
}
