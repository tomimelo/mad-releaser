import shelljs from 'shelljs'
import { Shell } from '../shell.js'

export class ShellJs implements Shell {
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
