const slideContentHandler = ()=>{

    fetch("./source.json")
    .then((resp)=>{
        return resp.json();
    })
    .then((data)=>{
        const numOfSlides   = 1;
        //Reads through all the slides present
        for(let i=1;i<numOfSlides+1;i++){
            let docContent      = document.getElementById('content');
            let docTitle        = document.getElementById('title');

            let currentSlide    = 'slide'+i;
            let slideContentlen = (data[currentSlide].length);
            let slideProperties;
            let slideContent;
            let strippedSlideContent;
            console.log(currentSlide)
            //Reads through the content of the slides individually
                for(let i=0;i<slideContentlen;i++){
                    slideProperties     = (Object.keys(data[currentSlide][i]));
                    slideProperties     = slideProperties.toString();
                    slideContent        = data[currentSlide][i][slideProperties];
                    strippedSlideContent=   slideContent.split(" ");

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
        }
    })

   
}

window.addEventListener('load', ()=>{
    slideContentHandler();
})