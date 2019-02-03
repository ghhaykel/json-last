var xReq = new XMLHttpRequest();

xReq.open('GET','js/cars.json');
xReq.onLoad = function(){
    document.write(xReq.responseText);
};
xReq.send();