//tweet counter should
var tweet_Input;
var tweet_limit = 10;

function main() {
    tweet_Input = document.getElementById('results');
    tweet_Input.addEventListener('input', handle_change);
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