// Archivo: handler2.js

'use strict';

export const handler = async (event) => {
  const params = {
    cpgId: event.cpgId,
    countryId: event.countryId,
    organizationId: event.organizationId,
    clientId: event.clientId,
    transactionId: event.transactionId,
    b2bSession: event.b2bSession
};

console.log(params);


  // Retornar solo los parámetros productID y quantity en la respuesta
  return {
    statusCode: 200,
    body: JSON.stringify(params,
      null,
      2
    ),
  };
};
