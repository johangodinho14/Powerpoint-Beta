let i               = 1;
let numOfSlides;

const slideContentHandler = ()=>{
    fetch("./source.json")
    .then((resp)=>{
        return resp.json();
    })
    .then((data)=>{
        numOfSlides             = Object.keys(data).length;
        //Reads through all the slides present
            let docContent      = document.getElementById('content');
            let docTitle        = document.getElementById('title');
            let docSlideNum     = document.getElementById('slideNumber');
            docContent.innerHTML= "";
            docTitle.innerHTML  = "";

            let currentSlide    = 'slide'+i;
            let slideContentlen = (data[currentSlide].length);
            let slideProperties;
            let slideContent;

            docSlideNum.innerText="Slide Number : ";
            docSlideNum.innerText+= +" "+i;

            //Reads through the content of the slides individually
                for(let i=0;i<slideContentlen;i++){
                    slideProperties     = (Object.keys(data[currentSlide][i]));
                    slideProperties     = slideProperties.toString();
                    slideContent        = data[currentSlide][i][slideProperties];

                    if(slideProperties === 'title'){
                        docTitle.innerText = slideContent;
                    }
                    else if(slideProperties === 'content'){
                        docContent.innerHTML += slideContent;
                    }
                    else if(slideProperties === 'img'){
                        docContent.innerHTML += '<p></p>';
                        docContent.innerHTML += '<img '+'src='+slideContent+'>';
                    }
                }
        
    })

   
}

const slideControllers    = ()=>{
    const leftArrow       = document.getElementById('leftArrow');
    const rightArrow      = document.getElementById('rightArrow');
    const notification    = document.getElementById('notification');

    leftArrow.addEventListener('click',()=>{
        if(i===1){
            i=1; 
            notification.innerHTML="No more slides to display";
            slideContentHandler();
            return; 
        };
        i -= 1;
        slideContentHandler();
    });

    rightArrow.addEventListener('click',()=>{
        if(i===numOfSlides){
            i=1; 
            notification.innerHTML="No more slides to display";
            slideContentHandler();
            return; 
        };
        i += 1;
        slideContentHandler();
    });

}
window.addEventListener('load', ()=>{
    slideContentHandler();
    slideControllers();
})