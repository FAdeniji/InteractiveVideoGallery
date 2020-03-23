var movies = [
    {
        Title: 'Avengers',
        Image: 'images/thumbnails/avengers.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Black Panther',
        Image: 'images/thumbnails/blackpanther.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Black Widow',
        Image: 'images/thumbnails/blackwidow.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Dead Pool',
        Image: 'images/thumbnails/deadpool.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Jack Rabbit',
        Image: 'images/thumbnails/jackrabbit.jpg',
        Description: 'This is an action packed super hero movie'
    },
    {
        Title: 'Onwards',
        Image: 'images/thumbnails/Onwards.jpg',
        Description: 'This is an action packed super hero movie'
    }
];

var html = '';
for(let i = 0; i < movies.length; i++) {
    html = html + `<div class="thumb"><img src="${movies[i].Image}" title="${movies[i].Title}" /></div>`;
}

$(".thumbnailsContainer").html(html);
