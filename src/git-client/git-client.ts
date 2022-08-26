export interface GitClient {
  status: () => Promise<unknown>
  assertsRepositoryExists: () => Promise<unknown>
}
