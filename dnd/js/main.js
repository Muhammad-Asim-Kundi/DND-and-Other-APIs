//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data.subclasses)

       data.subclasses.forEach(obj =>{
        console.log(obj.name)
        //CREAT LI
        const li = document.createElement('li') 
        //ADD TEXT TO LI
        li.textContent= obj.name
        //APPEND THE LI TO THE UL
        document.querySelector('ul').appendChild(li)
        })


    })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

