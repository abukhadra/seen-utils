import {regexp} from './util.js'
const MASHRIQ_DIGIT = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] 
const MAGHRIB_DIGIT = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 
const TATWEEL = '\u{640}' 
const ANY_LETTER = regexp("\\p{L}") 
const ANY_NUM = regexp("\\p{N}") 

export {
    MASHRIQ_DIGIT,
    MAGHRIB_DIGIT,
    TATWEEL,
    ANY_LETTER,
    ANY_NUM
}