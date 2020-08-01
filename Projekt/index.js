menuBar = function () {
    this.menu = document.getElementById("menu");
}

menuBar.prototype.getMenu = function(){
    return this.menu;
}

menuBar.prototype.setOpacity = function (opa) {
    this.menu.style.opacity = opa;
}

menuBar.prototype.setVisibility = function (visibility) {
    this.menu.style.setProperty('visibility', visibility);
}


function Hamburger() {

    var element = document.getElementById('hamburger')
    var menu = new menuBar();
    var opa = menu.getMenu();

    element.addEventListener('click', function(event) {

        if(opa.style.opacity)
        {
            if (opa.style.opacity == 1) {
                menu.setVisibility('collapse');
                menu.setOpacity(0);
            } else if (opa.style.opacity == 0) {
                menu.setVisibility('visible');
                menu.setOpacity(1);
            }

        }else {
            menu.setVisibility('collapse');
            menu.setOpacity(0);
        }
    });

}

function funkcjaPierwsza() {

    var button1 = document.getElementById('lista1');
    var text = document.createTextNode("Telefony");
    var text2 = document.createTextNode('Jeśli masz telefon z Androidem to używasz javy każdego dnia.')
    var textObecny = button1.innerText;

    if(button1.hasChildNodes()){
        while(button1.firstChild){
            button1.removeChild(button1.firstChild);
        }
    }

    if(textObecny.length < 10)
    {
        button1.appendChild(text2);
    }
    else
    {
        button1.appendChild(text);
    }

}

function funkcjaDruga() {

    var button1 = document.getElementById('lista2');
    var text = document.createTextNode("Systemy PoS");
    var text2 = document.createTextNode('Java również została użyta w czasie ich tworzenia.')
    var textObecny = button1.innerText;

    if(button1.hasChildNodes()){
        while(button1.firstChild){
            button1.removeChild(button1.firstChild);
        }
    }

    if(textObecny.length < 15)
    {
        button1.appendChild(text2);
    }
    else
    {
        button1.appendChild(text);
    }

}

function funkcjaTrzecia() {

    var button1 = document.getElementById('lista3');
    var text = document.createTextNode("Gry");
    var text2 = document.createTextNode('Jedna z najpopularniejszych gier naszych czasów, Minercraft został napisany w Javie.')
    var textObecny = button1.innerText;

    if(button1.hasChildNodes()){
        while(button1.firstChild){
            button1.removeChild(button1.firstChild);
        }
    }

    if(textObecny.length < 10)
    {
        button1.appendChild(text2);
    }
    else
    {
        button1.appendChild(text);
    }

}

function funkcjaCzwarta() {

    var button1 = document.getElementById('lista4');
    var text = document.createTextNode("Aplikacje finansowe");
    var text2 = document.createTextNode('Jednak z aplikacji używanych przez banki – Murex jest napisana w javie.')
    var textObecny = button1.innerText;

    if(button1.hasChildNodes()){
        while(button1.firstChild){
            button1.removeChild(button1.firstChild);
        }
    }

    if(textObecny.length < 20)
    {
        button1.appendChild(text2);
    }
    else
    {
        button1.appendChild(text);
    }

}

function funkcjaPiata() {

    var button1 = document.getElementById('lista5');
    var text = document.createTextNode("Big Data technologie");
    var text2 = document.createTextNode('Platforma Javy jest bardzo popularna w systemach wysokiej wydajności. Na przykład Hadoop i ElasticSearch są napisane w Javie i używane przy projektach Big Data.')
    var textObecny = button1.innerText;

    if(button1.hasChildNodes()){
        while(button1.firstChild){
            button1.removeChild(button1.firstChild);
        }
    }

    if(textObecny.length < 25)
    {
        button1.appendChild(text2);
    }
    else
    {
        button1.appendChild(text);
    }

}


