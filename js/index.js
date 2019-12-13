target.innerHTML = "Welcom shop";

$('h1').slideUp(2000).slideDown(2000);

$('h2').click(() => $('h2').toggle(2000).slideToggle(2000));

document.getElementById("furniture-list").innerHTML ="Sofa";

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
    button.onclick = function() {
        let myGoods = input.value;
        input.value = '';
        const listGoods = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
            listGoods.appendChild(listText);
            listText.textContent = myGoods;
            listGoods.appendChild(listBtn);
            listBtn.textContent = 'Delete';
            list.appendChild(listGoods);
            listBtn.onclick = function(e) {
            list.removeChild(listGoods);
        }
        input.focus();
    }

