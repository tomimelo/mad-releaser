import shelljs from 'shelljs'

const { echo } = shelljs

async function start() {
  echo('Hello from shell')
}

start()


//Check if git exist
//Check if existent repository
//Check branch name
//Ask for type of release: Major, minor, patch
//Checkout master (see main branch in config)
//Merge
//Run tests,
//Run lint,
//Push
