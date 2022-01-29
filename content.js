const generateHTML = (pageName) => {
    return ` <div id="404">
        <div class='c'>
            <hr>
            <div class='_1'>GET BACK TO WORK</div>
            <div class='_2'>Looks like you are distracted again by ${pageName} 🤬 </div>
        </div>
        <a href = "https://www.linkedin.com">
        <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.png">
        </a>
    </div>
    `;
}

const generateSTYLING = () => {
    return `
    <style>
    ._1{
        font-size: 50px;
        text-align: center;
    }
    ._2{
        font-size:25px;
        text-align: center;
    }
    </style>
    `;
}


switch(window.location.hostname){
    case "www.spotify.com/":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("spotify");
        break;
    case "www.instagram.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("instagram");
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("facebook");
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("netflix");
        break;

}