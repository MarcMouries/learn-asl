import '@servicenow/sdk/global'
import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

/**
 * Server-held quiz state. This is what makes the leaderboard trustworthy.
 *
 * When a round starts, the correct answers are written here and only a random
 * token is handed to the browser. When the round is scored, the server reads the
 * answers back from this table and compares them to the submitted letters by
 * position — the client's own idea of which sign it was answering is ignored.
 *
 * `consumed` makes a session single-use, so a completed round cannot be replayed
 * to farm the leaderboard.
 *
 * This table has NO access controls on purpose. Nothing outside this app's own
 * server scripts should ever read or write it, and server-side GlideRecord does
 * not evaluate ACLs, so the widget still works while REST access stays denied.
 */
export const x_snc_asl_quiz_session = Table({
    name: 'x_snc_asl_quiz_session',
    label: 'Quiz session',
    display: 'token',
    accessibleFrom: 'package_private',
    allowWebServiceAccess: false,
    schema: {
        token: StringColumn({ label: 'Token', maxLength: 64, mandatory: true }),
        answers: StringColumn({ label: 'Answers', maxLength: 4000 }),
        consumed: BooleanColumn({ label: 'Consumed', default: false }),
    },
    index: [{ name: 'token_idx', unique: true, element: 'token' }],
})
