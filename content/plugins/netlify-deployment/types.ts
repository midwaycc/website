export type DeployObject = {
  id: string
  title: string
  created_at: string
  deploy_time: number
  branch: string
  state: 'ready' | 'error' | 'building'
  context: string
  commit_ref: string
  error_message: string
}
