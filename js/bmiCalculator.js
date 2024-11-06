function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const bmi = (weight / (height * height)).toFixed(1);

    const resultSection = document.getElementById("resultSection");
    const resultText = document.getElementById("resultText");

    let category = "";
    let advice = "";

    // Determine BMI category and advice
    if (bmi < 18.5) {
        category = "Berat Badan Kurang";
        advice = "Anda mungkin memerlukan asupan kalori tambahan untuk mencapai berat badan ideal.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Berat Badan Ideal";
        advice = "Menunjukkan bahwa berat badan Anda sesuai dengan tinggi badan.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Berat Badan Lebih";
        advice = "Disarankan untuk memperbaiki pola makan dan melakukan aktivitas fisik untuk mencapai berat badan ideal.";
    } else {
        category = "Obesitas";
        advice = "Perlu konsultasi dengan dokter atau ahli gizi untuk pengelolaan berat badan yang tepat.";
    }

    // Update result section with BMI details
    resultText.innerHTML = `
        <h3>${category}</h3>
        <p>${bmi}</p>
        <p>Anda memiliki ${category.toLowerCase()}</p>
        <p>${advice}</p>
    `;
    
    resultSection.style.display = "block";
}

function downloadResult() {
    alert("Hasil BMI akan diunduh (simulasi)");
}
