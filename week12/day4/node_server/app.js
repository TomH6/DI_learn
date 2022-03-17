
const htmlLineMaker = () =>{
    const appendTo = document.getElementById('appendTo');
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = 'Here I Go';
    div.appendChild(h1);
    let h2 = document.createElement('h2');
    h2.textContent = 'Song by Syd Barrett';
    div.appendChild(h2);
    let p = document.createElement('p');
    p.textContent = `This is a story about a girl that I knew
    She didn't like my songs
    And that made me feel blue
    She said: "A big band is far better than you"
    She don't rock'n'roll
    She don't like it
    She don't do the stroll
    Well, she don't do it right
    Well, everything's wrong
    And my patience is gone
    When I woke one morning
    And remembered this song
    Kinda catchy
    I hope that she will talk to me now
    And even allow me
    To hold her hand
    And forget that old band
    I strolled around to her pad
    Her light was off and that's bad
    Her sister said that my girl was gone
    "But come inside, boy
    And play, play, play me a song"
    I said "yeah"
    Here I go
    She's kinda cute, don't you know?
    That after a while of
    Seeing her smile I knew we could make it
    Make it in style
    So now I've got all I need
    She and I are in love
    We've agreed
    She likes this song and my others too
    So now you see my world is
    'Cause of this tune
    What a boom this tune
    I tell you, soon we'll be lying in bed
    Happily wed
    And I won't think of that girl
    And what she said`;
    div.appendChild(p); 
    appendTo.appendChild(div);
}
// htmlLineMaker();

module.exports = {
    htmlLineMaker
};