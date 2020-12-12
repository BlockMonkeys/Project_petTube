try{
    const videoDeleteBtn = document.querySelector(".video__Delete__btn");
    videoDeleteBtn.addEventListener('click', (event)=> {
        if(window.confirm("정말로 삭제하시겠습니까?") === true){
            return;
        } else {
            event.preventDefault();
            return;
        }
    });
}catch(err){
    console.log('');
}
