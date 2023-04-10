const toTitleCase = (text: string) => {
  if (text) {
    return text
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  }
  return "";
};

export default toTitleCase;
