import '@servicenow/sdk/global'
import { ServicePortal } from '@servicenow/sdk/core'
import { homePage } from '../sp-page/home/home-page.now'
import { aslTheme } from '../sp-theme/asl-theme/asl-theme.now'

export const aslPortal = ServicePortal({
    $id: Now.ID['x_snc_asl_portal'],
    title: 'ASL',
    urlSuffix: 'asl',
    homePage: homePage,
    theme: aslTheme, // custom theme: ServiceNow logo header + attribution footer
    defaultPortal: false,
    enableFavorites: false,
    inactive: false,
    hidePortalName: false,
})
