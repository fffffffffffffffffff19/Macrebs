const { token } = require('../config');
const fetch = require('node-fetch');

module.exports = {
    userApi: async user => {
        const apiFetch = await fetch(`https://discord.com/api/v10/users/${user}`, { method: 'GET', headers: { Authorization: `Bot ${token}` } })
        const api = await apiFetch.json()
        return {
            id: api.id,
            username: api.username,
            avatar: api.avatar,
            avatar_decoration: api.avatar_decoration,
            discriminator: api.discriminator,
            public_flags: api.public_flags,
            bot: api.bot,
            banner: api.banner,
            banner_color: api.banner_color,
            accent_color: api.accent_color,
        }
    }
}