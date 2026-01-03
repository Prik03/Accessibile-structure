$(document).ready(function() {
console.log("Script loaded successfully.");

$('.showtags').on('mouseenter',function() {
    var tagName = $(this).prop("tagName").toLowerCase();
     $('.tag-label-first, .tag-label-last').remove();
    $(this).wrap("<div class='tag-wrapper'></div>");
    $(this).before("<span class='tag-label-first'>&lt;" + tagName + "&gt; </span>");
    $(this).after("<span class='tag-label-last'>&lt;/" + tagName + "&gt; </span>");
});

$('.showtags').on('mouseleave',function() {
    $(this).siblings('.tag-label-first').remove();
    $(this).siblings('.tag-label-last').remove();
    $(this).unwrap();   
});

const blogs = [
  {
    title: "Understanding Web Accessibility",
    description: "Learn the basics of web accessibility and why it matters.",
    link: "#"
  },
  {
    title: "Top 10 Accessibility Tips for Developers",
    description: "Practical tips to make your websites accessible.",
    link: "#"
  },
  {
    title: "How to Test Your Website for Accessibility",
    description: "Tools and techniques to test accessibility effectively.",
    link: "#"
  }
];

const blogsList = $('#blogs-list');

blogs.forEach((blog, index) => {
  const blogItem = `
    <li class="showtags">
      <article aria-labelledby="blog-title-${index}" class="showtags">
        <a href="${blog.link}" id="blog-title-${index}" class="showtags">
          ${blog.title}
        </a>
        <p>${blog.description}</p>
      </article>
    </li>
  `;
  blogsList.append(blogItem);
});

});
