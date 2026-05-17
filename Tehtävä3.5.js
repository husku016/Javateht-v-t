const picArray = [
    {
        title: "Esimerkki 1",
        medium_image: "img/example1.jpg",
        caption: "Kuva 1",
        description: "Tämä on ensimmäinen kuva."
    },
    {
        title: "Esimerkki 2",
        medium_image: "img/example2.jpg",
        caption: "Kuva 2",
        description: "Tämä on toinen kuva."
    }
];

const section = document.querySelector('#pictures');

for (let pic of picArray) {


    const article = document.createElement('article');
    article.className = 'card';

    const h2 = document.createElement('h2');
    h2.textContent = pic.title;

    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = pic.medium_image;
    img.alt = pic.title;

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = pic.caption;

    figure.appendChild(img);
    figure.appendChild(figcaption);


    const p = document.createElement('p');
    p.textContent = pic.description;

    article.appendChild(h2);
    article.appendChild(figure);
    article.appendChild(p);

    section.appendChild(article);
}