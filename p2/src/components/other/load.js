import license from '../../assets/files/license.txt'
import privacy from'../../assets/files/privacy.txt'
import contact from '../../assets/files/contact.txt'

var toLoad;

const whatToload=()=>{

    if(window.location.pathname==='/license')
    toLoad=license
    else if(window.location.pathname==='/privacy')
    toLoad=privacy
    else if(window.location.pathname==='/contact')
    toLoad=contact


}

const doFetch=()=>{
    whatToload()
    fetch(toLoad)
    .then(r => r.text())
    .then(text => {
      var x =  document.getElementById('p');
      x.innerHTML=text

    });}


function Load (){

    doFetch()
    


        return (<p id="p"></p>);

}
 
export default  Load;