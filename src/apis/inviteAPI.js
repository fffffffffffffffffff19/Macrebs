const fetch = require('node-fetch');

module.exports = {
    inviteAPI: async (inviteCode) => {
        const apiFetch = await fetch(`https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`);
        const api = await apiFetch.json();
        return {
            code: api.code,
            type: api.type,
            expires_at: api.expires_at,
            guild: {
                id: api.guild.id,
                name: api.guild.name,
                banner: api.guild.banner,
                description: api.guild.description,
                icon: api.guild.icon,
                features: api.guild.features,
                verification_level: api.guild.verification_level,
                vanity_url_code: api.guild.vanity_url_code,
                premium_subscription_count: api.guild.premium_subscription_count,
                welcome_screen: api.guild.welcome_screen,
                nsfw: api.guild.nsfw,
                nsfw_level: api.guild.nsfw_level,
            },
            channel: api.channel,
            inviter: api.inviter,
            approximate_member_count: api.approximate_member_count,
            approximate_presence_count: api.approximate_presence_count,
        };
    },
};
