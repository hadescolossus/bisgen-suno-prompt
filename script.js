// Data Definitions
const sunoData = {
    genres: {
        "Pop": ["Synth-Pop", "Dream Pop", "K-Pop", "Indie Pop", "Electropop", "City Pop", "Baroque Pop", "Art Pop", "Hyperpop", "Bubblegum Pop"],
        "Rock": ["Alternative Rock", "Indie Rock", "Punk Rock", "Hard Rock", "Psychedelic Rock", "Post-Rock", "Progressive Rock", "Grunge", "Shoegaze", "Stoner Rock", "Garage Rock"],
        "Blues": ["Delta Blues", "Chicago Blues", "Texas Blues", "Electric Blues", "Acoustic Blues", "Blues Rock", "Soul Blues", "Jump Blues", "Country Blues", "Modern Blues"],
        "Electronic": ["House", "Techno", "Trance", "Dubstep", "Drum & Bass", "Ambient", "Lo-Fi", "Synthwave", "IDM", "Phonk", "Hardstyle", "Gabber", "Eurobeat", "Vaporwave", "Future Bass", "Glitchcore"],
        "Hip Hop & Rap": ["Trap", "Boom Bap", "Drill", "Lo-Fi Hip Hop", "Jazz Rap", "Gangsta Rap", "Cloud Rap", "Emo Rap", "Old School"],
        "R&B & Soul": ["Neo-Soul", "Contemporary R&B", "Funk", "Motown", "Gospel", "Soul", "Disco", "Quiet Storm"],
        "Jazz": ["Swing", "Bebop", "Cool Jazz", "Fusion", "Smooth Jazz", "Acid Jazz", "Free Jazz", "Latin Jazz", "Jazz Manouche", "Hard Bop", "Spiritual Jazz", "Gypsy Jazz"],
        "Classical": ["Baroque", "Romantic", "Cinematic", "Orchestral", "Piano Solo", "Chamber Music", "Opera", "Minimalism", "Avant-Garde", "Neoclassical"],
        "Metal": ["Heavy Metal", "Thrash Metal", "Death Metal", "Black Metal", "Metalcore", "Symphonic Metal", "Doom Metal", "Power Metal", "Nu Metal", "Sludge", "Djent", "Progressive Metalcore"],
        "Turkish Music": [
            "Turkish Pop", "Anadolu Rock", "Arabesque (Arabesk)", "Turkish Folk (THM)",
            "Turkish Classical (TSM)", "Fasıl", "Sufi / Mevlevi", "Belly Dance (Oryantal)", "Halay", "Horon", "Zeybek", "Karadeniz Pop",
            "Ankara Oyun Havası", "Roman Havası", "Mehter Marşı", "Özgün Müzik", "Türkçe Rap",
            "Gazel", "Aşık Tarzı", "Fantazi", "Bozlak", "Uzun Hava", "Arabesque-Rock", "Anadolu Psych"
        ],
        "World Music": [
            "Latin", "Reggae", "Afrobeats", "Bossa Nova", "Flamenco", "Celtic", "Indian Raga", "Bollywood",
            "Klezmer", "Balkan", "Greek Folk (Laïko)", "Persian Traditional", "Japanese Traditional (Gagaku)", "Chinese Traditional", "Ska", "Salsa", "Tango"
        ],
        "Cinematic": [
            "Epic Adventure", "Horror / Suspense", "Sci-Fi / Futuristic", "Historical Drama", "Film Noir", "Cyberpunk", "Steampunk", "Fantasy / Ethereal", "Documentary", "Action / Thriller"
        ]
    },
    moods: [
        "Happy (Mutlu)", "Sad (Üzgün)", "Melancholic (Melankolik)", "Energetic (Enerjik)", "Relaxing (Rahatlatıcı)",
        "Dark (Karanlık)", "Epic (Epik)", "Romantic (Romantik)", "Uplifting (Yükseltici)", "Mysterious (Gizemli)",
        "Aggressive (Agresif)", "Chill (Sakin)", "Nostalgic (Nostaljik)", "Dreamy (Rüya Gibi)", "Hopeful (Umutlu)",
        "Sentimental (Duygusal)", "Ethereal (Eterik)", "Groovy (Hareketli)", "Intense (Yoğun)", "Playful (Oyunbaz)",
        "Dramatic (Dramatik)", "Elegant (Zarif)", "Psychedelic (Psikedelik)", "Suspenseful (Gerilimli)"
    ],
    tempos: [
        "Slow (60-80 BPM)", "Medium (90-110 BPM)", "Fast (120-140 BPM)", "Very Fast (150+ BPM)",
        "Adagio", "Andante", "Moderato", "Allegro", "Presto"
    ],
    timeSignatures: [
        "4/4", "3/4", "2/4", "6/8", "12/8", "5/8", "7/8", "9/8", "10/8", "Free Time"
    ],
    westernKeys: {
        "Major Keys": [
            "C Major", "C# Major", "D Major", "Eb Major", "E Major", "F Major", "F# Major", "G Major", "Ab Major", "A Major", "Bb Major", "B Major"
        ],
        "Minor Keys": [
            "C Minor", "C# Minor", "D Minor", "Eb Minor", "E Minor", "F Minor", "F# Minor", "G Minor", "Ab Minor", "A Minor", "Bb Minor", "B Minor"
        ],
        "Modes": [
            "Dorian", "Phrygian", "Lydian", "Mixolydian", "Locrian", "Aeolian"
        ],
        "Other Scales": [
            "Major Pentatonic", "Minor Pentatonic", "Blues Scale", "Chromatic Scale", "Whole Tone Scale", "Melodic Minor", "Harmonic Minor"
        ]
    },
    turkishMakams: {
        "Ana Makamlar": [
            { value: "Makam Rast", label: "Rast" },
            { value: "Makam Uşşak", label: "Uşşak" },
            { value: "Makam Hicaz", label: "Hicaz" },
            { value: "Makam Hüseyni", label: "Hüseyni" },
            { value: "Makam Neva", label: "Neva" },
            { value: "Makam Çargah", label: "Çargah" },
            { value: "Makam Buselik", label: "Buselik" },
            { value: "Makam Kürdi", label: "Kürdi" }
        ],
        "Şed Makamlar": [
            { value: "Makam Nihavend", label: "Nihavend" },
            { value: "Makam Kürdilihicazkar", label: "Kürdilihicazkar" },
            { value: "Makam Hicazkar", label: "Hicazkar" },
            { value: "Makam Acemaşiran", label: "Acemaşiran" },
            { value: "Makam Mahur", label: "Mahur" },
            { value: "Makam Evc", label: "Evc" },
            { value: "Makam Irak", label: "Irak" },
            { value: "Makam Segah (Şed)", label: "Segah (Şed)" }
        ],
        "Mürekkep Makamlar": [
            { value: "Makam Segah", label: "Segah" },
            { value: "Makam Hüzzam", label: "Hüzzam" },
            { value: "Makam Saba", label: "Saba" },
            { value: "Makam Karcığar", label: "Karcığar" },
            { value: "Makam Nikriz", label: "Nikriz" },
            { value: "Makam Ferahfeza", label: "Ferahfeza" },
            { value: "Makam Suzinak", label: "Suzinak" },
            { value: "Makam Bestenigar", label: "Bestenigar" },
            { value: "Makam Acemkürdi", label: "Acemkürdi" }
        ],
        "Diğer Makamlar": [
            { value: "Makam Bayati", label: "Bayati" },
            { value: "Makam Isfahan", label: "Isfahan" },
            { value: "Makam Muhayyer", label: "Muhayyer" },
            { value: "Makam Tahir", label: "Tahir" },
            { value: "Makam Gerdaniye", label: "Gerdaniye" },
            { value: "Makam Hisar", label: "Hisar" },
            { value: "Makam Pençgah", label: "Pençgah" },
            { value: "Makam Yegah", label: "Yegah" },
            { value: "Makam Zavil", label: "Zavil" }
        ]
    },
    vocals: [
        { value: "Male Vocals", label: "Male Vocals (Erkek Vokal)" },
        { value: "Female Vocals", label: "Female Vocals (Kadın Vokal)" },
        { value: "Child Vocals", label: "Child Vocals (Çocuk Vokal)" },
        { value: "Duet", label: "Duet (Düet)" },
        { value: "Choir", label: "Choir (Koro)" },
        { value: "Instrumental (No Vocals)", label: "Instrumental (Enstrümantal - Vokal Yok)" },
        { value: "Whispering", label: "Whispering (Fısıltı)" },
        { value: "Screaming", label: "Screaming (Çığlık/Scream)" },
        { value: "Autotune", label: "Autotune" },
        { value: "Operatic", label: "Operatic (Opera)" },
        { value: "Gregorian Chant", label: "Gregorian Chant (Gregoryen İlahisi)" },
        { value: "Spoken Word", label: "Spoken Word (Konuşma)" },
        { value: "Rap Vocals", label: "Rap Vocals (Rap)" }
    ],
    vocalNuances: [
        "Breathy", "Raspy", "Belting", "Falsetto", "Vibrato", "Melismatic", "Guttural", "Soft", "Powerful",
        "Emotional", "Robotic", "Ethereal", "Harmonized", "Backing Vocals", "Ad-libs",
        "Heavy Autotune", "Vocoder", "Talkbox", "Pitch Correction"
    ],
    mixStyles: [
        "Lo-Fi", "Hi-Fi", "Warm", "Bright", "Punchy", "Compressed", "Wide Stereo", "Mono",
        "Reverb-heavy", "Dry", "Distorted", "Clean", "Radio Filter", "Vinyl Crackle", "Tape Saturation"
    ],
    techniques: [
        "Arpeggio", "Staccato", "Legato", "Muted", "Palm Mute", "Slide", "Fingerstyle", "Slap Bass",
        "Distorted", "Tremolo", "Pizzicato", "Glissando", "Hammer-on", "Pull-off", "Tapping", "Sweep Picking"
    ],
    productionStyles: [
        "Raw", "Polished", "Lo-Fi", "Vintage", "Modern", "Cinematic", "Live", "Studio", "Underground",
        "Acoustic", "Electronic", "Experimental", "Minimalist", "Maximalist"
    ],
    structures: [
        "Intro-Verse-Chorus-Outro", "Verse-Chorus-Verse-Chorus", "Instrumental Intro", "AABA Form",
        "Rondo", "Free Form", "Verse-Chorus-Bridge-Chorus", "Through-Composed"
    ],
    dynamicFlows: [
        "Slow Build (Yavaş Yükseliş)", "Explosive Start (Patlayıcı Başlangıç)", "Steady Groove (Sabit Ritim)",
        "Minimalist (Sade)", "Complex Layers (Karmaşık Katmanlar)", "Drop at 0:30 (0:30'da Düşüş)",
        "Fade In (Yavaşça Gir)", "Fade Out (Yavaşça Bitir)", "Constant Energy (Sürekli Enerji)",
        "Dynamic Swells (Dinamik Dalgalanmalar)"
    ],
    instruments: [
        "Piano", "Guitar", "Electric Guitar", "Bass", "Drums", "Synthesizer", "Violin", "Cello", "String Section",
        "Saxophone", "Trumpet", "Flute", "Acoustic Guitar", "Oud", "Kanun", "Baglama", "Clarinet",
        "808 Bass", "Darbuka", "Ney", "Kemenche", "Zurna", "Cümbüş", "Tanbur", "Qanun", "Sitar", "Koto",
        "Fretless Bass", "Ukulele", "Oboe"
    ],
    stringTechniques: [
        "Pizzicato", "Spiccato", "Tremolo", "Legato", "Staccato", "Col Legno", "Sul Ponticello", "Sul Tasto",
        "Harmonics", "Double Stop", "Vibrato", "Glissando", "Marcato", "Detache", "Martelé"
    ],
    guitarTechniques: [
        "Strumming (Ritim)", "Arpeggio (Arpej)", "Fingerstyle", "Picking", "Hybrid Picking", "Sweep Picking",
        "Alternate Picking", "Economy Picking", "Palm Mute (Mute)", "Slide", "Bending", "Vibrato",
        "Hammer-on", "Pull-off", "Tapping", "Harmonics (Natural/Pinch)", "Tremolo Picking", "Travis Picking",
        "Wah-Wah Effect"
    ],
    guitarEffects: [
        "Clean Tone (Temiz)", "Distortion (Sert/Sär)", "Overdrive", "Fuzz", "Chorus", "Flanger", "Phaser",
        "Delay (Yankı)", "Reverb (Derinlik)", "Tremolo", "Vibrato", "Octaver", "Compressor", "Rotary Speaker", "Lo-Fi Pedal"
    ],
    eras: [
        "1950s (Vintage)", "1960s (Psychedelic)", "1970s (Classic)", "1980s (Retro Synth)", "1990s (Grunge/Pop)",
        "2000s (Digital)", "Modern (Current)", "Futuristic", "Cyberpunk Era", "Ancient/Medieval"
    ],
    venues: [
        "Studio (Clean)", "Live (Concert)", "Small Club", "Stadium (Huge)", "Church (Reverb)", "Bedroom (Lo-Fi)",
        "Open Air / Festival", "Basement", "Grand Hall"
    ]
};

