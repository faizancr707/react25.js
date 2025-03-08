import React from 'react'

export default function App() {

let quotes =[
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Dream big and dare to fail. - Norman Vaughan",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "Success is getting what you want. Happiness is wanting what you get. - Dale Carnegie",
  "If opportunity doesn’t knock, build a door. - Milton Berle",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "Everything you’ve ever wanted is on the other side of fear. - George Addair"
]

    const randomIndex = Math.floor(Math.random()*quotes.length);
    const quote = quotes[randomIndex];

  return (
    <div>
      {quote}
    </div>
  )
}
