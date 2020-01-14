module.exports = function parse(data) {
  return data.split(",").map(data => data.trim());
};
