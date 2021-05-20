const results = document.getElementById('results');
const centerArr = [];

const injectHtml = (arr) => {
  results.innerHTML = '';
  results.insertAdjacentHTML('beforeend', `<p>${arr[0]}, &nbsp${arr[1]}</p>`);
  centerArr.push(arr[0]);
  centerArr.push(arr[1]);
};

export { injectHtml, centerArr };
