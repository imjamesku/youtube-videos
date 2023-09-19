type Config = {
  port: string;
};

function getConfig(): Config {
  return {
    port: '8080',
  };
}
// Hard to chain additional transformations
// Doesn't protect against falsy values like empty string or 0

const config: Config | null = getConfig();
const port = config.port;
server.listen(config.port);



const str = 'hello';
const idx = str.indexOf('8');
if (idx !== -1) {
  ...
}
