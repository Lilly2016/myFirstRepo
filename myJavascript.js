'use strict;'

module.exports = {
    login: {
        username: element(by.css('#username')),
        password: element(by.css('#password')),
        loginButton: element(by.css('[type="submit"]'))
    }

}