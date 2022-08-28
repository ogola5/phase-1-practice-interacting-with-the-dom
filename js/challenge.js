const counterElement = document.getElementById("counter")
const pauseButton = document.getElementById("pause")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const likesButton = document.getElementById("heart")
const counterLikesList = document.querySelector("ul.likes")
const commentForm = document.getElementById("comment-form")
const commentsList = document.getElementById("List")
const counterLikes = {}

document.addEventListener("DOMContentLoaded",() =>{
    startIncrementingCounter()
    plusButton.addEventListener("click",incrementCounter)
    minusButton.addEventListener("click",decrementCounter)
    likesButton.addEventListener("click",heartClick)
    pauseButton.addEventListener("click",pauseCounter)
    commentForm.addEventListener("submit",submitComment)
})
// counterpaused
let isCounterRunning = () => {
    return pauseButton.innerText ==="pause"? true:false
}
// startIncrementingCounter
let startIncrementingCounter = () =>{
    setInterval(incrementCounter,1000)
}
// increment new value
let incrementCounter = ()=>{
    if (isCounterRunning()){
        counterElement.innerText = parseInt(counterElement.innerText)+1
    }

}
// decrementCounter value
let decrementCounter = () =>{
    if(isCounterRunning()){
        counterElement.innerText = parseInt(counterElement.innerText)-1
    }
}
let heartClick = () =>{
    let counter = parseInt(counterElement.innerText)
    counterLikes[counter]
    ?(counterLikes[counter] +=1)
    : (counterLikes[counter] = 1)
  if (document.getElementById(`like-${counter}`)) {
    document.getElementById(
      `like-${counter}`
    ).innerText = `${counter} was liked ${counterLikes[counter]} times`
  } else {
    const li = document.createElement('li')
    li.id = `like-${counter}`
    li.innerText = `${counter} was liked 1 time`
    counterLikesList.appendChild(li)
  }
}
// pause
let pauseCounter = () =>{
    pauseButton.innerText = pauseButton.innerText ==="pause"? "resume":"pause"
    const button = [plusButton,minusButton,likesButton]
    button.forEach((button)=>{
        button.disabled = !button.disabled
    })
}
// list of user commentsList

let submitComment = (e) => {
    e.preventDefault()
    let comment= document.getElementById("comment-input").value
    commentsList.innerHTML += `<p>${comment}</p>`
    commentForm.reset()
}