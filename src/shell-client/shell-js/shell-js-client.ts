import { ShellClient } from '../shell-client'
import shelljs from 'shelljs'

export class ShellJsClient implements ShellClient {
  public which (binary: string): string | null {
    return shelljs.which(binary)
  }

  public assertsWhich (binary: string): string {
    const path = this.which(binary)
    if (path === null) throw new Error(`You must install ${binary} to run this script`)
    return path
  }

  public echo (message: string): void {
    shelljs.echo(message)
  }
}
