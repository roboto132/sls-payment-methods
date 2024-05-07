import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
import { isNotValidStatusCode } from "../helpers/index.mjs";

export const invoke = async (arnFunction, payload) => {
  const client = new LambdaClient({});
  const command = new InvokeCommand({
    FunctionName: arnFunction,
    Payload: JSON.stringify(payload),
    LogType: "Tail",
  });

  try {
    const { Payload, StatusCode } = await client.send(command);

    if(isNotValidStatusCode(StatusCode)) {
      console.error('Lambda invocation error. Status code:', StatusCode);
      throw new Error('Invalid status code received from Lambda');
    }

    const result = Buffer.from(Payload).toString();
    const parsedResult = JSON.parse(result);

    const { body } = parsedResult;
    
    return { lambdaResponse: JSON.parse(body) };
  } catch (error) {
    console.error('Error invoking lambda:', error);
    throw error;
  }
};
