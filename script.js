function Minus()
{
    let number = document.getElementById('number').textContent;
    var intNumber = parseInt(number);
    intNumber = intNumber - 1;
    if(intNumber < 0)
    {
        intNumber = 0;
    }
    document.getElementById('number').innerHTML = intNumber;
}
function Add()
{
    let number = document.getElementById('number').textContent;
    var intNumber = parseInt(number);
    intNumber = intNumber + 1;
    document.getElementById('number').innerHTML = intNumber;
}
let countNumber = 0;
function clickButton()
{
    var styles = `
    #jqueryProduct {
        width: 100%;
        padding-top: 10px;
        display: none;
    }
    #productCart {
        width: calc(100% - 20px);
        height: fit-content;
        padding-left: 10px;
        display: grid;
        grid: 40px / 40px auto;
        gap: 10px;
        margin-bottom: 20px;
    }
    #image {
        grid-area: 1 / 1 / span 1 / span 1;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        background-size: cover;
    }
    .infor {
        grid-area: 1 / 2 / span 1 / span 1;
        display: grid;
        grid: 50% 50% / 85% 15%;
    }
    #element1 {
        padding-top: 2px;
        width: 100%;
        height: 50%;
        font-size: 11px;
    }
    #element2 {
        grid-area: 2 / 1 / span 1 /span 1;
        font-size: 12px;
    }
    #delete {
        padding-top: 10px;
    }
    #delete:hover {
        cursor: pointer;
    }
    `;

    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
        
    let number = document.getElementById('number').textContent;
    var intNumber = parseInt(number);
    let price = document.getElementById('valueSale').textContent;
    var intPrice = parseInt(price);
    var result = intNumber * intPrice;
    if(intNumber > 0)
    {
        document.getElementById('jqueryProduct').innerHTML += '<div id="productCart"><div id="image"></div><div class="infor"><div id="element1">' + document.getElementById('title').textContent + '</div><div id="element2">' + '$' + price + ' x ' + intNumber + '  <b>$' + result + '.00</b>' + '</div><svg id="delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></div></div>'
        document.getElementById('note').style.display = 'none';
        document.getElementById('btnCart').style.display = 'block';
        document.getElementById('jqueryProduct').style.display = 'block';
        countNumber++;

        document.getElementById('count').style.display = 'block';
        document.getElementById('count').innerHTML = countNumber;
    }
    else {
        document.getElementById('btnCart').style.display = 'none';
        document.getElementById('note').style.display = 'block';
    }
    if(intNumber == 0 & countNumber > 0)
    {
        document.getElementById('note').style.display = 'none';
        document.getElementById('btnCart').style.display = 'block';
    }

}

let count = 0;
function openCart()
{
    count++;
    if(count == 1)
    {
        document.getElementById('cart').style.display = 'block';
        count = -1;
    }
    else {
        document.getElementById('cart').style.display = 'none';
        count = 0;
    }
}

function clickPre()
{
    let lists = document.querySelectorAll('#imageLightbox');
    document.getElementById('otherImg').appendChild(lists[0]);
    document.getElementById('imgBox').style.backgroundImage = lists[1].style.backgroundImage;
}
function clickNext()
{
    let lists = document.querySelectorAll('#imageLightbox');
    document.getElementById('otherImg').prepend(lists[lists.length - 1]);
    document.getElementById('imgBox').style.backgroundImage = lists[lists.length - 1].style.backgroundImage;

}

function showLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}
function hideLightbox() {
    document.getElementById('lightbox').style.display = 'none';

}