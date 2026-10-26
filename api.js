const fetchBtn = document.getElementById('fetchBtn');
const output = document.getElementById('output');

// Local Offline API Mock Database Component
const mockCryptoDatabase = [
    { name: "Bitcoin", price: 68420.50, trend: "🚀" },
    { name: "Bitcoin", price: 67910.15, trend: "📈" },
    { name: "Bitcoin", price: 69125.80, trend: "🔥" },
    { name: "Bitcoin", price: 68150.00, trend: "💰" }
];

function getLiveCryptoData() {
    output.textContent = 'Simulating Secure API Request...';
    output.style.color = '#a78bfa';

    // Real API milliseconds response delay simulation using setTimeout
    setTimeout(() => {
        try {
            // Randomly picking dynamic data element from local database array
            const randomIndex = Math.floor(Math.random() * mockCryptoDatabase.length);
            const liveData = mockCryptoDatabase[randomIndex];

            // UI Render simulation status upgrade
            output.style.color = '#4ade80'; // Perfect neon green success state
            output.innerHTML = `${liveData.trend} $${liveData.price.toLocaleString()} USD`;
            console.log("Mock API Response Processed Successfully.");
            
        } catch (error) {
            output.style.color = '#f43f5e';
            output.textContent = 'API Simulation Error!';
        }
    }, 600); // 0.6 seconds realistic response delay
}

fetchBtn.addEventListener('click', getLiveCryptoData);
