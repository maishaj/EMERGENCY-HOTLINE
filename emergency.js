
//Heart Icons
let hearts=document.getElementsByClassName("heart");
for(const heart of hearts)
{
    heart.addEventListener('click',function(){
        let z=document.getElementById("heart-count");
        let counts=z.innerText;
        counts++;
        z.innerText=counts;
        console.log(heart);
    })
}
