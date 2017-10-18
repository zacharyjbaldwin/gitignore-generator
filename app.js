#!/usr/bin/env node
const fs = require('fs');
const request = require('request');
const yargs = require('yargs');

const argv = yargs
	.options({
		language: {
			alias: 'l',
			demand: true,
			describe: 'The language for which to generate the .gitignore file.',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.alias('version', 'v')
	.argv;


String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.format = function () {
    return this.toLowerCase().capitalize();
};

var getGitignoreFile = (language) => {

    var formattedLanguage = language.format();

    return new Promise((resolve, reject) => {
        request({
            url: `https://raw.githubusercontent.com/github/gitignore/master/${formattedLanguage}.gitignore`,
            json: false
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to githubusercontent.com!');
            } else if (response.statusCode === 404) {
                reject('Unable to find a .gitignore file for the specifed language!');
            } else if (response.statusCode === 200) {
                fs.appendFile('.gitignore', body, (error) => {
                    if (error) {
                        reject(`Unable to create .gitignore for ${language}!`);
                    } else {
                        resolve(`Successfully created .gitignore for ${language}!`);
                    }
                });
            }
        });
        reject('Unknown error occured.');
    }).catch((error) => {

    });
};

getGitignoreFile(argv.language).then((message) => {
    console.log('Successfully created .gitignore file!');
});
