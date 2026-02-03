import Chart from 'chart.js/auto';

const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
        {
            label: "Продажі за останній місяць",
            data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
            backgroundColor: "#5a85a8ff",
            borderColor: "#021321ff",
            borderWidth: 1,
        },
    ],
};
const config = {
    type: 'line',
    data: data, 
};
const dv = document.getElementById("sales-chart")
const salesChart = new Chart(dv, config);


import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const boxEl = document.querySelector(".box");
const letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

let currentKeyIndex = 0;

boxEl.textContent = letters[currentKeyIndex];

window.addEventListener("keydown", (evt) => {    
    if (evt.key === " ") {
        boxEl.textContent = "Bye)"
        info({
            title: 'Гру закінчено',
            text: '',
            delay: 500
        });
    }
    if (letters[currentKeyIndex] === evt.key) {
        currentKeyIndex = Math.floor(Math.random() * (letters.length - 1) + 1)
        boxEl.textContent = letters[currentKeyIndex]
        success({
            title: 'Правильно!',
            text: 'Переходь далі',
            delay: 500
        });
    } else {
        error({
            title: 'Неправильно!',
            text: 'Натисни правильну літеру',
            delay: 500
        });
    }
})
