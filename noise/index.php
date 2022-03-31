<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Noise</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="print.css" media="print" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,200..800;1,519&display=swap");
    </style>
  </head>
  <body>
    <main>
      <div id="result">
        <span id="instruction">
          Speak, talk, sing or read to the browser. And pay attention to the
          pauses, gaps, void, the space in between, anything extraneous to the
          message. <br>Press the space bar to start or stop.
        </span>
      </div>
      <p id="message" hidden aria-hidden="true">
        Your browser doesn't support Speech Recognition. Sorry.
      </p>
    </main>
    <script>
      window.addEventListener("DOMContentLoaded", () => {
        let finalResults = [];
        let timer;

        const button = document.getElementById("button");
        const result = document.getElementById("result");
        const main = document.getElementsByTagName("main")[0];
        let contentLength = result.textContent.length;
        let listening = false;
        let starttime;
        let second;

        let content = [
          [
            "gag",
            "mum",
            "calm",
            "glum",
            "sulky",
            "dummy",
            "mousy",
            "faint",
            "sullen",
            "mutism",
            "sphinx",
            "sulker",
            "muzzle",
            "muffle",
            "stifle",
            "unsaid",
            "untold",
            "aphonic",
            "bashful",
            "squelch",
            "tapping",
            "buzzing",
            "implied",
            "unheard"
          ],

          [
            "unvoiced",
            "knocking",
            "rumbling",
            "laconism",
            "taciturn",
            "reticent",
            "reserved",
            "implicit",
            "nameless",
            "fabulous",
            "tonguetie",
            "reticence",
            "anarthria",
            "dysphasic",
            "sphinxian",
            "saturnine",
            "unuttered",
            "ineffable",
            "unnamable"
          ],

          [
            "stammering",
            "stuttering",
            "understand",
            "taciturnity",
            "unmentioned",
            "unexpressed",
            "unutterable",
            "unspeakable",
            "inarticulate",
            "unpronounced",
            "inexpressible",
            "indescribable"
          ],
          [
            "shut up",
            "dummy up",
            "be silent",
            "quiet down",
            "The sirens",
            "tongue-tied",
            "strike dumb",
            "say nothing",
            "keep silent",
            "all the time",
            "like tinnitus",
            "short and crisp,",
            "a stereo effect,"
          ],

          [
            "Hold one's tongue.",
            "Words, words, words.",
            "there is a calmness.",
            "Awkwardness of silence.",
            "like bell from a temple,",
            "Space distorted by sound",
            "maybe we need it anyway. ",
            "The rumble is still there.",
            "echoes in a gurgling secret.",
            "What is the sound of silence?"
          ],

          [
            "and a deeper hum hung over me, ",
            "Hearing is as dull as smelling.",
            "Absolute silence is frightening,",
            "A sound says, “You are not alone”",
            "There is no such thing as silence.",
            "distant, indiscernible, regularly.",
            "the backdrop to all communication,",
            "There are also sporadic bird calls,",
            "and a faint sound of running water,",
            "it is not a break in communication,"
          ],

          [
            "I sometimes suspect to be in my head.",
            "disturbance, excess or transgression.",
            "The sound of the machine never stops.",
            "Sit quietly for a moment and receive.",
            "I heard the sound of machines running,",
            "for instance, what is the smell of air? ",
            "It's coming, whizzing from time to time,",
            "It’s the content of communication itself.",
            "The machine is running as usual, so do I.",
            "in addition to the computer in front of me,"
          ],

          [
            "Running permanently, a machine of making sense. ",
            "Did people always hear the same sounds as I do?",
            "Something is always happening that makes a sound.",
            "Listen. Openly attentive to whatever is vibrating.",
            "Listening or talking is always better than reading.",
            "It is pleasant to know there are others in the world.",
            "Of course, people also have the ability to play dumb.",
            "like a conch, instrument, blood vessel, or a starry sky,",
            "the passing cars outside my window and the distant siren.",
            "Be abstract, unique, mysterious, expressive, but not silent.",
            "What does sound of the machine symbolize? Power and progress.",
            "in which case the language becomes an atmospheric cafe noise."
          ],

          [
            "Maybe the cosmic create human as a machine for producing sense,",
            "A real change is difficult, the inertia always pushes me forward.",
            "Oscillating more than about 16 times a second will heard as sound.",
            "The buzz of the machine is so pervasive that it is almost unnoticed,",
            "Are we hearing noise or are we hearing the content of communication,",
            "How could human beings live in the constant noise of the city machine? ",
            "are we hearing the noise of the noise of the content of communication?",
            "There is no such thing as silence.  Something is always happening that makes a sound.",
            "like being thrown in the ocean, trying to grasp words between lines to locate myself.",
            "exploiting the possibilities present in the slightest hum on the line, or pop and crackle.",
            "I could only grasp fragments between lines and attempt to piece them together with significance.",
            "If something is with you all your lives you take it for granted because you can't get outside to measure it.",
            "like the ones that would be included in the typical ‘natural world’ entry on the sound sample resources website. ",
            "For the information embedded in unknown language get through me with the tones, facial and body expressions of the speaking,"
          ],

          [
            "Listening or talking is always better than reading. For the information embedded in unknown language get through me with the tones, facial and body expressions of the speaking, in which case the language becomes an atmospheric cafe noise. ",
            "If something is with you all your lives you take it for granted because you can't get outside to measure it. For instance, but what is the smell of air? What is the sound of silence?",
            "Are we hearing noise or are we hearing the content of communication,  or are we hearing the noise of the noise of the content of communication?"
          ]
        ];

        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        if (typeof SpeechRecognition !== "undefined") {
          const recognition = new SpeechRecognition();

          const stop = () => {
            recognition.stop();
          };

          const start = () => {
            recognition.start();
            result.innerHTML = "";
            finalResults = [];
          };

          const startAddingMessage = () => {
            starttime = Date.now();
          };

          const stopAddingMessage = () => {
            second = Math.floor((Date.now() - starttime) / 1000);
            let index;
            if (second >= 1 && second <= content.length + 1) {
              let message = content[second - 1];
              let msg;
              index = Math.floor(Math.random() * message.length);
              console.log(index);
              msg = message[index];

              let lastResult = finalResults.pop();
              lastResult += "*asdfjkl*" + msg;
              finalResults.push(lastResult);
            } else if (second < 1) {
              console.log("time in between too short");
            } else if (second > content.length) {
              console.log("not enough content");
            } else {
              console.log("error");
            }
          };

          const onResult = event => {
            stopAddingMessage();

            result.innerHTML = "";

            for (let i = 0; i < event.results.length; i++) {
              let res = event.results[i];

              if (res.isFinal) {
                if (finalResults.length < i + 1) {
                  finalResults.push(res[0].transcript);
                }
              } else if (i === 0) {
                finalResults[0] = res[0].transcript;
              }
            }

            for (const finalResult of finalResults) {
              let splitFinalResult = finalResult.split("*asdfjkl*");

              const span = document.createElement("span");

              if (splitFinalResult.length === 1) {
                span.classList.add("final");
                const text = document.createTextNode(splitFinalResult[0]);
                span.appendChild(text);
              } else {
                span.classList.add("final");
                const text = document.createTextNode(splitFinalResult[0]);
                span.appendChild(text);

                const msgSpan = document.createElement("span");
                const msg = document.createTextNode(splitFinalResult[1]);
                msgSpan.classList.add("message");
                msgSpan.appendChild(msg);
                span.appendChild(msgSpan);
              }

              result.appendChild(span);

              $(".message")
                .mouseover(function() {
                  $("body").css("background-color", "black");
                  // $(".message").css("color", "black");
                  // $(this).css("color", "white");
                })
                .mouseleave(function() {
                  $("body").css("background-color", "white");
                  // $(".message").css("color", "white");
                });
            }

            startAddingMessage();

            let scrollingElement = document.querySelector("#result");
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
          };
          recognition.continuous = true;
          recognition.interimResults = true;
          recognition.addEventListener("result", onResult);
          recognition.onspeechend = function() {};

          document.addEventListener("keyup", event => {
            if (event.keyCode == 32) {
              if (listening) {
                stop();
              } else {
                start();
              }
              listening = !listening;
            }
          });
        } else {
          button.remove();
          const message = document.getElementById("message");
          message.removeAttribute("hidden");
          message.setAttribute("aria-hidden", "false");
        }

        let observer = new MutationObserver(function(mutations) {});
        var config = { attributes: true, childList: true, characterData: true };
        observer.observe(result, config);

        var div = document.getElementById("result");
        setTimeout(function() {
          div.focus();
        }, 0);
      });

      // get microphone permission
      function getLocalStream() {
        navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
          window.localStream = stream; // A
          window.localAudio.srcObject = stream; // B
          window.localAudio.autoplay = true; // C
        }).catch( err => {
          console.log("u got an error:" + err)
        });
      }
      getLocalStream();
    </script>
  </body>
</html>
