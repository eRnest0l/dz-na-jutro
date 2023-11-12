
const contan = document.querySelectorAll("#cont")
contan.forEach((cont) => {
    cont.style.display = 'inline-block';
    cont.style.backgroundColor = 'red';
    cont.style.width = '32%';
    cont.style.height = '100px';
    cont.style.margin = '5px';
    cont.style.justifyContent = 'space-around';
    cont.style.flexWrap = 'nowrap';
 
    const boxes = document.querySelectorAll(".box")
    const i = 5
    boxes.forEach((box) => {
        if(i % 2 == 0){
            box.style.display = 'flex';
            box.style.justifyContent = 'space-around';
            box.style.heigth = '60px';
            box.style.margin = '33px';
            box.style.width = '90px';
            box.style.backgroundColor = 'green';
            box.style.alignItems = 'center';
            box.style.border = '100px solid white';
            cont.style.flexWrap = 'nowrap';
        } else{
            box.style.display = 'flex';
            box.style.justifyContent = 'space-around';
            box.style.heigth = '60px';
            box.style.margin = '33px';
            box.style.width = '90px';
            box.style.backgroundColor = 'blue';
            box.style.alignItems = 'center';
            box.style.border = '100px solid white';
            box.style.flexWrap = 'nowrap';
        }


    });
});
    
 
