import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['2ae14b42931e1e10df5f3ca47aba1086'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '6e920a7c93da5210df5f3ca47aba1044',
        name: 'New client script 1',
        required_translations: '[]',
        script: `/**
* @param {params} params
* @param {api} params.api
* @param {any} params.event
* @param {any} params.imports
* @param {ApiHelpers} params.helpers
*/
function handler({api, event, helpers, imports}) {

}`,
        script_api_version: '2.0.0',
        sys_name: 'New client script 1',
        target: 'macroponent',
        type: 'default',
    },
})
