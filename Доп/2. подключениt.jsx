Шрифты
// https://fonts.google.com/specimen/Red+Hat+Display?query=red+

// ===================================================================
1.
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Tailwindcss v3</title>
//     <link rel="stylesheet" href="./css/main.css">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap" rel="stylesheet">
{/* </head> */}
<body>
    <h1 class="text-3xl font-bold underline text-red-600 ">
        Hello world!
      </h1>
    
</body>
{/* </html> */}

2.

{/* @tailwind base; */}
{/* @tailwind components; */}
{/* @tailwind utilities; */}

@layer base {
    body {
        font-family: 'Red Hat Display', sans-serif;
    }
}

// есть другие варианты подключится