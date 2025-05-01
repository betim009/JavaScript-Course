const btn = document.getElementById('btn');

async function translate(text) {
  const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': '3be01a29a9msh1147fa36f6934f8p13aa60jsn802d2dd1cc9f',
      'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: text,
      source: 'pt',
      target: 'en'
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // pode ser .json()
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener('click', async () => {
  const input = document.getElementById('text-pt').value;
  await translate(input);
});
