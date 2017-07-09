/**
 * Function getImage use to get image file from <img>
 * @param img
 */
const getImage = (img) => {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let image = new Image();
    image.src = canvas.toDataURL();
    return image;
};

/**
 * Function dataURItoFile use to convert base64 image to file image
 * @param dataUri
 * @param fileName
 */
export const dataURItoFile = (dataUri, fileName) => {
    let arr = dataUri.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bString = atob(arr[1]), n = bString.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bString.charCodeAt(n);
    }
    return new File([u8arr], fileName, {type:mime});
};

/**
 * Function compressor use to compress image file before uploading
 * @param imgUrl
 * @param quality (> 0 && <= 1)
 * @returns {*|string}
 */
export const imageCompressor = (imgUrl, quality, name="cambo") => {
    // Recreate Canvas Element
    let canvas = document.createElement('canvas');
    // Set Canvas Context
    let ctx = canvas.getContext('2d');
    // Create New Image
    let img = new Image();
    img.src = imgUrl;
    let scale = 1;

    if(img.width > 720 && (img.height < 520 || img.height > 520)){
        scale = 1 - (img.width - 720)/img.width;
    }else if(img.width < 720 && img.height > 520){
        scale = 1 - (img.height - 520)/img.height;
    }else {
        scale = 1;
    }

    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    //ctx.scale(width/img.width,  height/img.height);
    //ctx.drawImage(this, 0, 0);
    ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
    /*ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";

    if(img.width * scale < 400){
        ctx.fillText("www.cambosmart.com/", (img.width * scale)/2, (img.height * scale)/2);
        ctx.fillText("store?n=oudam", (img.width * scale)/2, (img.height * scale)/2 + 40);
    }else {
        ctx.fillText(`www.cambosmart.com/store?n=${name}`, (img.width * scale)/2, (img.height * scale)/2);
    }*/

    ctx.globalAlpha = 0.5;
    const img2 = getImage(document.getElementById("cambosmart"));
    ctx.drawImage(img2, ((img.width * scale)-img2.width)/2, (img.height * scale) - img2.height);
    return canvas.toDataURL('image/jpeg', quality);
};

/**
 * Function thumbnail use to convert original image to thumbnail
 * @param imgUrl
 * @param quality
 * @returns {*|string}
 */
export const thumbnail = (imgUrl, quality) => {
    // Recreate Canvas Element
    let canvas = document.createElement('canvas');
    // Set Canvas Context
    let ctx = canvas.getContext('2d');
    // Create New Image
    let img = new Image();
    img.src = imgUrl;

    let scale = 1;

    if(img.width > 265 && (img.height <= 225 || img.height > 225)){
        scale = 1 - (img.width - 265)/img.width;
    }else if(img.width < 265 && img.height > 225){
        scale = 1 - (img.height - 225)/img.height;
    }else {
        scale = 1;
    }

    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    //ctx.scale(width/img.width,  height/img.height);
    //ctx.drawImage(this, 0, 0);
    ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
    return canvas.toDataURL('image/jpeg', quality);
};


export const bannerCompressor = (imgUrl, quality) => {
    // Recreate Canvas Element
    let canvas = document.createElement('canvas');
    // Set Canvas Context
    let ctx = canvas.getContext('2d');
    // Create New Image
    let img = new Image();
    img.src = imgUrl;

    canvas.width = 1092;
    canvas.height = 162;
    //ctx.scale(width/img.width,  height/img.height);
    //ctx.drawImage(this, 0, 0);
    ctx.drawImage(img, 0, 0, 1092, 162);
    /*ctx.font = "20px Arial";
     ctx.textAlign = "center";
     ctx.fillStyle = "white";

     if(img.width * scale < 400){
     ctx.fillText("www.cambosmart.com/", (img.width * scale)/2, (img.height * scale)/2);
     ctx.fillText("store?n=oudam", (img.width * scale)/2, (img.height * scale)/2 + 40);
     }else {
     ctx.fillText(`www.cambosmart.com/store?n=${name}`, (img.width * scale)/2, (img.height * scale)/2);
     }*/
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