let input = document.querySelector(".input");
let btn = document.querySelector(".search");
let info = document.querySelector(".info");
let nothing = document.querySelector(".nothing") ;


btn.onclick=()=>{
    fetch('https://api.github.com/users/'+input.value+'/repos')
    .then((rep)=> rep.json())
    .then((data) => {
        console.log(data)
        data.forEach(el => {
            nothing.style.display="none";
            let div = document.createElement('div');
            let a = document.createElement('a');
            let text2 = document.createTextNode('visit');
            a.href='https://github.com/'+input.value+'/'+el.name;
            a.append(text2)
            info.append(a)
            div.classList.add("nothing");
            let text = document.createTextNode(el.name)
            div.append(text);
            info.append(div);

        });
    });
    
    
};