// Quick Presets
const quickPresets = {
    "Arabesk": {
        genre: "Turkish Music",
        subgenre: "Arabesque (Arabesk)",
        mood: "Emotional (Duygusal)",
        instruments: ["Violin", "Oud", "Darbuka", "String Section"],
        icon: "🎻"
    },
    "Türk Pop": {
        genre: "Turkish Music",
        subgenre: "Turkish Pop",
        mood: "Energetic (Enerjik)",
        instruments: ["Synthesizer", "Electric Guitar", "Drums", "Bass"],
        icon: "🎤"
    },
    "90'lar Pop": {
        genre: "Turkish Music",
        subgenre: "Turkish Pop",
        mood: "Nostalgic (Nostaljik)",
        instruments: ["Synthesizer", "Saxophone", "Drums"],
        icon: "📼"
    },
    "Slow Pop": {
        genre: "Turkish Music",
        subgenre: "Turkish Pop",
        mood: "Romantic (Romantik)",
        instruments: ["Piano", "String Section", "Acoustic Guitar"],
        tempo: "Slow (60-80 BPM)",
        icon: "🎹"
    },
    "Halk Müziği": {
        genre: "Turkish Music",
        subgenre: "Turkish Folk (THM)",
        mood: "Sentimental (Duygusal)",
        instruments: ["Baglama", "Ney", "Darbuka"],
        icon: "🌾"
    },
    "Ankara Havası": {
        genre: "Turkish Music",
        subgenre: "Ankara Oyun Havası",
        mood: "Energetic (Enerjik)",
        instruments: ["Baglama", "Electric Baglama", "Spoons (Kaşık)", "Darbuka"],
        tempo: "Fast (120-140 BPM)",
        icon: "💃"
    },
    "Karadeniz": {
        genre: "Turkish Music",
        subgenre: "Karadeniz Pop",
        mood: "Energetic (Enerjik)",
        instruments: ["Kemenche", "Tulum", "Drums", "Bass"],
        tempo: "Fast (120-140 BPM)",
        icon: "🌊"
    },
    "Anadolu Rock": {
        genre: "Turkish Music",
        subgenre: "Turkish Rock (Anadolu Rock)",
        mood: "Powerful (Güçlü)",
        instruments: ["Electric Guitar", "Baglama", "Drums", "Bass"],
        icon: "🎸"
    },
    "Blues Rock": {
        genre: "Blues",
        subgenre: "Blues Rock",
        mood: "Melancholic (Melankolik)",
        instruments: ["Electric Guitar", "Bass", "Drums", "Harmonica"],
        tempo: "Medium (90-110 BPM)",
        icon: "🎷"
    },
    "Türkçe Rap": {
        genre: "Turkish Music",
        subgenre: "Türkçe Rap",
        mood: "Aggressive (Agresif)",
        instruments: ["808 Bass", "Synthesizer", "Drums"],
        icon: "🧢"
    },
    "TSM (Sanat)": {
        genre: "Turkish Music",
        subgenre: "Turkish Classical (TSM)",
        mood: "Elegant (Zarif)",
        instruments: ["Kanun", "Oud", "Ney", "Tanbur", "Violin"],
        icon: "🎼"
    },
    "Fasıl": {
        genre: "Turkish Music",
        subgenre: "Fasıl",
        mood: "Joyful (Neşeli)",
        instruments: ["Clarinet", "Violin", "Kanun", "Darbuka", "Riq"],
        icon: "🍽️"
    },
    "Sufi / Ney": {
        genre: "Turkish Music",
        subgenre: "Sufi / Mevlevi",
        mood: "Spiritual (Ruhani)",
        instruments: ["Ney", "Kudum", "Tanbur"],
        tempo: "Slow (60-80 BPM)",
        icon: "🕌"
    },
    "Roman Havası": {
        genre: "Turkish Music",
        subgenre: "Roman Havası",
        mood: "Energetic (Enerjik)",
        instruments: ["Clarinet", "Violin", "Darbuka", "Cümbüş"],
        tempo: "9/8",
        icon: "🎷"
    },
    "Mehter": {
        genre: "Turkish Music",
        subgenre: "Mehter Marşı",
        mood: "Epic (Epik)",
        instruments: ["Davul", "Zurna", "Cymbals"],
        icon: "🥁"
    },
    "Özgün Müzik": {
        genre: "Turkish Music",
        subgenre: "Özgün Müzik",
        mood: "Melancholic (Melankolik)",
        instruments: ["Baglama", "Guitar", "Flute"],
        icon: "✊"
    },
    "Deep House TR": {
        genre: "Electronic",
        subgenre: "Deep House",
        mood: "Chill (Sakin)",
        instruments: ["Synthesizer", "Ney", "Kanun", "Deep Bass"],
        icon: "🎧"
    },
    "Lo-Fi Chill": {
        genre: "Hip Hop & Rap",
        subgenre: "Lo-Fi Hip Hop",
        mood: "Relaxing (Rahatlatıcı)",
        instruments: ["Piano", "Vinyl Crackle", "Drums"],
        tempo: "Slow (60-80 BPM)",
        icon: "☕"
    },
    "Cinematic": {
        genre: "Classical",
        subgenre: "Cinematic",
        mood: "Epic (Epik)",
        instruments: ["Orchestra", "Piano", "Drums"],
        icon: "🎬"
    },
    "Synthwave": {
        genre: "Electronic",
        subgenre: "Synthwave",
        mood: "Nostalgic (Nostaljik)",
        instruments: ["Synthesizer", "Drum Machine"],
        icon: "🌇"
    },
    "Jazz Fusion": {
        genre: "Jazz",
        subgenre: "Fusion",
        mood: "Groovy (Hareketli)",
        instruments: ["Saxophone", "Electric Piano", "Bass"],
        icon: "🎷"
    },
    "Damar (Arabesk)": {
        genre: "Turkish Music",
        subgenre: "Arabesque (Arabesk)",
        mood: "Sad (Üzgün)",
        instruments: ["Violin", "Baglama", "String Section"],
        icon: "💔"
    },
    "Eurovision TR": {
        genre: "Pop",
        subgenre: "Turkish Pop",
        mood: "Energetic (Enerjik)",
        instruments: ["Synthesizer", "Violin", "Darbuka", "Drums"],
        tempo: "Fast (120-140 BPM)",
        icon: "🏆"
    },
    "Halay (Düğün)": {
        genre: "Turkish Music",
        subgenre: "Halay",
        mood: "Energetic (Enerjik)",
        instruments: ["Zurna", "Davul", "Electric Baglama"],
        tempo: "Very Fast (150+ BPM)",
        icon: "👯"
    },
    "Horon (Remix)": {
        genre: "Turkish Music",
        subgenre: "Horon",
        mood: "Energetic (Enerjik)",
        instruments: ["Kemenche", "Synthesizer", "Drum Machine"],
        tempo: "Very Fast (150+ BPM)",
        icon: "⚡"
    },
    "Anadolu Psych": {
        genre: "Turkish Music",
        subgenre: "Turkish Rock (Anadolu Rock)",
        mood: "Psychedelic (Psikedelik)",
        instruments: ["Electric Baglama", "Moog Synth", "Bass"],
        icon: "🌈"
    },
    "Oriental House": {
        genre: "Electronic",
        subgenre: "Deep House",
        mood: "Energetic (Enerjik)",
        instruments: ["Synthesizer", "Clarinet", "Darbuka", "Bass"],
        icon: "💃"
    },
    "Protest Rap": {
        genre: "Hip Hop & Rap",
        subgenre: "Türkçe Rap",
        mood: "Aggressive (Agresif)",
        instruments: ["Drums", "Bass", "Piano"],
        icon: "🎤"
    },
    "Taverna": {
        genre: "Turkish Music",
        subgenre: "Fasıl",
        mood: "Nostalgic (Nostaljik)",
        instruments: ["Synthesizer", "Piano", "Drum Machine"],
        icon: "🎹"
    },
    "Uzun Hava": {
        genre: "Turkish Music",
        subgenre: "Turkish Folk (THM)",
        mood: "Melancholic (Melankolik)",
        instruments: ["Baglama", "Ney"],
        tempo: "Free Time",
        icon: "🏔️"
    }
};

