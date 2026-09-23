import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import { alphabetLesson } from './lessons.now'

/**
 * A–Z fingerspelling signs. These image URLs are the original Wikimedia Commons
 * SVG files (no /thumb, no width) and are the same set already proven to render
 * in production.
 *
 * NOTE: Fluent source files require literal values — no local consts or string
 * concatenation — so each URL is written out in full.
 */

export const signA = Record({
    $id: Now.ID['sign_a'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'A', label: 'A', category: 'letter', order: 100, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Sign_language_A.svg',
    },
})
export const signB = Record({
    $id: Now.ID['sign_b'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'B', label: 'B', category: 'letter', order: 200, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Sign_language_B.svg',
    },
})
export const signC = Record({
    $id: Now.ID['sign_c'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'C', label: 'C', category: 'letter', order: 300, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Sign_language_C.svg',
    },
})
export const signD = Record({
    $id: Now.ID['sign_d'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'D', label: 'D', category: 'letter', order: 400, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sign_language_D.svg',
    },
})
export const signE = Record({
    $id: Now.ID['sign_e'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'E', label: 'E', category: 'letter', order: 500, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Sign_language_E.svg',
    },
})
export const signF = Record({
    $id: Now.ID['sign_f'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'F', label: 'F', category: 'letter', order: 600, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sign_language_F.svg',
    },
})
export const signG = Record({
    $id: Now.ID['sign_g'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'G', label: 'G', category: 'letter', order: 700, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Sign_language_G.svg',
    },
})
export const signH = Record({
    $id: Now.ID['sign_h'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'H', label: 'H', category: 'letter', order: 800, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sign_language_H.svg',
    },
})
export const signI = Record({
    $id: Now.ID['sign_i'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'I', label: 'I', category: 'letter', order: 900, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Sign_language_I.svg',
    },
})
export const signJ = Record({
    $id: Now.ID['sign_j'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'J', label: 'J', category: 'letter', order: 1000, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Sign_language_J.svg',
    },
})
export const signK = Record({
    $id: Now.ID['sign_k'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'K', label: 'K', category: 'letter', order: 1100, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sign_language_K.svg',
    },
})
export const signL = Record({
    $id: Now.ID['sign_l'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'L', label: 'L', category: 'letter', order: 1200, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Sign_language_L.svg',
    },
})
export const signM = Record({
    $id: Now.ID['sign_m'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'M', label: 'M', category: 'letter', order: 1300, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Sign_language_M.svg',
    },
})
export const signN = Record({
    $id: Now.ID['sign_n'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'N', label: 'N', category: 'letter', order: 1400, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Sign_language_N.svg',
    },
})
export const signO = Record({
    $id: Now.ID['sign_o'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'O', label: 'O', category: 'letter', order: 1500, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Sign_language_O.svg',
    },
})
export const signP = Record({
    $id: Now.ID['sign_p'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'P', label: 'P', category: 'letter', order: 1600, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Sign_language_P.svg',
    },
})
export const signQ = Record({
    $id: Now.ID['sign_q'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'Q', label: 'Q', category: 'letter', order: 1700, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Sign_language_Q.svg',
    },
})
export const signR = Record({
    $id: Now.ID['sign_r'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'R', label: 'R', category: 'letter', order: 1800, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Sign_language_R.svg',
    },
})
export const signS = Record({
    $id: Now.ID['sign_s'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'S', label: 'S', category: 'letter', order: 1900, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Sign_language_S.svg',
    },
})
export const signT = Record({
    $id: Now.ID['sign_t'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'T', label: 'T', category: 'letter', order: 2000, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Sign_language_T.svg',
    },
})
export const signU = Record({
    $id: Now.ID['sign_u'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'U', label: 'U', category: 'letter', order: 2100, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Sign_language_U.svg',
    },
})
export const signV = Record({
    $id: Now.ID['sign_v'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'V', label: 'V', category: 'letter', order: 2200, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sign_language_V.svg',
    },
})
export const signW = Record({
    $id: Now.ID['sign_w'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'W', label: 'W', category: 'letter', order: 2300, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Sign_language_W.svg',
    },
})
export const signX = Record({
    $id: Now.ID['sign_x'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'X', label: 'X', category: 'letter', order: 2400, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Sign_language_X.svg',
    },
})
export const signY = Record({
    $id: Now.ID['sign_y'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'Y', label: 'Y', category: 'letter', order: 2500, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Sign_language_Y.svg',
    },
})
export const signZ = Record({
    $id: Now.ID['sign_z'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'Z', label: 'Z', category: 'letter', order: 2600, lesson: alphabetLesson,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Sign_language_Z.svg',
    },
})
