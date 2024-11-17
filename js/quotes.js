const quotes = [
  {
    quote: "시작하는 방법은 말하는 것을 멈추고 행동을 시작하는 것이다",
    author: "Walt Disney",
  },
  {
    quote: "인생은 당신이 다른 계획을 세울 때 일어나는 일이다",
    author: "John Lennon",
  },
  {
    quote:
      "세상은 하나의 책과 같고, 여행하지 않는 사람은 단지 한 페이지밖에 읽지 않은 것이다",
    author: "Saint Augustine",
  },
  {
    quote: "인생은 대담한 모험이거나 아무것도 아니다",
    author: "Helen Keller",
  },
  {
    quote: "여행은 살아 있는 것이다",
    author: "Hans Christian Andersen",
  },
  {
    quote: "오직 남을 위해 사는 삶만이 가치 있는 삶이다",
    author: "Albert Einstein",
  },
  {
    quote: "인생은 한 번뿐이지만, 제대로 살면 한 번이면 충분하다",
    author: "Mae West",
  },
  {
    quote: "사랑하지 않는 사람과 여행을 떠나지 마라",
    author: "Hemingway",
  },
  {
    quote: "우리는 방해를 위해 떠나지만, 여행은 성취감을 위해 떠난다",
    author: "Hilaire Belloc",
  },
  {
    quote: "여행은 마음을 넓히고 공백을 채운다",
    author: "Sheda Savage",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
