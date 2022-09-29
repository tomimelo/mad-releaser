export interface Prompt {
  promptVersion: () => Promise<string>
  confirm: (question: string) => Promise<boolean>
}
