let texts = ['zあ..zz....".ss..a....".sし....た.z....',
  "......tt...z.......c...マスtター!..",
  'a".....@...ボクnの声はノイzズ..g多いらsいい...でsね？..z',
  'aあ～"～～♪...z hhu♪...s..',
  '~～s"～～♪♪...～～～♪"...',
  '(彼はこちらを気にせず歌っている)'
];

const typing = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentText = texts[textIndex];

  if (!deleting) {
    typing.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {

      if (textIndex === texts.length - 1) {
        return;
      }
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typing.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      textIndex++;
    }
  }

  const speed = deleting ? 50 : 100;
  setTimeout(type, speed);
}

type();
