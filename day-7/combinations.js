const generateCombinations = (low, high) => {
  const combinations = [];
  for (let a = low; a <= high; a++) {
    let b = low;
    while (b <= high) {
      if (b !== a) {
        let c = low;
        while (c <= high) {
          if (c !== b && c !== a) {
            let d = low;
            while (d <= high) {
              if (d !== c && d !== b && d !== a) {
                let e = low;
                while (e <= high) {
                  if (e !== d && e !== c && e !== b && e !== a) {
                    combinations.push([a, b, c, d, e]);
                  }
                  e++;
                }
              }
              d++;
            }
          }
          c++;
        }
      }
      b++;
    }
  }
  return combinations;
};

module.exports = generateCombinations;