// Trending Prompts Data
const trendingPrompts = [
    {
        title: "Epic Trailer",
        description: "Cinematic, Orchestral, Powerful",
        icon: "🎬",
        state: {
            genre: "Classical",
            subgenre: "Cinematic",
            mood: "Epic (Epik)",
            instruments: ["Orchestra", "Piano", "Drums", "Choir", "String Section"],
            tempo: "Slow (60-80 BPM)",
            customDesc: "Best Quality, Masterpiece, Hollywood Sound"
        }
    },
    {
        title: "Cyberpunk City",
        description: "Synthwave, Neon, Futuristic",
        icon: "🌃",
        state: {
            genre: "Electronic",
            subgenre: "Synthwave",
            mood: "Dreamy (Rüya Gibi)",
            instruments: ["Synthesizer", "Drum Machine", "Bass", "Arpeggiated Synths"],
            tempo: "Medium (90-110 BPM)",
            customDesc: "Futuristic, Neon Atmosphere, Pulsating Bass"
        }
    },
    {
        title: "Anatolian Rock",
        description: "Turkish Rock, Powerful, Electric Baglama",
        icon: "🎸",
        state: {
            genre: "Turkish Music",
            subgenre: "Turkish Rock (Anadolu Rock)",
            mood: "Powerful (Güçlü)",
            instruments: ["Electric Guitar", "Baglama", "Drums", "Bass", "Distorted Riffs"],
            tempo: "Fast (120-140 BPM)",
            customDesc: "Anatolian Spirit, High Energy, Legend"
        }
    },
    {
        title: "Lo-Fi Study",
        description: "Chill, Relaxing, Hip Hop",
        icon: "☕",
        state: {
            genre: "Hip Hop & Rap",
            subgenre: "Lo-Fi Hip Hop",
            mood: "Relaxing (Rahatlatıcı)",
            instruments: ["Piano", "Vinyl Crackle", "Drums", "Bass"],
            tempo: "Slow (60-80 BPM)",
            customDesc: "Cozy, Nostalgic, Background Music"
        }
    },
    {
        title: "Deep House TR",
        description: "Electronic, Deep, Turkish Elements",
        icon: "🎧",
        state: {
            genre: "Electronic",
            subgenre: "Deep House",
            mood: "Chill (Sakin)",
            instruments: ["Synthesizer", "Ney", "Kanun", "Deep Bass"],
            tempo: "Medium (110-125 BPM)",
            customDesc: "Modern Production, Traditional Touch, Club Ready"
        }
    },
    {
        title: "Jazz Cafe",
        description: "Smooth Jazz, Relaxing, Piano",
        icon: "🎷",
        state: {
            genre: "Jazz",
            subgenre: "Smooth Jazz",
            mood: "Relaxing (Rahatlatıcı)",
            instruments: ["Saxophone", "Piano", "Bass", "Brushes"],
            tempo: "Slow (60-80 BPM)",
            customDesc: "Coffee Shop Vibes, Sophisticated, Warm Tone"
        }
    },
    {
        title: "Flamenco Fire",
        description: "Spanish, Acoustic Guitar, Passionate",
        icon: "💃",
        state: {
            genre: "World Music",
            subgenre: "Flamenco",
            mood: "Passionate (Tutkulu)",
            instruments: ["Acoustic Guitar", "Percussion", "Hand Claps", "Cajon"],
            tempo: "Fast (120-140 BPM)",
            customDesc: "Andalusian Spirit, Virtuoso Guitar, Emotional Vocals"
        }
    },
    {
        title: "Psytrance Trip",
        description: "High Energy, Trippy, Fast",
        icon: "🍄",
        state: {
            genre: "Electronic",
            subgenre: "Psytrance",
            mood: "Intense (Yoğun)",
            instruments: ["Synthesizer", "Bass", "Drum Machine", "FX"],
            tempo: "Fast (135-150 BPM)",
            customDesc: "Mind Bending, Alien Sounds, Driving Bassline"
        }
    },
    {
        title: "Reggae Vibes",
        description: "Chill, Off-beat, Relaxed",
        icon: "🇯🇲",
        state: {
            genre: "World Music",
            subgenre: "Reggae",
            mood: "Chill (Sakin)",
            instruments: ["Electric Guitar", "Bass", "Drums", "Organ"],
            tempo: "Slow (60-80 BPM)",
            customDesc: "Positive Vibrations, Dub Effects, Deep Bass"
        }
    },
    {
        title: "Epic Choir",
        description: "Classical, Choir, Dramatic",
        icon: "⛪",
        state: {
            genre: "Classical",
            subgenre: "Opera",
            mood: "Epic (Epik)",
            instruments: ["Choir", "Orchestra", "Organ", "Timpani"],
            tempo: "Slow (60-80 BPM)",
            customDesc: "Massive Sound, Angelic Vocals, Divine Atmosphere"
        }
    },
    {
        title: "K-Pop Hit",
        description: "Pop, Energetic, Group Vocals",
        icon: "🎀",
        state: {
            genre: "Pop",
            subgenre: "K-Pop",
            mood: "Energetic (Enerjik)",
            instruments: ["Synthesizer", "Drums", "Bass", "Group Vocals"],
            tempo: "Fast (120-140 BPM)",
            customDesc: "Catchy Hook, Polished Production, Dance Break"
        }
    },
    {
        title: "Blues Legend",
        description: "Blues, Emotional, Electric Guitar",
        icon: "🎸",
        state: {
            genre: "Rock",
            subgenre: "Blues Rock",
            mood: "Emotional (Duygusal)",
            instruments: ["Electric Guitar", "Bass", "Drums", "Harmonica"],
            tempo: "Slow (60-80 BPM)",
            customDesc: "Soulful Solos, Gritty Vocals, 12 Bar Blues"
        }
    },
    {
        title: "Metal Fury",
        description: "Heavy Metal, Aggressive, Fast",
        icon: "🤘",
        state: {
            genre: "Metal",
            subgenre: "Heavy Metal",
            mood: "Aggressive (Agresif)",
            instruments: ["Electric Guitar", "Bass", "Drums", "Distortion"],
            tempo: "Fast (140-180 BPM)",
            customDesc: "Double Kick, Shredding Solos, Headbanging"
        }
    },
    {
        title: "Bossa Nova",
        description: "Brazilian, Smooth, Acoustic",
        icon: "🌴",
        state: {
            genre: "World Music",
            subgenre: "Bossa Nova",
            mood: "Relaxing (Rahatlatıcı)",
            instruments: ["Acoustic Guitar", "Percussion", "Piano"],
            tempo: "Slow (60-80 BPM)",
            customDesc: "Smooth Rhythms, Gentle Vocals, Beach Vibes"
        }
    },
    {
        title: "Cinematic Thriller",
        description: "Suspense, Dark, Dynamic, 70-160 BPM",
        icon: "🔪",
        state: {
            genre: "Classical",
            subgenre: "Cinematic",
            mood: "Suspenseful (Gerilimli)",
            instruments: ["String Section", "Synthesizer", "Drums", "Deep Bass"],
            tempo: "70 BPM (accelerating to 160 BPM then decaying)",
            customDesc: "Anxious and Suspenseful (building to Violent peak), F Minor (highly Dissonant/Atonal), Deep String Section (tremolo violas, sustained cellos), Ominous Sub-Bass Drones, Heavy Cinematic Percussion (Taiko/Impact SFX), High-Frequency Synth Pads, Instrumental, Highly Dynamic Production, Cold Sound Design"
        }
    },
    {
        title: "Cinematic World, Tension Score",
        description: "Chase, Pursuit, Adrenaline, Night Drive",
        icon: "🚔",
        state: {
            genre: "Classical",
            subgenre: "Cinematic",
            mood: "Suspenseful (Gerilimli)",
            key: "F Minor",
            instruments: ["Baglama", "Frame Drum", "Synthesizer", "String Section", "Bass"],
            tempo: "92 BPM",
            customDesc: "Chase, Pursuit, Adrenaline, Night Drive, Rhythmic build, constant motion, driving kopuz arpeggios, heartbeat-like frame drum, deep sustained cinematic bassline"
        }
    },
    {
        title: "Cinematic Hybrid Chase Tension",
        description: "Dark Action Soundtrack, Night Pursuit",
        icon: "🌑",
        state: {
            genre: "Classical",
            subgenre: "Cinematic",
            mood: "Dark (Karanlık)",
            key: "F Minor",
            instruments: ["Long Reverb Pad", "Sub Bass", "Strings", "Frame Drum"],
            tempo: "Free Time",
            customDesc: "[Cinematic Hybrid Chase Tension, Dark Action Soundtrack] [Mood: Night Pursuit, Predator Closing In] [Exact 2:50] [0:00-0:30] Long icy Fm pads + 28 Hz deep sub, distant panicked breaths & footsteps, single low drum 'thud' at 0:00 & 0:15 only [0:30-1:00] Pads swell dissonant, sub pulses faster, breaths heavier, low drum at 0:45, short ud-like string stab 4 sec at 0:55 then vanishes [1:00-1:30] Sub heavier, low drum 'thud' at 1:00 & 1:15, tremolo strings start low → slow rise (12 sec) [1:30-2:00] Breaths turn to gasps, low drum at 1:45, quick sharp string riff 4 sec at 1:55, tremolo strings climb higher [2:00-2:30] Tremolo strings big low→high swell (18 sec), sub roars, low drum at 2:00 & 2:15, one last nervous string stab 3 sec at 2:25 [2:30-2:50] Everything pulls back hard, only sub + faint pads remain, final low drum 'thud' at 2:35, last 8 sec total silence [No fixed tempo, no loops, no steady rhythm] [Instruments: long reverb pad]"
        }
    }
];

// DOM Elements
const genreSelect = document.getElementById('genre');
const subgenreSelect = document.getElementById('subgenre');
const moodSelect = document.getElementById('mood');
const tempoInput = document.getElementById('tempo');
const tempoDatalist = document.getElementById('tempo-options');
const timeSigSelect = document.getElementById('time-sig');
const keySelect = document.getElementById('key');
const makamSelect = document.getElementById('makam'); // New
const vocalsSelect = document.getElementById('vocals');
const vocalNuancesSelect = document.getElementById('vocal-nuances');

