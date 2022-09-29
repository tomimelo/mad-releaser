import { SimpleGitClient } from './git/simple-git/simple-git-client.js'
import { InquirerClient } from './prompt/inquirer/inquirer-client.js'
import { ShellJs } from './shell/shell-js/shell-js.js'

const shell = new ShellJs()
const git = new SimpleGitClient()
const inquirer = new InquirerClient()

async function start (): Promise<void> {
  try {
    shell.assertsWhich('git')
    const isRepositoryInitialized = await git.isRepositoryInitialized()
    if (!isRepositoryInitialized) {
      throw new Error('You must be in an existent repository to run this script')
    }
    const currentBranch = await git.getCurrentBranchName()
    if (currentBranch === 'main') {
      const answer = await inquirer.confirm('Do you want to release from main?')
      if (!answer) return
    }
    // Checkout master (see main branch in config)
    const version = await inquirer.promptVersion()
    console.log({ version })
  } catch (error: any) {
    console.log(error.message)
  }
}

void start()

// Merge
// Run tests,
// Run lint,
// Push
