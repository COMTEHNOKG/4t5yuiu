const form = document.querySelector('.form');
const minInp = document.getElementById('min');
const maxInp = document.getElementById('max');
const Res = document.getElementById('result');

form.addEventListener('submit' , (event) => {
    event.preventDefault()

    const minVal = parseInt(minInp.value);
    const maxVal = parseInt(maxInp.value);

    const randomGenerator = Math.floor(Math.random () * (maxVal - minVal + 1 )) + maxVal;


    result.textContent = randomGenerator
})


//comthe
//
//
//
//
//