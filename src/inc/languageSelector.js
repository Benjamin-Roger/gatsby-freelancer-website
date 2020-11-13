export default function languageSelector(pathname) {
  var language = "fr"

  // The language is returned if the /en/ is found in the URL

  if (pathname.includes("/en/")) {
    language = "en"
  }

  return language
}
