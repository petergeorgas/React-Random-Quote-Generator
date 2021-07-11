export default function createAndOpenTweet(URI, author){
    const base_url = 'http://twitter.com/intent/tweet?text='
    const encoded_uri = encodeURIComponent(URI) + '%20%0A%0A-%20' + encodeURIComponent(author)
    const url= base_url + encoded_uri
    window.open(url, '_blank').focus()
}
