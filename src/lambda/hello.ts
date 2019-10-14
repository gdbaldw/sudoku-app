import { APIGatewayEvent } from "aws-lambda";

// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export function handler({
  event,
  _context,
  callback
}: {
  event: APIGatewayEvent;
  _context: any;
  callback: any;
}) {
  console.log("queryStringParameters", event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!" })
  });
}
