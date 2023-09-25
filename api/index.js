const server = require("./src/app");
const PORT = 3002;

server.listen(PORT, () => {
	console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
