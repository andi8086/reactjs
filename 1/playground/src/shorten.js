import PropType from 'prop-types'

function shorten(str, maxlength) {
    if (str.length <= maxlength) {
            return str;
    } else {
            return str.slice(0, maxlength-3) + "...";
    }
}

shorten.propTypes = {
    str: PropType.string,
    maxlength: PropType.number
}

export default shorten;