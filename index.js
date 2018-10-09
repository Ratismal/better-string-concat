module.exports = (...a) => {
    let s = [];
    let f = (b, c) => {
        s.push(b[0]);
        if (c) {
            return s.join(c);
        } else return f;
    }
    return f(...a);
}