import { simpleGit, SimpleGit, StatusResult } from 'simple-git'
import { GitClient } from '../git-client'

export class SimpleGitClient implements GitClient {
  private readonly git: SimpleGit

  public constructor () {
    this.git = simpleGit()
  }

  public async status (): Promise<StatusResult> {
    return await this.git.status()
  }

  public async assertsRepositoryExists (): Promise<unknown> {
    try {
      return await this.status()
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (error.message.includes('not a git repository')) {
        throw new Error('You must be in an existent repository to run this script')
      }
      throw error
    }
  }
}
