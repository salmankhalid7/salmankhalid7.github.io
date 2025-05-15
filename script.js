// script.js
let navLinks = document.querySelector(".nav-links");
let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-times");

openBtn.addEventListener("click", () => {
    navLinks.style.right = "0";
});

closeBtn.addEventListener("click", () => {
    navLinks.style.right = "-200px";
});

// JavaScript to Filter Posts Based on Search
const searchInput = document.querySelector('.blog-sidebar input[type="text"]');
  const blogPosts = document.querySelectorAll('.blog-post');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    blogPosts.forEach(post => {
      const title = post.querySelector('h3').textContent.toLowerCase();
      post.style.display = title.includes(query) ? 'block' : 'none';
    });
  });

// JavaScript after the search script:
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const post = btn.closest('.blog-post');
      const shortText = post.querySelector('.short-text');
      const fullText = post.querySelector('.full-text');

      if (fullText.style.display === 'none') {
        shortText.style.display = 'none';
        fullText.style.display = 'block';
        btn.textContent = 'Show Less';
      } else {
        shortText.style.display = 'block';
        fullText.style.display = 'none';
        btn.textContent = 'Read More';
      }
    });
  });