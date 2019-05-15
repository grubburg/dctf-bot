const path = require('path')
const { getBotConfig, genChallEmbed } = require(path.join(__dirname, '../util/util'))
const { themecolour } = getBotConfig()
const { Chall } = require(path.join(__dirname, '../../models/index'))

var chall = {
	challid: 'crypto2',
	title: 'RSA Level 0',
	category: 'Cryptography',
	points: 10,
	author: 'joseph#8210 (Joseph)',
	flag: '71c281f11cf8f0e07b73bb3fbe884b748f8b01d2bafe2574157ba56ae863bb3a',
	desc: async function(msg) {
		var description = `

			Practice makes perfect...

			\`\`\`p = 124031229518274089467199323794612026514016300057524881922409337685859302740210859310434145018807354401258020965854467248902493582170738605174780962956665385730816421801545005802516958789993408612669863243661901410969476844103177369498342800665476481306495082558255442200116321602944990572622609952865007955187
q = 154935967506143898675399614490708584844526382221519824561160286717597311026747507385484960980752551485904038607409980479359995970051663865812242507217978975735560739540212774087685961958280245901471164248414502557727850745849574640143649771425879263662690010607541395611510698535721016955649979229379387360627
e = 65537
c = 10214861892120445865706385867011587127982045085961862823092044304305939552393842554545454239786761326736651737891182342548588924080704628751092756140318269823467049441874858968317487329891259238315363624456336080755478927026710723688585757247557931475102582577748644922975623505161093260928142607959549309978930068369267414123151654788124670818474772668793649593871423650063919771786368027770837971886168517190007399980700311805376224527838285697981316120969399711890612253130626678712362973178914520342831921909615107294366566624156568568106436986386109053466371294944512232622369387736598408368770428882577777409409\`\`\`
		`

		let { challid, title, category, points, author } = chall
		var d = await Chall.findOne({ challid })
		var solveCount = d.solves.length
		var icon_url = 'https://cdn.discordapp.com/avatars/111028987836313600/9a177eb8ca0e33965d894ccc840d3f4b.jpg?size=32'

		var descEmbed = genChallEmbed({
			challid, title, category, points, author, solveCount, themecolour, description, icon_url
		})

		msg.channel.send({ embed: descEmbed })
	},
	notes: ['https://en.wikipedia.org/wiki/RSA_(cryptosystem)']
}

module.exports = chall