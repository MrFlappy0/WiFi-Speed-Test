// script.js
const API_URL = 'https://your-api-endpoint.com';

async function downloadFile(size) {
  const startTime = Date.now();
  const response = await fetch(`${API_URL}/download?size=${size}`);
  await response.blob();
  const endTime = Date.now();
  return endTime - startTime;
}

function displayResult(time) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerText = `Download complete in ${time}ms`;
}

const fileSizeSelect = document.getElementById('file-size-select');
const customSizeInput = document.getElementById('custom-size-input');
fileSizeSelect.addEventListener('change', () => {
  if (fileSizeSelect.value === 'custom') {
    customSizeInput.style.display = 'block';
  } else {
    customSizeInput.style.display = 'none';
  }
});

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', async () => {
  const size = fileSizeSelect.value === 'custom' ? customSizeInput.value : fileSizeSelect.value;
  const time = await downloadFile(size);
  displayResult(time);
});
