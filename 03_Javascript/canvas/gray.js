

var c = document.createElement("canvas");
c.width = 800;
c.height = 500;
var ctx = c.getContext('2d')
document.getElementsByTagName('body')[0].appendChild(c);

var image = document.createElement('img');
image.src = 'image.jpg';
image.onload = function(){
    ctx.drawImage(image, 0, 0);
    var cImage = ctx.getImageData(0,0, c.width,c.height)
    
    for( var i = 0; i < cImage.data.length; i += 4 ){
        var red = cImage.data[i]
        var green = cImage.data[i+1]
        var blue = cImage.data[i+2];

        // Average 
        // var gray = ( red + green + blue ) / 3;

        // Luma
        // var gray = ( red * 0.3 + green * 0.59 + blue * 0.11 );

        // Decomposition 
        // var colors = [red, green, blue];
        // var gray = Math.max(colors);

        // Complex
        var numberOfShades = 12;
        var averageValue = ( red + green + blue ) / 3;
        var conversionFactor = 255 / ( numberOfShades - 1 );
        var gray = ( ( averageValue / conversionFactor ) - 0.5 ) * conversionFactor;

        cImage.data[i] = gray;
        cImage.data[i+1] = gray;
        cImage.data[i+2] = gray;
        cImage.data[i+3] = 255;
    }
    var j = 3;
    ctx.clearRect(0,0, c.width, c.height)
    ctx.putImageData(cImage,0,0);
}