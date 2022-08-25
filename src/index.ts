import shelljs from 'shelljs'

const { echo, which } = shelljs

async function start() {
  const gitExists = which('git')
  if (!gitExists) {
    echo('You need to install Git to run this script')
  }
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
