




let Request = new XMLHttpRequest();

Request.open("Get" , "object.json" , true);
Request.send();
Request.onreadystatechange = function(){

   if (this.readyState ===4 && this.status === 200) {
    //console.log(this.responseText);
    let json = JSON.parse(this.responseText);
    for(let i=0 ; i<JSON.length ; i++){
        let div = document.createElement("div");
        let reponame =document.createTextNode(json[i].username);
        div.appendChild(reponame);
        document.body.appendChild(div);
        
    }
   }
}