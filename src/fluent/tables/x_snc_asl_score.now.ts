import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn } from '@servicenow/sdk/core'

/**
 * One row per completed game — the "arcade" model.
 *
 * The leaderboard is the top 10 rows by score, so no player identity system is
 * needed. `player_name` is the first name the player typed and doubles as their
 * leaderboard display name; it is validated and length-capped before insert.
 *
 * There is no user reference: the app deliberately does not offer sign-in, so
 * every player is anonymous.
 *
 * Rows are written only by the Play widget's server script, after it has scored
 * the round against answers held in x_snc_asl_quiz_session. The table has no
 * ACLs, so a forged score cannot be POSTed through the Table API.
 * `total_questions` is stored rather than assumed to be 10 so historical scores
 * stay meaningful if the round length ever changes.
 */
export const x_snc_asl_score = Table({
    name: 'x_snc_asl_score',
    label: 'Game score',
    display: 'player_name',
    accessibleFrom: 'package_private',
    allowWebServiceAccess: false,
    schema: {
        player_name: StringColumn({ label: 'Player name', maxLength: 40, mandatory: true }),
        score: IntegerColumn({ label: 'Score', default: 0 }),
        total_questions: IntegerColumn({ label: 'Total questions', default: 0 }),
        accuracy: IntegerColumn({ label: 'Accuracy %', default: 0 }),
    },
    index: [{ name: 'score_idx', unique: false, element: 'score' }],
})
