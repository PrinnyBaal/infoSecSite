




const siteInfo={
  //Note that this url needs to be an EMBED url otherwise the video payer will refuse to connect.  You can right click a video and select 'get embed code' then get the url listed after 'src'
  trailerURL:`https://www.youtube.com/embed/ID4_Q3-98Jo`,
}

//List of facts on the 'Home' tab
const quickText=[
  "You should know this about our group",
  "And this is also important",
  "While you watch our trailer video, consider that...",
  "One last thing you need to know is"

];


// Questions and answers on the 'FAQ' tab
 const faqSnippets=[
   {
     question:"Who are we?",
     answer:"Answer about above question"
   },
   {
     question:"How often do we update?",
     answer:"Answer about above question"
   },
   {
     question:"What can we learn?",
     answer:"once more, an answer"
   },
   {
     question:"Another frequently asked question?",
     answer:"A final given answer"
   },




 ];



//In the contact tab these will show up on the left
 const contactSnippets=[
   {name:"E-Mail",
    info:"??????@GMail.com"
 }

 ];

//In the contact tab these will show up on the right.  ADDITIONALLY the image icons will show up in the link bar at the bottom of the page
 const linkSnippets=[
   {
     image:"./images/youtubeLogo.png",
     text:"Subscribe on Youtube",
     link:"https://www.youtube.com/channel/UCw6oav9UsEqc_ny1ab-EZFg"
   },
   {
     image:"https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png",
     text:"Connect on LinkedIn",
     link:"https://www.linkedin.com/"
   },
   {
     image:"https://cdn3.iconfinder.com/data/icons/basicolor-reading-writing/24/077_twitter-512.png",
     text:"Follow us on Twitter",
     link:"https://www.twitter.com/"
   },




 ];

//A helper object that con tains various functions I use throughout projects, you shouldn't need to change anything below here
 let ci={
   jumpTo:function(anchor){
     window.location.href = "#"+anchor;
   },
   dieRoll:function(dieSides){
     return Math.floor(Math.random()*dieSides)+1;
   },
   array_move:function(arr, old_index, new_index) {
     //https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
     if (new_index >= arr.length) {
         var k = new_index - arr.length + 1;
         while (k--) {
             arr.push(undefined);
         }
     }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
     return arr; // for testing
   },
   checkCommonGround:function(array1, array2){
     //tests if array1 and 2 have ANY elements in common
     let commonGround=false;
     if (array1.length<array2.length){
       for (let i=0, len=array1.length; i<len; i++){
         if (array2.includes(array1[i])){commonGround=true; break;}
       }
     }else{
       for (let i=0, len=array2.length; i<len; i++){
         if (array1.includes(array2[i])){commonGround=true; break;}
       }
     }

     return commonGround;
   },
   copyToClipboard:(copyText, completionText)=>{
     /* Get the text field */


    /* Select the text field */

    let range = document.createRange();
    let selection=window.getSelection();
    console.log(copyText);
    //copyText=document.getElementById(copyText);
    console.log(copyText);
    range.selectNode(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");



    /* Alert the copied text */
    ci.fyiUser(completionText);
  },
  fyiUser:(text)=>{
    $("#alertBanner").removeClass("activeAlert");
    $("#alertBanner").html(text);
    $("#alertBanner").addClass("activeAlert");
    setTimeout(removeBanner, 5000)

    function removeBanner(){
      $("#alertBanner").removeClass("activeAlert");
    }
  },
  newWindow:(url)=>{
    window.open(url);
  }

 }

function resetStorage(){
  if (window.confirm("Do you really want to delete all your saved info?")) {
  localStorage.clear();
  location.reload();
}
}
