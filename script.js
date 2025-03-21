const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const resultDiv = document.getElementById('result');
const loadingDiv = document.getElementById('loading');

const funnyImages = [
    'images/funny1.jpg', 'images/funny2.jpg'];

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => video.srcObject = stream)
    .catch(error => console.error("Camera access denied!", error));

captureButton.addEventListener('click', () => {
    resultDiv.innerHTML = "";
    loadingDiv.classList.remove("hidden");

    setTimeout(() => {
        loadingDiv.innerHTML = "🔄 Enhancing facial features...";  
    }, 1000);

    setTimeout(() => {
        loadingDiv.innerHTML = "📊 AI Deep Learning Model Processing...";
    }, 2000);

    setTimeout(() => {
        loadingDiv.classList.add("hidden");

        const randomImage = funnyImages[Math.floor(Math.random() * funnyImages.length)];
        resultDiv.innerHTML = `<img src="${randomImage}" alt="Your Result" width="250px"><br>
                               <p>Our AI thinks this is your true look! 😂</p>`;
    }, 4000);
});
