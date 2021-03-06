export function randomString(characterCount) {
  characterCount = characterCount || 10;
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < characterCount; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export const namespaceStrings = (namespace, strings, connector = ':') => {
  return strings.reduce((collection, string) => {
    collection[string] = `${namespace}${connector}${string}`;

    return collection;
  }, {});
};
