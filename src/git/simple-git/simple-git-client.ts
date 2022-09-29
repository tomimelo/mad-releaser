import { simpleGit, SimpleGit, StatusResult } from 'simple-git'
import { Git } from '../git.js'

export class SimpleGitClient implements Git {
  private readonly git: SimpleGit

  public constructor () {
    this.git = simpleGit()
  }

  public async status (): Promise<StatusResult> {
    return await this.git.status()
  }

  public async isRepositoryInitialized (): Promise<boolean> {
    try {
      await this.status()
      return true
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (error.message.includes('not a git repository')) {
        return false
      }
      throw error
    }
  }

  public async getCurrentBranchName (): Promise<string> {
    const status = await this.status()
    const currentBranch = status.current
    if (currentBranch === null) {
      throw new Error('You are not in a branch currently')
    }
    return currentBranch
  }

  public async hasPendingChanges (): Promise<boolean> {
    const status = await this.status()
    return !status.isClean()
  }
}
