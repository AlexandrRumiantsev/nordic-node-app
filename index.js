//console.log(`Hello Node.js v${process.versions.node}!`);

// 1 ШАГ. Пoдключить express
const express = require('express');

// 2 ШАГ. Создаем объект приложения
const app = express();

// 4 ШАГ. Создаем первый роут приложения
// 1 параметр - адрес страницы на которую мы переходим
app.get('/', function (req, res) {
  res.send('<h1>Hello SERVER</h1>');
});
// 3 ШАГ. Запуск приложение на определенном порту
app.listen(3000);
