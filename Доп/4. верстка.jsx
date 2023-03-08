
// ul>li*5>a

<ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Case Studies</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Blog</a></li>
</ul>

g

//  section#about
<section id="about"></section>

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





