// Methods to format numbers

export /**
 * @param {number} num
 * @param {number} decPlaces
 */
function financial(num, decPlaces) {
  return Number.parseFloat(num).toFixed(decPlaces);
}

export /**
 * @param {number} n
 * @param {number} decPlaces
 */
function percentage(n, decPlaces) {
  return (Number.parseFloat(n) * 100).toFixed(decPlaces);
}

export /**
 * @param {Array} data
 * @param {string} param
 * @param {boolean} reverse
 */
function sortByParam(data, param, reverse = true) {
  if (!reverse) {
    return data.sort((a, b) => a[param] - b[param]);
  } else {
    return data.sort((a, b) => b[param] - a[param]);
  }
}
