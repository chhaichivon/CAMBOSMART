/**
 * Function compressor use to compress image file before uploading
 * @param imgUrl
 * @param quality (> 0 && <= 1)
 * @returns {*|string}
 */
export const compressor = (imgUrl, quality) => {
    // Recreate Canvas Element
    let canvas = document.createElement('canvas');
    // Set Canvas Context
    let ctx = canvas.getContext('2d');
    // Create New Image
    let img = new Image();
    img.src = imgUrl;
    let scale = 1;

    console.log("Width : " + img.width + " Height : " + img.height);

    if(img.width > 720 && (img.height < 520 || img.height > 520)){
        scale = 1 - (img.width - 720)/img.width;
    }else if(img.width < 720 && img.height > 520){
        scale = 1 - (img.height - 520)/img.height;
    }else {
        scale = 1;
    }
    console.log("Scale : " + scale);

    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    //ctx.scale(width/img.width,  height/img.height);
    //ctx.drawImage(this, 0, 0);
    ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
    return canvas.toDataURL('image/jpeg', quality);
};

/**-------------------------------Using Jquery with Canvas HTML5-------------------------------------------------*/

let $ = require("jquery");
export const compressImage = (base64, width, height) => {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext("2d");
    var deferred = $.Deferred();
    $("<img/>").attr("src", base64).on('load', function() {
        context.scale(width/50,  height/50);
        context.drawImage(this, 0, 0);
        deferred.resolve($("<img/>").attr("src", canvas.toDataURL()));
    });
    return deferred.promise();
};