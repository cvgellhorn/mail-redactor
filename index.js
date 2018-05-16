/**
 * Redact given mail to fool all the evil harvesting bots
 *
 * @param {string} mail
 * @returns {string}
 */
module.exports = function(mail) {
    const mailLetters = mail.split('');
    const mailLettersLength = mailLetters.length;

    for (let i = 0; i < mailLettersLength; i++) {
        if (Math.floor(Math.random() * 10) % 2) {
            mailLetters[i] = `<span>${mailLetters[i]}</span>`;
        }
    }

    return mailLetters.join('');
};
