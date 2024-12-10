import fastify from 'fastify';

const server = fastify();

server.get('/', async (request, reply) => {
    return 'hello world000000123456!\n';
});

const listen = async () => {
    try {
        await server.listen({ port: 8080 });
        console.log('Server is running at http://localhost:8080');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

listen();