const mixSettingsSelect = document.getElementById('mix-settings');
const stringTechniquesSelect = document.getElementById('string-techniques'); // New
const guitarTechniquesSelect = document.getElementById('guitar-techniques'); // New
const guitarEffectsSelect = document.getElementById('guitar-effects'); // New
const eraSelect = document.getElementById('era'); // New
const venueSelect = document.getElementById('venue'); // New
const productionStyleSelect = document.getElementById('production-style'); // New
const leadInstrumentSelect = document.getElementById('lead-instrument'); // New
const songStructureSelect = document.getElementById('song-structure'); // New
const dynamicFlowSelect = document.getElementById('dynamic-flow'); // New
const platformStyleSelect = document.getElementById('platform-style');
const suggestionsContainer = document.getElementById('suggestions-container'); // New
const trendingContainer = document.getElementById('trending-container'); // New
const instrumentsContainer = document.getElementById('instruments-container');
const techniquesContainer = document.getElementById('techniques-container');
const customInstInput = document.getElementById('custom-inst-input');
const addInstBtn = document.getElementById('add-inst-btn');
const customDescInput = document.getElementById('custom-desc');
const lyricsTextarea = document.getElementById('lyrics-textarea');
const formatLyricsBtn = document.getElementById('format-lyrics-btn');
const lyricsTrafficSelect = document.getElementById('lyrics-traffic');
const insertTrafficBtn = document.getElementById('insert-traffic-btn');
const lyricsElementSelect = document.getElementById('lyrics-element');
const insertElementBtn = document.getElementById('insert-element-btn');
const lyricsInstrumentInput = document.getElementById('lyrics-instrument-input');
const insertLyricsInstrumentBtn = document.getElementById('insert-lyrics-instrument-btn');
const editorTextarea = document.getElementById('editor-textarea'); // New
const copyBtn = document.getElementById('copy-btn');
const copyPlatformLabel = document.getElementById('copy-platform-label');
const saveFavoriteBtn = document.getElementById('save-favorite-btn');
const clearBtn = document.getElementById('clear-btn');
const undoBtn = document.getElementById('undo-btn'); // New
const redoBtn = document.getElementById('redo-btn'); // New
const copyFeedback = document.getElementById('copy-feedback');
const charCountElement = document.getElementById('char-count');
const platformModeStatus = document.getElementById('platform-mode-status');
const englishModeStatus = document.getElementById('english-mode-status');
const qualityPanel = document.getElementById('quality-panel');
const promptHistoryList = document.getElementById('prompt-history-list');
const favoritesList = document.getElementById('favorites-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// Magic Tool Buttons
const enhanceBtn = document.getElementById('enhance-btn');
const magicQualityBtn = document.getElementById('magic-quality-btn');
const magicVibeBtn = document.getElementById('magic-vibe-btn');
const shortenBtn = document.getElementById('shorten-btn');
const englishModeBtn = document.getElementById('english-mode-btn');
const qualityCheckBtn = document.getElementById('quality-check-btn');

// State
let selectedInstruments = new Set();
let selectedTechniques = new Set();
let englishOutputMode = localStorage.getItem('bisgen-english-mode') === 'true';
let outputPlatform = localStorage.getItem('bisgen-output-platform') || 'suno';
let promptHistory = loadStoredArray('bisgen-prompt-history');
let favoritePrompts = loadStoredArray('bisgen-favorite-prompts');
let historySaveTimer = null;
// History State
let historyStack = [];
let historyIndex = -1;
let isProgrammaticChange = false; // Flag to prevent history push during restore/presets

const platformProfiles = {
    suno: {
        label: "Suno",
        copyLabel: "Suno İçin Kopyala"
    },
    udio: {
        label: "Udio",
        copyLabel: "Udio İçin Kopyala"
    },
    flowmusic: {
        label: "Flowmusic",
        copyLabel: "Flowmusic İçin Kopyala"
    },
    eita: {
        label: "Eita",
        copyLabel: "Eita İçin Kopyala"
    }
};

const lyricsTrafficTemplates = {
    pop: `[Intro]\n\n[Verse]\n\n[Pre-Chorus]\n\n[Chorus]\n\n[Verse 2]\n\n[Chorus]\n\n[Bridge]\n\n[Final Chorus]\n\n[Outro]`,
    rap: `[Intro]\n\n[Verse]\n\n[Hook]\n\n[Verse 2]\n\n[Hook]\n\n[Bridge]\n\n[Outro]`,
    cinematic: `[Intro]\n\n[Build]\n\n[Verse]\n\n[Chorus]\n\n[Climax]\n\n[Outro]\n\n[Fade Out]`,
    instrumental: `[Intro]\n\n[Instrumental Break]\n\n[Solo]\n\n[Build]\n\n[Final Instrumental]\n\n[Outro]\n\n[Fade Out]`,
    short: `[Verse]\n\n[Chorus]\n\n[Outro]`
};

// Initialization
function init() {
    populateDropdowns();
    renderQuickSuggestions();
    renderTrendingPrompts(); // New
    renderPromptHistory();
    renderFavorites();
    updatePlatformUI();
    updateEnglishModeUI();
    setupEventListeners();
    pushState(); // Initial state
    updatePrompt();
}

// Render Quick Suggestions
function renderQuickSuggestions() {
    suggestionsContainer.innerHTML = '';
    Object.keys(quickPresets).forEach(key => {
        const preset = quickPresets[key];
        const chip = document.createElement('div');
        chip.className = 'suggestion-chip';
        chip.innerHTML = `<span>${preset.icon}</span> ${key}`;
        chip.addEventListener('click', () => applyPreset(key));
        suggestionsContainer.appendChild(chip);
    });
}

// Apply Preset
function applyPreset(presetName) {
    isProgrammaticChange = true;
    const preset = quickPresets[presetName];
    if (!preset) {
        isProgrammaticChange = false;
        return;
    }

    // 1. Set Genre
    genreSelect.value = preset.genre;
    handleGenreChange();

    // 2. Set Subgenre
    const subOptions = Array.from(subgenreSelect.options).map(o => o.value);
    if (subOptions.includes(preset.subgenre)) {
        subgenreSelect.value = preset.subgenre;
    }

    // 3. Set Mood
    if (preset.mood) moodSelect.value = preset.mood;

    // 4. Set Tempo
    if (preset.tempo) tempoInput.value = preset.tempo;

    // 5. Set Instruments
    selectedInstruments.clear();
    document.querySelectorAll('#instruments-container .tag.selected').forEach(t => t.classList.remove('selected'));

    if (preset.instruments) {
        preset.instruments.forEach(inst => {
            let tag = Array.from(instrumentsContainer.children).find(t => t.dataset.value === inst);
            if (!tag) {
                createInstrumentTag(inst);
                tag = instrumentsContainer.lastChild;
            }
            // Manually toggle without triggering pushState (since we are in programmatic block)
            // But toggleInstrument calls pushState if !isProgrammaticChange.
            // So we can just call toggleInstrument.
            toggleInstrument(tag);
        });
    }

    // Animation feedback
    const chip = Array.from(suggestionsContainer.children).find(c => c.textContent.includes(presetName));
    if (chip) {
        chip.classList.add('sparkle');
        setTimeout(() => chip.classList.remove('sparkle'), 500);
    }

    updatePrompt();
    isProgrammaticChange = false;
    pushState(); // Save state after preset apply
}

// Render Trending Prompts
function renderTrendingPrompts() {
    trendingContainer.innerHTML = '';
    trendingPrompts.forEach((prompt, index) => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.innerHTML = `
            <div class="prompt-card-icon">${prompt.icon}</div>
            <div class="prompt-card-title">${prompt.title}</div>
            <div class="prompt-card-desc">${prompt.description}</div>
        `;
        card.addEventListener('click', () => loadTrendingPrompt(index));
        trendingContainer.appendChild(card);
    });
}

// Load Trending Prompt
function loadTrendingPrompt(index) {
    const promptData = trendingPrompts[index];
    if (!promptData) return;

    // Create a full state object merging defaults with the prompt data
    // We need a base state to ensure all fields are present
    const baseState = {
        genre: "", subgenre: "", mood: "", tempo: "", timeSig: "", key: "", makam: "",
        vocals: "", vocalNuances: "", mixSettings: "", productionStyle: "",
        leadInstrument: "", songStructure: "", dynamicFlow: "", customDesc: "",
        instruments: [], techniques: []
    };

    const newState = { ...baseState, ...promptData.state };

    // Apply state
    applyStateToDOM(newState);

    // Visual feedback
    const card = trendingContainer.children[index];
    if (card) {
        card.classList.add('sparkle');
        setTimeout(() => card.classList.remove('sparkle'), 500);
    }

    pushState(); // Save to history
}

// Populate Dropdowns
function populateDropdowns() {
    // Genres
    Object.keys(sunoData.genres).forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });

    // Moods
    sunoData.moods.forEach(mood => {
        const option = document.createElement('option');
        option.value = mood;
        option.textContent = mood;
        moodSelect.appendChild(option);
    });

    // Tempos (Datalist)
    sunoData.tempos.forEach(tempo => {
        const option = document.createElement('option');
        option.value = tempo;
        tempoDatalist.appendChild(option);
    });

    // Time Signatures
    sunoData.timeSignatures.forEach(sig => {
        const option = document.createElement('option');
        option.value = sig;
        option.textContent = sig;
        timeSigSelect.appendChild(option);
    });

    // Western Keys
    Object.keys(sunoData.westernKeys).forEach(category => {
        const group = document.createElement('optgroup');
        group.label = category;
        sunoData.westernKeys[category].forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            group.appendChild(option);
        });
        keySelect.appendChild(group);
    });

    // Turkish Makams (with Optgroups)
    Object.keys(sunoData.turkishMakams).forEach(category => {
        const group = document.createElement('optgroup');
        group.label = category;
        sunoData.turkishMakams[category].forEach(makam => {
            const option = document.createElement('option');
            option.value = makam.value;
            option.textContent = makam.label;
            group.appendChild(option);
        });
        makamSelect.appendChild(group);
    });

    // Vocals
    // Vocals
    sunoData.vocals.forEach(vocal => {
        const option = document.createElement('option');
        option.value = vocal.value;
        option.textContent = vocal.label;
        vocalsSelect.appendChild(option);
    });

    // Vocal Nuances
    sunoData.vocalNuances.forEach(nuance => {
        const option = document.createElement('option');
        option.value = nuance;
        option.textContent = nuance;
        vocalNuancesSelect.appendChild(option);
    });

    // Mix Settings
    sunoData.mixStyles.forEach(style => {
        const option = document.createElement('option');
        option.value = style;
        option.textContent = style;
        mixSettingsSelect.appendChild(option);
    });

    // String Techniques
    sunoData.stringTechniques.forEach(tech => {
        const option = document.createElement('option');
        option.value = tech;
        option.textContent = tech;
        stringTechniquesSelect.appendChild(option);
    });

    // Guitar Techniques
    sunoData.guitarTechniques.forEach(tech => {
        const option = document.createElement('option');
        option.value = tech;
        option.textContent = tech;
        guitarTechniquesSelect.appendChild(option);
    });

    // Guitar Effects
    sunoData.guitarEffects.forEach(effect => {
        const option = document.createElement('option');
        option.value = effect;
        option.textContent = effect;
        guitarEffectsSelect.appendChild(option);
    });

    // Eras (New)
    sunoData.eras.forEach(era => {
        const option = document.createElement('option');
        option.value = era;
        option.textContent = era;
        eraSelect.appendChild(option);
    });

    // Venues (New)
    sunoData.venues.forEach(venue => {
        const option = document.createElement('option');
        option.value = venue;
        option.textContent = venue;
        venueSelect.appendChild(option);
    });

    // Production Styles
    sunoData.productionStyles.forEach(style => {
        const option = document.createElement('option');
        option.value = style;
        option.textContent = style;
        productionStyleSelect.appendChild(option);
    });

    // Song Structures
    sunoData.structures.forEach(struct => {
        const option = document.createElement('option');
        option.value = struct;
        option.textContent = struct;
        songStructureSelect.appendChild(option);
    });

    // Dynamic Flows
    sunoData.dynamicFlows.forEach(flow => {
        const option = document.createElement('option');
        option.value = flow;
        option.textContent = flow;
        dynamicFlowSelect.appendChild(option);
    });

    // Instruments (Tags & Lead Dropdown)
    sunoData.instruments.forEach(inst => {
        createInstrumentTag(inst);

        // Populate Lead Instrument Dropdown
        const option = document.createElement('option');
        option.value = inst;
        option.textContent = inst;
        leadInstrumentSelect.appendChild(option);
    });

    // Techniques (Tags)
    sunoData.techniques.forEach(tech => {
        createTechniqueTag(tech);
    });
}

