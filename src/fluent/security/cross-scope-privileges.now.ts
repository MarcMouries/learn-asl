import '@servicenow/sdk/global'
import { CrossScopePrivilege } from '@servicenow/sdk/core'

/*
 * CROSS-SCOPE PRIVILEGES — declared, not discovered.
 *
 * A scoped app needs an explicit privilege record to call global-scope APIs at
 * runtime. This app's `runtime_access_tracking` is "permissive", which means the
 * platform silently GRANTS a missing privilege on first use and writes the
 * record itself — logging the "...was granted and added to 'ASL' cross scope
 * privileges" messages seen in the browser.
 *
 * Relying on that is a bad idea for three reasons:
 *
 *  1. Not portable. The auto-created records live only on the instance where
 *     they happened to be triggered. Build this app from source onto a fresh
 *     instance and they do not exist. If that instance is set to "enforcing"
 *     rather than "permissive", the widgets fail instead of self-healing.
 *  2. Not reproducible. They were never in `src/fluent`, so the repo did not
 *     describe the app's real runtime requirements.
 *  3. Whoever trips the code path first becomes the author. Two of the records
 *     below were originally created by the `guest` user — an anonymous visitor
 *     playing the name game wrote security metadata into this application.
 *
 * The `$id` of each entry below is the sys_id of the record the runtime already
 * created, so these declarations adopt the existing records rather than adding
 * duplicates alongside them.
 *
 * Every entry is justified by actual code, not added speculatively. If new
 * "was granted and added" messages ever appear, add the API here rather than
 * letting the runtime keep writing its own.
 */

// Used by: gs.generateGUID() and the name sanitising/normalising in the Play
// widget's safeName() and normalise().
export const privStringUtilities = CrossScopePrivilege({
    $id: Now.ID['28e549d5c36bc75016eb2385e0013165'],
    operation: 'execute',
    status: 'allowed',
    targetName: 'Glide API: string utilities',
    targetScope: 'global',
    targetType: 'scriptable',
})

// Used by: quiz session creation and score insertion in the Play widget.
export const privGlideRecordInsert = CrossScopePrivilege({
    $id: Now.ID['64e50dd5c36bc75016eb2385e00131ec'],
    operation: 'execute',
    status: 'allowed',
    targetName: 'GlideRecord.insert',
    targetScope: 'global',
    targetType: 'scriptable',
})

// Used by: populating session, score and sign fields across the widgets.
export const privGlideRecordSetValue = CrossScopePrivilege({
    $id: Now.ID['2c34a57e931b4f90df5f3ca47aba10c5'],
    operation: 'execute',
    status: 'allowed',
    targetName: 'GlideRecord.setValue',
    targetScope: 'global',
    targetType: 'scriptable',
})

// Used by: marking a quiz session consumed so a round cannot be replayed.
export const privGlideRecordUpdate = CrossScopePrivilege({
    $id: Now.ID['e834a57e931b4f90df5f3ca47aba10ce'],
    operation: 'execute',
    status: 'allowed',
    targetName: 'GlideRecord.update',
    targetScope: 'global',
    targetType: 'scriptable',
})

// Used by: sweepOldSessions() in the Play widget, which deletes quiz sessions
// older than an hour. Declared ahead of use — this path has not been triggered
// on this instance yet, so the runtime has not auto-granted it. Without this,
// the first visitor to trigger the sweep would author the record instead.
export const privGlideRecordDelete = CrossScopePrivilege({
    $id: Now.ID['x_snc_asl_priv_gr_delete'],
    operation: 'execute',
    status: 'allowed',
    targetName: 'GlideRecord.deleteRecord',
    targetScope: 'global',
    targetType: 'scriptable',
})
