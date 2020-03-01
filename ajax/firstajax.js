// // get article
// fetchArticle()
// function fetchArticle(){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         // check ready state == 4 (response ready)
//         if(this.readyState == 4 && this.status == 200){
//             //console.log(this.responseText)
//             //convert JSON to Javascript
//             let article = JSON.parse(this.response)
//             appendTable(article.DATA)
//             // console.log(article.topLevelDomain)
//         }
//     }
//     xhr.open('GET', 'http://110.74.194.124:15011/v1/api/articles?page=1&limit=15'
//     , true)
//     // xhr.open('GET', 'https://restcountries.eu/rest/v2/all'
//     // , true)
//     // xhr.open('GET', '/json/article.json'
//     // , true)
//     xhr.send();
// }
// let content = ''

//  // this use for the array u need to loop but here we put static 0 but need index ti marn access tam key na
//         // <td>${a.languages[0].nativeName}</td>
//         // this use for the non array 

// function appendTable(article){
//     for (a of article){
//         console.log(a)
//         content += `
//         <tr>
//         <th scope="row">${a.ID}</th>
//         <td>${a.AUTHOR.NAME}</td>
       
//         <td>${a.DESCRIPTION}</td>

//         <td><img src= ${a.IMAGE}></img></td>
//         </tr>
//         `
//     }
//     let tbody = document.querySelector('tbody')
//         tbody.innerHTML = content
// }

// get article
fetchArticle()

function fetchArticle(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        // check ready state == 4 (response ready)
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText)
            //convert JSON to Javascript
            let article = JSON.parse(this.response)
            appendTable(article)
            // console.log(article.topLevelDomain)
        }
    }
    // xhr.open('GET', 'http://110.74.194.124:15011/v1/api/articles?page=1&limit=15'
    // , true)
    // xhr.open('GET', 'https://restcountries.eu/rest/v2/all'
    // , true)
    xhr.open('GET', '/json/article.json'
    , true)
    xhr.send();
}
let content = ''

 // this use for the array u need to loop but here we put static 0 but need index ti marn access tam key na
        // <td>${a.languages[0].nativeName}</td>
        // this use for the non array 

function appendTable(article){
    for (a of article){
        console.log(a)
        content += `
        <tr>
        <th scope="row">${a.title}</th>
        <td>${a.description}</td>
       
        <td>${a.age}</td>

        <td><img src= ${a.music}></img></td>
        </tr>
        `
    }
    let tbody = document.querySelector('tbody')
        tbody.innerHTML = content
}