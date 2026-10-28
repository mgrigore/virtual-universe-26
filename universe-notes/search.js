import { readFileSync } from "node:fs";

const word = process.argv.slice(2).join(" ").trim().toLowerCase();
if (!word) {
  console.error("Usage: npm run search -- <word>");
  process.exit(1);
}

const file = new URL("./notes/keynote-highlights.json", import.meta.url);
const { highlights } = JSON.parse(readFileSync(file, "utf8"));

const matches = highlights.filter(({ title, summary }) =>
  `${title} ${summary}`.toLowerCase().includes(word),
);

if (matches.length === 0) {
  console.log(`No highlights match "${word}".`);
} else {
  for (const { topic, title, summary } of matches) {
    console.log(`${title} (${topic})\n  ${summary}`);
  }
}
