fetch('https://swapi.dev/api/people/5')
    .then(data => {

        if (!data.ok) throw data;
        return data.json();
    })
    .then(post => {
        display.innerHTML = `${post.name} 
<br>

<br>
<p>Born:  ${post.birth_year}</p>
<br>
<p>Homeworld:  Alderaan</p>
<br>
<p>First appearance: 
<a href="/aNewHope.html">A New Hope</a></p>
<br> 
`;
    });