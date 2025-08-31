import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko'

register('ko', koLocale);

export function FormatAgo(date , lang = 'en_us'){
    return format(date,lang)
}
