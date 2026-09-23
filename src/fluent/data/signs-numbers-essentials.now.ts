import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import { numbersLesson, essentialsLesson } from './lessons.now'

/**
 * Numbers, punctuation, and everyday essentials.
 *
 * These ship with written descriptions and no image: Wikimedia Commons has no
 * equivalent public-domain SVG set for ASL digits or word signs, and inventing
 * an image would risk teaching the wrong sign. Because `image_url` is just a
 * field, a curated image can be added per record later with no code change —
 * the UI renders an image card when a URL is present and a description card
 * when it is not.
 */

// ---------------------------------------------------------------- numbers 0–9
export const sign0 = Record({
    $id: Now.ID['sign_0'],
    table: 'x_snc_asl_sign',
    data: {
        token: '0', label: '0', category: 'number', order: 100, lesson: numbersLesson,
        description: 'Fingers and thumb curved together into a closed oval — the same handshape as the letter O.',
    },
})
export const sign1 = Record({
    $id: Now.ID['sign_1'],
    table: 'x_snc_asl_sign',
    data: {
        token: '1', label: '1', category: 'number', order: 200, lesson: numbersLesson,
        description: 'Index finger pointing straight up, remaining fingers and thumb closed. Palm faces in, toward you.',
    },
})
export const sign2 = Record({
    $id: Now.ID['sign_2'],
    table: 'x_snc_asl_sign',
    data: {
        token: '2', label: '2', category: 'number', order: 300, lesson: numbersLesson,
        description: 'Index and middle finger up in a V, thumb holding the other fingers down. Palm faces in — the same handshape as the letter V.',
    },
})
export const sign3 = Record({
    $id: Now.ID['sign_3'],
    table: 'x_snc_asl_sign',
    data: {
        token: '3', label: '3', category: 'number', order: 400, lesson: numbersLesson,
        description: 'Thumb, index, and middle finger extended; ring and little finger folded down.',
    },
})
export const sign4 = Record({
    $id: Now.ID['sign_4'],
    table: 'x_snc_asl_sign',
    data: {
        token: '4', label: '4', category: 'number', order: 500, lesson: numbersLesson,
        description: 'Four fingers spread and pointing up, thumb folded across the palm. Palm faces in.',
    },
})
export const sign5 = Record({
    $id: Now.ID['sign_5'],
    table: 'x_snc_asl_sign',
    data: {
        token: '5', label: '5', category: 'number', order: 600, lesson: numbersLesson,
        description: 'All five fingers spread wide and extended, thumb out. Palm faces in.',
    },
})
export const sign6 = Record({
    $id: Now.ID['sign_6'],
    table: 'x_snc_asl_sign',
    data: {
        token: '6', label: '6', category: 'number', order: 700, lesson: numbersLesson,
        description: 'Little finger touches the tip of the thumb; index, middle, and ring fingers stay up — the same handshape as the letter W.',
    },
})
export const sign7 = Record({
    $id: Now.ID['sign_7'],
    table: 'x_snc_asl_sign',
    data: {
        token: '7', label: '7', category: 'number', order: 800, lesson: numbersLesson,
        description: 'Ring finger touches the tip of the thumb; index, middle, and little fingers stay up.',
    },
})
export const sign8 = Record({
    $id: Now.ID['sign_8'],
    table: 'x_snc_asl_sign',
    data: {
        token: '8', label: '8', category: 'number', order: 900, lesson: numbersLesson,
        description: 'Middle finger touches the tip of the thumb; index, ring, and little fingers stay up.',
    },
})
export const sign9 = Record({
    $id: Now.ID['sign_9'],
    table: 'x_snc_asl_sign',
    data: {
        token: '9', label: '9', category: 'number', order: 1000, lesson: numbersLesson,
        description: 'Index finger touches the tip of the thumb; middle, ring, and little fingers stay up — the same handshape as the letter F.',
    },
})

// --------------------------------------------------------------- punctuation
export const signSpace = Record({
    $id: Now.ID['sign_space'],
    table: 'x_snc_asl_sign',
    data: {
        token: ' ', label: 'Space', category: 'punctuation', order: 1100, lesson: numbersLesson,
        description: 'Word gap. When fingerspelling, pause briefly and drop the hand slightly between words rather than making a sign.',
    },
})

// ----------------------------------------------------------------- essentials
export const signHello = Record({
    $id: Now.ID['sign_hello'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'HELLO', label: 'Hello', category: 'essential', order: 100, lesson: essentialsLesson,
        description: 'A natural wave of the open hand, or a flat hand brought from the forehead outward like a small salute. Both are widely used.',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Helloasl.png',
        attribution: 'Image: Helloasl.png, Wikimedia Commons, CC BY-SA 4.0',
        reference_url: 'https://www.lifeprint.com/asl101/pages-signs/h/hello.htm',
    },
})
export const signThankYou = Record({
    $id: Now.ID['sign_thank_you'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'THANK YOU', label: 'Thank you', category: 'essential', order: 200, lesson: essentialsLesson,
        description: 'Flat hand, fingers together, starts at the chin and moves forward and down toward the person you are thanking.',
        reference_url: 'https://www.lifeprint.com/asl101/pages-signs/t/thankyou.htm',
    },
})
export const signPlease = Record({
    $id: Now.ID['sign_please'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'PLEASE', label: 'Please', category: 'essential', order: 300, lesson: essentialsLesson,
        description: 'Flat open hand on the centre of the chest, moving in a clockwise circle.',
        reference_url: 'https://www.lifeprint.com/asl101/pages-signs/p/please.htm',
    },
})
export const signYes = Record({
    $id: Now.ID['sign_yes'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'YES', label: 'Yes', category: 'essential', order: 400, lesson: essentialsLesson,
        description: 'Hand in a fist (letter S handshape) nodding up and down at the wrist, like a head nodding.',
        reference_url: 'https://www.lifeprint.com/asl101/pages-signs/y/yes.htm',
    },
})
export const signNo = Record({
    $id: Now.ID['sign_no'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'NO', label: 'No', category: 'essential', order: 500, lesson: essentialsLesson,
        description: 'Index and middle finger snap down onto the thumb once, as if quickly saying "no". A double motion is politer; a single firm motion is stronger.',
        reference_url: 'https://www.lifeprint.com/asl101/pages-signs/n/no.htm',
    },
})
export const signHelp = Record({
    $id: Now.ID['sign_help'],
    table: 'x_snc_asl_sign',
    data: {
        token: 'HELP', label: 'Help', category: 'essential', order: 600, lesson: essentialsLesson,
        description: 'A fist with the thumb up rests on the flat open palm of the other hand, and both lift together. Move it toward the person being helped.',
        reference_url: 'https://www.lifeprint.com/asl101/pages-signs/h/help.htm',
    },
})
