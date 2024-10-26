
const dog = document.querySelector('.dog');
const cat = document.querySelector('.cat');

function showLeft()
{
    cat.style.flex  = '0.8 1 97%';
    dog.style.flex  = '0.2 1 3%';
    cat.querySelector('img').style.display = 'block';
    cat.querySelector('img').style.width = 'auto';
    dog.querySelector('img').style.display = 'none';
}

function showRight()
{
    cat.style.flex  = '0.2 1 3%';
    dog.style.flex  = '0.8 1 97%';
    cat.querySelector('img').style.display = 'none';
    dog.querySelector('img').style.display = 'block';
    dog.querySelector('img').style.width = 'auto';
}

function showBoth()
{
    cat.style.flex = '1 1 50%';
    dog.style.flex  = '1 1 50%';
    cat.querySelector('img').style.display = 'block';
    dog.querySelector('img').style.display = 'block';
    dog.querySelector('img').style.width = '100%';
    cat.querySelector('img').style.width = '100%';
}