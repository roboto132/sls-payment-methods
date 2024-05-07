import { getClientCreditServiceInvoker, getPaymentMethodsInvoker} from './helpers/lambda-invokers/index.mjs';
import { isNotValidStatusCode } from './helpers/index.mjs';

export const handler = async (event, context) => {
  try {
    console.log('event', event);
    console.log('process env 1',process.env.ARN_LAMBDA_1);
    console.log('process env 1', process.env.ARN_LAMBDA_2);

    // Invocar a la primera Lambda
    const { lambdaResponse: result1 } = await getClientCreditServiceInvoker(event);
  
    // Invocar a la segunda Lambda
    const { lambdaResponse: result2 } = await getPaymentMethodsInvoker(event);

    console.log('result 1', result1);
    console.log('result 2', result2);

    // Devolver los resultados procesados
    return {
      statusCode: 200,
      body: JSON.stringify({
        result1,
        result2
      })
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
