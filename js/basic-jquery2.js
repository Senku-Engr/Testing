// $(function(){
//     $('.demo').on('click', function(){
//         $(this).hide( 500, function(){   /// from function to show(2000) is callback function
//             $(this).show(500)
//         })
//     })
// })

// $(function(){
//     $('#btn').on('click', function(){
//         $('.demo').toggle( 500, function(){   /// from function to show(2000) is callback function
//             $(this).show(500)
//         })
//     })
// })

// $(function(){
//     $('#btn').on('click', function(){
//         // $('.demo').fadeIn('slow', ()=>{
//         //     $('.demo').fadeOut(2000)
//         // })
//         $('.demo').fadeIn(500, ()=>{
//             $('.demo').fadeOut(500).fadeIn(500).fadeTo(500,0.2)
//         })
//     })
// })



// $(function(){
//     $('#btn').on('click', function(){
//         $('.demo').fadeIn(500, function(){
//             $('.demo').fadeOut(500, function(){
//                 $('.demo').fadeIn(500, function(){
//                     $('.demo').fadeTo(500,0.8)
//                 })
//             })
//         })
//     })
// })

// $(function(){
//     let div = $('.demo')
//     div.animate({
//         left : '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//     },2000,function(){

//     })
// })


// $('#btn').on('click',function(){
//     let div = $('.demo')
//     div.animate({
//         left : '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//     },2000,function(){

//     })
// })

$(function(){
    roundBox()
})

function roundBox(){
    let div = $('.demo')
    div.animate({
       left : 500
    },500)
    .animate({
        top : 500
    },1000)
    .animate({
        left : 0
    },1500)
    .animate({
        top : 0
    },2000, function(){
        roundBox()
    })
    // use . dak tor knea and the last one use callback to call the function.........

    // .animate({
    //     bottom : 0,
    //     right : 0
    // })
    // .animate({
    //     left : 0
    // })
    // .animate({
    //     top : 0
    // })
}