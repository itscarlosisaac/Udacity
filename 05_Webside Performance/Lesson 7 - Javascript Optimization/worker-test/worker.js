'use strict';

//  DEDICATED WORKER

// importScripts('helper.js');

// this.addEventListener('message', function(e){
//   console.log(e);
// });

// let i = 0;

// setInterval( function(){
//   this.postMessage("Counter "  + i++);
// }.bind(this), 500 );

// SHARED WORKER

let ports = [],
    i = 0;

this.addEventListener('connect', function(e){

  let port = e.ports[0];
  ports.push(port)
  port.start();

  // port.addEventListener('message', function(e){
  //   console.log("Message received: ", e.data );
  // });

    setInterval( function(){
      i++;
      ports.forEach(function(port){
        port.postMessage("sending Message" + i)
      });
    }, 500 );

})