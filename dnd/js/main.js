// //Example fetch using DnD5eAPI - place subclasses in ul

// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value //must be used inside function to take user value because on page load when it is outside the function it get only null value
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//        console.log(data.subclasses)

//        data.subclasses.forEach(obj =>{
//         console.log(obj.name)
//         //CREAT LI
//         const li = document.createElement('li') 
//         //ADD TEXT TO LI
//         li.textContent= obj.name
//         //APPEND THE LI TO THE UL
//         document.querySelector('ul').appendChild(li)
//         })


//     })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


// Just practiced the code again 

// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`
//   fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     data.subclasses.forEach(obj =>{
//       console.log(obj.name)
//       //creat li
//       const li = document.createElement('li')
//       //add text to li
//       li.textContent = obj.name
//       //append the li to the ul 
//       document.querySelector('ul').appendChild(li)

//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     })
//   })
// }

// BOOK API

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = `https://openlibrary.org/works/OL45804W.json`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.description
    

  })
  .catch(err => {
      console.log(`error ${err}`)
  })
  
}