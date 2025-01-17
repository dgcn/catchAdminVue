export interface RouterMeta {
  icon: string
  title: string
  roles: string[]
  hidden: boolean
}

export interface RouterRecord {
  name: string
  meta: RouterMeta
  component?: string
  children?: RouterRecord[]
  fullPath?: string
  redirect: string
}
