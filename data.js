// ============================================================
// 데뷔 무대 월드컵 후보 데이터
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값 (자유롭게 작성 가능)
//   name      : 화면에 표시될 이름 (여기서는 그룹명)
//   group     : 세대 · 데뷔년월 (표시용)
//   gender    : "female"(여돌 그룹) 또는 "male"(남돌 그룹) — 이 값으로 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 3세대~5세대(2012~2025 데뷔) 여자/남자 아이돌 그룹의 "공식 데뷔 무대"
// (음악방송 첫 무대) 영상으로 채웠습니다. 방송사 채널/직캠 채널 모두 허용.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 그룹 (female) ----
  { id: "f01", name: "TWICE", group: "3세대 · 2015.10 데뷔", gender: "female", youtubeId: "3u4ISZ4w34g", start: 0 },
  { id: "f02", name: "Red Velvet", group: "3세대 · 2014.08 데뷔", gender: "female", youtubeId: "mCDQNcM2FdQ", start: 0 },
  { id: "f03", name: "Mamamoo", group: "3세대 · 2014.06 데뷔", gender: "female", youtubeId: "QPWvZz-5Knk", start: 0 },
  { id: "f04", name: "GFriend", group: "3세대 · 2015.01 데뷔", gender: "female", youtubeId: "MgtG1y_3El8", start: 0 },
  { id: "f05", name: "Oh My Girl", group: "3세대 · 2015.04 데뷔", gender: "female", youtubeId: "N42-nPvIDmU", start: 0 },
  { id: "f06", name: "Lovelyz", group: "3세대 · 2014.11 데뷔", gender: "female", youtubeId: "1Xow2HwKQQU", start: 0 },
  { id: "f07", name: "WJSN", group: "3세대 · 2016.02 데뷔", gender: "female", youtubeId: "boiCBO3axmg", start: 0 },
  { id: "f08", name: "EXID", group: "3세대 · 2012.02 데뷔", gender: "female", youtubeId: "j5H68OT93kk", start: 0 },
  { id: "f09", name: "AOA", group: "3세대 · 2012.08 데뷔", gender: "female", youtubeId: "l7QdQBfbeIU", start: 0 },
  { id: "f10", name: "BLACKPINK", group: "3세대 · 2016.08 데뷔", gender: "female", youtubeId: "UdzZHSp1ueU", start: 0 },
  { id: "f11", name: "DIA", group: "3세대 · 2015.09 데뷔", gender: "female", youtubeId: "tAMWSOVRucA", start: 0 },
  { id: "f12", name: "PRISTIN", group: "3세대 · 2017.03 데뷔", gender: "female", youtubeId: "1mFuvsLkAaE", start: 0 },
  { id: "f13", name: "April", group: "3세대 · 2015.08 데뷔", gender: "female", youtubeId: "d3nz5-r5Vys", start: 0 },
  { id: "f14", name: "I.O.I", group: "3세대 · 2016.05 데뷔", gender: "female", youtubeId: "8yGRYGt5onw", start: 0 },
  { id: "f15", name: "Dreamcatcher", group: "3세대 · 2017.01 데뷔", gender: "female", youtubeId: "EmJ_ru_tczw", start: 0 },
  { id: "f16", name: "Weki Meki", group: "3세대 · 2017.08 데뷔", gender: "female", youtubeId: "dlf_safIjhY", start: 0 },
  { id: "f17", name: "(G)I-DLE", group: "4세대 · 2018.05 데뷔", gender: "female", youtubeId: "LIs9nIz6EK0", start: 0 },
  { id: "f18", name: "IZ*ONE", group: "4세대 · 2018.10 데뷔", gender: "female", youtubeId: "StuGoFqCrlc", start: 0 },
  { id: "f19", name: "ITZY", group: "4세대 · 2019.02 데뷔", gender: "female", youtubeId: "8qRif1cecJM", start: 0 },
  { id: "f20", name: "aespa", group: "4세대 · 2020.11 데뷔", gender: "female", youtubeId: "B42Z0JY6Jbc", start: 0 },
  { id: "f21", name: "STAYC", group: "4세대 · 2020.11 데뷔", gender: "female", youtubeId: "O9Occ1KsmHs", start: 0 },
  { id: "f22", name: "EVERGLOW", group: "4세대 · 2019.03 데뷔", gender: "female", youtubeId: "-n6qfwbgFBg", start: 0 },
  { id: "f23", name: "IVE", group: "4세대 · 2021.12 데뷔", gender: "female", youtubeId: "Qmnp4aERX5I", start: 0 },
  { id: "f24", name: "LE SSERAFIM", group: "4세대 · 2022.05 데뷔", gender: "female", youtubeId: "kASxpiefkTk", start: 0 },
  { id: "f25", name: "NewJeans", group: "4세대 · 2022.07 데뷔", gender: "female", youtubeId: "oZps8KZzYBc", start: 0 },
  { id: "f26", name: "fromis_9", group: "4세대 · 2018.01 데뷔", gender: "female", youtubeId: "cm9QOzKEyuk", start: 0 },
  { id: "f27", name: "Cherry Bullet", group: "4세대 · 2019.01 데뷔", gender: "female", youtubeId: "SYnSvKfGifY", start: 0 },
  { id: "f28", name: "Kep1er", group: "4세대 · 2022.01 데뷔", gender: "female", youtubeId: "uJLuYlhudm0", start: 0 },
  { id: "f29", name: "NMIXX", group: "4세대 · 2022.02 데뷔", gender: "female", youtubeId: "-TKtBPU9BEc", start: 0 },
  { id: "f30", name: "BABYMONSTER", group: "5세대 · 2023.11 데뷔", gender: "female", youtubeId: "yx_rdhtbdWc", start: 0 },
  { id: "f31", name: "ILLIT", group: "5세대 · 2024.03 데뷔", gender: "female", youtubeId: "rPaY_PMz2uk", start: 0 },
  { id: "f32", name: "UNIS", group: "5세대 · 2024.03 데뷔", gender: "female", youtubeId: "dX60epgUs5o", start: 0 },
  { id: "f33", name: "Kiss of Life", group: "5세대 · 2023.07 데뷔", gender: "female", youtubeId: "x7DVSD19n1E", start: 0 },
  { id: "f34", name: "izna", group: "5세대 · 2024.11 데뷔", gender: "female", youtubeId: "39YLRQ99YkI", start: 0 },
  { id: "f35", name: "Hearts2Hearts", group: "5세대 · 2025.02 데뷔", gender: "female", youtubeId: "Y2vMFAufBcs", start: 0 },

  // ---- 남돌 그룹 (male) ----
  { id: "m01", name: "EXO", group: "3세대 · 2012.04 데뷔", gender: "male", youtubeId: "w09ZCW9PmqU", start: 0 },
  { id: "m02", name: "VIXX", group: "3세대 · 2012.05 데뷔", gender: "male", youtubeId: "-k3HqXsCcLA", start: 0 },
  { id: "m03", name: "BTS", group: "3세대 · 2013.06 데뷔", gender: "male", youtubeId: "15cng3pBktY", start: 0 },
  { id: "m04", name: "GOT7", group: "3세대 · 2014.01 데뷔", gender: "male", youtubeId: "w4pmhsANjnU", start: 0 },
  { id: "m05", name: "Monsta X", group: "3세대 · 2015.05 데뷔", gender: "male", youtubeId: "B9GKDyvZ9Z0", start: 0 },
  { id: "m06", name: "SEVENTEEN", group: "3세대 · 2015.05 데뷔", gender: "male", youtubeId: "U8zv7EotYlU", start: 0 },
  { id: "m07", name: "iKON", group: "3세대 · 2015.09 데뷔", gender: "male", youtubeId: "AO3iPtap7oQ", start: 0 },
  { id: "m08", name: "NCT 127", group: "3세대 · 2016.07 데뷔", gender: "male", youtubeId: "5jimooMFJ58", start: 0 },
  { id: "m09", name: "ASTRO", group: "3세대 · 2016.02 데뷔", gender: "male", youtubeId: "k3zbwUCsuP0", start: 0 },
  { id: "m10", name: "The Boyz", group: "3세대 · 2017.12 데뷔", gender: "male", youtubeId: "4029yS8x4rs", start: 0 },
  { id: "m11", name: "Golden Child", group: "3세대 · 2017.09 데뷔", gender: "male", youtubeId: "7kfxp3Uzi8U", start: 0 },
  { id: "m12", name: "ONF", group: "3세대 · 2017.08 데뷔", gender: "male", youtubeId: "KXeFIgrckLs", start: 0 },
  { id: "m13", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", gender: "male", youtubeId: "n-i-O0N7P00", start: 0 },
  { id: "m14", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", gender: "male", youtubeId: "KAXWhITwJp8", start: 0 },
  { id: "m15", name: "VERIVERY", group: "4세대 · 2019.01 데뷔", gender: "male", youtubeId: "9zSZqcvRx0w", start: 0 },
  { id: "m16", name: "ONEUS", group: "4세대 · 2019.01 데뷔", gender: "male", youtubeId: "d_AvfaGnqfQ", start: 0 },
  { id: "m17", name: "TXT", group: "4세대 · 2019.03 데뷔", gender: "male", youtubeId: "keoolVkblc4", start: 0 },
  { id: "m18", name: "AB6IX", group: "4세대 · 2019.05 데뷔", gender: "male", youtubeId: "U2dY-NBdGjw", start: 0 },
  { id: "m19", name: "CRAVITY", group: "4세대 · 2020.04 데뷔", gender: "male", youtubeId: "qgxGGF8_D04", start: 0 },
  { id: "m20", name: "TREASURE", group: "4세대 · 2020.08 데뷔", gender: "male", youtubeId: "4EORiaivB3Y", start: 0 },
  { id: "m21", name: "P1Harmony", group: "4세대 · 2020.10 데뷔", gender: "male", youtubeId: "14znjpQxDH0", start: 0 },
  { id: "m22", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", gender: "male", youtubeId: "6pr-Wf22OM4", start: 0 },
  { id: "m23", name: "Xdinary Heroes", group: "4세대 · 2021.12 데뷔", gender: "male", youtubeId: "c6JlwqPspw4", start: 0 },
  { id: "m24", name: "TEMPEST", group: "4세대 · 2022.03 데뷔", gender: "male", youtubeId: "ZUTR9zeic_U", start: 0 },
  { id: "m25", name: "Younite", group: "4세대 · 2022.04 데뷔", gender: "male", youtubeId: "bSeI37XSNLc", start: 0 },
  { id: "m26", name: "&TEAM", group: "4세대 · 2022.12 데뷔", gender: "male", youtubeId: "jGC6VSKLIrs", start: 0 },
  { id: "m27", name: "8TURN", group: "5세대 · 2023.02 데뷔", gender: "male", youtubeId: "EYvzmlyW1WY", start: 0 },
  { id: "m28", name: "BOYNEXTDOOR", group: "5세대 · 2023.05 데뷔", gender: "male", youtubeId: "rLekPFZYuiQ", start: 0 },
  { id: "m29", name: "ZEROBASEONE", group: "5세대 · 2023.07 데뷔", gender: "male", youtubeId: "FyJM-vhwrhg", start: 0 },
  { id: "m30", name: "RIIZE", group: "5세대 · 2023.09 데뷔", gender: "male", youtubeId: "QRrSlayNQzI", start: 0 },
  { id: "m31", name: "TWS", group: "5세대 · 2024.01 데뷔", gender: "male", youtubeId: "2H7Sm3u6zXw", start: 0 },
  { id: "m32", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", gender: "male", youtubeId: "gIqLEshTAIg", start: 0 },
  { id: "m33", name: "NEXZ", group: "5세대 · 2024.05 데뷔", gender: "male", youtubeId: "3r_ijONPdtU", start: 0 },
  { id: "m34", name: "CORTIS", group: "5세대 · 2025.08 데뷔", gender: "male", youtubeId: "uAMzq7jry8U", start: 0 },
];
