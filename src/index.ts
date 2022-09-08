import { SimpleGitClient } from './git/simple-git/simple-git-client.js'
import { InquirerClient } from './prompt/inquirer/inquirer-client.js'
import { ShellJs } from './shell/shell-js/shell-js.js'

const shell = new ShellJs()
const git = new SimpleGitClient()
const inquirer = new InquirerClient()

async function start (): Promise<void> {
  try {
    shell.assertsWhich('git')
    await git.assertsRepositoryExists()
    // Check branch name
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
