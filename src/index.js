import React from 'react';
import ReactDom from 'react-dom';

function BookList(){
  return <section>
    <Book />
    </section>
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title/>
      <Author/>
    </article>
    );
}

const Image = () => <img src="https://m.media-amazon.com/images/I/51p2SDOCV9L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />

const Title = () => <h1>I Love You to the Moon and Back</h1>

const Author = () => <h4>Amelia Hepworth</h4>

ReactDom.render(<BookList/>, document.getElementById('root'));

