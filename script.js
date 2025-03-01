//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
  const number = parseFloat(document.getElementById('ip').value);
  processNumber(number);
});

function processNumber(num) {
  new Promise((resolve) => {
    setTimeout(() => {
      document.getElementById('output').textContent = Result: ${num};
      resolve(num);
    }, 2000);
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num * 2;
        document.getElementById('output').textContent = Result: ${result};
        resolve(result);
      }, 2000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num - 3;
        document.getElementById('output').textContent = Result: ${result};
        resolve(result);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num / 2;
        document.getElementById('output').textContent = Result: ${result};
        resolve(result);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num + 10;
        document.getElementById('output').textContent = Final Result: ${result};
        resolve(result);
      }, 1000);
    });
  });
}