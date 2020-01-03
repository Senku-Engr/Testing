// $('#btn1').click(function(){
//     $('h1').hide(300);
// })

// $('#btn2').click(function(){
//     // let ii = document.getElementById('kk')
//     // ii.innerHTML = 'hello'
//     $('h1').show(300)
// })


// // // document ready event
// // $(document).ready(function(){
// //     $('#btn1').click(function(){
// //         $('h1').hide(300);
// //     })
// // })

// // another document ready  use these to : wait for html to process first dak kron jjquery
// // click on h1 hide h1 use this to do that 

// $(function(){
//     $('h1').click(function(){
//         //current element
//         $(this).hide(300);
//     })
// })

// // $(function(){
// //     $('#btn1').click(function(){
// //         $(this).hide(300)
// //         $('#btn2').show(300)
// //     })
// // })
// // $(function(){
// //     $('#btn2').click(function(){
// //         $(this).hide(300)
// //         $('#btn1').show(300)
// //     })
// // })

// //
// $(function(){
//     $('#btn3').click(function(){
//         $('tr:odd').addClass('red')
//         $('tr:even').addClass('blue')
//     })
// })

$(window).scrollTop(function(){
    // .resize
    // console.log("width: "+ $(window).width())
    // console.log("height: "+ $(window).height())

    if($(this).scrollTop() > 1000){
        $('#top').fadeIn(500)
    }else{
        $('#top').fadeOut(500)
    }
})

// mouse
$('#top').mouseleave(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500)
})

// keyboard
// $('#usr').keyup(function(){
//     console.log((this).value)
// })

// form event : submit , change , focus(), blur()

$('#usr').focus(function(){
    console.log("hi")
})
$('#usr').blur(function(){
    console.log("hi, blur")
})
$('#usr').change(function(){
    console.log("hi. im change")
})
$('#usr').submit(function(){
    console.log("hi")
})
$('form').submit(function(e){
    e.preventDefault()
    console.log($('#usr').val())
})


