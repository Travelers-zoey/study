function add(m) {
  function temp(n) {
    m = m + n;
    return temp
  }

  temp.toString = function () {
    return m;
  };

  return temp;
}

let a = add(1)(2)(3);
console.log(a);
