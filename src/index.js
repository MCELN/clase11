const server = require( './server' );
const realTimeServer = require( './realTimeServer' );

const PORT = 3000;

const httpServer = server.listen( PORT, () => {
    console.log( `Server running to port ${ PORT }` );
});

realTimeServer( httpServer );

