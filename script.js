let count = 0;
const btn = document.getElementById('btn');
const countDisplay = document.getElementById('count');

btn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});
