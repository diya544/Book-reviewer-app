import React from 'react';
import './Horror.css';

const books = [
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    cover: '/h1.jpg',
    teaser: 'Dracula, a classic Gothic horror novel, follows the terrifying journey of Count Dracula as he seeks to move from Transylvania to England to spread the undead curse. The story is told through a series of letters, diary entries, and newspaper clippings, capturing the suspense and horror as Dracula encounters the brave Professor Abraham Van Helsing and his group of friends determined to stop him.',
    rating: '4.3/5',
    downloadLink: 'https://www.bramstoker.org/pdf/novels/05dracula.pdf'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    cover: '/h2.webp',
    teaser: 'Frankenstein, often considered the first science fiction novel, tells the story of Victor Frankenstein, a scientist who creates a grotesque creature through unorthodox experiments. The creature, rejected by society, seeks revenge on his creator, leading to a harrowing tale of isolation, despair, and moral consequences.',
    rating: '4.5/5',
    downloadLink: 'https://englishprofi.com.ua/wp-content/uploads/Stephen-King-The-Shining.pdf'
  },
  {
    title: 'The Exorcist',
    author: 'William Peter Blatty',
    cover: '/h3.jpg',
    teaser: 'The Shining follows Jack Torrance, his wife Wendy, and their young son Danny as they move into the isolated Overlook Hotel for the winter. As Jack slowly descends into madness due to the hotel\'s supernatural influence, Danny\'s psychic abilities reveal the dark secrets of the hotel, leading to a chilling and suspenseful climax.',
    rating: '4.4/5',
    downloadLink: 'http://www.geocities.ws/thebookstore/the%20exorcist.pdf'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    cover: '/h4.jpg',
    teaser: 'The Haunting of Hill House tells the story of four people who arrive at a supposedly haunted mansion to investigate its dark history. As the psychological and supernatural forces at play intensify, they begin to question their own sanity, resulting in a gripping and eerie narrative.',
    rating: '4.6/5',
    downloadLink: 'https://www.goodreads.com/book/show/19256.The_Haunting_of_Hill_House'
  },
  {
    title: 'It',
    author: 'Stephen King',
    cover: '/h5.jpg',
    teaser: 'Bird Box is a post-apocalyptic horror novel where an unseen entity drives people to deadly violence upon sight. The story follows Malorie and her two children as they navigate a world gone mad, blindfolded, to avoid the creatures and find a safe haven.',
    rating: '4.7/5',
    downloadLink: 'https://clicklibrary.files.wordpress.com/2018/09/it-by-stephen-king.pdf'
  },
];

const Horror = () => {
  return (
    <div className="horror-page">
      <h1>HORROR --- Top Five Books</h1>
      
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <img src={book.cover} alt={book.title} className="book-cover"/>
            <div className="book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p className='teaser'><span className="blurb-label">Blurb: </span> {book.teaser}</p>
              <p>Rating: {book.rating}</p>
              <a href={book.downloadLink} className="download-button"><button>Download</button></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Horror;
