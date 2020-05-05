import moment from 'moment';

export const formatTime = (data) => {
    const date = new Date(data)
    console.log(moment(date).fromNow(Date.now()), 'time')
    return moment(date).format('MM/DD/YYYY');
}