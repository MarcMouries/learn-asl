import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core'

/**
 * The sign content library. Each record is one teachable sign.
 *
 * `token` is the match key used by the speller widget. Single-character tokens
 * (letters, digits, punctuation) are matched as the user types. Multi-character
 * tokens (e.g. HELLO) are lesson-only content.
 *
 * `image_url` is optional on purpose: a sign may ship with a written
 * description only, and an image can be added later as data without a rebuild.
 */
export const x_snc_asl_sign = Table({
    name: 'x_snc_asl_sign',
    label: 'Sign',
    display: 'label',
    accessibleFrom: 'public',
    allowWebServiceAccess: true,
    schema: {
        token: StringColumn({ label: 'Token', maxLength: 40, mandatory: true }),
        label: StringColumn({ label: 'Label', maxLength: 40, mandatory: true }),
        category: ChoiceColumn({
            label: 'Category',
            dropdown: 'dropdown_without_none',
            default: 'letter',
            choices: {
                letter: 'Letter',
                number: 'Number',
                punctuation: 'Punctuation',
                essential: 'Essential',
            },
        }),
        image_url: StringColumn({ label: 'Image URL', maxLength: 1024 }),
        attribution: StringColumn({ label: 'Image attribution', maxLength: 500 }),
        reference_url: StringColumn({ label: 'Reference URL', maxLength: 1024 }),
        description: StringColumn({ label: 'Description', maxLength: 1000 }),
        lesson: ReferenceColumn({
            label: 'Lesson',
            referenceTable: 'x_snc_asl_lesson',
            cascadeRule: 'clear',
        }),
        order: IntegerColumn({ label: 'Order', default: 100 }),
    },
    index: [{ name: 'token_idx', unique: false, element: 'token' }],
})
