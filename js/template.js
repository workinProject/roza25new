/*Скрипт для подключения компонентов*/
jQuery.ajax({
    url: "layout/headerTop.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('headerTop').innerHTML = response;
    }
});

jQuery.ajax({
    url: "layout/headerBottom.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('headerBottom').innerHTML = response;
    }
});

jQuery.ajax({
    url: "layout/footer.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('footer').innerHTML = response;
    }
});

jQuery.ajax({
    url: "layout/catalog.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('catalog').innerHTML = response;
    }
});


