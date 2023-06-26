fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(json => {
  var data = ''
  for (var i = 0; i < json.length; i++) {
    data += `
              <div class="container">
  <img src='${json[i].image}' onclick="showImage(this)">
  <h1>${json[i].title}</h1>
  <h3>$ 
      ${json[i].price}
  </h3>
  <p>
      ${json[i].description}
  </p>
</div>
              `
    document.getElementById('show').innerHTML = data
  }
})
function showImage(element) {
document.getElementById('showbig').src = `${element.src}`
document.getElementById('showbig').style.display = 'block'
document.getElementById('c').style.display = 'flex'
document.body.style.overflow = 'hidden'
}
function hideImage() {
document.getElementById('showbig').style.display = 'none'
document.getElementById('c').style.display = 'none'
document.body.style.overflowY = 'scroll'
}
function filterCards() {
var searchInput = document.getElementById('searchInput').value.toLowerCase();
var containers = document.getElementsByClassName('container');
for (var i = 0; i < containers.length; i++) {
  var title = containers[i].getElementsByTagName('h1')[0].innerText.toLowerCase();
  var price = containers[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
  if (title.includes(searchInput) || price.includes(searchInput)) {
    containers[i].style.display = 'block';
  } else {
    containers[i].style.display = 'none';
  }
}
}
document.getElementById('searchInput').addEventListener('input', filterCards);
