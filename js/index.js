const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

//<!--evento para el clic-->
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

//funcion de JS para play
function handlePlay() {
  //Se llama al método play()
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('Le diste click al botón de play')
}

//funcion de JS para pause
function handlePause() {
  //Se llama al método pause()
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
  console.log('Le diste click al botón de pausa')
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
  //$video.currentTime = $video.currentTime - 10
  $video.currentTime -= 10
  console.log('para atrás 10 segundos', $video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward() {
  $video.currentTime = $video.currentTime + 10
  console.log('para adelante 10 segundos', $video.currentTime)
}

const $progess = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progess.max = $video.duration
  console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
  $progess.value = $video.currentTime
  //console.log('Tiempo actual', $video.currentTime)
}

$progess.addEventListener('input', handleInput)
function handleInput() {
  $video.currentTime = $progess.value
  console.log($progess.value)
}