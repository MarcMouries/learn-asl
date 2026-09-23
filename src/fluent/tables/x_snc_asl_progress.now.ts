import '@servicenow/sdk/global'
import { Table, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

/**
 * Per-user learning progress. One row per (user, sign).
 * Only persists for signed-in users; anonymous visitors can still browse.
 */
export const x_snc_asl_progress = Table({
    name: 'x_snc_asl_progress',
    label: 'Progress',
    accessibleFrom: 'public',
    allowWebServiceAccess: true,
    schema: {
        user: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            cascadeRule: 'delete',
            mandatory: true,
        }),
        sign: ReferenceColumn({
            label: 'Sign',
            referenceTable: 'x_snc_asl_sign',
            cascadeRule: 'delete',
            mandatory: true,
        }),
        learned: BooleanColumn({ label: 'Learned', default: true }),
    },
    index: [{ name: 'user_sign_idx', unique: true, element: ['user', 'sign'] }],
})
