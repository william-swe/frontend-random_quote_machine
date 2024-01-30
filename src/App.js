import './App.css';

// quotes source: freeCodeCamp
const quotes = ["Build your own dreams, or someone else will hire you to build theirs.",
"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
"If you do what you’ve always done, you’ll get what you’ve always gotten.",
"I am not a product of my circumstances. I am a product of my decisions.",
"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
"I didn’t fail the test. I just found 100 ways to do it wrong.",
"Teach thy tongue to say, “I do not know,” and thous shalt progress.",
"Remember no one can make you feel inferior without your consent.",
"Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
"It is never too late to be what you might have been.",
"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, \
so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
"I’ve learned that people will forget what you said, people will forget what you did, \
but people will never forget how you made them feel.",
"Dreaming, after all, is a form of planning.",
"Life is what we make it, always has been, always will be.",
"Education costs money. But then so does ignorance.",
"If you want your children to turn out well, spend twice as much time with them, and half as much money.",
"Strive not to be a success, but rather to be of value."];
const authors = ["Farrah Gray", "Jamie Paolinetti", "Tony Robbins", "Stephen Covey", "Mae Jemison", "Benjamin Franklin",
"Maimonides", "Eleanor Roosevelt", "Maya Angelou", "George Eliot", "Mark Twain", "Maya Angelou", "Gloria Steinem",
"Grandma Moses", "Sir Claus Moser", "Abigail Van Buren", "Albert Einstein"];
const colors = ["forestgreen", "darkred", "sienna", "seagreen", "darkcyan", "darkgoldenrod", "darkmagenta", 
"darkgreen", "darkblue", "darkolivegreen", "navy", "midnightblue", "maroon", "indigo", "brown", "firebrick",
"green"];
let index = get_rand_index();

function App() {
  return (
    <table id="quote-box">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Raleway:700&amp;display=swap" rel="stylesheet"></link>
      <tr>
        <td id="text"><i class="fa fa-quote-left"> </i> <span id="quote">{quotes[index]}</span></td>
      </tr>
      <tr>
        <td><p id="author">- {authors[index]}</p></td>
      </tr>
      <tr>
        <td>
          <div id="btn-groups">
            <div id="left-group">
              <a id="tweet-quote"><i class="fa fa-twitter fa-2x"></i></a>
              <i class="fa fa-tumblr-square fa-2x"></i>
            </div>
            <div id="right-group">
              <button type="button" id="new-quote" onClick={changeQuote}>New quote</button>
            </div>
          </div>
        </td>
      </tr>
    </table>
  );
}

changeColors();

function get_rand_index() {
  return Math.floor(Math.random() * quotes.length);
}

function changeQuote() {
  // change quote and author
  index = get_rand_index();
  var quote = document.getElementById("quote");
  var author = document.getElementById("author");
  quote.innerHTML = quotes[index];
  author.innerHTML = "- " + authors[index];
  changeColors();
}

function changeColors() {
  // change color
  var text = document.getElementById("text");
  var author = document.getElementById("author");
  var btn = document.getElementById("new-quote");
  var collection = document.getElementsByClassName("fa");
  if (text != null && author != null && btn != null && collection != null) {
    text.style.color = colors[index % colors.length];
    author.style.color = colors[index % colors.length];
    btn.style.backgroundColor = colors[index % colors.length];
    btn.style.color = "white";
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = colors[index % colors.length];
    }
    document.getElementsByTagName("body")[0].style.backgroundColor= colors[index % colors.length];
  }
}

export default App;
