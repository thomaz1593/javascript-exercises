const palindromes = function (text) {
    let processed = text.toLowerCase().replace(/[^a-z]/g, "");
    return (
    processed
      .split("")
      .reverse()
      .join("") == processed
  );
};

// Do not edit below this line
module.exports = palindromes;
