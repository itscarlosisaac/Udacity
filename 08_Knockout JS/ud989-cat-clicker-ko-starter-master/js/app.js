
var initialCats = [
    {
        clickCount: 0,
        name: 'Ben',
        imgSrc: 'img/cat.jpg',
        imgAttribution: "imgAttribution",
        nicknames: [ "Tiger", "T-Bone",  "Mr-T", "Jon Snow" ]
    },
    {
        clickCount: 0,
        name: 'Michael',
        imgSrc: 'img/cat2.jpg',
        imgAttribution: "imgAttribution",
        nicknames: [ "Scary", "T-Bone",  "Mr-T", "Jon Snow" ]
    },
    {
        clickCount: 0,
        name: 'John',
        imgSrc: 'img/cat3.jpg',
        imgAttribution: "imgAttribution",
        nicknames: [ "Jonny" ]
    }
]

var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);

    this.catLevel = ko.computed(function(){
        var clicks = this.clickCount();
        var title;
        if( clicks < 10 ){
            title = "Newborn";
        }else if( clicks >= 200){
            title = "Ninja"; 
        }else if( clicks >= 100){
            title = "Adult"; 
        }else if( clicks >= 50){
            title = "Teen"; 
        }else if( clicks >= 10){
            title = "Infant"; 
        }
        return title;

    }, this);
    this.nicknames = ko.observableArray(data.nicknames);
}

var ViewModel  = function() {
    var self = this;

    this.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });
    
    this.currentCat = ko.observable( this.catList()[0] );
    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1 );
    }
    this.setCat = function(clickedCat){
        self.currentCat(clickedCat)
    }
    
}


ko.applyBindings( new ViewModel() );