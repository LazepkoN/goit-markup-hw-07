# goit-markup-hw-01

<!---- Background images ---->

@media screen and (min-device-ratio: 2) and (min-width: 1200px), screen and
(-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), screen and
(min-resolution: 192dpi) and (min-width: 1200px), screen and (min-resolution:
2dppx) and (min-width: 1200px) { .hero { background-image: linear-gradient(
rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7) ),
url(../../../images/directions/direction-1.jpg); } }

<!---- Contetnts images ---->
<!-- Same size -->

<img
    srcset="./images/directions/direction-3.jpg 2x"
    src="./images/directions/direction-1.jpg"
    alt="desktop computer"
    width="360"
    height="300"
/>

    descriptor "W" for responsive images

<!-- Different sizes -->
<picture>
    <source srcset="./images/img-desc.jpg 1x, ./images/img-desc.jpg 2x" 
    media="(min-width: 1158px)" />
    <source srcset="./images/img-tab.jpg 1x, ./images/img-tab.jpg 2x" 
    media="(min-width: 768px)" />
    <source srcset="./images/img-mob.jpg 1x, ./images/img-mob.jpg 2x" 
    media="(max-width: 767px)"/>
        <img
            src="./images/directions/direction-1.jpg"
            alt="desktop computer"
            width="360"
            height="300"
        />
</picture>

Lection 2 From 01:27

    1. Закоментувати секції
    2. Закоментувати стилі (секцію, контейнер)
    3. Контейнер для всіх 3 розмірів
    4.
