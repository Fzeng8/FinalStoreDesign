const app = {
    APIData: [],
    imageGrid: '',
    imageClassGrid: '',
    productInfoGrid: '',
    productImg0: '',
    productCost0: '',
    productDescription0: '',
    productImg1: '',
    productCost1: '',
    productDescription1: '',
    productImg2: '',
    productCost2: '',
    productDescription2: '',
    productImg3: '',
    productCost3: '',
    productDescription3: '',
    productImg4: '',
    productCost4: '',
    productDescription4: '',
    productImg5: '',
    productCost5: '',
    productDescription5: '',

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
            app.fillProductPage0();
            app.fillProductPage1();
            app.fillProductPage2();
            app.fillProductPage3();
            app.fillProductPage4();
        });
    },

    fillEarringsPage: function () {
        for (var i = 0; i < 5; i++) {
            //input image
            app.imageGrid += "<a href='product" + [i] + ".html'><img src='" + app.APIData[0].data[i].attributes.primary_image_url + "' class='earringImgEarrings' alt='image of " + app.APIData[0].data[i].attributes.name + "'></a>";

            app.imageClassGrid = ".earringImage" + i.toString();

            $(app.imageGrid).appendTo(app.imageClassGrid);

            app.imageGrid = "";

            //input div containing all the product details
            app.productInfoGrid += "<div class='earringGridInfo'><h4><a href='product" + [i] + ".html' class='productLinkGrid'>" + app.APIData[0].data[i].attributes.name + "</a></h4><h5><a href='product.html' class='productLinkGrid'>$" + app.APIData[0].data[i].attributes.default_price + "0</a></h5></div>"

            $(app.productInfoGrid).appendTo(app.imageClassGrid);

            app.productInfoGrid = "";

        };
    },

    hamMenu: function () {
        $('.navMenu').click(function () {
            console.log("clicked");
            $('.hamMenu').toggleClass('hideClass');
            $('.navMenu').toggleClass('positionFixed');
        });
    },

    fillProductPage0: function () {
        app.productImg0 += "<img src='" + app.APIData[0].data[0].attributes.primary_image_url + "' class='earringImgEarrings' alt='image of " + app.APIData[0].data[0].attributes.name + "'>"
        
        app.productCost0 += "<p>$"+ app.APIData[0].data[0].attributes.default_price + "0</p>"
        
        app.productDescription0 += "<p>" + app.APIData[0].data[0].attributes.description + "</p>"

        $('.productImg0').html(app.productImg0);
        $('.productCost0').html(app.productCost0);
        $(app.productDescription0).appendTo('.productDescription0');
    },
    
    fillProductPage1: function () {
        app.productImg1 += "<img src='" + app.APIData[0].data[1].attributes.primary_image_url + "' class='earringImgEarrings' alt='image of " + app.APIData[0].data[1].attributes.name + "'>"
        
        app.productCost1 += "<p>$"+ app.APIData[0].data[1].attributes.default_price + "0</p>"
        
        app.productDescription1 += "<p>" + app.APIData[0].data[1].attributes.description + "</p>"

        $('.productImg1').html(app.productImg1);
        $('.productCost1').html(app.productCost1);
        $(app.productDescription1).appendTo('.productDescription1');
    },
    
    fillProductPage2: function () {
        app.productImg2 += "<img src='" + app.APIData[0].data[2].attributes.primary_image_url + "' class='earringImgEarrings' alt='image of " + app.APIData[0].data[2].attributes.name + "'>"
        
        app.productCost2 += "<p>$"+ app.APIData[0].data[2].attributes.default_price + "0</p>"
        
        app.productDescription2 += "<p>" + app.APIData[0].data[2].attributes.description + "</p>"

        $('.productImg2').html(app.productImg2);
        $('.productCost2').html(app.productCost2);
        $(app.productDescription2).appendTo('.productDescription2');
    },
    
    fillProductPage3: function () {
        app.productImg3 += "<img src='" + app.APIData[0].data[3].attributes.primary_image_url + "' class='earringImgEarrings' alt='image of " + app.APIData[0].data[3].attributes.name + "'>"
        
        app.productCost3 += "<p>$"+ app.APIData[0].data[3].attributes.default_price + "0</p>"
        
        app.productDescription3 += "<p>" + app.APIData[0].data[3].attributes.description + "</p>"

        $('.productImg3').html(app.productImg3);
        $('.productCost3').html(app.productCost3);
        $(app.productDescription3).appendTo('.productDescription3');
    },
    
    fillProductPage4: function () {
        app.productImg4 += "<img src='" + app.APIData[0].data[4].attributes.primary_image_url + "' class='earringImgEarrings' alt='image of " + app.APIData[0].data[4].attributes.name + "'>"
        
        app.productCost4 += "<p>$"+ app.APIData[0].data[4].attributes.default_price + "0</p>"
        
        app.productDescription4 += "<p>" + app.APIData[0].data[4].attributes.description + "</p>"

        $('.productImg4').html(app.productImg4);
        $('.productCost4').html(app.productCost4);
        $(app.productDescription4).appendTo('.productDescription4');
    },


    //rip this doesn't work. I thought JS could carry the variable value to each page but I guess not...     
    //    whichEarrings(){
    //        $('.earringImage0').click(function () {
    //            app.productNum = 0
    //            app.collectionType = 'Draped'
    //            console.log("image0", app.productNum, app.collectionType)
    //        });
    //        $('.earringImage1').click(function () {
    //            app.productNum = 1
    //            app.collectionType = 'Draped'
    //            console.log("image1")
    //        });
    //        $('.earringImage2').click(function () {
    //            app.productNum = 2
    //            app.collectionType = 'Lined'
    //            console.log("image2")
    //        });
    //        $('.earringImage3').click(function () {
    //            app.productNum = 3
    //            app.collectionType = 'Lined'
    //            console.log("image3")
    //        });
    //        $('.earringImage4').click(function () {
    //            app.productNum = 4
    //            app.collectionType = 'Lined'
    //            console.log("image4")
    //        });
    //            
    //        
    //        
    //        app.fillProductPage();
    //    },
    //    
}
