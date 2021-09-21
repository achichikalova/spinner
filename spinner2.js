const spiner = ['|', '/', '—', '\\', '|'];
for (let i = 0; i < spiner.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spiner[i]);
  }, 100 * i);
};