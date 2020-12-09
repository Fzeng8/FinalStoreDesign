const app = {
    APIData: [],
    imageGrid: '',
    imageClassGrid: '',
    productInfoGrid: '',

    initialize: function () {
        app.getAPI();
        app.hamMenu();
    },

    getAPI: function () {
        var settings = {
            "url": "https://api.bigcartel.com/v1/accounts/5704691/products",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "application/vnd.api+json",
                "Content-ty": "application/vnd.api+json",
                "Authorization": "Basic c3Vuc2V0Y2hlcnJ5ZGVzaWduczpuZXcyMFNob3AyMGJhYnk="
            },
        };

        $.ajax(settings).done(function (response) {
            app.APIData.push(response);
            console.log(app.APIData);
            app.fillEarringsPage();
        });
    },

    fillEarringsPage: function () {
        for (var i = 0; i < 5; i++) {
            //input image
            app.imageGrid += "<img src='" + app.APIData[0].data[i].attributes.primary_image_url + "' class='earringImgEarrings' alt='image of " + app.APIData[0].data[i].attributes.name +"'>";
            
            app.imageClassGrid = ".earringImage" + i.toString();

            $(app.imageGrid).appendTo(app.imageClassGrid);
            
            app.imageGrid= "";
            
            //input div containing all the product details
            app.productInfoGrid += "<div class='earringGridInfo'><h4 class='earringNameGrid'>" + app.APIData[0].data[i].attributes.name + "</h4><h5 class='earringPriceGrid'>$" + app.APIData[0].data[i].attributes.default_price + "0</h5></div>"
            
            $(app.productInfoGrid).appendTo(app.imageClassGrid);
            
            app.productInfoGrid= "";
            
        };
    },

    hamMenu: function () {
        $('.navMenu').click(function () {
            console.log("clicked");
            $('.hamMenu').toggleClass('hideClass');
            $('.navMenu').toggleClass('positionFixed');
        });
    },

}
