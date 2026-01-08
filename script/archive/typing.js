let text = ["szz.....hello...?,soretomo..a....konnitiwa?....zz...",
  "....boku no koe ha noise...ga tuyoi rasii node"
];
let texts = [];
function arrayReplacement(array) {
  for (i = 0; i < array.length; i++) {
    texts[i] = convertToFictional(array[i]);
  }
}
arrayReplacement(text);

/*
人が好きなのか、それともそうプログラムされているのか、彼は私たちに興味を示す。
発声方法について、口腔内にスピーカーが搭載されていると思われたが確認できなかった。
・・・瞳孔が繰り返し点滅している。
指紋がない代わりに手袋をしているらしい。
彼の動作は非常に人間的に振る舞うが反射や情動反応は観測されない。
*/

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
      deleting = true;
      setTimeout(type, 5500);
      return;
    }
  } else {
    typing.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  const speed = deleting ? 50 : 100;
  setTimeout(type, speed);
}

type();


function convertToFictional(input) {
  if (typeof input !== 'string') return input;

  // 小文字化（ローマ字が混在する前提）
  let text = input.toLowerCase();

  // まず複合子音（長いものを先に）
  const digraphs = [
    { from: /sh/g, to: '"' },   // sh -> "
    { from: /zh/g, to: '#' },   // zh -> #
    { from: /ch/g, to: '%' },   // ch -> %
    { from: /ts/g, to: '+' }    // ts -> +
    // 必要ならここへ他の複合音を追加
  ];
  for (const d of digraphs) {
    text = text.replace(d.from, d.to);
  }

  // 母音マップ
  const vowelMap = {
    'a': '@',
    'i': '|',
    'u': '&',
    'e': '$',
    'o': '*'
  };

  // 単一子音マップ（digraphs は既に処理済み）
  const consMap = {
    's': '"',  // s -> "
    'z': '#',  // z -> #
    't': '%',  // t -> %
    'y': '-',  // y -> -
    'd': ',',  // d -> ,
    'b': '.',  // b -> .
    'p': '^',  // p -> ^
    'q': ';',  // q -> ;
    'k': '+',  // k -> +
    'n': '!',  // n -> !
    'm': '?',  // m -> ?
    // 'ts' とか複合は上で処理
    // 他の子音はデフォルトで '\' にする（下の処理で扱う）
  };

  // 変換本体（1文字ずつ）
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    // 英字のみ扱う（英字以外はそのまま保存）
    if (ch >= 'a' && ch <= 'z' || ch === '"' || ch === '#' || ch === '%' || ch === '+') {
      // まず母音
      if (vowelMap[ch]) {
        result += vowelMap[ch];
        continue;
      }
      // 既にdigraphsで置き換えられた記号（" # % +）はそのまま追加
      if (ch === '"' || ch === '#' || ch === '%' || ch === '+') {
        result += ch;
        continue;
      }
      // 単一子音マップ
      if (consMap[ch]) {
        result += consMap[ch];
        continue;
      }
      // 英字だがマップに無い子音は '\' に変換
      result += '\\';
      continue;
    }

    // 英字でない（空白・句読点・数字・日本語文字など）はそのまま
    result += ch;
  }

  return result;
}
