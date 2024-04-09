const sentence = "Hello there steve";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`${char}`);
  }, delay);
  delay += 500;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay);