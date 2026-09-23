import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

export const alphabetLesson = Record({
    $id: Now.ID['lesson_alphabet'],
    table: 'x_snc_asl_lesson',
    data: {
        title: 'Alphabet (A–Z)',
        description:
            'The 26 fingerspelling handshapes. Fingerspelling is used for names, places, and words with no dedicated sign.',
        order: 100,
        active: true,
    },
})

export const numbersLesson = Record({
    $id: Now.ID['lesson_numbers'],
    table: 'x_snc_asl_lesson',
    data: {
        title: 'Numbers (0–9)',
        description:
            'The ten digit handshapes. Several digits share a handshape with a letter, which makes them easier to remember.',
        order: 200,
        active: true,
    },
})

export const essentialsLesson = Record({
    $id: Now.ID['lesson_essentials'],
    table: 'x_snc_asl_lesson',
    data: {
        title: 'Everyday essentials',
        description:
            'Common whole-word signs for greetings and polite conversation. These are signs in their own right, not fingerspelled.',
        order: 300,
        active: true,
    },
})
