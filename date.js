//Setting constants
const image = document.querySelector('img.time');
const date = document.querySelector('#date');
const timeStamp = document.querySelector('#timeStamp');
const now = new Date();


// Set correct image for night and day
const selectImage = () => {
    const hour = now.getHours(); 

    if(hour > 6 && hour < 20 ) {
        image.src = 'img/day.svg';
        date.style.color = '#836464';
        timeStamp.style.color = '#836464';

    } else {
        image.src = 'img/night.svg';
    }    
}
selectImage()
//////////////////////////////////////////


// Inserts timestamp
const insertTimestamp = () => {
    const now = new Date();

    const hour = dateFns.format(now, "hh");
    const minute = dateFns.format(now, "mm");

    const html = `
        <span>${hour}:${minute}</span>
    `;
    timeStamp.innerHTML = html;
}
insertTimestamp();
setInterval(insertTimestamp, 60000);

//////////////////////////////////////////

// Inserts month, day and year
const insertDatetime = () => {
    const weekName = dateFns.format(now, "dddd");
    const month = dateFns.format(now, "MMM");
    const day = dateFns.format(now, "Do");

    const html = `
        <span>${weekName}</span>,
        <span>${month}</span> 
        <span>${day}</span> 
    `;
    date.innerHTML = html;
}
insertDatetime()




