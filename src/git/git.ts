export interface Git {
  status: () => Promise<unknown>
  isRepositoryInitialized: () => Promise<boolean>
  getCurrentBranchName: () => Promise<string>
  hasPendingChanges: () => Promise<boolean>
}
