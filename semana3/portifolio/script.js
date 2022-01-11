
    var type = new Typed('.typing-text',{
        strings : [ 'front end developer', 'Back end developer', 'front end developer'],
        typeSpeed: 200,
        loop:true
    });

    let themeColor = document.querySelectorAll('.theme-toggler span');
    themeColor.forEach(color => color.addEventListener('click', () =>{
        let background = color.style.background;
        document.querySelector('body').style.background = background;
    }));

