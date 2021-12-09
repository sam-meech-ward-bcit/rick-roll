const content = document.querySelector("#content")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")

const url = "http://localhost:8080/holiday"

button1.addEventListener("click", () => {
  try {
    const text = request.getSync(url)
    content.innerText = text
  } catch (error) {
    content.innerText = "There was an errro 💩"
  }
})
button2.addEventListener("click", () => {
  
  request.get(url, (error, text) => {
    if (error) {
      content.innerText = "There was an errro 💩"
      return
    }
    content.innerText = text
  })
})

button3.addEventListener("click", () => {
  const promise = axios.get(url)

  promise
    .then(result => {
      content.innerText = result.data
      console.log(result.data)
    })
    .catch(error => {
      content.innerText = "There was an errro 💩"
    })

    
})

button4.addEventListener("click", async () => {

  try {
    const result = await axios.get(url)
    content.innerText = result.data
  } catch (error) {
    content.innerText = "There was an errro 💩"
  }

})

