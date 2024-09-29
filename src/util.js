import {
    MASHRIQ_DIGIT,
    MAGHRIB_DIGIT,

}  from './constants.js'

export function is_mashriq_num(n) { return contains(MASHRIQ_DIGIT, n[0]) }

export function to_mashriq_num(n) {
    if(!is_mashriq_num(n)) {
        let v = ""
        let i = 0
        while(i < n.length) {
            const c = n[i]
            switch(c) {
                case "0": v += '٠' ; break
                case "1": v += '١' ; break
                case "2": v += '٢' ; break
                case "3": v += '٣' ; break
                case "4": v += '٤' ; break
                case "5": v += '٥' ; break
                case "6": v += '٦' ; break
                case "7": v += '٧' ; break
                case "8": v += '٨' ; break
                case "9": v += '٩' ; break
                case ".": v += '٫' ; break
                default: panic()
            }
            i += 1
        }
        return v
    } else {
        return n
    }
}

export function to_mashriq_digit(c) {
    let v
    switch(c) {
        case '0': v = '٠' ; break
        case '1': v = '١' ; break
        case '2': v = '٢' ; break
        case '3': v = '٣' ; break
        case '4': v = '٤' ; break
        case '5': v = '٥' ; break
        case '6': v = '٦' ; break
        case '7': v = '٧' ; break
        case '8': v = '٨' ; break
        case '9': v = '٩' ; break
        default: panic()
    }
    return v
}   

export function is_maghrib_num(n) { return contains(MAGHRIB_DIGIT, n[0]) }

export function to_maghrib_num(n) {
    if(!is_maghrib_num(n)) {
        let v = ""
        let i = 0
        while(i < n.length) {
            const c = n[i]
            switch(c) {
                case '٠': v += "0" ; break
                case '١': v += "1" ; break
                case '٢': v += "2" ; break
                case '٣': v += "3" ; break
                case '٤': v += "4" ; break
                case '٥': v += "5" ; break
                case '٦': v += "6" ; break
                case '٧': v += "7" ; break
                case '٨': v += "8" ; break
                case '٩': v += "9" ; break
                case ',': v += "." ; break
                default: panic()
            }
            i += 1
        }
        return v
    } else {
        return n
    }
}

export function to_maghrib_digit(c) {
    let v
    switch(c) {
        case '٠': v = '0' ; break
        case '١': v = '1' ; break
        case '٢': v = '2' ; break
        case '٣': v = '3' ; break
        case '٤': v = '4' ; break
        case '٥': v = '5' ; break
        case '٦': v = '6' ; break
        case '٧': v = '7' ; break
        case '٨': v = '8' ; break
        case '٩': v = '9' ; break
        default: panic() ; break
    }
    return v
}

export function is_none(x) { return x == null }
export function is_list(x) { return x instanceof Array }
export function contains(list, el) { return list.includes(el) }
export function replace(array, i, v) { array[i] = v }
export function is_empty(list) { return Array.isArray(list) && list.length === 0 }
export function to_int(str) { return parseInt(str) }
export function to_str(obj, indent) {
    let objects = []
        const eliminateCircular = (k, v) => {
        if(v && typeof v === 'object') {
            if(objects.includes(v)) {
                return "[CIRCULAR]"
            } else {
                objects.push(v)
            }
        }
        return v
    }
    if(indent) { return JSON.stringify(obj, eliminateCircular, indent)
    } else { return JSON.stringify(obj, eliminateCircular) }
}

export function concat(x, y, id) { x[id] = x[id].concat(y[id]) }
export function del(array, i) { delete array[i] }
export function assign(x, y) { x = y }
export function regexp(expr) { return new RegExp(expr, 'u') }
export function print(v) { throw new Error('print() is not implemeted') }
export function println(v) { 
    if(v == null) {
        console.log("undefined")
    } else {
        console.log(v)
    }
}

export function pprint(obj, indent) {
    if(obj == null) {
        console.log("undefined")
    } else {
        if(indent) {
            console.log(JSON.stringify(obj, null, indent))
        } else {
            console.log(JSON.stringify(obj))
        }
    }
}

export function panic(v) { throw new Error(v) }
export function clone(obj) { return { ...obj } }
export function  repeat(str, times) { return str.repeat(times) }
export function  c0_to_uppercase(str) { return str.charAt(0).toUpperCase() + str.slice(1) }
export function  to_lowercase(str) { return str.toLowerCase() }