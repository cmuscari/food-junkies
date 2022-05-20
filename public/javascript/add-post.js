async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const restaurant_name = document.querySelector('input[name="restaurant-name"]').value;
    const comment_text = document.querySelector('input[name="comment-text"]').value
    const select = document.getElementById('city-name')
    const city_name = select.options[select.selectedIndex].value;
    

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        city_name,
        restaurant_name,
        comment_text,

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);