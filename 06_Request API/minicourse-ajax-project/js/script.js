
function loadData(e) {
    e.preventDefault();
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    
    // YOUR CODE GOES HERE!
    var $streetVal = $("#street").val();
    var $cityVal = $("#city").val();
    var address = $streetVal + ", " + $cityVal; 
    var addressUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + address;

    $greeting.text("So you want to live at " + address + "?" );

    $body.append('<img class="bgimg" src="'  + addressUrl + '">');
    
    //  Get Data
    var KEY = "9132630a0a5942ec8567e6548a34b2e5";
    var URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json" ;
        URL += '?' + $.param({
                'api-key': "9132630a0a5942ec8567e6548a34b2e5",
                'q': $cityVal,
                'sort': "newest"
            });
    $.getJSON(URL, function( data ){
        var list = [];
        var temp;
        var docs = data.response.docs;

        $nytHeaderElem.text("New York Times Articles " + $cityVal )
        
        $.each( docs, function( key, val) {
            var tempTitle = docs[key].headline.main;
            var tempLink = docs[key].web_url;
            var tempSlug = docs[key].snippet;
            temp  = "<li class='article'> <a href='" + tempLink + "'>" + tempTitle + "</a>";
            temp += "<p>" + tempSlug + "</p>";
            temp += "</li>"
            list.push( temp );
        });
        $("<ul/>", {
            "class" : "article-list",
            "id" : "nytimes-articles",
            html: list.join( "" )
        }).appendTo( ".nytimes-container" );
    }).error(function(e){
        $nytHeaderElem.text("New York Times Articles Could Not Be Loaded." );
    });

    // Wikipedia JSONP Request
    var WIKIURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $cityVal +"&prop=revisions&rvprop=content&format=json";
    var opts = {};

    var wikiRequestTimeout = setTimeout(function() {
        $wikiElem.text("failed to get wikipedia resources")
    }, 8000 );
    
    // JSOP does not support on error handling fucntion;

    $.ajax({
        url: WIKIURL,
        dataType: "jsonp",
        success: function(data){
            var titles = data[1];
            var links = data[3];
            var i = 0;
            var linkLength = links.length;
            var output = [];
            for( ; i < linkLength; i++ ){
                output.push( '<li class="wiki--link">' + "<a href='" + links[i] + "'>" + titles[i]  +  "</a> </li>" );
            }
            $wikiElem.append(output);
            clearTimeout(wikiRequestTimeout);
        }
    });
    // li > a
    return false;
};

//li.article > a.herf > Title + p > meta

// NY API: 9132630a0a5942ec8567e6548a34b2e5

// 1600 pennsylvania ave
// wahington dc
$('#form-container').submit(loadData);
