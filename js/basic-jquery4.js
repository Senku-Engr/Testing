//  add
//  object
let articles =   [
    {
        title: 'harry potter',
        desc: 'not great not terrible',
        author: 'JK rowling',
        img: 'https://mole24.it/wp-content/uploads/2019/02/Harry-Potter-The-Exhibition-647x380.png'
    },
    {
        title: 'the witcher',
        desc: 'very good',
        author: 'navuth pen',
        img: 'https://cdn.mos.cms.futurecdn.net/LxCE99x67YFuuSuBPrqinT-320-80.jpg'
    },
    {
        title:'game of throne',
        desc: 'season 8 trash',
        author: 'goerge RR martin',
        img: 'https://www.nme.com/wp-content/uploads/2017/08/2017_GameOfThrones_HBO_220817-696x442.jpg'
    }
]

$(function(){
   fetchAticle();
//    $('#darkmode').on('click', function(){
//        $('body').addClass('bg-black');
//       $('.d').removeClass('btn btn-primary');
//       $('.d').addClass('btn btn-outline-danger waves')
//    })
//    $('#default').on('click', function(){
//        $('body').removeClass('bg-black');
//        $('.d').removeClass('btn btn-primary');
//        $('.d').removeClass('btn btn-outline-danger waves')

//       $('.d').addClass('btn btn-outline-primary waves')
//    })


// show modal
//   $('#launchmodal').on('click', function(){
//       $('#articlemodal').modal('show')
//       $('#title').val('hello')
//   })
    // appendCard();
    
})

let content = ''

//  to delete find what the child is in // in this case the a of button child is in the card parent class what to do is name a class of the parent child then go to jquery to find the child using the parent class the remove all the class
// function appendCard(){
//     for( a of articles){
//         content += 
//         `
//         <div class="col-12 col-sm-12 col-md-3 m-auto aa" >
//         <!-- Card -->
//         <div class="card">

//             <!-- Card image -->
//             <div class="view overlay">
//                 <img class="card-img-top"
//                     src="${a.img}"
//                     alt="Card image cap">
//                 <a href="#!">
//                     <div class="mask rgba-white-slight"></div>
//                 </a>
//             </div>

//             <!-- Card content -->
//             <div class="card-body">

//                 <!-- Title -->
//                 <h4 class="card-title">${a.title}</h4>
//                 <!-- Text -->
//                 <p class="card-text">${a.desc}</p>
//                 <!-- Button -->
//                 <a href="#" class="btn btn-primary d" onclick="removeCard(this)">Button</a>

//             </div>

//         </div>
//         <!-- Card -->
//     </div>  `

    
//     // this is for animation
//     // $('#row').fadeOut(100,function(){
//     //     $(this).html(content)
//     // }).fadeIn(1000)

//     }
//     //  use += with append out side loop use = if the append is inside loop
//     // without animation
//     $('#row').append(content)



//     // $('#row').html(content)
//     // $('#title').val(''),
//     // $('#desc').val(''),
//     // $('#image').val('')
     
// }

// function showmodal(btn){
//     // access using class 
//         $('#articlemodal').modal('show')
//         let a = $(btn).parent().siblings('.title').text()
//         let b = $(btn).parent().siblings('.desc').text()
//         let c = $(btn).parent().siblings('.author').text()
//         // console.log(cc)
//         $('#title').val(a)
//         $('#desc').val(b)
//         $('#author').val(c)

// }

function showmodal(btn){
    // access using index    eq 
        $('#articlemodal').modal('show')
        let a = $(btn).parent().siblings().eq(1).text()
        let b = $(btn).parent().siblings().eq(2).text()
        let c = $(btn).parent().siblings().eq(3).children().attr("src")
        // console.log(cc)
        $('#title').val(a)
        $('#desc').val(b)
        $('#image').attr("src",c)
        console.log(c)

}


function fetchAticle(){
    for (a of articles){
        content = `
        <tr>
        <th scope="row">3</th>
        <td class="title">${a.title}</td>
        <td class="desc">${a.desc}</td>
        <td class="author"><img src=${a.img} /></td>
        <td> <button type="button" class="btn btn-outline-primary" onclick="removeRow(this)">Delete</button>
          <td>          
         <button type="button" class="btn btn-outline-success" onclick="showmodal(this)">View</button></>
         </td>
        </tr>
        
        `

        $('tbody').append(content)
    }
}

function removeCard(btn){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

            let tr = $(btn).parents('.aa')
            tr.remove()

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            
          )

        }
      })
}

function removeRow(btn){
   // console.log(btn)

    // find tr then -> remove it 
    // tr no need to use $ becuase vea store selector bos jquery 
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

            let tr = $(btn).parents('tr')
            console.log(tr)
            tr.remove()

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            
          )

        }
      })

   
}