
// const newText = document.querySelector("h1");

// newText.textContent = 'hello world';


//get src, add listerner, add change

const imageSrc = document.querySelector('img');

 const firstAtr = imageSrc.getAttribute('src');

//console.log(imageSrc)

imageSrc.onclick = function () {
    const mySrc = imageSrc.getAttribute("src");
    if(mySrc === 'images/firefox-icon.png'){
        imageSrc.setAttribute('src', 'images/images.jpeg')
    }else{
        imageSrc.setAttribute('src', 'images/firefox-icon.png')
    }
}

//personalized name for user. web storage api. alert the user



const button = document.querySelector('button');
const heading = document.querySelector('h1');

//function for displaying and storing user information

function setUserName (){
    const userName = prompt('please enter your name:');
    if(!userName){
        setUserName();
    }else{
    localStorage.setItem('name', userName);
    heading.textContent = `hey ready, ${userName}`;
    }
    //conditional

    if(!localStorage.getItem('name')){
    setUserName()
}else{
    const myName = localStorage.getItem('name');
    heading.textContent = `Hey there, ${myName}`;
};

};



button.onclick = () => {
    setUserName();
}

