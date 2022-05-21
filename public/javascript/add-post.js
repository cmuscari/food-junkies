async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const restaurant_name = document.querySelector('input[name="restaurant-name"]').value;
    const restaurant_url = document.querySelector('input[name="restaurant-url"]').value;
    const comment_text = document.querySelector('input[name="comment-text"]').value;
    const photo = document.querySelector('input[name="file"]').value;
    const select = document.getElementById('city-name');
    const city_name = select.options[select.selectedIndex].value;
    

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        city_name,
        restaurant_name,
        restaurant_url,
        comment_text,
        photo
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