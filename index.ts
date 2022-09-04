import fastify from "fastify";
import mercurius from "mercurius";

const server = fastify();

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

// server.register(mercurius, {
//   schema,
//   resolvers,
// });

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
