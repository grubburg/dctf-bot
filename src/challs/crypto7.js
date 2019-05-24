const path = require('path')
const { getBotConfig, genChallEmbed } = require(path.join(__dirname, '../util/util'))
const { themecolour } = getBotConfig()
const { Chall } = require(path.join(__dirname, '../../models/index'))

var chall = {
	challid: 'crypto7',
	title: 'RSA Level 4',
	category: 'Cryptography',
	points: 35,
	authorid: '111028987836313600',
    authorName: 'Joseph',
	flag: '6e42cd94487796b7332a38aa5f78d6bc376a971adb60806172a745a58941c0eb',
	desc: async function(msg) {
		var description = `

			I've learnt my lesson about small public exponents...

			The values are [here](https://paste.ee/r/bIdhw/0).

			\`\`\`python
from Crypto.Util.number import getPrime, bytes_to_long
flag = b'MISCCTF{i dont think this is the flag}'
assert(len(flag) < 50)

p, q = getPrime(1024), getPrime(1024)
n = p * q
e = 3

padded = flag.ljust(256, b'\\x00')
m = bytes_to_long(padded)

c = pow(m, e, n)
\`\`\`
		`

		let { challid, title, category, points, authorid, authorName } = chall
		var d = await Chall.findOne({ challid })
		var { solves, votes } = d
		var authorUser = await global.djsclient.fetchUser(authorid)
        var { username, discriminator, displayAvatarURL: icon_url } = authorUser
        var author = `${username}#${discriminator} (${authorName})`

		var descEmbed = genChallEmbed({
			challid, title, category, points, author, solves, themecolour, description, icon_url, votes
		})

		msg.channel.send({ embed: descEmbed })
	},
	notes: []
}

module.exports = chall