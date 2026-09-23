import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn, BooleanColumn } from '@servicenow/sdk/core'

/**
 * A lesson groups signs into a learnable unit (Alphabet, Numbers, Essentials).
 */
export const x_snc_asl_lesson = Table({
    name: 'x_snc_asl_lesson',
    label: 'Lesson',
    display: 'title',
    accessibleFrom: 'public',
    allowWebServiceAccess: true,
    schema: {
        title: StringColumn({ label: 'Title', maxLength: 80, mandatory: true }),
        description: StringColumn({ label: 'Description', maxLength: 500 }),
        order: IntegerColumn({ label: 'Order', default: 100 }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
})
