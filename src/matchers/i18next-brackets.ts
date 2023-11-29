import { Matcher } from '.';


export const matchI18NextBrackets: Matcher = (
  input: string,
  replacer: (i: number) => string,
) => {
  const matches = input.match(/(\[\[.+?\]\]|\$t\(.+?\)|\$\[.+?\])/g);

  return (matches || []).map((match, index) => ({
    from: match,
    to: replacer(index),
  }));
};
