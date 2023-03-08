
// ul>li*5>a

<ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Case Studies</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Blog</a></li>
</ul>

//p-1 ; pt-1 ; pb-1 ; py-1 (верх-низ) ; px-1 (лево право)
Есть промежуточные значения в виде pt-0.25 p-2.5 mb-3.5 

или pt-[25px]
// ------------------------------------------------------------
{/* <header class="relative">
        <div class="container">
            <nav class="flex justify-between items-center pt-[26px]">
                <a href="#"><img src="./img/Logo.svg" alt="Logo"></a>

                <ul class="flex gap-12 md:hidden" >
                    <li><a href="#" class="font-medium text-xl text-linghtBlack hover:text-darkRed transition-colors lg:text-base">About</a></li>
                    <li><a href="#" class="font-medium text-xl text-linghtBlack hover:text-darkRed transition-colors lg:text-base">Services</a></li>
                    <li><a href="#" class="font-medium text-xl text-linghtBlack hover:text-darkRed transition-colors lg:text-base">Case Studies</a></li>
                    <li><a href="#" class="font-medium text-xl text-linghtBlack hover:text-darkRed transition-colors lg:text-base">Careers</a></li>
                    <li><a href="#" class="font-medium text-xl text-linghtBlack hover:text-darkRed transition-colors lg:text-base">Blog</a></li>
                </ul>

                <ul class="absolute left-6 right-6 top-24 bg-linghtRed flex">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>

                <button class="burger hidden md:block">
                    <span class="burger-line top-line"></span>
                    <span class="burger-line mid-line"></span>
                    <span class="burger-line bottom-line"></span>
                </button>
            </nav>
        </div>
        <h1>37:33</h1>
    </header> */}

flex - лого и пункты меню в одну сирочку
justify-between - лого и пункты меню по разным сторонам контейнера
                         HOME
items-center - logo ---- USER  (лого в стал по центру контенйнера)
                         CONTACT

flex - пункты меню в одну строчку
gap-12 - между li растояние 12*4=48px
md=992px: hidden (скрывать пункты меню)

absolute
left-6
right-6
top-24
bg-linghtRed
flex - пункты меню в одну строчку
flex-col - пункты мкню в одну колонку
items-center - только после этого пункты выстроились в колонку

text-xl (xl=20px)
transition-colors (плавный переход при наведениии)
lg:text-base (lg=992px шрифт меняется с 20 на 16)

burger - для этого класа стили в /input.css
hidden - скрыто  изначально 
md:block - показывается при md=768px


{/* <main>
    <section id="hero">
        <div class="container">
            <h1 class="pt-[100px] font-black text-[50px] max-w-2xl text-center mx-auto 
            leading-snug lg:text-4xl lg:pt-16 md:text-3xl md:pt-12 md:w-full 
            sm:pt-10 sm:text-2xl">
            Grow your business online.
                Get. More. Leads.</h1>

        <p class="text-xl tracking-tight text-center max-w-xl mx-auto mt-[18px] 
        md:text-lg md:mt-4 sm:text-base sm:mt-2">Wanna get serious into digital 
        marketing? Then you need leads and this is where we can help you.</p>
        </div>
    </section>
</main> */}

<!-- pt-[100px] - падинг  с верху -->
<!-- max-w-2xl - максимально по ширине -->
<!-- text-center - сам текст отценторовался -->
<!-- mx-auto - текст встал по центру контейнера (страницы) -->
<!-- leading-snug - (line-height похоже это межстрочный интервал) snug = 1.375 tight = 1.25 итд -->

<!-- lg:pt-16 - на экране шириной меньше чем 992px падинг топ 16*4=64рх -->
<!-- lg:text-4xl - текст стал меньше 36рх -->

<!-- md:text-3xl - на экране шириной меньше чем 768рх текст стал 30рх -->
<!-- md:pt-12 - падинг топ 48зч -->
<!-- md:max-w-full - ширина 100% -->

<!-- sm:pt-10 - - на экране шириной меньше чем 488рх падинг топ 10*4=40рх
sm:text-2xl -- на экране шириной меньше чем 488рх текст стал 24рх -->

<!-- text-xl font-size: 1.25rem/* 20px */;-->
<!-- tracking-tight - межбуквенное растояние -0.025em -->
<!-- max-w-xl - максимальна ширина подзаголоака xl=36rem/* 576px */ -->
<!-- mx-auto - текст встал по центру контейнера (страницы) -->
<!-- mt-[18px] - соответственно -->
<!-- md:text-lg - на экране шириной меньше чем 768рх текст стал 30рх 1.125rem/* 18px */ -->
<!-- md:mt-4- на экране шириной меньше чем 768рх margin-top: 1rem/* 16px */
sm:text-base -  на экране шириной меньше чем 488рх font-size: 1rem/* 16px */;
sm:mt-2 -  на экране шириной меньше чем 488рх margin-top: 0.5rem/* 8px */ -->





