const today = new Date();
const end = new Date(2026, 11, 31);

const startOfToday = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);

const remaining =
  Math.floor((end - startOfToday) / (1000 * 60 * 60 * 24)) + 1;

document.getElementById("days").textContent = remaining;

const messages = [
  "今日という1ページを、自分で選ぶ。",
  "私は私を後回しにしない。",
  "休むことも、今日の選択。",
  "小さな行動にも、経験値100倍。",
  "欠けているんじゃない。すでにある。",
  "私はどうしたい？",
  "幸せはいつもそばにある"
];

const dayIndex = Math.floor(
  (startOfToday - new Date(2026, 0, 1)) /
  (1000 * 60 * 60 * 24)
);

document.querySelector(".message").textContent =
  messages[dayIndex % messages.length];