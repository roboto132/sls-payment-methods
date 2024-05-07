import { SFNClient, StartExecutionCommand, DescribeExecutionCommand } from "@aws-sdk/client-sfn";

// Crea una instancia del cliente Step Functions
const stepfunctions = new SFNClient();

export const handler = async (event, context) => {
  try {
    // Define los parámetros para iniciar la ejecución de la Step Function
    const startParams = {
        stateMachineArn: 'arn:aws:states:us-east-1:395542348363:stateMachine:MyStateMachine-vpa8us7nx', // ARN de tu Step Function
        input: JSON.stringify({
            clientId: "121212",
            pais: "Chile",
            productID: "44444",
            quantity: "50"
        })
    };

    // Inicia la ejecución de la Step Function de forma asíncrona
    const startCommand = new StartExecutionCommand(startParams);
    const startResult = await stepfunctions.send(startCommand);

    // Describe la ejecución en un bucle hasta que se complete
    let describeParams = {
      executionArn: startResult.executionArn
    };
    let describeCommand = new DescribeExecutionCommand(describeParams);
    let describeResult = await stepfunctions.send(describeCommand);

    while (describeResult.status === 'RUNNING') {
      // Espera 5 segundos antes de hacer la siguiente llamada
      await new Promise(resolve => setTimeout(resolve, 300));
      
      describeResult = await stepfunctions.send(describeCommand);
    }

    // Retorna el resultado de la ejecución de la Step Function
    return {
        statusCode: 200,
        body: JSON.stringify(describeResult)
    };
  } catch (error) {
    console.error('Error al iniciar la ejecución de la Step Function:', error);
    return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error al iniciar la ejecución de la Step Function' })
    };
  }
};
