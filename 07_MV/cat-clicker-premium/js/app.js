(function(){
    // Use model for the name, no data;
    var data = [
        {
            "name": "Catwei",
            "imgURL": "img/cat.jpg",
            "clickCounter": 0,
            "status": "online"
        },
        {
            "name": "Chester",
            "imgURL": "img/cat2.jpg",
            "clickCounter": 0,
            "status": "offline"
        },
        {
            "name": "Neo",
            "imgURL": "img/cat3.jpg",
            "clickCounter": 0,
            "status": "offline"
        },
        {
            "name": "Robi",
            "imgURL": "img/cat4.jpg",
            "clickCounter": 0,
            "status": "offline"
        }
    ];

    var octopus = {
        getCatList: function(){
            return data;
        },

        addToCounter: function(){
            var current = octopus.getCurrent();
            current.clickCounter = current.clickCounter + 1;
            return current.clickCounter;
        },

        init: function(){
            viewList.init();
            view.init();
            octopus.setCurrent(data[0]);
            view.createAdminButton();
            view.createAdminForm();
            octopus.updateAdminForm();
        },

        updateView:function(i){
            var catViewer = document.getElementById("cat-viewer");
            var catCounter = document.getElementById("counter");
            catViewer.src = data[i].imgURL;
            catCounter.innerHTML = data[i].clickCounter;
        },
        
        setCurrent: function(data){
            var catViewer = document.getElementById("cat-viewer");
            view.bindEvents( catViewer, data )
        },

        getCurrent: function(){
            var current;
            data.forEach(function(arr){
                if( arr.status === "online"){
                    current = arr;
                }
            });
            return current;
        },

        updateCurrent: function(i){
            data.forEach(function(arr){
                arr.status = "offline";
            });
            data[i].status = "online";
        },

        hideAdminPanel: function(){
            document.getElementById("admin-form").style.visibility = "hidden";
        },

        showAdminPanel: function(){
            document.getElementById("admin-form").style.visibility = "visible";
            octopus.updateAdminForm()
        },

        updateAdminForm: function(){
            var c = octopus.getCurrent();
            document.getElementById("name-input").value = c.name;            
            document.getElementById("url-input").value = c.imgURL;
            document.getElementById("counter-input").value = c.clickCounter;
        },

        saveForm: function(){
            var current = octopus.getCurrent();
            var name = document.getElementById("name-input").value;
            var url = document.getElementById("url-input").value;
            var counter = document.getElementById("counter-input").value;
            var button = document.getElementById(current.name);
            button.id = name;
            button.innerHTML = name;
            current.name = name;
            current.imgURL = url;
            current.clickCounter = parseInt(counter);
            octopus.hideAdminPanel();

            var catViewer = document.getElementById("cat-viewer");
            var catCounter = document.getElementById("counter");
            catViewer.src = current.imgURL;
            catCounter.innerHTML = current.clickCounter;
        }

    }

    var viewList = {
        init: function(){
            this.render();
        },

        render: function(){
            var cats = octopus.getCatList();
            var catsLength = cats.length;
            var body = document.getElementsByTagName('body')[0];
            for( var i = 0; i < catsLength; i++ ){
                var button = document.createElement('BUTTON');
                button.innerHTML = cats[i].name;
                button.id = cats[i].name;
                button.className = 'cat-item';
                button.addEventListener('click',  function(catCopy){
                    return function(){
                        octopus.updateView(catCopy)
                        octopus.updateCurrent(catCopy);
                        octopus.hideAdminPanel();
                    }
                }(i));
                body.appendChild(button)
            }
        }
    }

    var view = {
        init: function(){
            this.render();
        },

        bindEvents: function(element){
            element.addEventListener('click', function(){
                view.updateCounter( octopus.addToCounter() );
                octopus.hideAdminPanel();
            });
        },

        render: function(){
            var body = document.getElementsByTagName('body')[0];
            var container = document.createElement("DIV");
            var img = document.createElement("IMG");
            img.src = data[0].imgURL;
            img.id = "cat-viewer";

            var counter = document.createElement("H3");
            counter.id = "counter";
            counter.appendChild(document.createTextNode("0"));

            container.className = "viewer"
            container.appendChild(img);
            container.appendChild(counter);
            body.appendChild(container);
        },

        updateCounter: function(content){
            var c = document.getElementById("counter");
            counter.innerHTML = content;
        },

        createAdminButton(){
            var body = document.getElementsByTagName('body')[0];
            var btn = document.createElement("button");
            btn.id = "show-admin";
            btn.innerHTML = "Show Admin";

            btn.addEventListener('click', function(){
                octopus.showAdminPanel();
            });

            body.appendChild(btn);
        },

        createAdminForm: function(){
            var body = document.getElementsByTagName('body')[0];
            var form = document.createElement("FORM");
            form.id = "admin-form";
            form.onsubmit = function(e){ 
                octopus.saveForm();
                e.preventDefault(); 
            }

            var nameInput = document.createElement("INPUT");
            nameInput.type = "text";
            nameInput.id = "name-input";

            var urlInput = document.createElement("INPUT");
            urlInput.type = "text";
            urlInput.id = "url-input";

            var counterInput = document.createElement("INPUT");
            counterInput.type = "number";
            counterInput.id = "counter-input";

            var btnCancel = document.createElement("button");
            btnCancel.id = "cancel-admin";
            btnCancel.innerHTML = "Cancel";
            btnCancel.addEventListener('click', function(){
                octopus.hideAdminPanel();
                return false;
            });

            var btnSave = document.createElement("button");
            btnSave.id = "save-admin";
            btnSave.innerHTML = "Save"; 
            btnSave.addEventListener('click', function(){
                octopus.saveForm();
            })

            form.appendChild(nameInput);
            form.appendChild(urlInput);
            form.appendChild(counterInput);
            form.appendChild(btnCancel);
            form.appendChild(btnSave);

            body.appendChild(form);
            octopus.hideAdminPanel();
        }
    }

    octopus.init();

})();