import '@servicenow/sdk/global'
import { SPHeaderFooter } from '@servicenow/sdk/core'

export const aslHeader = SPHeaderFooter({
    $id: Now.ID['x_snc_asl_header'],
    name: 'ASL Header',
    id: 'x_snc_asl_header',
    static: false,
    public: true,
    category: 'custom',
    description: 'ASL portal header — ServiceNow logo, no login.',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.scss'),
})
