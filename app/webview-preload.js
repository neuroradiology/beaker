import { webFrame } from 'electron'
import importWebAPIs from './lib/fg/import-web-apis' // TODO remove
import DatArchive from './lib/web-apis/dat-archive'
import { setup as setupLocationbar } from './webview-preload/locationbar'
import { setup as setupNavigatorPermissions } from './webview-preload/navigator-permissions-api'

// register protocol behaviors
/* This marks the scheme as:
 - Secure
 - Allowing Service Workers
 - Supporting Fetch API
 - CORS Enabled
*/
webFrame.registerURLSchemeAsPrivileged('dat', { bypassCSP: false })

// setup APIs
importWebAPIs()
window.DatArchive = DatArchive
setupLocationbar()
setupNavigatorPermissions()
