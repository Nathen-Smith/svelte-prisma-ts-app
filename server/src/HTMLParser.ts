export const HTMLParser = (html: string) => {
  const metadataStartIdx = html.search(/<script type="application\/ld\+json">/);
  if (metadataStartIdx !== -1) {
    const metadataEndIdx =
      html.slice(metadataStartIdx).search(/<\/script>/) + metadataStartIdx + 9;
    const metadata = html.slice(metadataStartIdx, metadataEndIdx);

    // This file is a template used to parse HTML from web scraping
    // console.log(JSON.stringify(metadata));
    // console.log(`start is ${metadataStartIdx}`);
    // console.log(`end is ${metadataEndIdx}`);
    // console.log(html.slice(metadataStartIdx, metadataEndIdx));
    // https://www.google.com/search?q=biceps+workout
  }
  return "no";
};
