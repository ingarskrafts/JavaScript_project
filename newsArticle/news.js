var xhr = new XMLHttpRequest();
var url = './news.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles
    var articlesDiv = document.getElementById('articles');

articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var content = document.createElement('p');
    content.textContent = article.content;

    var author = document.createElement('p');
    author.textContent = article.author;
    author.style.fontWeight = 'bold';

    var date = document.createElement('p');
    date.textContent = article.date;
    date.style.fontStyle = 'italic';
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(content);
    articleDiv.appendChild(author);

    articlesDiv.appendChild(articleDiv);
};
xhr.send();
