
function logPokemon(number) {
  const pokemon = "charizard"
  console.log(pokemon, number+1)
}

function logBirds(number) {
  const birds = "🕊🦅🖕"
  console.log(birds, number+1)
}

function doSomethingOverAndOverAgain(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i)
  }
}

const times = 2
doSomethingOverAndOverAgain(times, logBirds)

// doSomethingOverAndOverAgain(3, logPokemon)

doSomethingOverAndOverAgain(4, () => {
  console.log('㆝')
})
