// https://tailwindcss.com/docs/installation

Tailwind CLI // через эту штуку надо подключатся

npm init -y // package.json -y чтоб без вопросов
//-----------------------------------------------
1. npm install -D tailwindcss
2. npx tailwindcss init  // config add

3. /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // указываем за какими файлами следить ТАЙЕЛВИНГУ
  theme: {
    extend: {},
  },
  plugins: [],
}
4. // создаем фаил input.css
@tailwind base;
@tailwind components;
@tailwind utilities;

5.
{
    // "name": "ytb_tailwindcss_v3",
    // "version": "1.0.0",
    // "description": "",
    // "main": "index.js",
    "scripts": {
        "watch": "npx tailwindcss -i ./input.css -o ./css/main.css --watch",  // в корне нашего проэкта следим /input.css и результат 
        //                                                                    будем выдовать /css/main.css, --watch для просмотра в режиме реального времени 
        "build": "npx tailwindcss -i ./input.css -o ./css/main.css" 
    },
    // "keywords": [],
    // "author": "",
    // "license": "ISC",
    // "devDependencies": {
    //   "tailwindcss": "^3.2.7"
    // }
  }

  6. // в index.html
//   <!doctype html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./css/main.css" rel="stylesheet"> // в href указываем ссылку ОТСЮДА "npx tailwindcss -i ./input.css -o ./css/main.css --watch"
// </head>
// <body>
//   <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
// </body>
// </html>

7. // И запускаем команду
npm run watch