// Helper: Create Instrument Tag
function createInstrumentTag(name, isSelected = false) {
    const tag = document.createElement('div');
    tag.className = 'tag';
    if (isSelected) tag.classList.add('selected');
    tag.textContent = name;
    tag.dataset.value = name;
    tag.addEventListener('click', () => toggleInstrument(tag));
    instrumentsContainer.appendChild(tag);

    if (isSelected) {
        selectedInstruments.add(name);
    }
}

// Helper: Create Technique Tag
function createTechniqueTag(name) {
    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.textContent = name;
    tag.dataset.value = name;
    tag.addEventListener('click', () => toggleTechnique(tag));
    techniquesContainer.appendChild(tag);
}

// Event Listeners
function setupEventListeners() {
    genreSelect.addEventListener('change', handleGenreChange);
    subgenreSelect.addEventListener('change', updatePrompt);
    moodSelect.addEventListener('change', updatePrompt);
    tempoInput.addEventListener('input', updatePrompt); // Changed event
    timeSigSelect.addEventListener('change', updatePrompt); // New
    keySelect.addEventListener('change', updatePrompt); // New listener
    makamSelect.addEventListener('change', updatePrompt); // New listener
    vocalsSelect.addEventListener('change', updatePrompt);
    vocalNuancesSelect.addEventListener('change', updatePrompt); // New

    mixSettingsSelect.addEventListener('change', updatePrompt); // New
    stringTechniquesSelect.addEventListener('change', updatePrompt); // New
    guitarTechniquesSelect.addEventListener('change', updatePrompt); // New
    guitarEffectsSelect.addEventListener('change', updatePrompt); // New
    eraSelect.addEventListener('change', updatePrompt); // Changed
    venueSelect.addEventListener('change', updatePrompt); // Changed
    productionStyleSelect.addEventListener('change', updatePrompt); // New
    leadInstrumentSelect.addEventListener('change', updatePrompt); // New
    songStructureSelect.addEventListener('change', updatePrompt); // New
    dynamicFlowSelect.addEventListener('change', updatePrompt); // New
    platformStyleSelect.addEventListener('change', handlePlatformChange);
    customDescInput.addEventListener('input', updatePrompt);
    lyricsTextarea.addEventListener('input', updatePrompt);
    formatLyricsBtn.addEventListener('click', formatLyrics);
    insertTrafficBtn.addEventListener('click', insertSelectedTraffic);
    insertElementBtn.addEventListener('click', insertSelectedLyricsElement);
    insertLyricsInstrumentBtn.addEventListener('click', insertLyricsInstrumentCue);
    lyricsInstrumentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') insertLyricsInstrumentCue();
    });

    // Professional Tools Events
    enhanceBtn.addEventListener('click', enhancePrompt);
    magicQualityBtn.addEventListener('click', addQualityTags);
    magicVibeBtn.addEventListener('click', randomizeVibe);
    shortenBtn.addEventListener('click', shortenPrompt);
    englishModeBtn.addEventListener('click', toggleEnglishMode);
    qualityCheckBtn.addEventListener('click', runQualityCheck);

    // Manual Edit Event
    editorTextarea.addEventListener('input', () => {
        if (!isProgrammaticChange) {
            updatePromptMeta();
            schedulePromptHistorySave();
        }
    });

    // Custom Instrument Events
    addInstBtn.addEventListener('click', addCustomInstrument);
    customInstInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addCustomInstrument();
    });

    copyBtn.addEventListener('click', copyToClipboard);
    saveFavoriteBtn.addEventListener('click', saveCurrentFavorite);
    clearBtn.addEventListener('click', clearPrompt);
    undoBtn.addEventListener('click', undo); // New
    redoBtn.addEventListener('click', redo); // New
    clearHistoryBtn.addEventListener('click', clearPromptHistory);

    // History Tracking Events
    const inputs = [
        genreSelect, subgenreSelect, moodSelect, timeSigSelect, keySelect, makamSelect,
        vocalsSelect, vocalNuancesSelect, mixSettingsSelect, productionStyleSelect,
        leadInstrumentSelect, songStructureSelect, dynamicFlowSelect,
        eraSelect, venueSelect,
        tempoInput, customDescInput, lyricsTextarea
    ];

    inputs.forEach(input => {
        input.addEventListener('change', () => {
            if (!isProgrammaticChange) pushState();
        });
    });

    // Theme Switcher Logic
    const themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            setTheme(theme);
        });
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('bisgen-theme') || 'default';
    setTheme(savedTheme);
}

// Set Theme Function
function setTheme(theme) {
    document.body.className = ''; // Reset classes
    if (theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
    }
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    localStorage.setItem('bisgen-theme', theme);
}



// Enhance Prompt (Magic)
function enhancePrompt() {
    isProgrammaticChange = true;
    const selectedGenre = genreSelect.value;
    const selectedSubgenre = subgenreSelect.value;

    // Genre Defaults Mapping
    const genreDefaults = {
        "Pop": { moods: ["Happy (Mutlu)", "Energetic (Enerjik)", "Uplifting (Yükseltici)"], instruments: ["Synthesizer", "Drums", "Bass"] },
        "Rock": { moods: ["Energetic (Enerjik)", "Powerful (Güçlü)", "Aggressive (Agresif)"], instruments: ["Electric Guitar", "Drums", "Bass"] },
        "Blues": { moods: ["Melancholic (Melankolik)", "Nostalgic (Nostaljik)", "Sentimental (Duygusal)"], instruments: ["Electric Guitar", "Bass", "Drums"] },
        "Electronic": { moods: ["Energetic (Enerjik)", "Dreamy (Rüya Gibi)", "Intense (Yoğun)"], instruments: ["Synthesizer", "Drum Machine", "Bass"] },
        "Hip Hop & Rap": { moods: ["Chill (Sakin)", "Aggressive (Agresif)", "Groovy (Hareketli)"], instruments: ["808 Bass", "Synthesizer", "Drums"] },
        "Jazz": { moods: ["Relaxing (Rahatlatıcı)", "Chill (Sakin)", "Playful (Oyunbaz)"], instruments: ["Saxophone", "Piano", "Bass"] },
        "Classical": { moods: ["Epic (Epik)", "Emotional (Duygusal)", "Ethereal (Eterik)"], instruments: ["Piano", "Violin", "String Section"] },
        "Metal": { moods: ["Aggressive (Agresif)", "Dark (Karanlık)", "Intense (Yoğun)"], instruments: ["Electric Guitar", "Drums", "Bass"] },
        "Turkish Music": { moods: ["Emotional (Duygusal)", "Sentimental (Duygusal)", "Joyful (Neşeli)"], instruments: ["Oud", "Kanun", "Darbuka"] },
        "World Music": { moods: ["Happy (Mutlu)", "Relaxing (Rahatlatıcı)", "Spiritual (Ruhani)"], instruments: ["Percussion", "Flute", "Acoustic Guitar"] }
    };

    // Pro Mode: Flavor Text & Elaborations
    const genreFlavorText = {
        "Pop": ["Catchy Hook", "Radio Ready", "Chart Topping", "Memorable Melody", "Pristine Production"],
        "Rock": ["Distorted Riffs", "Heavy Drums", "Amp Saturation", "Guitar Solo", "Anthemic Chorus"],
        "Blues": ["Soulful Guitar Licks", "12-Bar Feel", "Smoky Club Tone", "Expressive Bends", "Vintage Tube Amp"],
        "Electronic": ["Pulsating Bass", "Hypnotic Synth", "Drop", "Build Up", "Immersive Soundscape"],
        "Hip Hop & Rap": ["Heavy 808s", "Tight Flow", "Sampled Loops", "Hard Hitting Kicks"],
        "Jazz": ["Improvisation", "Smooth Brass", "Complex Harmonies", "Walking Bassline"],
        "Classical": ["Orchestral Arrangement", "Virtuoso Performance", "Grand Hall Reverb", "Dynamic Crescendo"],
        "Metal": ["Double Kick Drum", "Shredding Solos", "Guttural Vocals", "Wall of Sound"],
        "Turkish Music": ["Microtonal Melodies", "Traditional Instruments", "Emotional Depth", "Anatolian Spirit", "Mystical Atmosphere"],
        "World Music": ["Exotic Rhythms", "Cultural Fusion", "Organic Textures", "Traditional Vibes"]
    };

    const instrumentElaborations = {
        "Guitar": ["Intricate Guitar Solos", "Clean Strumming", "Distorted Power Chords"],
        "Electric Guitar": ["Screaming Solos", "Crunchy Riffs", "Clean Tone"],
        "Piano": ["Grand Piano", "Melancholic Keys", "Jazz Piano Chords"],
        "Violin": ["Soaring Violin", "Emotional Strings", "Staccato Strings"],
        "Drums": ["Punchy Kick", "Crisp Snares", "Complex Fills"],
        "Synthesizer": ["Analog Warmth", "Futuristic Leads", "Arpeggiated Synths"],
        "Bass": ["Deep Sub Bass", "Funky Slap Bass", "Driving Bassline"],
        "Oud": ["Masterful Oud Improvisation", "Deep Resonant Oud"],
        "Kanun": ["Virtuoso Kanun", "Shimmering Tremolo"],
        "Ney": ["Breathless Ney", "Spiritual Ney Melody"],
        "Baglama": ["Electric Baglama Phrasing", "Traditional Saz"],
        "Darbuka": ["Complex Rhythms", "Sharp Doumbek Hits"]
    };

    // 1. Fill missing Mood
    if (!moodSelect.value) {
        let availableMoods = ["Epic (Epik)", "Uplifting (Yükseltici)", "Energetic (Enerjik)", "Happy (Mutlu)"];
        if (selectedGenre && genreDefaults[selectedGenre]) {
            availableMoods = genreDefaults[selectedGenre].moods;
        }
        const randomMood = availableMoods[Math.floor(Math.random() * availableMoods.length)];
        moodSelect.value = randomMood;
        if (!moodSelect.value) moodSelect.value = "Happy (Mutlu)";
    }

    // 2. Fill missing Instruments (if none selected)
    if (selectedInstruments.size === 0) {
        let instrumentsToAdd = [];
        if (selectedGenre && genreDefaults[selectedGenre]) {
            instrumentsToAdd = genreDefaults[selectedGenre].instruments;
        } else {
            instrumentsToAdd = ["Synthesizer", "Drums", "Bass"];
        }
        instrumentsToAdd.forEach(inst => {
            const tag = Array.from(instrumentsContainer.children).find(t => t.dataset.value === inst);
            if (tag && !tag.classList.contains('selected')) {
                toggleInstrument(tag);
            }
        });
    }

    // 3. Fill missing Structure
    if (!songStructureSelect.value) {
        const structures = ["Intro-Verse-Chorus-Outro", "Verse-Chorus-Verse-Chorus", "Verse-Chorus-Bridge-Chorus"];
        songStructureSelect.value = structures[Math.floor(Math.random() * structures.length)];
    }

    // 4. Fill missing Dynamic Flow
    if (!dynamicFlowSelect.value) {
        const flows = ["Slow Build (Yavaş Yükseliş)", "Steady Groove (Sabit Ritim)", "Dynamic Swells (Dinamik Dalgalanmalar)"];
        dynamicFlowSelect.value = flows[Math.floor(Math.random() * flows.length)];
    }

    // 5. Fill missing Mix/Production
    if (!mixSettingsSelect.value) mixSettingsSelect.value = "Hi-Fi";
    if (!productionStyleSelect.value) productionStyleSelect.value = "Polished";

    // 6. Pro Mode: Add Rich Descriptors to Description
    const currentDesc = customDescInput.value;
    let newTags = [];

    // A. Add Genre Flavor
    if (selectedGenre && genreFlavorText[selectedGenre]) {
        const flavors = genreFlavorText[selectedGenre];
        // Pick 1 random flavor
        const flavor = flavors[Math.floor(Math.random() * flavors.length)];
        if (!currentDesc.includes(flavor)) newTags.push(flavor);
    }

    // B. Elaborate on Instruments
    selectedInstruments.forEach(inst => {
        if (instrumentElaborations[inst]) {
            const elaborations = instrumentElaborations[inst];
            const elaboration = elaborations[Math.floor(Math.random() * elaborations.length)];
            // Only add if not already present and with some probability to avoid clutter
            if (!currentDesc.includes(elaboration) && Math.random() > 0.6) {
                newTags.push(elaboration);
            }
        }
    });

    // C. Add Quality Tags
    const qualityTags = ["Best Quality", "Masterpiece", "Crystal Clear Audio", "Award Winning Production", "High Fidelity"];
    const qualityTag = qualityTags[Math.floor(Math.random() * qualityTags.length)];
    if (!currentDesc.includes(qualityTag) && !newTags.some(t => qualityTags.includes(t))) {
        newTags.push(qualityTag);
    }

    // Append tags
    if (newTags.length > 0) {
        if (currentDesc) {
            customDescInput.value = currentDesc + ", " + newTags.join(", ");
        } else {
            customDescInput.value = newTags.join(", ");
        }
    }

    // 7. Visual Feedback
    if (enhanceBtn) {
        enhanceBtn.classList.add('sparkle');
        setTimeout(() => enhanceBtn.classList.remove('sparkle'), 500);
    }

    updatePrompt();
    isProgrammaticChange = false;
    pushState(); // Save state after enhance
}

