const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const resultParagraph = document.getElementById("result");

const reverseString = (word) => {
  return word.split("").reverse().join("");
};

const isPalindrome = (word) => {
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedWord = reverseString(cleanedWord);

  if (cleanedWord === reversedWord) {
    return `<strong>${word}</strong>  is a palindrome.`;
  } else {
    return `<strong>${word}</strong> is not a palindrome.`;
  }
};

checkBtn.addEventListener("click", () => {
  let textInput = input.value.trim();
  if (textInput == "") {
    resultParagraph.innerHTML = "Please input a value!"
    resultParagraph.classList.add('error')
  } else {
    const palindromeResult = isPalindrome(textInput);
    console.log(palindromeResult);
    resultParagraph.innerHTML = palindromeResult;
    resultParagraph.classList.remove('error')
  }
});
