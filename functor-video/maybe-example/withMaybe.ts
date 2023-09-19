import {Just, Maybe} from 'purify-ts';

type Config = {
  port: string;
};

function getConfig(): Maybe<Config> {
  return Just({
    port: '8080',
  });
}
// Hard to chain additional transformations
// Doesn't protect against falsy values like empty string or 0

const config: Maybe<Config> = getConfig();

config.map(v => v);

const port = config
  .map(x => x.port)
  .map(parseInt)
  .orDefault(8080);

console.log(port);
