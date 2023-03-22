const fetch = require('node-fetch');
const cheerio = require('cheerio');
const delay = require('delay');
const fs = require('fs');
const TeleBot = require('telebot');
const bot = new TeleBot("6279732406:AAH2OYittVoS8-lI4RIT6SDnASXRTCJzBEA");


function randstr(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// START
bot.on(['/start'], (msg) => {
    msg.reply.text('Welcome!');
});


// SPOTIFY BULK CREATORS
bot.on(/^\/spotifybulk (.+)$/, (msg, props) => {
    const jumlah = props.match[1];
    const spotify = (bodyne) => new Promise((resolve, reject) => {
        fetch('https://spclient.wg.spotify.com/signup/public/v1/account/', {
            method: 'POST',
            headers: {
                "accept-language": "en-US",
                "user-agent": "Spotify/8.5.51 Android/25 (SM-G935FD)",
                "spotify-app-version": "8.5.51",
                "x-client-id": randstr(32),
                "app-platform": "Android",
                "content-type": "application/x-www-form-urlencoded",
                "accept-encoding": "gzip",
                "Content-Length": "264"
            },
            body: bodyne,
            timeout: 5000
        }).then(async res => {
            const result = {
                body: await res.json(),
            }
            resolve(result.body)
        })
            .catch(err => reject(err))
    });

    (async () => {
        let a = 0;
        while (true) {
            try {
                a++;
                
                var email = `${randstr(5)}@ssssaasasa.me`; // change domain here
                // var password = `${randstr(8)}`; // change password here
                var password = "masukajaya"; // change password here
                
                console.log(`[${a}] Registering ${email} | ${password}`);
                const cacah = email.split("@");
                const createspotify = await spotify(`birth_day=11&name=${cacah[0]}&gender=neutral&birth_year=1995&platform=Android-ARM&email=${email}&creation_point=client_mobile&password=${password}&password_repeat=${password}&iagree=true&birth_month=4&key=142b583129b2df829de3656f9eb484e6`);
                if (createspotify.status == 1) {
                    console.log(`[${a}] Account created successfully!`);
                    msg.reply.text(`[${a}] Success! ${email} | ${password}`);

                    // fs.appendFileSync('Account_Created.txt', `${email} | ${password}\n`);
                    if (a == jumlah) {
                        msg.reply.text(`Done, ${jumlah} Spotify account created successfully!`);
                        break;
                    }
                    for (i = 0; i < 5; i++) {
                            await delay(2000);
                            break;
                        }

                } else {
                    console.log(`[${a}] ${createspotify} \n`);
                }
            } catch (error) {
                console.log(`[${a}] ${error.message}\n`)
            }
        }
    })();
});

bot.on(/^\/spotifyreq (.+)$/, (msg, props) => {
    const texts = msg.text.split(" ");
    const mail = texts[1];
    const passs = texts[2];
    const spotify = (bodyne) => new Promise((resolve, reject) => {
        fetch('https://spclient.wg.spotify.com/signup/public/v1/account/', {
            method: 'POST',
            headers: {
                "accept-language": "en-US",
                "user-agent": "Spotify/8.5.51 Android/25 (SM-G935FD)",
                "spotify-app-version": "8.5.51",
                "x-client-id": randstr(32),
                "app-platform": "Android",
                "content-type": "application/x-www-form-urlencoded",
                "accept-encoding": "gzip",
                "Content-Length": "264"
            },
            body: bodyne,
            timeout: 5000
        }).then(async res => {
            const result = {
                body: await res.json(),
            }
            resolve(result.body)
        })
            .catch(err => reject(err))
    });

    (async () => {
        let a = 0;
        while (true) {
            try {
                a++;
                
                var email = `${mail}`; // request email
                var password = `${passs}`; // rrquest password
                
                console.log(`[${a}] Registering ${email} | ${password}`);
                const cacah = email.split("@");
                const createspotify = await spotify(`birth_day=11&name=${cacah[0]}&gender=neutral&birth_year=1995&platform=Android-ARM&email=${email}&creation_point=client_mobile&password=${password}&password_repeat=${password}&iagree=true&birth_month=4&key=142b583129b2df829de3656f9eb484e6`);
                if (createspotify.status == 1) {
                    console.log(`[${a}] Account created successfully!`);
                    msg.reply.text(`[${a}] Success! ${email} | ${password}`);

                    fs.appendFileSync('Account_Created.txt', `${email} | ${password}\n`);

                    for (i = 0; i < 5; i++) {
                            await delay(2000);
                            break;
                        }
                        if (a == jumlah) {
                            msg.reply.text(`Done, ${jumlah} Spotify account created successfully!`);
                            break;
                        }
                } else {
                    console.log(`[${a}] Error, please try again!\n`);
                }
            } catch (error) {
                console.log(`[${a}] ${error.message}\n`)
            }
        }
    })();
});

bot.on(['/spotify'], (msg) => {
    const spotify = (bodyne) => new Promise((resolve, reject) => {
        fetch('https://spclient.wg.spotify.com/signup/public/v1/account/', {
            method: 'POST',
            headers: {
                "accept-language": "en-US",
                "user-agent": "Spotify/8.5.51 Android/25 (SM-G935FD)",
                "spotify-app-version": "8.5.51",
                "x-client-id": randstr(32),
                "app-platform": "Android",
                "content-type": "application/x-www-form-urlencoded",
                "accept-encoding": "gzip",
                "Content-Length": "264"
            },
            body: bodyne,
            timeout: 5000
        }).then(async res => {
            const result = {
                body: await res.json(),
            }
            resolve(result.body)
        })
            .catch(err => reject(err))
    });

    (async () => {
        let a = 1;
        while (true) {
            try {
                
                var email = `${randstr(5)}@gmail.me`; // change domain here
                // var password = `${randstr(8)}`; // change password here
                var password = "123masuk"; // change password here
                
                console.log(`[${a}] Registering ${email} | ${password}`);
                const cacah = email.split("@");
                const createspotify = await spotify(`birth_day=24&name=${cacah[0]}&gender=neutral&birth_year=2000&platform=Android-ARM&email=${email}&creation_point=client_mobile&password=${password}&password_repeat=${password}&iagree=true&birth_month=7&key=142b583129b2df829de3656f9eb484e6`);
                if (createspotify.status == 1) {
                    console.log(`[${a}] Account created successfully!`);
                    msg.reply.text(`[${a}] Success! ${email} | ${password}`);

                    fs.appendFileSync('Account_Created.txt', `${email} | ${password}\n`);
                    if (a == 1){
                        break
                    }
                } else {
                    console.log(`[${a}] Error, please try again!\n`);
                }
            } catch (error) {
                console.log(`[${a}] ${error.message}\n`)
            }
        }
    })();
});

bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});

bot.start();