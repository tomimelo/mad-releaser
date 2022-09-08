export interface Git {
  status: () => Promise<unknown>
  assertsRepositoryExists: () => Promise<unknown>
}
