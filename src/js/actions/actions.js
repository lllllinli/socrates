export const SAY = 'SAY';

export function say(text) {
  return {
    type: SAY,
    text,
  };
}