// Clear Prompt
function clearPrompt() {
    isProgrammaticChange = true;
    // Reset Selects
    genreSelect.value = "";
    subgenreSelect.innerHTML = '<option value="">Önce Tür Seçiniz...</option>';
    subgenreSelect.disabled = true;
    moodSelect.value = "";
    timeSigSelect.value = "";
    keySelect.value = "";
    makamSelect.value = "";
    vocalsSelect.value = "";
    vocalNuancesSelect.value = "";
    vocalNuancesSelect.value = "";
    mixSettingsSelect.value = "";
    stringTechniquesSelect.value = "";
    guitarTechniquesSelect.value = "";
    guitarEffectsSelect.value = "";
    eraSelect.value = "";
    venueSelect.value = "";
    productionStyleSelect.value = "";
    leadInstrumentSelect.value = "";
    songStructureSelect.value = "";
    dynamicFlowSelect.value = "";
    platformStyleSelect.value = "suno";
    outputPlatform = "suno";
    localStorage.setItem('bisgen-output-platform', outputPlatform);
    updatePlatformUI();

    // Reset Inputs
    tempoInput.value = "";
    customInstInput.value = "";
    customDescInput.value = "";
    lyricsTextarea.value = "";
    lyricsTrafficSelect.value = "";
    lyricsElementSelect.value = "";
    lyricsInstrumentInput.value = "";

    // Reset Sets
    selectedInstruments.clear();
    selectedTechniques.clear();

    // Reset Tags UI
    document.querySelectorAll('.tag.selected').forEach(tag => {
        tag.classList.remove('selected');
    });

    // Update Prompt
    updatePrompt();
    isProgrammaticChange = false;
    pushState(); // Save state after clear
}

// Add Custom Instrument
function addCustomInstrument() {
    const val = customInstInput.value.trim();
    if (val && !selectedInstruments.has(val)) {
        // Check if it already exists in DOM to avoid duplicates visually
        const existingTags = Array.from(instrumentsContainer.children);
        const exists = existingTags.some(tag => tag.dataset.value.toLowerCase() === val.toLowerCase());

        if (!exists) {
            createInstrumentTag(val, true); // Create and select

            // Also add to Lead Instrument dropdown if not there
            const option = document.createElement('option');
            option.value = val;
            option.textContent = val;
            leadInstrumentSelect.appendChild(option);

            customInstInput.value = '';
            updatePrompt();
        } else {
            // If exists but not selected, select it
            const tag = existingTags.find(t => t.dataset.value.toLowerCase() === val.toLowerCase());
            if (tag && !tag.classList.contains('selected')) {
                toggleInstrument(tag);
                customInstInput.value = '';
            }
        }
    }
}

// Handle Genre Change
function handleGenreChange() {
    const selectedGenre = genreSelect.value;
    subgenreSelect.innerHTML = '<option value="">Seçiniz...</option>';

    if (selectedGenre && sunoData.genres[selectedGenre]) {
        subgenreSelect.disabled = false;
        sunoData.genres[selectedGenre].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            subgenreSelect.appendChild(option);
        });
    } else {
        subgenreSelect.disabled = true;
    }
    updatePrompt();
    if (!isProgrammaticChange) pushState();
}

// Toggle Instrument Selection
function toggleInstrument(tagElement) {
    const value = tagElement.dataset.value;
    if (selectedInstruments.has(value)) {
        selectedInstruments.delete(value);
        tagElement.classList.remove('selected');
    } else {
        selectedInstruments.add(value);
        tagElement.classList.add('selected');
    }
    updatePrompt();
    if (!isProgrammaticChange) pushState(); // Save state on manual toggle
}

// Toggle Technique Selection
function toggleTechnique(tagElement) {
    const value = tagElement.dataset.value;
    if (selectedTechniques.has(value)) {
        selectedTechniques.delete(value);
        tagElement.classList.remove('selected');
    } else {
        selectedTechniques.add(value);
        tagElement.classList.add('selected');
    }
    updatePrompt();
    if (!isProgrammaticChange) pushState();
}

