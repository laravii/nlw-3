const map = L.map('mapid').setView([ -27.2056602,-49.6932568], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    
   marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], {icon}).addTo(map)
})


function addPhotoField(){
    const container = document.querySelector('#images')

    const newsImage = document.querySelectorAll('.new-upload')

    const cloneNewImage = newsImage[newsImage.length -1].cloneNode(true)

    const input = cloneNewImage.children[0]

    if(input.value == ''){
        return}

    input.value = ''

    container.appendChild(cloneNewImage)    
}

function delet(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ''
        return
    }

    span.parentNode.remove();
       
}

function toggleSelect(event){
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    console.log(input)

    input.value = button.dataset.value

}

function validateDatas(event) {
    const lat = document.querySelector('[name=lat]').value
    const lng = document.querySelector('[name=lng]').value

    // validar se lat e lng estão vazios
    if(lat == '' || lng ==''){
        alert('Por favor, selecione um ponto no mapa')
        event.preventDefault()
        return false
    }

    const about = document.querySelector('[name=about]').value

    if(about.length > 300){
        alert('O campo sobre deve haver no máximo 300 caracteres =(')
        event.preventDefault()
        return false
    }
    return true
    
}