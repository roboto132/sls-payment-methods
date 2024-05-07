import { invoke } from "../../services/lambdaInvokeService.mjs";

const getPaymentMethodsInvoker = async (event) => {
  const params = {
    cpgId: event.cpgId,
    countryId: event.countryId,
    organizationId: event.organizationId,
    clientId: event.clientId,
    transactionId: event.transactionId,
    b2bSession: { Authorization: event.token }
  };

  console.log(`Calling getPaymentMethods with params: ${JSON.stringify(params)}`);

  return invoke(process.env.ARN_LAMBDA_2, params);
};

export { getPaymentMethodsInvoker };
