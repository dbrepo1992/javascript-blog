const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('section article');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');

  console.log(articleSelector);


  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);

  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');

  console.log('clicked element', targetArticle);

};


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(customSelector = ''){

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector).innerHTML = '';

  console.log( ' clicked link', titleList);

  /* [DONE] for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('cstest', articles);

  let html = '';

  for(let article of articles){

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');

    /* [DONE] find the title element */
    /* [DONE] get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;


    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    console.log('link was clicked', linkHTML);


    /* insert link into titleList */

    const innerHTML = document.querySelector('.titles');

    innerHTML.insertAdjacentHTML('afterbegin', linkHTML);

    console.log(innerHTML);

    /* insert link into html variable */
    html = html + linkHTML;

    console.log(html);

  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags(){
  /* find all articles */

  const articles = document.querySelectorAll('article');

  /* START LOOP: for every article: */

  for(let article of articles){
    console.log(article);


    /* find tags wrapper */

    const tagsWrapper = article.querySelectorAll(optArticleTagsSelector);


    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');

    console.log('articleTags', articleTags);

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log('split tags', articleTagsArray);

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){

      console.log('tag', tag);
      /* generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag +'">' + tag + '</a></li>';
      console.log('linkhtml' , tag);

      /* add generated code to html variable */

      html = html + linkHTML;
      console.log('html', html);


      /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */

    for(let tagWrapper of tagsWrapper){
      tagWrapper.insertAdjacentHTML('afterbegin', html);
      console.log('generate links of tag', tagWrapper);
    }
  /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();


  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');
  console.log('replacedtag', tag);

  /* find all tag links with class active */

  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */

  for(let activeTagLink of activeTagLinks){

    /* remove class active */

    activeTagLink.classList('remove');
    console.log('remove class active', activeTagLink);

  /* END LOOP: for each active tag link */
  }


  /* find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log('tagLinks', tagLinks);

  /* START LOOP: for each found tag link */

  for(let tagLink of tagLinks){

    /* add class active */
    tagLink.classList('active');
    console.log('active', tagLink);
    /* END LOOP: for each found tag link */

  }
  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
  console.log('check generateTitleLinks', generateTitleLinks);
}






function addClickListenersToTags(){
  /* find all links to tags */

  const linksToTags = document.querySelectorAll('a[href^="#tag-"]');
  console.log('loftgs', linksToTags);

  /* START LOOP: for each link */

  for(let linkToTag of linksToTags){

    /* add tagClickHandler as event listener for that link */
    linkToTag.addEventListener('click', tagClickHandler);
    console.log('click link to tag', linkToTag);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

const optArticleAuthorSelector = '.post .post-author';


function generateAuthors(){
/* find all articles */

  const articles = document.querySelectorAll('article');

  /* START LOOP: for every article: */

  for(let article of articles){
    console.log(article);
    /* find tags wrapper */

    const authorsWrapper = article.querySelectorAll(optArticleAuthorSelector);
    console.log('authors', authorsWrapper);

    /* make html variable with empty string */

    let html = '';

    /* get authors from data-author attribute */

    const articleAuthors = article.getAttribute('data-author');

    console.log('articleAuthors', articleAuthors);

    /* generate HTML of the link */

    const linkHTML = '<li><a href="#author-' + articleAuthors +'">' + articleAuthors + '</a></li>';
    console.log('linkhtml' , linkHTML);

    /* add generated code to html variable */

    html = html + linkHTML;
    console.log('html', html);

    /* insert HTML of all the links into the authors wrapper */

    for(let authorWrapper of authorsWrapper){
      authorWrapper.insertAdjacentHTML('afterbegin', html);
      console.log('generate links of author', authorWrapper);
    }
  }
}

generateAuthors();

function addClickListenersToAuthors(){

  /* find all links to authors */

  const linksToAuthors = document.querySelectorAll('a[href^="#author-"]');
  console.log('links to authors', linksToAuthors);

  /* START LOOP: for each link */

  for(let linkToAuthor of linksToAuthors){

    /* add tagClickHandler as event listener for that link */
    linkToAuthor.addEventListener('click', tagClickHandler);
    console.log('click link to tag', linkToAuthor);
    /* END LOOP: for each link */
  }
}

addClickListenersToAuthors();

function authorClickHandler(event){

  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "author" and extract author from the "href" constant */

  const author = href.replace('#author-', '');
  console.log('replacedauthor', author);

  /* find all tag links with class active */

  const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  console.log('active author links', activeAuthorLinks);

  /* START LOOP: for each active author link */

  for(let activeAuthorLink of activeAuthorLinks){

    /* remove class active */

    activeAuthorLink.classList('remove');
    console.log('remove class active', activeAuthorLink);

    /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */

  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log('authorLinks', authorLinks);

  /* START LOOP: for each found author link */

  for(let authorLink of authorLinks){

    /* add class active */
    authorLink.classList('active');
    console.log('active author link', authorLink);
    /* END LOOP: for each found author link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-author="' + author + '"]');
  console.log('check generateTitleLinks author', generateTitleLinks);
}




