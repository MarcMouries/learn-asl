import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6472c6f8c35a521016eb2385e001315f'],
    localOrExisting: 'Local',
    type: 'ux_route',
    operation: 'read',
    roles: ['canvas_user'],
    name: 'now.asl.*',
})
