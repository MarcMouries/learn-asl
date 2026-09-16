import '@servicenow/sdk/global'
import { SPTheme } from '@servicenow/sdk/core'
import { aslHeader } from '../../sp-header-footer/asl-header/header.now'
import { aslFooter } from '../../sp-header-footer/asl-footer/footer.now'

export const aslTheme = SPTheme({
    $id: Now.ID['x_snc_asl_theme'],
    name: 'ASL Theme',
    header: aslHeader,
    footer: aslFooter,
    fixedHeader: true,
    fixedFooter: false,
    logoAltText: 'ServiceNow',
    turnOffScssCompilation: false,
    customCss: `// Core brand + surface variables (sp-rgb UXF tokens with fallbacks).
// Defined here so custom header/footer and widget SCSS compile against the theme.
$brand-primary: sp-rgb(--now-color--primary-1, #0080A3) !default;
$brand-success: sp-rgb(--now-color_alert--positive-3, #3E8600) !default;
$brand-warning: sp-rgb(--now-color_alert--warning-3, #B29800) !default;
$brand-danger: sp-rgb(--now-color_alert--critical-3, #E52239) !default;
$brand-info: sp-rgb(--now-color_alert--info-3, #007AC9) !default;

$body-bg: sp-rgb(--now-color_background--primary, #FFFFFF) !default;
$background-primary: sp-rgb(--now-color_background--primary, #FFFFFF) !default;
$background-secondary: sp-rgb(--now-color_background--secondary, #F5F6F7) !default;

$text-color: sp-rgb(--now-color_text--primary, #10171A) !default;
$text-secondary: sp-rgb(--now-color_text--secondary, #232E33) !default;
$text-muted: sp-rgb(--now-color_text--tertiary, #37444A) !default;

$link-color: sp-rgb(--now-color--link-2, #1955BE) !default;
$link-hover-color: sp-rgb(--now-color--link-3, #113A82) !default;

$navbar-inverse-bg: sp-rgb(--now-color_background--primary, #FFFFFF) !default;
$navbar-inverse-link-color: sp-rgb(--now-color_text--primary, #10171A) !default;
$navbar-inverse-link-hover-color: sp-rgb(--now-color_text--primary, #10171A) !default;
$sp-navbar-divider-color: sp-rgb(--now-color_divider--tertiary, #CFD5D7) !default;
$sp-navbar-bottom-width: 0.125rem !default;

$border-tertiary: sp-rgb(--now-color_border--tertiary, #CFD5D7) !default;
$panel-bg: sp-rgb(--now-color_background--primary, #FFFFFF) !default;
`,
})
