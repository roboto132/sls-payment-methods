import { invoke } from "../../services/lambdaInvokeService.mjs";

const getClientCreditServiceInvoker = async (event) => {
  const params = {
    cpgId: event.cpgId,
    countryId: event.countryId,
    organizationId: event.organizationId,
    transactionId: event.transactionId,
    b2bSession: { Authorization: event.token },
    clientId: event.clientId,
    limit: event.limit || 0,
    offset: event.offset || 100
  };

  console.log(`Calling getClientCreditService with params: ${JSON.stringify(params)}`);

  return invoke(process.env.ARN_LAMBDA_1, params);
};

export { getClientCreditServiceInvoker };
