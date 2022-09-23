$('#getit').on("click", async (e) => {
    e.preventDefault()
    const searchTerm = $('#searchTerm').val()
    console.log(searchTerm)
    const para = { q: searchTerm }
    const res = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=w2QnH4mnx2CyVaZCsR5m88cFg3lZRRTa', { params: para })
    
    for (let img of res.data.data) {
        $("#boxForGif").append(`<div class='col'><img src='${img.images.downsized.url}'></div>`)
        //
    }
})

$('#removeit').on("click", function (e) {
    e.preventDefault()
    $('#boxForGif').empty()
})