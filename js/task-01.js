const items = document.querySelectorAll ('.item');




const numberOfCategories = items.length;
console.log(`Number of categories: ${numberOfCategories}`);

// for (let i=0; i<items.length; i+=1){
// console.log(`Category: ${items[i].children[0].innerHTML}`)
// console.log(`Elements: ${items[i].children[1].children.length}`)
// }




items.forEach((item) =>{
    const heading = item.querySelector("h2");
    const categories = item.querySelectorAll("li");
    
    console.log("Category:", heading.textContent);
    console.log("Elements:", categories.length);
});