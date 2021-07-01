export const HTMLParser = (html: string) => {
  if (html.search(/<script type="application\/ld\+json"/) !== -1) {
    return "yes!";
  }
  return "no";
};
