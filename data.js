// ============================================================
// 데뷔 무대 월드컵 후보 데이터 (v2 — 전부 공식 뮤직비디오(MV)로 전면 교체)
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값 (자유롭게 작성 가능)
//   name      : 화면에 표시될 이름 (여기서는 그룹명)
//   group     : 세대 · 데뷔년월 (표시용)
//   song      : 데뷔곡 제목 (표시용)
//   gender    : "female"(여돌 그룹) 또는 "male"(남돌 그룹) — 이 값으로 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 3세대~5세대(2012~2025 데뷔) 여자/남자 아이돌 그룹의 "데뷔곡 공식 뮤직비디오
// (Official MV)"로 전부 교체했습니다. 예외 2곳만 진짜 MV가 없거나 애매하여
// 각 항목 주석에 사유를 표시했습니다 (ATEEZ, BOYNEXTDOOR).
// 64강이 정확히 32(여) vs 32(남)으로 진행될 수 있도록 남돌 그룹을 35팀까지
// 추가했습니다 (THE BOYZ, AB6IX, WEi, TEMPEST, 8TURN, NEXZ).
// ============================================================

const CANDIDATES = [
  // ---- 여돌 그룹 (female) ----
  { id: "f01", name: "TWICE", group: "3세대 · 2015.10 데뷔", song: "Like OOH-AHH (OOH-AHH하게)", gender: "female", youtubeId: "0rtV5esQT6I", start: 0 },
  { id: "f02", name: "Red Velvet", group: "3세대 · 2014.08 데뷔", song: "행복 (Happiness)", gender: "female", youtubeId: "JFgv8bKfxEs", start: 0 },
  { id: "f03", name: "Mamamoo", group: "3세대 · 2014.06 데뷔", song: "Mr. 애매모호 (Mr. Ambiguous)", gender: "female", youtubeId: "QwjWP2Tnsjk", start: 0 },
  { id: "f04", name: "GFriend", group: "3세대 · 2015.01 데뷔", song: "유리구슬 (Glass Bead)", gender: "female", youtubeId: "GU7icQFVzHo", start: 0 },
  { id: "f05", name: "Oh My Girl", group: "3세대 · 2015.04 데뷔", song: "Cupid", gender: "female", youtubeId: "fCrCUv6rQ7I", start: 0 },
  { id: "f06", name: "Lovelyz", group: "3세대 · 2014.11 데뷔", song: "Candy Jelly Love", gender: "female", youtubeId: "HRQEs4vOIrY", start: 0 },
  { id: "f07", name: "WJSN", group: "3세대 · 2016.02 데뷔", song: "Mo Mo Mo (모모모)", gender: "female", youtubeId: "XuSCSFl4mqI", start: 0 },
  { id: "f08", name: "EXID", group: "3세대 · 2012.02 데뷔", song: "Whoz That Girl", gender: "female", youtubeId: "enrUVf_JTz8", start: 0 }, // 원 소속사(예당) 채널 소실로 당시 배급 채널(1theK/LOEN)에 남은 정식 MV로 교체
  { id: "f09", name: "AOA", group: "3세대 · 2012.08 데뷔", song: "Elvis (엘비스)", gender: "female", youtubeId: "BNVxRkt3cmA", start: 0 }, // 재생 불가 링크 교체
  { id: "f10", name: "BLACKPINK", group: "3세대 · 2016.08 데뷔", song: "붐바야 (BOOMBAYAH)", gender: "female", youtubeId: "bwmSjveL3Lc", start: 0 },
  { id: "f11", name: "DIA", group: "3세대 · 2015.09 데뷔", song: "왠지 (Somehow)", gender: "female", youtubeId: "tzQv6TgwuFQ", start: 0 },
  { id: "f12", name: "PRISTIN", group: "3세대 · 2017.03 데뷔", song: "WEE WOO", gender: "female", youtubeId: "wLfHuClrQdI", start: 0 },
  { id: "f13", name: "April", group: "3세대 · 2015.08 데뷔", song: "꿈사탕 (Dream Candy)", gender: "female", youtubeId: "H2T1yZbTMzo", start: 0 },
  { id: "f14", name: "I.O.I", group: "3세대 · 2016.05 데뷔", song: "Dream Girls (드림걸스)", gender: "female", youtubeId: "8Zu_yO4pNEY", start: 0 },
  { id: "f15", name: "Dreamcatcher", group: "3세대 · 2017.01 데뷔", song: "Chase Me", gender: "female", youtubeId: "zihoyz0u_cs", start: 0 },
  { id: "f16", name: "Weki Meki", group: "3세대 · 2017.08 데뷔", song: "I Don't Like Your Girlfriend", gender: "female", youtubeId: "p9aKxBzf6SY", start: 0 },
  { id: "f17", name: "(G)I-DLE", group: "4세대 · 2018.05 데뷔", song: "LATATA", gender: "female", youtubeId: "9mQk7Evt6Vs", start: 0 },
  { id: "f18", name: "IZ*ONE", group: "4세대 · 2018.10 데뷔", song: "라비앙로즈 (La Vie en Rose)", gender: "female", youtubeId: "WZwr2a_lFWY", start: 0 },
  { id: "f19", name: "ITZY", group: "4세대 · 2019.02 데뷔", song: "달라달라 (DALLA DALLA)", gender: "female", youtubeId: "pNfTK39k55U", start: 0 },
  { id: "f20", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Black Mamba", gender: "female", youtubeId: "ZeerrnuLi5E", start: 0 },
  { id: "f21", name: "STAYC", group: "4세대 · 2020.11 데뷔", song: "SO BAD", gender: "female", youtubeId: "gMe1c4UegBY", start: 0 },
  { id: "f22", name: "EVERGLOW", group: "4세대 · 2019.03 데뷔", song: "봉봉쇼콜라 (Bon Bon Chocolat)", gender: "female", youtubeId: "HvGql8HwOIM", start: 0 },
  { id: "f23", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "ELEVEN", gender: "female", youtubeId: "--FmExEAsM8", start: 0 },
  { id: "f24", name: "LE SSERAFIM", group: "4세대 · 2022.05 데뷔", song: "FEARLESS", gender: "female", youtubeId: "4vbDFu0PUew", start: 0 },
  { id: "f25", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "Attention", gender: "female", youtubeId: "js1CtxSY38I", start: 0 },
  { id: "f26", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "To Heart (두근두근)", gender: "female", youtubeId: "iFUHS1Ei7qw", start: 0 },
  { id: "f27", name: "Cherry Bullet", group: "4세대 · 2019.01 데뷔", song: "Q&A", gender: "female", youtubeId: "7KdWuQyIEYk", start: 0 }, // 재생 불가 링크 교체
  { id: "f28", name: "Kep1er", group: "4세대 · 2022.01 데뷔", song: "WA DA DA", gender: "female", youtubeId: "n0j5NPptyM0", start: 0 },
  { id: "f29", name: "NMIXX", group: "4세대 · 2022.02 데뷔", song: "O.O", gender: "female", youtubeId: "3GWscde8rM8", start: 0 },
  { id: "f30", name: "BABYMONSTER", group: "5세대 · 2023.11 데뷔", song: "BATTER UP", gender: "female", youtubeId: "olDWm2veCrM", start: 0 },
  { id: "f31", name: "ILLIT", group: "5세대 · 2024.03 데뷔", song: "Magnetic", gender: "female", youtubeId: "Vk5-c_v4gMU", start: 0 },
  { id: "f32", name: "UNIS", group: "5세대 · 2024.03 데뷔", song: "SUPERWOMAN", gender: "female", youtubeId: "eNdOWsNPmf8", start: 0 },
  { id: "f33", name: "Kiss of Life", group: "5세대 · 2023.07 데뷔", song: "Shhh (쉿)", gender: "female", youtubeId: "mIfpVrYIhvM", start: 0 },
  { id: "f34", name: "izna", group: "5세대 · 2024.11 데뷔", song: "IZNA", gender: "female", youtubeId: "d3mqW9wqqx0", start: 0 },
  { id: "f35", name: "Hearts2Hearts", group: "5세대 · 2025.02 데뷔", song: "The Chase", gender: "female", youtubeId: "kxUA2wwYiME", start: 0 },

  // ---- 남돌 그룹 (male) ----
  { id: "m01", name: "EXO", group: "3세대 · 2012.04 데뷔", song: "MAMA", gender: "male", youtubeId: "KH6ZwnqZ7Wo", start: 0 },
  { id: "m02", name: "VIXX", group: "3세대 · 2012.05 데뷔", song: "Super Hero (슈퍼히어로)", gender: "male", youtubeId: "pT0rl2luupY", start: 0 },
  { id: "m03", name: "BTS", group: "3세대 · 2013.06 데뷔", song: "No More Dream", gender: "male", youtubeId: "rBG5L7UsUxA", start: 0 },
  { id: "m04", name: "GOT7", group: "3세대 · 2014.01 데뷔", song: "Girls Girls Girls", gender: "male", youtubeId: "2sAoKmg7qPI", start: 0 },
  { id: "m05", name: "Monsta X", group: "3세대 · 2015.05 데뷔", song: "무단침입 (Trespass)", gender: "male", youtubeId: "WLeFYKDtw1I", start: 0 },
  { id: "m06", name: "SEVENTEEN", group: "3세대 · 2015.05 데뷔", song: "아낀다 (Adore U)", gender: "male", youtubeId: "JyQD-B_SqUU", start: 0 },
  { id: "m07", name: "iKON", group: "3세대 · 2015.09 데뷔", song: "리듬 타 (RHYTHM TA)", gender: "male", youtubeId: "tYI5CriE6XU", start: 0 }, // 데뷔 앨범 더블 타이틀곡 중 하나 (다른 하나는 APOLOGY)
  { id: "m08", name: "NCT 127", group: "3세대 · 2016.07 데뷔", song: "소방차 (Fire Truck)", gender: "male", youtubeId: "_psXn_VJ_AE", start: 0 },
  { id: "m09", name: "ASTRO", group: "3세대 · 2016.02 데뷔", song: "숨바꼭질 (Hide & Seek)", gender: "male", youtubeId: "7yCg9lanONo", start: 0 },
  { id: "m10", name: "Block B", group: "3세대 · 2012.04 데뷔", song: "그대로 멈춰라! (Freeze!)", gender: "male", youtubeId: "ae_vi3hM6K0", start: 0 },
  { id: "m11", name: "Golden Child", group: "3세대 · 2017.09 데뷔", song: "담다디 (DamDaDi)", gender: "male", youtubeId: "lpMdr_5bygo", start: 0 },
  { id: "m12", name: "NU'EST", group: "3세대 · 2012.03 데뷔", song: "FACE", gender: "male", youtubeId: "YczfpTIBxZ4", start: 0 },
  { id: "m13", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "District 9", gender: "male", youtubeId: "u6unJQownW4", start: 0 },
  { id: "m14", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "해적왕 (Pirate King)", gender: "male", youtubeId: "RqJ1rH9M5G0", start: 0 }, // 소속사가 'Official MV (Performance ver.)'로만 발매, 별도의 스토리형 MV는 없음
  { id: "m15", name: "TXT", group: "4세대 · 2019.03 데뷔", song: "어느날 머리에서 뿔이 자랐다 (CROWN)", gender: "male", youtubeId: "W3iSnJ663II", start: 0 },
  { id: "m16", name: "Xdinary Heroes", group: "4세대 · 2021.12 데뷔", song: "Happy Death Day", gender: "male", youtubeId: "fGubAEGT8f4", start: 0 },
  { id: "m17", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Get A Guitar", gender: "male", youtubeId: "iUw3LPM7OBU", start: 0 },
  { id: "m18", name: "CORTIS", group: "5세대 · 2025.08 데뷔", song: "What You Want", gender: "male", youtubeId: "e2OpbOv_JiQ", start: 0 },
  { id: "m19", name: "ZEROBASEONE", group: "5세대 · 2023.07 데뷔", song: "In Bloom", gender: "male", youtubeId: "trzeUClQIIg", start: 0 },
  { id: "m20", name: "P1Harmony", group: "4세대 · 2020.10 데뷔", song: "Siren", gender: "male", youtubeId: "9ljkb_4A4O4", start: 0 },
  { id: "m21", name: "BOYNEXTDOOR", group: "5세대 · 2023.06 데뷔", song: "One and Only", gender: "male", youtubeId: "jizAb-SLvtM", start: 0 }, // 데뷔 앨범이 순차 발매한 3개 타이틀곡 중 하나 (다른 곡: But I Like You, Serenade)
  { id: "m22", name: "ENHYPEN", group: "4세대 · 2020.11 데뷔", song: "Given-Taken", gender: "male", youtubeId: "nQ6wLuYvGd4", start: 0 },
  { id: "m23", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "첫 만남은 계획대로 되지 않아 (Plot Twist)", gender: "male", youtubeId: "hVAc1Vf2ITU", start: 0 },
  { id: "m24", name: "CRAVITY", group: "4세대 · 2020.04 데뷔", song: "Break All The Rules", gender: "male", youtubeId: "NFlceOv8LMU", start: 0 },
  { id: "m25", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", song: "WISH", gender: "male", youtubeId: "hvQZs3k6Ytk", start: 0 },
  { id: "m26", name: "&TEAM", group: "5세대 · 2023.12 데뷔", song: "Under The Skin", gender: "male", youtubeId: "0utfT0nbuTA", start: 0 },
  { id: "m27", name: "VERIVERY", group: "4세대 · 2019.01 데뷔", song: "불러줘 (Ring Ring Ring)", gender: "male", youtubeId: "0NHj1g5taxk", start: 0 },
  { id: "m28", name: "ONEUS", group: "4세대 · 2019.01 데뷔", song: "발키리 (Valkyrie)", gender: "male", youtubeId: "k6msd9uh8nA", start: 0 },
  { id: "m29", name: "TREASURE", group: "4세대 · 2020.08 데뷔", song: "BOY", gender: "male", youtubeId: "JSAfPh1A25E", start: 0 },
  { id: "m30", name: "THE BOYZ", group: "3세대 · 2017.12 데뷔", song: "Boy", gender: "male", youtubeId: "yuk0LHFSlR8", start: 0 },
  { id: "m31", name: "AB6IX", group: "4세대 · 2019.05 데뷔", song: "Breathe", gender: "male", youtubeId: "RMJFEvHvmD0", start: 0 },
  { id: "m32", name: "WEi", group: "4세대 · 2020.10 데뷔", song: "Twilight", gender: "male", youtubeId: "4BYkuPUQoWE", start: 0 },
  { id: "m33", name: "TEMPEST", group: "4세대 · 2022.03 데뷔", song: "Bad News", gender: "male", youtubeId: "5_pzOIhE478", start: 0 },
  { id: "m34", name: "8TURN", group: "5세대 · 2023.01 데뷔", song: "Tic Tac", gender: "male", youtubeId: "x1U5koYxTYM", start: 0 },
  { id: "m35", name: "NEXZ", group: "5세대 · 2024.05 데뷔", song: "Ride the Vibe", gender: "male", youtubeId: "8SrSOZUuw8Q", start: 0 },
];
