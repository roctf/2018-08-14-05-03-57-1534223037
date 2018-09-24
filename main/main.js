module.exports = function main() {
  return arguments[0].split('').map(x => x -'0').reduce((x, y) => x + y, 0);
  // Write your code here
};
