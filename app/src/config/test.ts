
export const getExampleListHtml = async () => {
    const data = [
      {name: "Alice"},
      {name: "Bob"},
    ]
  
    let html = '<ul>';
    for (const item of data){
      html += `<li>${item.name}</li>`
    }
    html += '</ul>'
    return html;
  }
  


export const quotesExamples = [
{
    name: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    ageOfQuote: 92, // Assuming the quote is from around 1932
    yearsOfLife: "1879-1955",
    likes: Math.floor(Math.random() * 1000)
},
{
    name: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
    ageOfQuote: 75, // Assuming the quote is from around 1949
    yearsOfLife: "1869-1948",
    likes: Math.floor(Math.random() * 1000)
},
{
    name: "Marilyn Monroe",
    quote: "I'm selfish, impatient, and a little insecure. I make mistakes, I am out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    ageOfQuote: 60, // Assuming the quote is from around 1962
    yearsOfLife: "1926-1962",
    likes: Math.floor(Math.random() * 1000)
},
{
    name: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
    ageOfQuote: 140, // Assuming the quote is from around 1884
    yearsOfLife: "1835-1910",
    likes: Math.floor(Math.random() * 1000)
},
{
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    ageOfQuote: 133, // Assuming the quote is from around 1891
    yearsOfLife: "1854-1900",
    likes: Math.floor(Math.random() * 1000)
},
{
    name: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
    ageOfQuote: 26, // Assuming the quote is from around 1998
    yearsOfLife: "1918-2013",
    likes: Math.floor(Math.random() * 1000)
},
{
    name: "Steve Jobs",
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    ageOfQuote: 19, // Assuming the quote is from around 2005
    yearsOfLife: "1955-2011",
    likes: Math.floor(Math.random() * 1000)
}
];
