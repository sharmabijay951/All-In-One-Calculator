// --- 1. Tab Switching Logic ---
function showTab(tabName) {
    // Sabhi tools ko chhupao
    document.querySelectorAll('.tool-section').forEach(el => el.classList.add('hidden'));
    
    // Sabhi buttons se 'active' class hatao
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Jo click hua usko dikhao
    document.getElementById(tabName).classList.remove('hidden');
    
    // Button ko active karo (ye thoda tricky logic hai taaki sahi button highlight ho)
    event.target.classList.add('active');
}


// --- 2. Math Calculator Logic ---
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // eval() use kar rahe hain calculation ke liye
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => display.value = '', 1000);
    }
}


// --- 3. Age Calculator Logic ---
function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const resultBox = document.getElementById('age-result');
    
    if (!dobInput) {
        alert("Please select your Date of Birth!");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust negative months/days
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    resultBox.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
    resultBox.classList.remove('hidden');
}


// --- 4. Password Generator Logic ---
function updateLengthLabel() {
    document.getElementById('length-val').innerText = document.getElementById('length').value;
}

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let validChars = letters;
    if (includeNumbers) validChars += numbers;
    if (includeSymbols) validChars += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    document.getElementById('password-output').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password-output');
    if(passwordField.value === "") return;
    
    passwordField.select();
    document.execCommand("copy"); // Mobile friendly copy
    alert("Password Copied!");
}
