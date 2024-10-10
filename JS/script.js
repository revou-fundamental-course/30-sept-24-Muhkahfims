let isCelciusToFahrenheit = true;
console.log('javascript tersambung');

function validateform(event){
    event.preventDefault();
    console.log('validasi fungsi berhasil terpanggil');
    const inputSuhu = document.getElementById('input-suhu').value;
    if (inputSuhu === ''){
        alert('inputan anda kosong')
    }else {
        if(isCelciusToFahrenheit) {
            calculateCtoF(inputSuhu);
        }else{
            calculateFtoC(inputSuhu);
        }
    }
}

function calculateCtoF(celcius) {
    let fahrenheit = (parseFloat(celcius) * 9/5) + 32;
    document.getElementById('hasil-suhu').value = fahrenheit.toFixed(2);
    document.getElementById('how-to-suhu').value = celcius + ' x 9/5 + 32 = ' + fahrenheit.toFixed(2);
}

function calculateFtoC(fahrenheit){
    let celcius = (parseFloat(fahrenheit)- 32) * 5/9;
    document.getElementById('hasil-suhu').value = celcius.toFixed(2);
    document.getElementById('how-to-suhu').value = fahrenheit + ' - 32 x 5/9 = ' + celcius.toFixed(2);
}

function reverse() {
    isCelciusToFahrenheit = !isCelciusToFahrenheit;
    if (isCelciusToFahrenheit) {
        document.getElementById('input-label').textContent = 'Celcius (\u00B0C)';
        document.getElementById('output-label').textContent = 'Fahrenheit (\u00B0F)';
    } else {
        document.getElementById('input-label').textContent = 'Fahrenheit (\u00B0F)';
        document.getElementById('output-label').textContent = 'Celcius (\u00B0C)';
    }
    reset();
}

function reset() {

    document.getElementById('input-suhu').value = '';
    document.getElementById('hasil-suhu').value = '';
    document.getElementById('how-to-suhu').value = '';

}