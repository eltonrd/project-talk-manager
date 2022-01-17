function tokenGenerate() {
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let index = 0; index < 16; index += 1) {
 token += characters.charAt(
        Math.floor(Math.random() * characters.length),
); 
}
    return token;
}

module.exports = tokenGenerate;