function cleanOutputValue(value) {
    return value
        .replace(/\s*\([^)]*\)/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function normalizeForOutput(part) {
    if (!englishOutputMode || !part) return part;

    return part
        .split('\n')
        .map(line => cleanOutputValue(line)
            .replace(/Türkçe Rap/g, 'Turkish Rap')
            .replace(/Türk Pop/g, 'Turkish Pop')
            .replace(/Arabesque/g, 'Arabesque')
            .replace(/Ankara Oyun Havası/g, 'Ankara dance music')
            .replace(/Karadeniz/g, 'Black Sea Turkish folk pop')
            .replace(/Makam /g, 'Turkish maqam ')
            .replace(/Ölçü/g, 'Time Signature'))
        .join('\n');
}

function setEditorPrompt(promptText) {
    const wasProgrammatic = isProgrammaticChange;
    isProgrammaticChange = true;
    editorTextarea.value = promptText || "";
    isProgrammaticChange = wasProgrammatic;

    editorTextarea.style.color = promptText ? "var(--text-primary)" : "rgba(255,255,255,0.3)";
    updatePromptMeta();
    if (!wasProgrammatic) schedulePromptHistorySave();
}

function updatePromptMeta() {
    const count = editorTextarea.value.length;
    const platform = platformProfiles[outputPlatform] || platformProfiles.suno;
    charCountElement.textContent = `${count} karakter`;
    charCountElement.style.color = count > 1200 ? "#f59e0b" : "var(--text-secondary)";
    platformModeStatus.textContent = `Platform: ${platform.label}`;
    englishModeStatus.textContent = englishOutputMode ? "Çıktı: İngilizce odaklı" : "Çıktı: Hibrit / TR destekli";
}

function formatLyricsForPrompt(rawLyrics) {
    const cleaned = rawLyrics.trim();
    if (!cleaned) return "";
    return cleaned
        .replace(/\r\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function formatPromptForPlatform(parts, lyrics) {
    const normalizedParts = parts.map(normalizeForOutput).filter(Boolean);
    const styleLine = normalizedParts.join(", ");
    const formattedLyrics = formatLyricsForPrompt(lyrics);

    if (outputPlatform === "udio") {
        return [
            "STYLE PROMPT:",
            styleLine,
            "",
            "SONG DIRECTION:",
            "Keep the arrangement clear, emotionally focused, and ready for full-song generation.",
            formattedLyrics ? "\nLYRICS:\n" + formattedLyrics : ""
        ].filter(Boolean).join("\n");
    }

    if (outputPlatform === "flowmusic") {
        return [
            "Flowmusic Prompt",
            `Style: ${styleLine}`,
            "Flow: polished intro, clear main section, memorable chorus lift, clean ending",
            "Production: balanced mix, strong musical identity, no muddy low end",
            formattedLyrics ? `Lyrics:\n${formattedLyrics}` : ""
        ].filter(Boolean).join("\n");
    }

    if (outputPlatform === "eita") {
        return [
            "Eita Music Brief",
            `Genre / Style: ${styleLine}`,
            "Performance: expressive, natural, coherent arrangement",
            "Output Goal: make it musical, catchy, and production-ready",
            formattedLyrics ? `Lyrics:\n${formattedLyrics}` : ""
        ].filter(Boolean).join("\n");
    }

    const sunoParts = [...normalizedParts];
    if (formattedLyrics) sunoParts.push("Lyrics:\n" + formattedLyrics);
    return sunoParts.join(", ");
}

// Update Prompt Logic
function updatePrompt() {
    const parts = [];

    // Genre & Subgenre
    const genre = genreSelect.value;
    const subgenre = subgenreSelect.value;

    if (subgenre === "Ankara Oyun Havası") {
        const specialParts = ["Fast-paced Turkish gazino style blends Ankara oyun ritmi", "Driving darbuka", "Punchy clarinet", "Reverb-soaked electric bağlama solo", "Layers of kanun fills add melodic sparkle", "Live pavyon ambiance with rakı clinks, smoky laughter, and crowd shouts"];
        setEditorPrompt(formatPromptForPlatform(specialParts, lyricsTextarea.value));
        return;
    }

    if (subgenre) {
        parts.push(subgenre);
    } else if (genre) {
        parts.push(genre);
    }

    // Mood
    const mood = moodSelect.value;
    if (mood) parts.push(mood + " Mood");

    // Key (Western)
    const key = keySelect.value;
    if (key) parts.push(key);

    // Makam (Turkish)
    const makam = makamSelect.value;
    if (makam) parts.push(makam);

    // Time Signature
    const timeSig = timeSigSelect.value;
    if (timeSig) parts.push(timeSig);

    // Tempo
    const tempo = tempoInput.value.trim();
    if (tempo) parts.push(tempo);

    // Instruments
    if (selectedInstruments.size > 0) {
        parts.push(Array.from(selectedInstruments).join(", "));
    }

    // Lead Instrument
    const lead = leadInstrumentSelect.value;
    if (lead) parts.push("Lead " + lead);

    // Playing Techniques
    if (selectedTechniques.size > 0) {
        parts.push(Array.from(selectedTechniques).join(", "));
    }

    // Vocals & Nuances
    const vocals = vocalsSelect.value;
    const vocalNuance = vocalNuancesSelect.value;

    if (vocalNuance && vocals) {
        parts.push(`${vocalNuance} ${vocals}`);
    } else {
        if (vocals) parts.push(vocals);
        if (vocalNuance) parts.push(vocalNuance + " Vocals");
    }

    // String Techniques
    const stringTech = stringTechniquesSelect.value;
    if (stringTech) parts.push(stringTech + " (Strings)");

    // Guitar Techniques
    const guitarTech = guitarTechniquesSelect.value;
    if (guitarTech) parts.push(guitarTech + " (Guitar)");

    // Guitar Effects
    const guitarEffect = guitarEffectsSelect.value;
    if (guitarEffect) parts.push(guitarEffect + " (FX)");

    // Mix Settings
    const mix = mixSettingsSelect.value;
    if (mix) parts.push(mix + " Mix");

    // Production Style
    const prod = productionStyleSelect.value;
    if (prod) parts.push(prod + " Production");

    // Dynamic Flow
    const flow = dynamicFlowSelect.value;
    if (flow) {
        // Remove Turkish translation (e.g., "Slow Build (Yavaş Yükseliş)" -> "Slow Build")
        const cleanFlow = flow.split(' (')[0];
        parts.push(cleanFlow);
    }

    // Song Structure
    const structure = songStructureSelect.value;
    if (structure) parts.push("Structure: " + structure);

    // Custom Description
    const custom = customDescInput.value.trim();
    if (custom) parts.push(custom);

    // Era (New)
    const era = eraSelect.value;
    if (era) parts.push(era);

    // Venue (New)
    const venue = venueSelect.value;
    if (venue) parts.push("Recorded at " + venue);

    setEditorPrompt(formatPromptForPlatform(parts, lyricsTextarea.value));
}

// Professional Tool: Magic Quality
function addQualityTags() {
    const qualityTags = ["Best Quality", "Masterpiece", "8k Audio", "Studio Grade", "High Fidelity", "Professional Mix"];
    const currentText = editorTextarea.value;
    let newText = currentText;

    qualityTags.forEach(tag => {
        if (!currentText.includes(tag)) {
            newText += (newText ? ", " : "") + tag;
        }
    });

    editorTextarea.value = newText;
    pushState();

    magicQualityBtn.classList.add('sparkle');
    setTimeout(() => magicQualityBtn.classList.remove('sparkle'), 500);
}

// Professional Tool: Randomize Vibe
function randomizeVibe() {
    const vibes = ["Cinematic", "Aggressive", "Dreamy", "Energetic", "Melancholic", "Ethereal", "Raw", "Vintage", "Futuristic"];
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];

    let currentText = editorTextarea.value;
    editorTextarea.value = (currentText ? currentText + ", " : "") + randomVibe + " Vibe";
    pushState();

    magicVibeBtn.classList.add('sparkle');
    setTimeout(() => magicVibeBtn.classList.remove('sparkle'), 500);
}

// Professional Tool: Shorten Prompt
function shortenPrompt() {
    let currentText = editorTextarea.value;
    if (!currentText) return;

    // A very simple "shorten" logic: remove some generic words or limit length
    // For now, let's just trim excess whitespace and commas
    let shortened = currentText.split(',')
        .map(p => p.trim())
        .filter((p, i, self) => p && self.indexOf(p) === i) // unique
        .join(', ');

    editorTextarea.value = shortened;
    pushState();

    shortenBtn.classList.add('sparkle');
    setTimeout(() => shortenBtn.classList.remove('sparkle'), 500);
}

// Copy to Clipboard
function copyToClipboard() {
    const text = editorTextarea.value.trim();
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        savePromptToHistory(text);
        copyFeedback.classList.add('show');
        setTimeout(() => {
            copyFeedback.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Kopyalama hatası:', err);
    });
}

// History / Undo / Redo Logic
function saveState() {
    return {
        genre: genreSelect.value,
        subgenre: subgenreSelect.value,
        mood: moodSelect.value,
        tempo: tempoInput.value,
        timeSig: timeSigSelect.value,
        key: keySelect.value,
        makam: makamSelect.value,
        vocals: vocalsSelect.value,
        vocalNuances: vocalNuancesSelect.value,
        mixSettings: mixSettingsSelect.value,
        productionStyle: productionStyleSelect.value,
        leadInstrument: leadInstrumentSelect.value,
        songStructure: songStructureSelect.value,
        dynamicFlow: dynamicFlowSelect.value,
        outputPlatform,
        customDesc: customDescInput.value,
        instruments: Array.from(selectedInstruments),
        techniques: Array.from(selectedTechniques),
        stringTechniques: stringTechniquesSelect.value,
        guitarTechniques: guitarTechniquesSelect.value,
        guitarEffects: guitarEffectsSelect.value,
        era: eraSelect.value,
        venue: venueSelect.value,
        lyrics: lyricsTextarea.value,
        editorText: editorTextarea.value,
        englishOutputMode
    };
}

function pushState() {
    const currentState = saveState();

    // Avoid pushing duplicate states (optional but good)
    if (historyIndex >= 0) {
        const prevState = historyStack[historyIndex];
        if (JSON.stringify(prevState) === JSON.stringify(currentState)) return;
    }

    // Remove future history if we are in the middle
    historyStack = historyStack.slice(0, historyIndex + 1);
    historyStack.push(currentState);
    historyIndex++;
    updateUndoRedoButtons();
}

function updateUndoRedoButtons() {
    undoBtn.disabled = historyIndex <= 0;
    redoBtn.disabled = historyIndex >= historyStack.length - 1;
}

// Helper to apply state to DOM (Refactored from restoreState)
function applyStateToDOM(state) {
    isProgrammaticChange = true;

    // Restore Selects & Inputs
    genreSelect.value = state.genre || "";
    handleGenreChange(); // Re-populate subgenres

    // Ensure subgenre is valid
    const subOptions = Array.from(subgenreSelect.options).map(o => o.value);
    if (subOptions.includes(state.subgenre)) {
        subgenreSelect.value = state.subgenre;
    } else {
        subgenreSelect.value = "";
    }

    moodSelect.value = state.mood || "";
    tempoInput.value = state.tempo || "";
    timeSigSelect.value = state.timeSig || "";
    keySelect.value = state.key || "";
    makamSelect.value = state.makam || "";
    vocalsSelect.value = state.vocals || "";
    vocalNuancesSelect.value = state.vocalNuances || "";
    vocalNuancesSelect.value = state.vocalNuances || "";
    mixSettingsSelect.value = state.mixSettings || "";
    stringTechniquesSelect.value = state.stringTechniques || "";
    guitarTechniquesSelect.value = state.guitarTechniques || "";
    guitarEffectsSelect.value = state.guitarEffects || "";
    eraSelect.value = state.era || "";
    venueSelect.value = state.venue || "";
    productionStyleSelect.value = state.productionStyle || "";
    leadInstrumentSelect.value = state.leadInstrument || "";
    songStructureSelect.value = state.songStructure || "";
    dynamicFlowSelect.value = state.dynamicFlow || "";
    outputPlatform = state.outputPlatform || "suno";
    platformStyleSelect.value = outputPlatform;
    updatePlatformUI();
    customDescInput.value = state.customDesc || "";
    lyricsTextarea.value = state.lyrics || "";
    englishOutputMode = Boolean(state.englishOutputMode);
    updateEnglishModeUI();

    // Restore Sets
    selectedInstruments.clear();
    if (state.instruments) {
        state.instruments.forEach(inst => {
            // Check if tag exists, if not create it
            let tag = Array.from(instrumentsContainer.children).find(t => t.dataset.value === inst);
            if (!tag) {
                createInstrumentTag(inst);
                tag = instrumentsContainer.lastChild;
            }
            selectedInstruments.add(inst);
        });
    }

    selectedTechniques.clear();
    if (state.techniques) {
        state.techniques.forEach(tech => selectedTechniques.add(tech));
    }

    // Update UI for Tags
    document.querySelectorAll('.tag').forEach(tag => {
        const val = tag.dataset.value;
        if (selectedInstruments.has(val) || selectedTechniques.has(val)) {
            tag.classList.add('selected');
        } else {
            tag.classList.remove('selected');
        }
    });

    updatePrompt();
    if (state.editorText) {
        setEditorPrompt(state.editorText);
    }
    isProgrammaticChange = false;
    updateUndoRedoButtons();
}

function restoreState(state) {
    applyStateToDOM(state);
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        restoreState(historyStack[historyIndex]);
    }
}

function redo() {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        restoreState(historyStack[historyIndex]);
    }
}

function updateUndoRedoButtons() {
    undoBtn.disabled = historyIndex <= 0;
    redoBtn.disabled = historyIndex >= historyStack.length - 1;
}

