import inquirer from 'inquirer'
import { SimpleGitClient } from './git-client/simple-git/simple-git-client.js'
import { ShellJsClient } from './shell-client/shell-js/shell-js-client.js'

const shell = new ShellJsClient()
const git = new SimpleGitClient()

async function start (): Promise<void> {
  try {
    shell.assertsWhich('git')
    await git.assertsRepositoryExists()
    // Check branch name
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'theme',
          message: 'What do you want to do?',
          choices: [
            'Order a pizza',
            'Make a reservation',
            new inquirer.Separator(),
            'Ask for opening hours',
            {
              name: 'Contact support',
              disabled: 'Unavailable at this time'
            },
            'Talk to the receptionist'
          ]
        },
        {
          type: 'list',
          name: 'size',
          message: 'What size do you need?',
          choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
          filter (val: any) {
            return val.toLowerCase()
          }
        }
      ])
      .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '))
      }).catch((err) => {
        throw err
      })
  } catch (error: any) {
    console.log(error.message)
  }
}

void start()

// Ask for type of release: Major, minor, patch
// Checkout master (see main branch in config)
// Merge
// Run tests,
// Run lint,
// Push
