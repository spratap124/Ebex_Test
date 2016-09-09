function typeIt(words) {
		  var letterIndex = 0;
		  var wordIndex = 0;
		  var text = $("#myTypingText");
		  var flag = $("#flag");
		  var beam = $("#beam");

		  (function nextWord() {
		    var si = setInterval(function() {
		      text.append(words[wordIndex][letterIndex]);		      
		      letterIndex++;

		      /*changing in flag start*/

		      flag.html(words[wordIndex]);
		      if(wordIndex===0){
			      	flag.removeClass(words[words.length - 1]).addClass(words[wordIndex]);
			      	beam.removeClass(words[words.length - 1]).addClass(words[wordIndex]);
		      }
		      else{
			      	flag.removeClass(words[wordIndex - 1]).addClass(words[wordIndex]);
			     	beam.removeClass(words[wordIndex - 1]).addClass(words[wordIndex]);
		      }
		      /*changing in flag end*/

		      if (letterIndex === words[wordIndex].length) {
			        wordIndex = (wordIndex + 1) % words.length;    /*move to next word*/
			        letterIndex = 0;
			        clearInterval(si);
			        		         
		        setTimeout(function() {
		          text.empty();
		          nextWord();
		        }, 2000);  // delay between words
		      }
		    }, 70);        // delay between letters
		  })();
    }

typeIt(["beautiful", "awesome", "nice", "wonderful"]);