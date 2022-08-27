let handler = async m => m.reply(`
𝐅𝐄𝐁𝐑𝐈 𝘼𝘿𝘼𝙇𝘼𝙃 𝙎𝙀𝙊𝙍𝘼𝙉𝙂 𝘼𝙉𝘼𝙆 𝘿𝘼𝙍𝙄 𝘽𝘼𝙋𝘼𝙆 𝘼𝙇𝙋𝙄.𝙎𝙀𝙆𝙄𝘼𝙉 𝘿𝘼𝙍𝙄 𝘼𝙎𝙀𝙋𝘽𝙊𝙏𝙕
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(dataripan|ripan|siapakah ripan)$/i
handler.command = new RegExp

module.exports = handler