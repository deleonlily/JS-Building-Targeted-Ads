// get user's data
// get user's coordinates
async function getCoords() {
    const position = await new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })

return [position.coords.latitude, position,coords.longtitude]
}

// get user's time
function userTime() {
    const now = new Date()
    return now.getHours()
}

function getMealTime() {
    const hour = userTime()
    return hour >20 ? 'late-night snack': hour > 16 ? 'dinner': hour > 11 ? 'lunch':  'breakfast'
}

// helper functions
// check time of day


// build ads
// build ad 1
function buildAd1 () {
    const mealTime = getMealTime()
    const content = document.querySelector('.ad1')
    const inner = document.createElement('p')
    inner.innerHTML =  `We've got the best <span>${mealTime}</span> in Town`
    content.append(inner)
}

// build ad 2
function buildAd2(coords) {
    const mapLink = `https://google.com/maps/search/food/@${coords[0]}, ${coords[1]}`
    const content = document.querySelector('.ad2')
    const inner = document.createElement('p')
    inner.innerHTML = `Try our coffee! <span><a href="${mapLink}" target="_blank">We're this close</a></span>`
    content.append(inner)
}

// event listeners

// on load, build ads
window.onload = async () => {
    buildAd1()
    const coordinates = await getCoords()
    buildAd2(coordinates)
}