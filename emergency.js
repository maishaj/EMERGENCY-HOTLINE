let call_list=[];
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

//Call Buttons

let calls=document.getElementsByClassName("call-btns");

for(const call of calls)
{
    call.addEventListener('click',function(){

        let coins=document.getElementById("coin-count");
        let countOfCoins=coins.innerText;
        
        if(countOfCoins<20)
        {
            alert("You don't have enough coins to make a call!");
            return;
        }
        
        countOfCoins-=20;
        coins.innerText=countOfCoins;

        let m=call.parentNode.parentNode;
        let service=m.getElementsByClassName("service-name");
        let number=m.getElementsByClassName("service-num");
        alert("Calling...\n"+service[0].innerText+"\n"+number[0].innerText);
        let data={
            sName:service[0].innerText,
            sNum:number[0].innerText,
            sDate:new Date().toLocaleTimeString()
        }
        call_list.push(data);


        callHisParent=document.getElementById("history");
        callHisParent.innerText="";

        for(const a of call_list)
        {
            const div=document.createElement("div");
            div.innerHTML=`
            <div class="flex justify-between items-center bg-[#fafafa] p-3 rounded-sm">
                <div>
                <h2 class="text-[18px] font-semibold">${a.sName}</h2>
                <p class="text-[18px] font-medium text-[#5c5c5c]">${a.sNum}</p>
                </div>
                <p class="text-[18px] font-400 text-[#111111]">${a.sDate}</p>
            </div>
            `
            callHisParent.append(div);
        }
    })
}

//Clear Functionality
document.getElementById("clr-btn")
.addEventListener('click',function(){
   callHisParent.innerText="";
})

//Copy-functionality
const Allbtns=document.getElementsByClassName("copy-btn");
for(const a of Allbtns)
{
    a.addEventListener('click',function(){
        let par=a.parentNode.parentNode;
        let hotlineNum=par.querySelector(".hotline").innerText;
        navigator.clipboard.writeText(hotlineNum)
        .then(()=>{
            alert("Copied hotline: " + hotlineNum);
        })

        let CopyCount=document.getElementById("copy-count");
        z=CopyCount.innerText;
        z++;
        CopyCount.innerText=z;
    })
}




