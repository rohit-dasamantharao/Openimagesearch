$( document ).ready(function() {

});

function showimage()
{
    console.log("Searching for image"+`https://api.allorigins.win/raw?url=`+encodeURIComponent(document.getElementById("imageurl").value));
    fetch(`https://api.allorigins.win/raw?url=`+encodeURIComponent(document.getElementById("imageurl").value))
    .catch(err=>{console.log(err)})
    .then(response => {
        if (response.ok) return response.blob()
        else
            throw new Error('Network response was not ok.')
    }).then((blobdata)=>{
        console.log("done retrivingh the data")
        $("img")[0].src = window.URL.createObjectURL(blobdata);
    })

}

function clearblob()
{
    URL.revokeObjectURL($("img")[0].src);
}