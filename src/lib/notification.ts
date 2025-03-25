import { env } from '$env/dynamic/private';
import { Pushover } from 'pushover-js';

const push = (() => {
  if (env.PUSHOVER_GROUP && env.PUSHOVER_TOKEN) {
    return new Pushover(env.PUSHOVER_GROUP, env.PUSHOVER_TOKEN);
  }
})();

export const notify = async (title: string, message: string) => {
  if (push) {
    try {
      await push.send(title, message);
    } catch (e) {
      console.error(`Failed to send pushover notification: ${e}`);
    }
  }
};
