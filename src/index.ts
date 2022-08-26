import { SimpleGitClient } from './git-client/simple-git/simple-git-client'
import { ShellJsClient } from './shell-client/shell-js/shell-js-client'

const shell = new ShellJsClient()
const git = new SimpleGitClient()

async function start (): Promise<void> {
  try {
    shell.assertsWhich('git')
    await git.assertsRepositoryExists()
    console.log('Pass')
  } catch (error: any) {
    console.log(error.message)
  }
}

void start()

// Check branch name
// Ask for type of release: Major, minor, patch
// Checkout master (see main branch in config)
// Merge
// Run tests,
// Run lint,
// Push
