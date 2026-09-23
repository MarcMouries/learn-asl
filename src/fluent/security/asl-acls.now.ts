import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'

/*
 * Content tables (Sign, Lesson) are readable by everyone, including the guest
 * user, so the public portal works without login. No roles = no role required.
 */
export const aslSignRead = Acl({
    $id: Now.ID['x_snc_asl_sign_read'],
    type: 'record',
    table: 'x_snc_asl_sign',
    field: '*',
    operation: 'read',
    decisionType: 'allow',
    adminOverrides: true,
    // Deliberately public: no role required, so the guest user on the public
    // portal can read sign content. An explicit `answer = true` is how "allow
    // everyone" is expressed — an ACL with no roles/condition/script is invalid.
    script: `answer = true;`,
    description: 'Public read access to ASL signs.',
})

export const aslLessonRead = Acl({
    $id: Now.ID['x_snc_asl_lesson_read'],
    type: 'record',
    table: 'x_snc_asl_lesson',
    field: '*',
    operation: 'read',
    decisionType: 'allow',
    adminOverrides: true,
    // Deliberately public, same as the sign read ACL above.
    script: `answer = true;`,
    description: 'Public read access to ASL lessons.',
})

/*
 * Progress is private to the owning user. Read/write/delete are limited to rows
 * the current user owns; create requires an authenticated session.
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

export const aslProgressCreate = Acl({
    $id: Now.ID['x_snc_asl_progress_create'],
    type: 'record',
    table: 'x_snc_asl_progress',
    operation: 'create',
    decisionType: 'allow',
    adminOverrides: true,
    securityAttribute: 'user_is_authenticated',
    description: 'Signed-in users can record their own ASL progress.',
})
