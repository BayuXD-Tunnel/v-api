const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});

const features = [
  {
    name: "OpenAI",
    method: "GET",
    description: "AI/openai",
    category: "AI",
    endpoint: "../api",
    query: "s=openai&text=Hai%20kamu"
  },
  {
    name: "BlackBox",
    method: "GET",
    description: "AI/blackbox",
    category: "AI",
    endpoint: "../api",
    query: "s=blackbox&text=Hai%20kamu"
  },
  {
    name: "LuminAI",
    method: "GET",
    description: "AI/luminai",
    category: "AI",
    endpoint: "../api",
    query: "s=luminai&text=Hai%20kamu"
  },
  {
    name: "Simi-Simi",
    method: "GET",
    description: "AI/simisimi",
    category: "AI",
    endpoint: "../api",
    query: "s=simisimi&text=Hai%20kamu"
  },
  {
    name: "Gemini",
    method: "GET",
    description: "AI/gemini",
    category: "AI",
    endpoint: "../api",
    query: "s=gemini&text=Hai%20kamu"
  },
  {
    name: "Mora-AI",
    method: "GET",
    description: "AI/morai",
    category: "AI",
    endpoint: "../api",
    query: "s=morai&text=Hai%20kamu&username=Vioo"
  },
  {
    name: "Moshi-AI",
    method: "GET",
    description: "AI/moshiai",
    category: "AI",
    endpoint: "../api",
    query: "s=moshiai&text=Hai%20kamu"
  },
  {
    name: "Latukam",
    method: "GET",
    description: "AI/latukam",
    category: "AI",
    endpoint: "../api",
    query: "s=latukam&text=Hai%20kamu"
  },
  {
    name: "Google Search",
    method: "GET",
    description: "Search/google",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=google&text=Kylian%20Mbappe"
  },
  {
    name: "NPM Search",
    method: "GET",
    description: "Search/npm",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=npm&text=Axios"
  },
  {
    name: "Pinterest",
    method: "GET",
    description: "Search/pinterest",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=pinterest&text=Kylian%20Mbappe"
  },
  {
    name: "Wikimedia",
    method: "GET",
    description: "Search/wikimedia",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=wikimedia&text=Harimau"
  },
  {
    name: "Playstore",
    method: "GET",
    description: "Search/playstore",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=playstore&text=Minecraft"
  },
  {
    name: "Happymod",
    method: "GET",
    description: "Search/happymod",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=happymod&text=Minecraft"
  },
  {
    name: "Komiku Search",
    method: "GET",
    description: "Search/komiku",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=komiku&text=Shikanoko"
  },
  {
    name: "McpeDL",
    method: "GET",
    description: "Search/mcpedl",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=mcpedl&text=Jenny"
  },
  {
    name: "Xvideo Search",
    method: "GET",
    description: "Search/xvidsearch",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=xvidsearch&text=Pussy"
  },
  {
    name: "Xnxx Search",
    method: "GET",
    description: "Search/xnxxsearch",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=xnxxsearch&text=Pussy"
  },
  {
    name: "Game Search",
    method: "GET",
    description: "Search/gamesrc",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=gamesrc&text=Anime"
  },
  {
    name: "Android1",
    method: "GET",
    description: "Search/andro1",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=andro1&text=Stickman"
  },
  {
    name: "Apk Pure",
    method: "GET",
    description: "Search/apkpure",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=apkpure&text=Stickman"
  },
  {
    name: "Lite Apks",
    method: "GET",
    description: "Search/liteapks",
    category: "SEARCH",
    endpoint: "../api",
    query: "s=liteapks&text=Stickman"
  },
  {
    name: "Brat Sticker",
    method: "GET",
    description: "Maker/brat",
    category: "MAKER",
    endpoint: "../api",
    query: "s=brat&text=Halo%20kamu"
  },
  {
    name: "Yt Comment",
    method: "GET",
    description: "Maker/ytcomment",
    category: "MAKER",
    endpoint: "../api",
    query: "s=ytcomment&text=Halo%20kamu&avatar=https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg&username=Vioo"
  },
  {
    name: "Carbonify",
    method: "GET",
    description: "Maker/carbon",
    category: "MAKER",
    endpoint: "../api",
    query: "s=carbon&text=Halo%20kamu"
  },
  {
    name: "Txt Image",
    method: "GET",
    description: "Maker/txtimg",
    category: "MAKER",
    endpoint: "../api",
    query: "s=txtimg&text=Halo%20kamu"
  },
  {
    name: "MemeGen",
    method: "GET",
    description: "Maker/memegen",
    category: "MAKER",
    endpoint: "../api",
    query: "s=memegen&url=https://pomf2.lain.la/f/6wng83b5.jpg&text=Halo&text1=kamu"
  },
  {
    name: "BlurImage",
    method: "GET",
    description: "Maker/blurimg",
    category: "MAKER",
    endpoint: "../api",
    query: "s=blurimg&url=https://i.ytimg.com/vi/LIohsg2kHEM/maxresdefault.jpg"
  },
  {
    name: "Beautiful",
    method: "GET",
    description: "Maker/beautiful",
    category: "MAKER",
    endpoint: "../api",
    query: "s=beautiful&url=https://i.ytimg.com/vi/LIohsg2kHEM/maxresdefault.jpg"
  },
  {
    name: "Facepalm",
    method: "GET",
    description: "Maker/facepalm",
    category: "MAKER",
    endpoint: "../api",
    query: "s=facepalm&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "MediaFire",
    method: "GET",
    description: "Downloader/mediafire",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=mediafire&url=https://www.mediafire.com/file/o0008kd4n0q8dxa/Infinity-V1.0.0+.zip/file"
  },
  {
    name: "Tiktok",
    method: "GET",
    description: "Downloader/ttdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ttdl&url=https://vm.tiktok.com/ZSjVn47bC/"
  },
  {
    name: "Instagram",
    method: "GET",
    description: "Downloader/igdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=igdl&url=https://www.instagram.com/p/DCQhOuXTRvE/?img_index=1&igsh=MWF2dXU3aWtpazY2NQ=="
  },
  {
    name: "Facebook",
    method: "GET",
    description: "Downloader/fbdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=fbdl&url=https://www.facebook.com/share/r/12BFZAtjpS8/?mibextid=qDwCgo"
  },
  {
    name: "Capcut",
    method: "GET",
    description: "Downloader/capcut",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=capcut&url=https://www.capcut.com/t/Zs8Sw9wsE/%20aesthetic"
  },
  {
    name: "Google Drive",
    method: "GET",
    description: "Downloader/gdrive",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=gdrive&url=https://drive.google.com/file/d/1YTD7Ymux9puFNqu__5WPlYdFZHcGI3Wz/view?usp=drivesdk"
  },
  {
    name: "YouTube",
    method: "GET",
    description: "Downloader/ytdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ytdl&url=https://youtube.com/shorts/kpsR7ogZZ5c?si=vlI0bE-11nyj3nI9"
  },
  {
    name: "Ytmp4",
    method: "GET",
    description: "Downloader/ytmp4",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ytmp4&url=https://youtube.com/shorts/kpsR7ogZZ5c?si=vlI0bE-11nyj3nI9"
  },
  {
    name: "Ytmp3",
    method: "GET",
    description: "Downloader/ytmp3",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=ytmp3&url=https://youtube.com/shorts/kpsR7ogZZ5c?si=vlI0bE-11nyj3nI9"
  },
  {
    name: "Twitter",
    method: "GET",
    description: "Downloader/twitter",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=twitter&url=https://twitter.com/Eminem/status/943590594491772928"
  },
  {
    name: "Xvideo-DL",
    method: "GET",
    description: "Downloader/xvideodl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=xvideodl&url=https://www.xvideos.com/video.ueuulmd7082/colok_memek_pake_stang_motor"
  },
  {
    name: "Xnxx-DL",
    method: "GET",
    description: "Downloader/xnxxdl",
    category: "DOWNLOADER",
    endpoint: "../api",
    query: "s=xnxxdl&url=https://www.xnxx.com/video-15jsg545/five_hot_girls_love_to_lick_they_pussy"
  },
  {
    name: "Otakudesu Search",
    method: "GET",
    description: "Anime/otakudesu-src",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-src&text=Naruto"
  },
  {
    name: "Otakudesu Detail",
    method: "GET",
    description: "Anime/otakudesu-detail",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-detail&url=https://otakudesu.cloud/lengkap/btr-nng-sub-indo-part-1"
  },
  {
    name: "Otakudesu Ongoing",
    method: "GET",
    description: "Anime/otakudesu-ongoing",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-ongoing"
  },
  {
    name: "Otakudesu Download",
    method: "GET",
    description: "Anime/otakudesu-dl",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-dl&url=https://otakudesu.cloud/lengkap/btr-nng-sub-indo-part-1"
  },
  {
    name: "Animebatch Search",
    method: "GET",
    description: "Anime/abatch-src",
    category: "ANIME",
    endpoint: "../api",
    query: "s=abatch-src&text=Maou"
  },
  {
    name: "Animebatch Download",
    method: "GET",
    description: "Anime/abatch-dl",
    category: "ANIME",
    endpoint: "../api",
    query: "s=abatch-dl&url=https://www.animebatch.id/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii-sub-indo/"
  },
  {
    name: "Anime Search",
    method: "GET",
    description: "Anime/animesrc",
    category: "ANIME",
    endpoint: "../api",
    query: "s=animesrc&text=Naruto"
  },
  {
    name: "OtakOtaku",
    method: "GET",
    description: "Anime/otakotaku",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakotaku&text=Mahiru"
  },
  {
    name: "Tebak Gambar",
    method: "GET",
    description: "Games/tebakgambar",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakgambar"
  },
  {
    name: "Tebak HeroML",
    method: "GET",
    description: "Games/tebakheroml",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakheroml"
  },
  {
    name: "Tebak JKT",
    method: "GET",
    description: "Games/tebakjkt",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakjkt"
  },
  {
    name: "Tebak Hewan",
    method: "GET",
    description: "Games/tebakhewan",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakhewan"
  },
  {
    name: "Tebak Game",
    method: "GET",
    description: "Games/tebakgame",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakgame"
  },
  {
    name: "Tebak Bendera",
    method: "GET",
    description: "Games/tebakbendera",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakbendera"
  },
  {
    name: "Tebak Lagu",
    method: "GET",
    description: "Games/tebaklagu",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebaklagu"
  },
  {
    name: "Tebak Lirik",
    method: "GET",
    description: "Games/tebaklirik",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebaklirik"
  },
  {
    name: "Tebak Kalimat",
    method: "GET",
    description: "Games/tebakkalimat",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakkalimat"
  },
  {
    name: "Tebak Kata",
    method: "GET",
    description: "Games/tebakkata",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakkata"
  },
  {
    name: "Tebak Kimia",
    method: "GET",
    description: "Games/tebakkimia",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebakkimia"
  },
  {
    name: "Tebak Logo",
    method: "GET",
    description: "Games/tebaklogo",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebaklogo"
  },
  {
    name: "Tebak Kabupaten",
    method: "GET",
    description: "Games/tkabupaten",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tkabupaten"
  },
  {
    name: "Tebak Tebakan",
    method: "GET",
    description: "Games/tebaktebakan",
    category: "GAMES",
    endpoint: "../api",
    query: "s=tebaktebakan"
  },
  {
    name: "Family100",
    method: "GET",
    description: "Games/family100",
    category: "GAMES",
    endpoint: "../api",
    query: "s=family100"
  },
  {
    name: "Cak Lontong",
    method: "GET",
    description: "Games/caklontong",
    category: "GAMES",
    endpoint: "../api",
    query: "s=caklontong"
  },
  {
    name: "Susun Kata",
    method: "GET",
    description: "Games/susunkata",
    category: "GAMES",
    endpoint: "../api",
    query: "s=susunkata"
  },
  {
    name: "Asah Otak",
    method: "GET",
    description: "Games/asahotak",
    category: "GAMES",
    endpoint: "../api",
    query: "s=asahotak"
  },
  {
    name: "To Base64",
    method: "GET",
    description: "Convert/tobase64",
    category: "CONVERT",
    endpoint: "../api",
    query: "s=tobase64&text=Halo%20kamu"
  },
  {
    name: "To Utf8",
    method: "GET",
    description: "Convert/toutf8",
    category: "CONVERT",
    endpoint: "../api",
    query: "s=toutf8&text=SGFsbyBrYW11"
  },
  {
    name: "To GithubRaw",
    method: "GET",
    description: "Convert/githubraw",
    category: "CONVERT",
    endpoint: "../api",
    query: "s=githubraw&url=https://github.com/WA/Web/blob/main/vercel.json"
  },
  {
    name: "To GithubOri",
    method: "GET",
    description: "Convert/githubori",
    category: "CONVERT",
    endpoint: "../api",
    query: "s=githubori&url=https://raw.githubusercontent.com/VWA/Web/main/vercel.json"
  },
  {
    name: "Cecan Indonesia",
    method: "GET",
    description: "Random/indonesia",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=indonesia"
  },
  {
    name: "Cecan China",
    method: "GET",
    description: "Random/china",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=china"
  },
  {
    name: "Cecan Japan",
    method: "GET",
    description: "Random/japan",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=japan"
  },
  {
    name: "Cecan Korea",
    method: "GET",
    description: "Random/korea",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=korea"
  },
  {
    name: "Cecan Thailand",
    method: "GET",
    description: "Random/thailand",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=thailand"
  },
  {
    name: "Cecan Vietnam",
    method: "GET",
    description: "Random/vietnam",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=vietnam"
  },
  {
    name: "Cecan Malaysia",
    method: "GET",
    description: "Random/Malaysia",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=malaysia"
  },
  {
    name: "Asupan Random",
    method: "GET",
    description: "Random/asupan",
    category: "RANDOM",
    endpoint: "../api",
    query: "s=asupan"
  },
  {
    name: "Remini",
    method: "GET",
    description: "Tools/remini",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=remini&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Reminiv2",
    method: "GET",
    description: "Tools/reminiv2",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=reminiv2&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Recolor",
    method: "GET",
    description: "Tools/recolor",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=recolor&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Dehaze",
    method: "GET",
    description: "Tools/dehaze",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=dehaze&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Screenshot-Web",
    method: "GET",
    description: "Tools/ssweb",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=ssweb&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Remove Background",
    method: "GET",
    description: "Tools/removebg",
    category: "TOOLS",
    endpoint: "../api",
    query: "s=removebg&url=https://i.ibb.co.com/9rtTrVy/download-1.jpg"
  },
  {
    name: "Stalk Github",
    method: "GET",
    description: "Stalk/stalk-ghuser",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-ghuser&text=WA"
  },
  {
    name: "Stalk GhRepo",
    method: "GET",
    description: "Stalk/stalk-ghrepo",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-ghrepo&text=ViooWA&text1=Js"
  },
  {
    name: "Stalk NPM",
    method: "GET",
    description: "Stalk/stalk-npm",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-npm&text=axios"
  },
  {
    name: "Stalk Tiktok",
    method: "GET",
    description: "Stalk/stalk-tt",
    category: "STALK",
    endpoint: "../api",
    query: "s=stalk-tt&text=mrbeast"
  },
  {
    name: "Quotes Sindiran",
    method: "GET",
    description: "Quotes/qsindiran",
    category: "QUOTES",
    endpoint: "../api",
    query: "s=qsindiran"
  },
  {
    name: "Quotes Bucin",
    method: "GET",
    description: "Quotes/qbucin",
    category: "QUOTES",
    endpoint: "../api",
    query: "s=qbucin"
  },
  {
    name: "Quotes Senja",
    method: "GET",
    description: "Quotes/qsenja",
    category: "QUOTES",
    endpoint: "../api",
    query: "s=qsenja"
  },
  {
    name: "Quotes Fakta",
    method: "GET",
    description: "Quotes/qfakta",
    category: "QUOTES",
    endpoint: "../api",
    query: "s=qfakta"
  },
  {
    name: "Cerpen Anak",
    method: "GET",
    description: "Cerpen/cerpen-anak",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-anak"
  },
  {
    name: "Cerpen Cinta",
    method: "GET",
    description: "Cerpen/cerpen-cinta",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-cinta"
  },
  {
    name: "Cerpen Galau",
    method: "GET",
    description: "Cerpen/cerpen-galau",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-galau"
  },
  {
    name: "Cerpen Gokil",
    method: "GET",
    description: "Cerpen/cerpen-gokil",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-gokil"
  },
  {
    name: "Cerpen Remaja",
    method: "GET",
    description: "Cerpen/cerpen-remaja",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-remaja"
  },
  {
    name: "Cerpen Rindu",
    method: "GET",
    description: "Cerpen/cerpen-rindu",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-rindu"
  },
  {
    name: "Cerpen Sedih",
    method: "GET",
    description: "Cerpen/cerpen-sedih",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-sedih"
  },
  {
    name: "Cerpen Sejarah",
    method: "GET",
    description: "Cerpen/cerpen-sejarah",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-sejarah"
  },
  {
    name: "Cerpen Motivasi",
    method: "GET",
    description: "Cerpen/cerpen-motivasi",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-motivasi"
  },
  {
    name: "Cerpen Nasihat",
    method: "GET",
    description: "Cerpen/cerpen-nasihat",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-nasihat"
  },
  {
    name: "Cerpen Budaya",
    method: "GET",
    description: "Cerpen/cerpen-budaya",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-budaya"
  },
  {
    name: "Cerpen Fantasi",
    method: "GET",
    description: "Cerpen/cerpen-fantasi",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-fantasi"
  },
  {
    name: "Cerpen Misteri",
    method: "GET",
    description: "Cerpen/cerpen-misteri",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-misteri"
  },
  {
    name: "Cerpen Keluarga",
    method: "GET",
    description: "Cerpen/cerpen-keluarga",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-keluarga"
  },
  {
    name: "Cerpen Kehidupan",
    method: "GET",
    description: "Cerpen/cerpen-kehidupan",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-kehidupan"
  },
  {
    name: "Cerpen Sastra",
    method: "GET",
    description: "Cerpen/cerpen-sastra",
    category: "CERPEN",
    endpoint: "../api",
    query: "s=cerpen-sastra"
  },
  {
    name: "NSFW",
    method: "GET",
    description: "NSFW/nsfw",
    category: "NSFW & SFW",
    endpoint: "../api",
    query: "s=nsfw&text=trap"
  },
  {
    name: "SFW",
    method: "GET",
    description: "SFW/sfw",
    category: "NSFW & SFW",
    endpoint: "../api",
    query: "s=sfw&text=waifu"
  }
];

