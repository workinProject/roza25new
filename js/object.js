/*Обьекты для заполнения плитки товаров*/
let flowers = [{
    img: "img/flower.png",
    name: 'Букет кружевные сны',
    price: 150000,
    feature: "новинка",
    color: '#19AC23',
    sizeW: 45,
    sizeH: 40
}, {
    img: "img/flower.png",
    name: 'Букет кружевные сны',
    price: 150000,
    sizeW: 45,
    sizeH: 40
}, {
    img: "img/flower.png",
    name: 'Букет кружевные сны',
    price: 150000,
    sizeW: 45,
    sizeH: 40
}, {
    img: "img/flower.png",
    name: 'Букет кружевные сны',
    price: 150000,
    feature: "лучшая цена",
    color: '#FF499F',
    sizeW: 45,
    sizeH: 40
}, {
    img: "img/flower.png",
    name: 'Букет кружевные сны',
    price: 150000,
    sizeW: 45,
    sizeH: 40
}, {
    img: "img/flower.png",
    name: 'Букет кружевные сны',
    price: 150000,
    sizeW: 45,
    sizeH: 40
},

];

var tmpl = document.getElementById('grid-template').innerHTML.trim();
tmpl = _.template(tmpl);


document.getElementById('grid-holder').innerHTML = tmpl({
list: flowers
});