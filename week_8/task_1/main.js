//tweet counter should
var tweet_Input;
var tweet_limit = 10;
var tweets = [];

function main() {
    tweet_Input = document.getElementById('results');
    //tweet_Input.addEventListener('input', handle_change);
    tweet_Input.addEventListener('keydown', handle_Keydown);
}

function handle_Keydown(e) {
    var letter_pressed = e.code;
    var output = "";
    console.log(e.code);
    if (letter_pressed == 'Enter') {

        if (tweet_Input.value.length <= tweet_limit) {
            tweets.push(tweet_Input.value);
            tweet_Input.value = "";
            for (var i = 0; i < tweets.length; i++) {
                output += "<p>" + tweets[i] + "<p>";
            }
        }

        document.getElementById('tweet_Output').innerHTML = output;
    }
}

function handle_change() {
    var tweet_length = tweet_Input.value.length;
    var letter_count = document.getElementById('letter-count');

    if (tweet_length >= tweet_limit) {
        letter_count.style.color = "blue";
    } else {
        letter_count.style.color = "black";
    }
    letter_count.innerHTML = tweet_length;

}