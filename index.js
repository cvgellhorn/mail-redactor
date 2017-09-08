/**
 * Redact given mail to fool all the evil harvesting bots
 *
 * @param {string} mail
 * @returns {string}
 */
module.exports = function(mail) {
    const mailLetters = mail.split('');

    for (let i = 0; i < mailLetters.length; i++) {
        if (Math.floor(Math.random() * 10) % 2) {
            mailLetters[i] = `<span>${mailLetters[i]}</span>`;
        }
    }

    return mailLetters.join('');
};
