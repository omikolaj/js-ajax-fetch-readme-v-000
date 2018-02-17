const app = "I don't do much.";

fetch('https://api.github.com/repos/jquery/jquery/commits')
.then(res => res.json())
.then(json => console.log(json));

const token = 'bb2ac7a20f0c08859eaee5115ae6aad2907b40d9'

fetch("https://api.github.com/user/repos", {
    headers: {
        Authorization: `token ${token}`
    }
})then(res=> res.json()).then(json => console.log(json))

