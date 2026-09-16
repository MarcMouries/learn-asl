import '@servicenow/sdk/global'
import { SPHeaderFooter } from '@servicenow/sdk/core'

export const aslFooter = SPHeaderFooter({
    $id: Now.ID['x_snc_asl_footer'],
    name: 'ASL Footer',
    id: 'x_snc_asl_footer',
    static: false,
    public: true,
    category: 'custom',
    description: 'ASL portal footer — attribution line.',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.scss'),
})
