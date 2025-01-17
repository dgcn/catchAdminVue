/**
 * Helper 助教函数集合
 */

import Cache from '@/support/cache'
import i18n from '@/i18n'

const AUTH_TOKEN = 'auth_token'

/**
 * env get
 *
 * @param key
 */
export function env(key: string): any {
  const env = import.meta.env

  return env[key]
}

/**
 * remember token
 *
 * @param token
 */
export function rememberAuthToken(token: string): void {
  Cache.set(AUTH_TOKEN, token)
}

/**
 * remove auth token
 */
export function removeAuthToken(): void {
  Cache.del(AUTH_TOKEN)
}

/**
 * get auth token
 *
 */
export function getAuthToken(): string | null {
  return Cache.get(AUTH_TOKEN)
}

/**
 * 是否是小屏幕
 * @return
 */
export function isMiniScreen(): boolean {
  return window.document.body.clientWidth < 500
}

export function isGenerate(): boolean {
  return !env('VITE_GENERATE')
}
/**
 * translate
 *
 * @param translate
 * @returns
 */
export function t(translate: string) {
  return i18n.global.t(translate)
}

/**
 * is undefined
 *
 * @param value
 * @returns
 */
export function isUndefined(value: any): boolean {
  return value === undefined
}

/**
 * set page title
 *
 * @param title
 */
export function setPageTitle(title: string) {
  if (env('VITE_APP_NAME')) {
    document.title = title + '-' + env('VITE_APP_NAME')
  } else {
    document.title = title
  }
}

/**
 * is function?
 *
 * @param value
 */
export function isFunction(value: any) {
  return typeof value === 'function'
}

export function _window(key: string) {
  if (window.hasOwnProperty('admin_config')) {
    // @ts-ignore
    return window.admin_config[key]
  }

  return null
}

export function getBaseUrl() {
  return _window('BASE_URL') ? _window('BASE_URL') : env('VITE_BASE_URL')
}

/**
 * is boolean
 * @param value
 * @returns
 */
export function isBoolean(value: any): boolean {
  return typeof value === 'boolean'
}

/**
 *
 * @param value
 * @returns
 */
export function isNumber(value: any): boolean {
  return typeof value === 'number'
}
export const getFileExt = (filename: string): string => {
  return filename.substring(filename.lastIndexOf('.')).toLowerCase()
}

// 获取文件名
export const getFilename = (filename: string): string => {
  return filename.substring(filename.lastIndexOf('/') + 1)
}
