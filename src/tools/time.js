module.exports = {
    timeWeek: () => {
        const date = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const times = { timeNow: formatter.format(date), oneWeek: formatter.format(date.setDate(date.getDate() + 7)) };
        return times;
    },

    timeMonth: () => {
        const date = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const times = { timeNow: formatter.format(date), oneMonth: formatter.format(date.setMonth(date.getMonth() + 1)) };
        return times;
    },

    timeFull: (setTime) => {
        if (!setTime) setTime = 0;
        const date = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
        const times = {
            timeNow: formatter.format(date),
            oneMonth: formatter.format(date.setMonth(date.getMonth() + 1)),
            oneWeek: formatter.format(date.setDate(date.getDate() + 7)),
            timeSet: formatter.format(date.setDate(date.getDate() + Number(setTime))),
        };
        return times;
    },

    epoch: () => {
        const time = Math.floor(new Date().getTime('-3:00') / 1000.0);
        const epoch = `<t:${time}:R>`;

        return epoch;
    },
};
