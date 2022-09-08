import inquirer from 'inquirer'
import { Prompt } from '../prompt.js'
import { Version } from '../version.js'

interface VersionAnswers {
  version: Version
  customVersion: string
}

export class InquirerClient implements Prompt {
  private readonly inquirer: typeof inquirer

  public constructor () {
    this.inquirer = inquirer
  }

  public async promptVersion (): Promise<string> {
    const { version, customVersion } = await this.inquirer.prompt<VersionAnswers>([{
      type: 'list',
      name: 'version',
      message: 'Select type of version:',
      choices: [
        { name: this.capitalize(Version.Major), value: Version.Major },
        { name: this.capitalize(Version.Minor), value: Version.Minor },
        { name: this.capitalize(Version.Patch), value: Version.Patch },
        new this.inquirer.Separator(),
        { name: this.capitalize(Version.Custom), value: Version.Custom }
      ]
    },
    {
      type: 'input',
      name: 'customVersion',
      message: 'Enter custom version:',
      when: ({ version }) => version === Version.Custom,
      validate: (input: string) => {
        return this.isSemVer(input) || 'Invalid version. Please provide a valid semantic version'
      }
    }])
    return customVersion ?? version
  }

  private isSemVer (semver: string): boolean {
    const regex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/g
    return regex.test(semver)
  }

  private capitalize (text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
}
