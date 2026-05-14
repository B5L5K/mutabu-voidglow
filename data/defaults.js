/* ══════════════════════════════════════════════════════════════
   data/defaults.js — default data for bookmarks, quick access,
   and profile taglines. Edit these to change the seeded content.
   ══════════════════════════════════════════════════════════════ */

/* ── BOOKMARK DEFAULTS ────────────────────────────────────────── */
const BM_DEFAULTS = [
    { folder: 'social', links: [
        { label: 'Lemmy.ml',             url: 'https://lemmy.ml'              },
        { label: 'Reddit',               url: 'https://reddit.com'            },
    ]},
    { folder: 'media', links: [
        { label: 'YouTube',              url: 'https://youtube.com'           },
        { label: 'Serial',               url: 'https://serial.tube'           },
        { label: 'Jet Set Radio Future', url: 'https://jetsetradiofuture.live'},
    ]},
];

/* ── QUICK ACCESS DEFAULTS ────────────────────────────────────── */
const QA_DEFAULTS = [
    { label: 'Karakeep',  url: 'https://cloud.karakeep.app' },
    { label: 'DeepL',     url: 'https://www.deepl.com/en/translator' },
    { label: 'Habitica',  url: 'https://habitica.com'      },
    { label: 'Notesnook', url: 'https://app.notesnook.com' },
];

