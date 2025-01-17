

const Allposts = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
  const data = await res.json();
  Posts = data.posts; 
  console.log(Posts);
  displayAllPosts(Posts);
};
  
  Allposts();
  
  const displayAllPosts = (posts) => {
    const allPosts = document.getElementById('all-posts');
    allPosts.innerHTML = '';
  
    posts.forEach((post) => {
      const postCard = document.createElement('div');
      postCard.className = 'post-card';
      postCard.innerHTML = `
        <div class="max-w-sm mx-auto p-4 rounded-lg shadow-md mt-5">
          <div class="flex items-center space-x-2">
            <div class="w-4 h-4 bg-green-500 rounded-full"></div>
            <span class="text-sm font-medium text-gray-600"># ${post.category}</span>
            <span class="text-sm text-gray-500">Author: ${post.author.name}</span>
          </div>
          <h2 class="mt-2 text-lg font-semibold text-gray-800">${post.title}</h2>
          <p class="mt-1 text-sm text-gray-600">${post.description}</p>
          <div class="mt-4 flex items-center justify-between text-gray-500">
            <div class="flex items-center space-x-2">
              <span class="flex items-center space-x-1">
                <img src="images/vector.png" alt="Icon" class="w-4 h-4" />
                <span>${post.comment_count}</span>
              </span>
              <span class="flex items-center space-x-1">
                <img src="images/Vector (1).png" alt="Icon" class="w-4 h-4" />
                <span>${post.view_count}</span>
              </span>
            </div>
            <div>
            <img src="images/email 1.png" alt="Icon" class="w-5 h-5 text-green-600 click-icon" />
          </div>
          </div>
        </div>
      `;
      allPosts.appendChild(postCard);
  
      // Attach the click event to the icon
     ;
      const icon = postCard.querySelector('.click-icon');
    icon.addEventListener('click', () => clickIcon(post));
    });
  };
  
  
// Search posts
const searchBtn = () => {
  const searchfield = document.getElementById('search-field');
  const searchInput = searchfield.value.trim().toLowerCase();
  const filterPosts = Posts.filter((post) => post.category.toLowerCase() === searchInput);
  displayAllPosts(filterPosts); 

  const scrollView=document.getElementById('all-posts')
  scrollView.scrollIntoView({behavior:'smooth'})
};

//click and send other section
let readCount = 0;
const clickIcon = (post) => {
  readCount++;
  const countDisplay = document.getElementById('count');
  countDisplay.textContent = `Mark as read(${readCount})`;
  
  const showPosts = document.getElementById('show-posts');
  
 
  const postDiv = document.createElement('div');
  postDiv.classList.add('post-container', 'p-6', 'h-auto');
  
  
  postDiv.innerHTML = `
    <div class="ml-14 text-3xl font-bold">
      
    </div>
    <div class="max-w-md mx-auto space-y-4">
      <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        <div class="text-lg font-semibold text-gray-900">
          ${post.title}
        </div>
        <div class="flex items-center space-x-4">
          <span class="flex items-center space-x-1">
            <img src="images/Vector (1).png" alt="Icon" class="w-4 h-4" />
            <span>${post.view_count}</span>
          </span>
        </div>
      </div>
    </div>
  `;
  
  
  showPosts.appendChild(postDiv);
};





  

const LatestPosts = async () => {
 
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();

      displayAllLatestPosts(data);
   
};

LatestPosts();

const displayAllLatestPosts = (posts) => {
  const allLatestPostsContainer = document.getElementById('latest-posts');

  posts.forEach((post) => {
    const postCard = document.createElement('div');
    postCard.classList = 'flex justify-center items-center py-10';
    postCard.innerHTML = `
      <div class="bg-white rounded-lg shadow-lg p-6">
        <img class="h-32 bg-gray-200 rounded mb-4" src="${post.cover_image}" alt="Post Cover" />
        <p class="text-sm text-gray-500 mb-2">
          <i class="far fa-calendar-alt"></i> ${post.author.posted_date }
        </p>
        <h2 class="font-bold text-lg mb-2">${post.title}</h2>
        <p class="text-gray-600 text-sm mb-4">${post.description}</p>
        <div class="flex items-center gap-3">
          <img src="${post.profile_image}" alt="Author" class="w-10 h-10 rounded-full" />
          <div>
            <p class="font-medium">${post.author.name }</p>
            <p class="text-sm text-gray-500">${post.author.designation  }</p>
          </div>
        </div>
      </div>
    `;
    allLatestPostsContainer.appendChild(postCard);
  });
};