document.getElementById("total-features").textContent = features.length;
function createCategorySection(categoryName) {
  const categorySection = document.createElement("div");
  categorySection.classList.add("p-6", "rounded-lg", "shadow-lg", "bg-gray-800");

  categorySection.innerHTML = `
    <h2 class="text-2xl font-semibold gradient-text mb-4">${categoryName}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 category-cards"></div>
  `;

  return categorySection;
}

function redirectToEndpoint(endpoint, query, method) {
  const fullUrl = `${endpoint}?${query}`;

  if (method === "GET") {
    window.open(fullUrl, "_blank");
  } else if (method === "POST") {
    const data = Object.fromEntries(new URLSearchParams(query));
    axios.post(endpoint, data)
      .then((response) => {
        console.log("Response:", response.data);
        alert("Request berhasil! Lihat konsol untuk respons.");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        if (error.response) {
          console.error("Detail Error:", error.response.data);
        }
        alert("Terjadi kesalahan! Lihat konsol untuk detail.");
      });
  }
}

const featureContainer = document.getElementById("feature");
const categories = [...new Set(features.map((feature) => feature.category))];

categories.forEach((category) => {
  const categorySection = createCategorySection(category);
  const categoryCards = categorySection.querySelector(".category-cards");

  features
    .filter((feature) => feature.category === category)
    .forEach((feature) => {
      const card = document.createElement("div");
      card.classList.add(
        "card",
        "rounded-lg",
        "shadow-md",
        "p-4",
        "hover:shadow-xl",
        "transition-all",
        "duration-300"
      );

      card.innerHTML = `
        <h3 class="text-lg font-bold mb-2">${feature.name}</h3>
        <p class="text-sm mb-4">${feature.description}</p>
        <div class="button-container">
          <button
            class="py-2 px-4 rounded-lg gradient-button"
            onclick="redirectToEndpoint('${feature.endpoint}', '${feature.query}', '${feature.method}')"
          >
            ${feature.method}
          </button>
        </div>
      `;

      categoryCards.appendChild(card);
    });

  featureContainer.appendChild(categorySection);
});
