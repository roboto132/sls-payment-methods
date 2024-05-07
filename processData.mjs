// Archivo: processData.js

'use strict';

export const handler = async (event) => {
  try {
    // Acceder a la propiedad "testing" del evento de entradas
    const testingData = event;

    // Aquí puedes acceder a los datos dentro de "testing" como lo necesites
    console.log('Datos dentro de input.testing:', testingData);
    // Extraer los datos de entrada del evento
    // const { resultFromFunction1, resultFromFunction2 } = event;

    // // Realizar algún procesamiento utilizando los datos de entrada
    // console.log('resultFromFunction1:', resultFromFunction1);
    // console.log('resultFromFunction2:', resultFromFunction2);

    // Retornar un objeto completo con las respuestas de las dos lambdas anteriores
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'process data succesfully',
          // input: {
          //   resultFromFunction1,
          //   resultFromFunction2
          // }
        },
        null,
        2
      ),
    };
  } catch (error) {
    // Si ocurre un error, registrarlo y devolver una respuesta de error
    console.error('An error occurred:', error);
    throw new Error('Processing data failed');
  }
};
