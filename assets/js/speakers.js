const speakers = [
  {
    image: 'speaker1.jpeg',
    name: 'Konshens',
    title: 'Dancehall Musician',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    image: 'speaker2.jpeg',
    name: 'Protoje',
    title: 'Modern Reggae Musician',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    image: 'speaker3.jpeg',
    name: 'Vybz Kartel',
    title: 'King of Dancehall',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    image: 'speaker4.jpeg',
    name: 'Popcaan',
    title: 'Jamaican Dancehall Musician',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    image: 'speaker5.jpeg',
    name: 'Tommy Lee',
    title: 'Dancehall Musician',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    image: 'speaker6.jpeg',
    name: 'Chronixx',
    title: 'Jamaican Reggae Musician',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

function displaySpeakers() {
  speakers.forEach((speaker) => {
    document.querySelector('.speakers').innerHTML += `
    <div class="speaker">
      <div class="speaker-img">
        <img src="assets/img/${speaker.image}" alt="">
      </div>
      <div class="speaker-info">
        <div class="speaker-name">
          <h5>${speaker.name}</h5>
        </div>
        <div class="speaker-title">
          <h6>${speaker.title}</h6>
        </div>
        <div class="speaker-message">
          <p>${speaker.message}</p>
        </div>
      </div>
    </div>
    `;
  });
}

displaySpeakers();
