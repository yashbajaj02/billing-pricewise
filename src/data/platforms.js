export const platforms = [
  {
    name: "Amazon",
    buildUrl: (q) =>
      `https://www.amazon.in/s?k=${q}&tag=pricewise120a-21`,
  },
  {
    name: "Flipkart",
    buildUrl: (q) =>
      `https://www.flipkart.com/search?q=${q}`,
  },
  {
    name: "Blinkit",
    buildUrl: (q) =>
      `https://blinkit.com/s/?q=${q}`,
  },
  {
    name: "Zepto",
    buildUrl: (q) =>
      `https://www.zeptonow.com/search?query=${q}`,
  },
];
