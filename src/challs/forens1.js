const path = require('path')
const { getBotConfig, genChallEmbed } = require(path.join(__dirname, '../util/util'))
const { themecolour } = getBotConfig()
const { Chall } = require(path.join(__dirname, '../../models/index'))

var chall = {
	challid: 'forens1',
	title: 'Universal',
	category: 'Forensics',
	points: 10,
	authorid: '219792140472025089',
	authorName: 'John',
	flag: '0bf5c2e03874ae2c909126dabd2d3637c5c731680daf80d6ebe6a4493afd57a3',
	desc: async function(msg) {
		var description = `
		[Can you find the flag?](https://drive.google.com/open?id=1poM7l97kkI6rY5Tto8mhxLF4S2MG17Uv)

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
	notes: ['https://www.wireshark.org/']
}

module.exports = chall