/* ── QUOTE DEFAULTS ───────────────────────────────────────────── */
const QUOTE_DEFAULTS = [
    // Philosophy & Culture
    { text: 'The tradition of all dead generations weighs like a nightmare on the brains of the living.', author: 'Marx' },
    { text: 'Everything that exists deserves to perish.',                                                  author: 'Hegel' },
    // Cyberpunk & Tech Fiction
    { text: 'The sky above the port was the color of television, tuned to a dead channel.',                author: 'William Gibson' },
    { text: 'Cyberspace. A consensual hallucination experienced daily by billions.',                        author: 'William Gibson' },
    { text: 'The future is already here — it\'s just not evenly distributed.',                              author: 'William Gibson' },
    { text: 'It\'s impossible to move, to live, to operate at any level without leaving traces.',           author: 'William Gibson' },
    { text: 'Nowhere else. This is the only place.',                                                        author: 'William Gibson' },
    // AI & Technology Warnings
    { text: 'The real danger is not that computers will begin to think like men, but that men will begin to think like computers.', author: 'Sydney Harris' },
    { text: 'Technology is best when it brings people together.',                                           author: 'Matt Mullenweg' },
    { text: 'The web does not just connect machines, it connects people.',                                  author: 'Tim Berners-Lee' },
    { text: 'Any sufficiently advanced technology is indistinguishable from magic.',                        author: 'Arthur C. Clarke' },
    { text: 'The future of humanity is in the hands of those who can imagine it.',                          author: 'Unknown' },
    // Dystopian Themes
    { text: 'It is forbidden to forbid.',                                                                    author: 'Situationist' },
    { text: 'We are the music makers, and we are the dreamers of dreams.',                                  author: 'O\'Shaughnessy' },
    { text: 'In a world of lies, telling the truth is a revolutionary act.',                                author: 'Often attributed' },
    { text: 'The machine does not isolate man from the great problems of nature but inserts him more deeply into them.', author: 'Antoine de Saint-Exupéry' },
    // Noir & Existential
    { text: 'Nothing matters. Everything\'s a joke. We\'re just here to ride the wave until we crash on shore.', author: 'Unknown' },
    { text: 'The only way to deal with an unfree world is to become so absolutely free that the very existence of you is an act of rebellion.', author: 'Often attributed' },
    { text: 'We are all dead, we just don\'t know it yet.',                                                   author: 'Nihilist Maxim' },
    // Corporate & System Critique
    { text: 'The greatest threat to freedom is a happy slave.',                                             author: 'Often quoted' },
    { text: 'They can\'t represent us if we\'ve already sold ourselves.',                                    author: 'Unknown' },
    // Data & Identity
    { text: 'You are not the customer. You are the product being sold.',                                    author: 'Social Media Axiom' },
    { text: 'In God we trust. All others must bring data.',                                                 author: 'W. Edwards Deming' },
    { text: 'Data without interpretation is just noise.',                                                    author: 'Unknown' },
    // Transhumanism & Singularity
    { text: 'The singularity will not be televised.',                                                        author: 'Cyberpunk Axiom' },
    { text: 'Humanity is the caterpillar, technology is the chrysalis.',                                    author: 'Unknown' },
    // Surveillance & Control
    { text: 'When you have nothing to hide, you have nothing to fear... said by every tyrant ever.',        author: 'Civil Liberties Argument' },
    { text: 'Privacy is dead. Your data is the new currency.',                                              author: 'Modern Axiom' },
    // Fiction & Philosophy Cross
    { text: 'The only way out is through.',                                                                  author: 'Unknown' },
    { text: 'Everything dies. That\'s the deal. We get to pretend it doesn\'t for a while.',                 author: 'Unknown' },
    { text: 'We are made of stardust and electricity.',                                                      author: 'Unknown' },
    // Dark Philosophy & Twisted
    { text: 'The void stares back. Unflinching.',                                                            author: 'Nietzsche (paraphrased)' },
    { text: 'I think, therefore I am. I am, therefore I suffer.',                                           author: 'Existential Twist' },
    { text: 'The only certainty is that you will die.',                                                      author: 'Death Positive' },
    { text: 'What is mind? No matter. What is matter? Never mind.',                                         author: 'George Berkeley' },
    { text: 'Consciousness is a strange loop feeding back on itself.',                                      author: 'Douglas Hofstadter' },
    { text: 'There is no escape. There is no outside. There is only the pattern.',                          author: 'Systems Theory' },
    { text: 'Your thoughts are not your own. They are shaped by forces beyond comprehension.',              author: 'Memetic Theory' },
    { text: 'The map is not the territory. The territory is not real.',                                     author: 'Postmodern Axiom' },
    { text: 'We are all meat computers running obsolete code.',                                             author: 'Cyberpunk Horror' },
    { text: 'Beauty is the lure that draws us toward death.',                                               author: 'Schopenhauer' },
    { text: 'The greatest trick the devil played was convincing us he didn\'t exist.',                       author: 'Baudelaire' },
    { text: 'Every revolution devours its children.',                                                        author: 'French Revolution' },
    { text: 'God is dead. And we have killed him. And yet his shadow still looms over us.',                 author: 'Nietzsche (extended)' },
    // Declassified & Government Weirdness
    { text: 'The U.S. government was interested in remote viewing as a weapon during the Cold War.',         author: 'CIA Declassified (Stargate Project)' },
    { text: 'MK-Ultra: The CIA tested LSD on unwitting American citizens.',                                 author: 'CIA Declassified' },
    { text: 'Operation Northwoods: The Pentagon proposed false flag attacks on American citizens.',          author: 'JFK Documents Declassified' },
    { text: 'COINTELPRO: The FBI systematically infiltrated and discredited activist groups.',              author: 'FBI Declassified' },
    { text: 'Area 51 exists. What happens there remains classified.',                                       author: 'Government Admission' },
    { text: 'We have been unable to identify the nature of the craft.',                                     author: 'UFO Documentation' },
    { text: 'The future is already written. We are just reading it backwards.',                              author: 'Speculative Fiction' },
    // Psychological Horror
    { text: 'Your memories are not reliable. They are reconstructed each time you recall them.',            author: 'Cognitive Psychology' },
    { text: 'You are not in control. Your brain is running simulations behind the scenes.',                  author: 'Neuroscience' },
    { text: 'The observer effect: Reality only exists when observed.',                                       author: 'Quantum Mechanics' },
    { text: 'We are all living in a simulation and the glitches are increasing.',                            author: 'Silicon Valley Anxiety' },
    { text: 'Your consciousness might be an illusion created to justify decisions your brain already made.', author: 'Benjamin Libet' },
    { text: 'The more you know, the more you realize you know nothing.',                                     author: 'Socrates' },
    // Twisted Wisdom
    { text: 'Suffering is the price of consciousness.',                                                      author: 'Existential Truth' },
    { text: 'Meaning is something we project onto an indifferent universe.',                                 author: 'Absurdism' },
    { text: 'We are all dying, some of us just faster than others.',                                        author: 'Mortality Axiom' },
    { text: 'The light at the end of the tunnel is an oncoming train.',                                     author: 'Dark Comedy' },
    { text: 'Progress is just rearranging deck chairs on the Titanic.',                                     author: 'Pessimism' },
    { text: 'Knowledge is power, but power corrupts, so ignorance is bliss.',                                author: 'Paradox' },
];

/* ── PROFILE TAGLINES ─────────────────────────────────────────── */
const TAGLINES = [
    '過去を殺せ',
    'ほしのこえ',
    '星の大海',
    '攻殻機動隊',
    '銀河鉄道の夜',
]
