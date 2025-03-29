const items = document.querySelector(".items");

fetch("http://localhost:3000/movies")
  .then((res) => res.json())
  .then((movies) => {
    const article = document.querySelector("#articleItems");

    const html = movies
      .map((movie) => {
        return `
    <article id="articleItems" data-id="${movie.id}">
    <h2>${movie.title}</h2>
    <img src="${movie.poster}" alt="${movie.title}">
    </article>
    
    `;
      })
      .join();
    items.append(html);
  });

/** 
 document.getElementById()
document.querySelector()
document.querySelectorAll()
innerHTML
textContent

async -await
*/
