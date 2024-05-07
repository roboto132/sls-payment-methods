// Archivo: handler1.js

'use strict';

export const handler = async (event) => {
  const params = {
    cpgId: event.cpgId,
    countryId: event.countryId,
    organizationId: event.organizationId,
    transactionId: event.transactionId,
    b2bSession: event.b2bSession,
    clientId: event.clientId,
    limit: event.limit,
    offset: event.offset
};

console.log(params);


  // Retornar solo los parámetros clientId y pais en la respuesta
  return {
    statusCode: 200,
    body: JSON.stringify(params,
      null,
      2
    ),
  };
};
