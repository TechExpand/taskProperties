
const workorderList = document.querySelector('#workorder-list');
const form = document.querySelector('#add-workorder');

function renderWorkorder(doc) {
  let li = document.createElement('li');
  li.classList.add('collection-item', 'generate');
  // ul.id = 'link';


  let property = document.createElement('span');
  property.classList.add("propertypicker");

  let title = document.createElement('span');
  title.classList.add("title", "generate");

  let desc = document.createElement('span');
  desc.classList.add("desc" ,"hide-on-med-and-down");

  let price = document.createElement('span');
  price.classList.add("price");

  let date = document.createElement('span');
  date.classList.add("date");

  let cross = document.createElement('i');
  cross.classList.add("material-icons", 'cross',);



  // var url = 'https://www.techiedelight.com/';
  // var text = 'Techie Delight';
  // $("#link").append(`<a href="${url}" target="_blank">View Details</a>`);



  // firebase instance id 
  li.setAttribute('data-id', doc.id);

  property.textContent = doc.data().property;
  title.textContent = doc.data().title;
  desc.textContent = doc.data().desc;
  price.textContent = doc.data().price;
  date.textContent = doc.data().date;
  cross.textContent = 'delete_forever';


  li.appendChild(cross);
  li.appendChild(price);
  li.appendChild(property);
  li.appendChild(price);
  li.appendChild(title);
  li.appendChild(desc);
  li.appendChild(date);
  li.setAttribute("id", "link");

  workorderList.appendChild(li);

  // deleting 
  cross.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    // function ConfirmDelete()
    {
      var x = confirm("Are you sure you want to delete this work order?");
      if (x)
        db.collection('workorders').doc(id).delete(),M.toast({html: 'Workorder Entry Deleted!', displayLength: 1500}),
          console.log('deleted');  
      else
        console.log('cancelled');  return false;
    };
  })

}

// //realtime lister
// db.collection('workorders').orderBy('date').onSnapshot(snapshot => {
//   let changes = snapshot.docChanges();
//   changes.forEach(change => {
//     if (change.type == 'added') {
//       renderWorkorder(change.doc);
//     } else if (change.type == 'removed') {
//       let li = workorderList.querySelector('[data-id=' + change.doc.id + ']');
//       workorderList.removeChild(li);
//     }
//   })
// })

// save data
form.addEventListener('submit', (e) => {
  e.preventDefault();

  prop = $('#propertyName :selected').text();
  db.collection('workorders').add({
    // property: form.property.output,
    property: prop,
    title: form.title.value,
    desc: form.desc.value,
    price: form.price.value,
    date: form.date.value,
    status: false,
  });

  // i want to add a function here 

  function close_modal() {
    var elem = document.getElementById("modal1");
    var instance = M.Modal.getInstance(elem);
    instance.close();
}
  // clear form 
  $('#add-workorder')[0].reset();
  close_modal()
  M.toast({html: 'Workorder Entry Added!', displayLength: 1500}),
  console.log('working');
});



// get data
// TODO get the button to work for deleting
// getting specific results
//db.collection('workorders').where('property', '==', 'bella vista').get().then((snapshot)
// .orderBy('date') 

// db.collection('workorders').get().then((snapshot) =>{
//     snapshot.docs.forEach(
//         doc =>{
//             // console.log(doc.data())
//             renderWorkorder(doc);
//         }
//     )
// })


