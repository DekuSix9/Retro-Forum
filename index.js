const Allposts = async () => {
    try {
      const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
      const data = await res.json();
      const posts = data.posts; 
      console.log(posts);
      displayAllPosts(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
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
            <div class="flex items-center space-x-1">
              <img src="images/Vector (2).png" alt="Icon" class="w-4 h-4" />
              <span>${post.posted_time}</span>
            </div>
            <div>
              <img src="images/email 1.png" alt="Icon" class="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
      `;
      allPosts.appendChild(postCard);
    });
  };
  