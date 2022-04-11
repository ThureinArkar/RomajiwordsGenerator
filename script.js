const display=document.querySelector("input"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  {
  text:`a `,
  text2:`ne `,
  text1:`nu `,
  author:`n`
  },
  {
  text:`i `,
  text2:`no `,
  text1:`ni `,
  author:`wo`
  },
  {
  text:`u `,
  text2:`ha `,
  text1:`na `,
  author:`wa`
  },
  {
  text:`e `,
  text2:`hi `,
  text1:`to `,
  author:`ro`
  },
  {
  text:`o `,
  text2:`fu `,
  text1:`te `,
  author:`re`
  },
  {
  text:`ka `,
  text2:`he `,
  text1:`tsu `,
  author:`ru`
  },
  {
  text:`ki `,
  text2:`ho `,
  text1:`chi `,
  author:`ri`
  },
  {
  text:`ku `,
  text2:`ma `,
  text1:`ta `,
  author:`ra`
  },
  {
  text:`ke `,
  text2:`mi `,
  text1:`so `,
  author:`yo`
  },
  {
  text:`ko `,
  text2:`mu `,
  text1:`se `,
  author:`yu`
  },
  {
  text:`sa `,
  text2:`me `,
  text1:`su `,
  author:`ya`
  },
  {
  text:`shi `,
  text2:`mo `,
  text1:`shi `,
  author:`mo`
  },
  {
  text:`su `,
  text2:`ya `,
  text1:`sa `,
  author:`me`
  },
  {
  text:`se `,
  text2:`yu `,
  text1:`ko `,
  author:`mu`
  },
  {
  text:`so `,
  text2:`yo `,
  text1:`ke `,
  author:`mi`
  },
  {
  text:`ta `,
  text2:`ra `,
  text1:`ku `,
  author:`ma`
  },
  {
  text:`chi `,
  text2:`ri `,
  text1:`ki `,
  author:`ho`
  },
  {
  text:`tsu `,
  text2:`ru `,
  text1:`ka `,
  author:`he`
  },
  {
  text:`te `,
  text2:`re `,
  text1:`o `,
  author:`fu`
  },
  {
  text:` to `,
  text2:`ro `,
  text1:`e `,
  author:`hi`
  },
  {
    text:` na `,
    text2:`wa `,
    text1:`u `,
    author:`ha`
  },
  {
    text:` ni `,
    text2:`wo `,
    text1:`i `,
    author:`no`
  },
  {
    text:` nu `,
    text2:`n `,
    text1:`a `,
    author:`ne`
  },
  {
    text:` ne `,
    text2:`a `,
    text1:`n `,
    author:`nu`
  },
  {
    text:` no `,
    text2:`i `,
    text1:`wo `,
    author:`ni`
  },
  {
    text:` ha `,
    text2:`u `,
    text1:`wa `,
    author:`na`
  },
  {
    text:` hi `,
    text2:`e `,
    text1:`ro `,
    author:`to`
  },
  {
    text:` fu `,
    text2:`o `,
    text1:`re `,
    author:`te`
  },
  {
    text:` he `,
    text2:`ka `,
    text1:`ru `,
    author:`tsu`
  },
  {
    text:` ho `,
    text2:`ki `,
    text1:`ri `,
    author:`chi`
  },
  {
    text:` ma `,
    text2:`ku `,
    text1:`ra `,
    author:`ta`
  },
  {
    text:` mi `,
    text2:`ke `,
    text1:`yo `,
    author:`so`
  },
  {
    text:` mu `,
    text2:`ko `,
    text1:`yu `,
    author:`se`
  },
  {
    text:` me `,
    text2:`sa `,
    text1:`ya `,
    author:`su`
  },
  {
    text:` mo `,
    text2:`shi `,
    text1:`mo `,
    author:`shi`
  },
  {
    text:` ya `,
    text2:`su `,
    text1:`me `,
    author:`sa`
  },
  {
    text:` yu `,
    text2:`se `,
    text1:`mu `,
    author:`ko`
  },
  {
    text:` yo `,
    text2:`so `,
    text1:`mi `,
    author:`ke`
  },
  {
    text:` ra `,
    text2:`ta `,
    text1:`ma `,
    author:`ku`
  },
  {
    text:` ri `,
    text2:`chi `,
    text1:`ho `,
    author:`ki`
  },
  {
    text:` ru `,
    text2:`tsu `,
    text1:`he `,
    author:`ka`
  },
  {
    text:` re `,
    text2:`te `,
    text1:`fu `,
    author:`o`
  },
  {
    text:` ro `,
    text2:`to `,
    text1:`hi `,
    author:`e`
  },
  {
    text:` wa `,
    text2:`na `,
    text1:`ha `,
    author:`u`
  },
  {
    text:` wo `,
    text2:`ni `,
    text1:`no `,
    author:`i`
  },
  {
    text:` n `,
    text2:`nu `,
    text1:`ne `,
    author:`a`
  },

    
];

let chars1 = [
  {
  text:`a `,
  author:`to`
  },
  {
  text:`i `,
  author:`te`
  },
  {
  text:`u `,
  author:`tsu`
  },
  {
  text:`e `,
  author:`chi`
  },
  {
  text:`o `,
  author:`ta`
  },
  {
  text:`ka `,
  author:`so`
  },
  {
  text:`ki `,
  author:`se`
  },
  {
  text:`ku `,
  author:`su`
  },
  {
  text:`ke `,
  author:`shi`
  },
  {
  text:`ko `,
  author:`sa`
  },
  {
  text:`sa `,
  author:`ko`
  },
  {
  text:`shi `,
  author:`ke`
  },
  {
  text:`su `,
  author:`ku`
  },
  {
  text:`se `,
  author:`ki`
  },
  {
  text:`so `,
  author:`ka`
  },
  {
  text:`ta `,
  author:`o`
  },
  {
  text:`chi `,
  author:`e`
  },
  {
  text:`tsu `,
  author:`u`
  },
  {
  text:`te `,
  author:`i`
  },
  {
  text:` to `,
  author:`a`
  },
];

 button.onclick=()=>{

let randomPhrase=Math.floor(Math.random() * chars.length);
display.value = chars[randomPhrase].text;
display1.value = chars[randomPhrase].author;
display2.value = chars[randomPhrase].text1;
display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

 }










function copy() {
  copyBtn.style.display = "none";
  copyActive.style.display = "block";
  display.select();
  document.execCommand("copy");
}

$("span.far").click(function () {

  $(".alert").fadeIn(1000);
  $(".alert").fadeOut(1000);

})

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'aqua'
});
