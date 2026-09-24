import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

/*
 * ACL POSTURE FOR THIS APP
 *
 * There are deliberately NO public access controls on the content or score
 * tables. That is the security model, not an omission.
 *
 * Every read and write happens inside a Service Portal widget server script
 * using plain GlideRecord, which does not evaluate ACLs. Verified empirically:
 * impersonating the guest user, plain GlideRecord returned rows from a table
 * GlideRecordSecure returned zero rows for. So the anonymous portal keeps
 * working while the Table/REST API stays closed.
 *
 * What that buys us:
 *
 *   x_snc_asl_score   — nobody can POST a forged score. Previously a public
 *                       create ACL meant anyone could insert score=10 straight
 *                       into the Table API, bypassing the quiz entirely.
 *   x_snc_asl_sign    — the answer key is no longer readable. Previously public
 *                       read meant a player could fetch every token and map
 *                       sign -> letter before answering.
 *   x_snc_asl_lesson  — closed for consistency; the widget serves it.
 *   x_snc_asl_quiz_session — never had ACLs; holds the live answer key.
 *
 * Admins still reach these tables through admin rights for support and content
 * editing. If some future integration needs REST access, add a narrow ACL for
 * that specific case rather than restoring a blanket `answer = true`.
 *
 * The progress ACLs below are retained but currently unreachable: the app no
 * longer offers sign-in, so there is no authenticated user to own a row. See
 * PLAN.md — the table is a candidate for removal.
 */

export const aslProgressRead = Acl({
    $id: Now.ID['x_snc_asl_progress_read'],
    type: 'record',
    table: 'x_snc_asl_progress',
    field: '*',
    operation: 'read',
    decisionType: 'allow',
    adminOverrides: true,
    script: `answer = (current.user == gs.getUserID());`,
    description: 'Users can read only their own ASL progress.',
})

export const aslProgressWrite = Acl({
    $id: Now.ID['x_snc_asl_progress_write'],
    type: 'record',
    table: 'x_snc_asl_progress',
    field: '*',
    operation: 'write',
    decisionType: 'allow',
    adminOverrides: true,
    script: `answer = (current.user == gs.getUserID());`,
    description: 'Users can update only their own ASL progress.',
})

export const aslProgressDelete = Acl({
    $id: Now.ID['x_snc_asl_progress_delete'],
    type: 'record',
    table: 'x_snc_asl_progress',
    operation: 'delete',
    decisionType: 'allow',
    adminOverrides: true,
    script: `answer = (current.user == gs.getUserID());`,
    description: 'Users can delete only their own ASL progress.',
})