function loadStoredArray(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || '[]');
        return Array.isArray(value) ? value : [];
    } catch (error) {
        return [];
    }
}

function saveStoredArray(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function schedulePromptHistorySave() {
    clearTimeout(historySaveTimer);
    historySaveTimer = setTimeout(() => {
        savePromptToHistory(editorTextarea.value.trim());
    }, 900);
}

function savePromptToHistory(text) {
    const promptText = text.trim();
    if (promptText.length < 12) return;

    promptHistory = promptHistory.filter(item => item.text !== promptText);
    promptHistory.unshift({
        id: Date.now(),
        title: createPromptTitle(promptText),
        text: promptText,
        createdAt: new Date().toISOString()
    });
    promptHistory = promptHistory.slice(0, 20);
    saveStoredArray('bisgen-prompt-history', promptHistory);
    renderPromptHistory();
}

function createPromptTitle(text) {
    const firstPart = text.split(',')[0] || text;
    return firstPart.replace(/\n/g, ' ').slice(0, 42) || 'Yeni prompt';
}

function renderPromptHistory() {
    renderLibraryList(promptHistoryList, promptHistory, {
        emptyText: 'Henüz geçmiş yok.',
        includeDelete: false
    });
}

function renderFavorites() {
    renderLibraryList(favoritesList, favoritePrompts, {
        emptyText: 'Henüz favori yok.',
        includeDelete: true
    });
}

function renderLibraryList(container, items, options) {
    if (!container) return;
    container.innerHTML = '';

    if (!items.length) {
        container.classList.add('empty-state');
        container.textContent = options.emptyText;
        return;
    }

    container.classList.remove('empty-state');
    items.forEach(item => {
        const row = document.createElement('div');
        row.className = 'library-item';

        const content = document.createElement('div');
        const title = document.createElement('div');
        title.className = 'library-title';
        title.textContent = item.title || createPromptTitle(item.text);

        const preview = document.createElement('div');
        preview.className = 'library-preview';
        preview.textContent = item.text.slice(0, 150) + (item.text.length > 150 ? '...' : '');

        content.appendChild(title);
        content.appendChild(preview);

        const actions = document.createElement('div');
        actions.className = 'library-actions';

        const loadBtn = document.createElement('button');
        loadBtn.className = 'icon-btn';
        loadBtn.type = 'button';
        loadBtn.title = 'Editöre al';
        loadBtn.textContent = '↩';
        loadBtn.addEventListener('click', () => setEditorPrompt(item.text));
        actions.appendChild(loadBtn);

        const copyItemBtn = document.createElement('button');
        copyItemBtn.className = 'icon-btn';
        copyItemBtn.type = 'button';
        copyItemBtn.title = 'Kopyala';
        copyItemBtn.textContent = '📋';
        copyItemBtn.addEventListener('click', () => navigator.clipboard.writeText(item.text));
        actions.appendChild(copyItemBtn);

        if (options.includeDelete) {
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'icon-btn';
            deleteBtn.type = 'button';
            deleteBtn.title = 'Sil';
            deleteBtn.textContent = '×';
            deleteBtn.addEventListener('click', () => deleteFavorite(item.id));
            actions.appendChild(deleteBtn);
        }

        row.appendChild(content);
        row.appendChild(actions);
        container.appendChild(row);
    });
}

function saveCurrentFavorite() {
    const text = editorTextarea.value.trim();
    if (!text) return;

    const title = window.prompt('Favori adı:', createPromptTitle(text));
    if (title === null) return;

    favoritePrompts = favoritePrompts.filter(item => item.text !== text);
    favoritePrompts.unshift({
        id: Date.now(),
        title: title.trim() || createPromptTitle(text),
        text,
        createdAt: new Date().toISOString()
    });
    favoritePrompts = favoritePrompts.slice(0, 40);
    saveStoredArray('bisgen-favorite-prompts', favoritePrompts);
    renderFavorites();
    saveFavoriteBtn.classList.add('sparkle');
    setTimeout(() => saveFavoriteBtn.classList.remove('sparkle'), 500);
}

function deleteFavorite(id) {
    favoritePrompts = favoritePrompts.filter(item => item.id !== id);
    saveStoredArray('bisgen-favorite-prompts', favoritePrompts);
    renderFavorites();
}

function clearPromptHistory() {
    promptHistory = [];
    saveStoredArray('bisgen-prompt-history', promptHistory);
    renderPromptHistory();
}

function handlePlatformChange() {
    outputPlatform = platformStyleSelect.value || "suno";
    localStorage.setItem('bisgen-output-platform', outputPlatform);
    updatePlatformUI();
    updatePrompt();
    if (!isProgrammaticChange) pushState();
}

function updatePlatformUI() {
    if (!platformProfiles[outputPlatform]) outputPlatform = "suno";
    platformStyleSelect.value = outputPlatform;
    const platform = platformProfiles[outputPlatform];
    copyPlatformLabel.textContent = platform.copyLabel;
    if (platformModeStatus) {
        platformModeStatus.textContent = `Platform: ${platform.label}`;
    }
}

function toggleEnglishMode() {
    englishOutputMode = !englishOutputMode;
    localStorage.setItem('bisgen-english-mode', String(englishOutputMode));
    updateEnglishModeUI();
    updatePrompt();
    pushState();
}

function updateEnglishModeUI() {
    englishModeBtn.classList.toggle('active', englishOutputMode);
    englishModeBtn.textContent = englishOutputMode ? '🌍 EN Açık' : '🌍 EN';
    if (englishModeStatus) {
        englishModeStatus.textContent = englishOutputMode ? 'Çıktı: İngilizce odaklı' : 'Çıktı: Hibrit / TR destekli';
    }
}

function insertTextAtLyricsCursor(text) {
    const block = text.trim();
    if (!block) return;

    const start = lyricsTextarea.selectionStart ?? lyricsTextarea.value.length;
    const end = lyricsTextarea.selectionEnd ?? start;
    const before = lyricsTextarea.value.slice(0, start);
    const after = lyricsTextarea.value.slice(end);
    const prefix = before.trim() && !before.endsWith('\n\n') ? (before.endsWith('\n') ? '\n' : '\n\n') : '';
    const suffix = after.trim() && !after.startsWith('\n\n') ? (after.startsWith('\n') ? '\n' : '\n\n') : '';

    lyricsTextarea.value = before + prefix + block + suffix + after;
    const cursorPosition = (before + prefix + block).length;
    lyricsTextarea.focus();
    lyricsTextarea.setSelectionRange(cursorPosition, cursorPosition);
    updatePrompt();
    pushState();
}

function insertSelectedTraffic() {
    const template = lyricsTrafficTemplates[lyricsTrafficSelect.value];
    if (!template) return;
    insertTextAtLyricsCursor(template);
}

function insertSelectedLyricsElement() {
    const element = lyricsElementSelect.value;
    if (!element) return;
    const body = element === "[Fade Out]" ? element : `${element}\n`;
    insertTextAtLyricsCursor(body);
}

function insertLyricsInstrumentCue() {
    const instrument = lyricsInstrumentInput.value.trim();
    if (!instrument) return;
    insertTextAtLyricsCursor(`[Instrumental: ${instrument}]`);
    lyricsInstrumentInput.value = "";
}

function formatLyrics() {
    const raw = lyricsTextarea.value.trim();
    if (!raw) {
        lyricsTextarea.value = '[Verse]\n\n[Chorus]\n\n[Bridge]\n\n[Outro]';
    } else {
        lyricsTextarea.value = raw
            .replace(/\r\n/g, '\n')
            .replace(/^\s*\[?\s*intro\s*\]?\s*:?\s*$/gmi, '[Intro]')
            .replace(/^\s*\[?\s*verse\s*(\d+)?\s*\]?\s*:?\s*$/gmi, (_, number) => number ? `[Verse ${number}]` : '[Verse]')
            .replace(/^\s*\[?\s*pre[- ]?chorus\s*\]?\s*:?\s*$/gmi, '[Pre-Chorus]')
            .replace(/^\s*\[?\s*chorus\s*\]?\s*:?\s*$/gmi, '[Chorus]')
            .replace(/^\s*\[?\s*hook\s*\]?\s*:?\s*$/gmi, '[Hook]')
            .replace(/^\s*\[?\s*bridge\s*\]?\s*:?\s*$/gmi, '[Bridge]')
            .replace(/^\s*\[?\s*outro\s*\]?\s*:?\s*$/gmi, '[Outro]')
            .replace(/^\s*\[?\s*fade[- ]?out\s*\]?\s*:?\s*$/gmi, '[Fade Out]')
            .replace(/\n{3,}/g, '\n\n');
    }
    updatePrompt();
    pushState();
}

function runQualityCheck() {
    const text = editorTextarea.value.trim();
    const issues = [];
    let score = 100;

    if (!text) {
        issues.push('Prompt boş.');
        score -= 60;
    }
    if (!genreSelect.value && !text.match(/pop|rock|blues|jazz|rap|cinematic|electronic/i)) {
        issues.push('Müzik türü net değil.');
        score -= 15;
    }
    if (!moodSelect.value && !text.match(/happy|sad|dark|epic|romantic|energetic|melancholic|chill/i)) {
        issues.push('Ruh hali eklemek sonucu daha hedefli yapar.');
        score -= 10;
    }
    if (selectedInstruments.size === 0 && !text.match(/guitar|piano|drum|bass|synth|violin|oud|ney|baglama/i)) {
        issues.push('En az birkaç enstrüman seçmek iyi olur.');
        score -= 10;
    }
    if (text.length > 1200) {
        issues.push('Prompt biraz uzun; “Kısalt” ile sadeleştirebilirsin.');
        score -= 10;
    }
    if (vocalsSelect.value === 'Instrumental (No Vocals)' && (vocalNuancesSelect.value || lyricsTextarea.value.trim())) {
        issues.push('Enstrümantal seçiliyken vokal detayı veya söz var.');
        score -= 20;
    }
    if (hasDuplicateCommaParts(text)) {
        issues.push('Tekrarlanan etiketler var; kısaltma temizleyebilir.');
        score -= 7;
    }

    score = Math.max(0, Math.min(100, score));
    const level = score >= 80 ? 'good' : score >= 55 ? 'warn' : 'bad';
    qualityPanel.className = `quality-panel ${level}`;
    qualityPanel.innerHTML = `
        <strong>Kalite puanı: ${score}/100</strong>
        ${issues.length ? `<ul>${issues.map(issue => `<li>${issue}</li>`).join('')}</ul>` : '<span>Gayet net görünüyor. Suno için kullanıma hazır.</span>'}
    `;
}

function hasDuplicateCommaParts(text) {
    const parts = text
        .split(',')
        .map(part => part.trim().toLowerCase())
        .filter(Boolean);
    return new Set(parts).size !== parts.length;
}

// Run Init
init();
