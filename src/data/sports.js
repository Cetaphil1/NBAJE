const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little rhythm — easy to try alone, easy to turn social.',
    guide:{
      whyItFits:"Basketball gives you a lot back quickly: a few made shots, cleaner handles, a sweat, maybe a pickup game if the court has a friendly rhythm. You do not need a team to get started.",
      howToStart:"Find a public court at a nearby park. Practice dribbling with both hands, shoot close to the rim, and work back slowly. When you feel comfortable, ask a casual group if they need one more.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, and busy courts often have shared balls around.",
        no_equipment:"If you do not have a ball yet, choose a busier court and ask to shoot around before a game starts.",
        shy_solo:"Public courts are normal places to practise alone. Put up shots, work on layups, and leave before you feel watched.",
        social_team:"On busier courts, asking \"got next?\" is a normal way to join the rotation.",
        limited_time:'In 20 minutes, you can warm up, shoot close-range shots, and get enough touches to feel progress.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Attempt 20 free throws','Show up at a pickup game and ask to play']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Low-cost, outdoor, and instantly familiar — a few touches can become a game.",
    guide:{
      whyItFits:"Soccer works because the entry point is tiny: one ball, open grass, and simple touches. You can practise alone for confidence, then step into a casual kickaround when the pace feels right.",
      howToStart:"Find a park with a pitch or a wall. Start with toe taps, gentle dribbling, and short wall passes before worrying about juggling or pickup games.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15 and most parks are free. Shared balls are common once you find a regular game.",
        no_equipment:'Look for a casual kickaround or beginner group first; shared balls are common, but cleats can wait.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — look for groups that mention all levels.',
        limited_time:'20 minutes of wall passes, toe taps, and gentle dribbling is enough to build touch.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch, wall, or open park','Practise toe taps and easy dribbling for 10 min','Try wall passing for 10 min','Search for a casual local pickup game']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"Precise, satisfying, and solo-friendly — a wall can be your first hitting partner.",
    guide:{
      whyItFits:"Tennis rewards patience as much as athleticism. A wall lets you learn the sound and feel of clean contact before a match ever enters the picture.",
      howToStart:"Find a public court or practice wall. Spend your first sessions hitting softly, resetting often, and getting your grip and swing comfortable before keeping score.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying gives you a private-feeling way to learn. Start with 10-20 easy minutes and plenty of resets.',
        social_team:'Most tennis clubs run beginner group clinics. USTA has local adult programmes.',
        limited_time:'20 minutes of gentle wall rallying can be plenty while your timing catches up.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public tennis court near you','Spend 20 min hitting a wall — focus on consistency','Get or borrow a basic racket','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'Fast, playful team rallies — best started at beginner nights or low-key beach courts.',
    guide:{
      whyItFits:"Volleyball is technical, loud, and social in a way that makes practice feel like play. Beginner open gyms and beach courts give you a softer landing than jumping into a serious league.",
      howToStart:"Find an open gym night or a beach court. Focus on the pass (bump) first — it's the foundation of everything.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gym nights and beach courts usually have shared balls. Message ahead if you are nervous.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" — look for open gym or skills-night language.',
        limited_time:'Open gym sessions often run 1–2 hours, but staying for a few rotations still counts.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Practise self-bumping — 20 reps','Attend one open gym session','Search for beginner recreational leagues']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'A slower-burn sport of timing, patience, and that one swing that feels perfect.',
    guide:{
      whyItFits:'Baseball rewards focus and repetition. You can work on hitting or throwing on your own, then bring those small skills into a team setting later.',
      howToStart:'Find a batting cage — many parks have them for $1–2 per token. Throw a tennis ball against a wall to build glove reflexes.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage lets you learn privately. No team, no field, no one tracking your misses.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'20 minutes at a batting cage is useful if you focus on relaxed swings and clean contact.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage near you','Take 30 swings — focus on contact not power','Practise throwing with a partner or wall','Look up local recreational softball leagues']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Football strategy and big team energy, minus the pads and heavy contact.',
    guide:{
      whyItFits:"Flag football keeps the routes, play calls, and team feeling without asking a beginner to buy pads or absorb tackles. It is a good fit if you like quick bursts and clear roles.",
      howToStart:"Start by practising short throws and catching on the move. Then search your parks department or local sports groups for a beginner flag league.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practise spiral throwing against a fence or wall alone.',
        social_team:'Flag leagues tend to be social because teams need subs and newcomers can learn defined roles quickly.',
        limited_time:'A 20-minute throwing and route-running session is enough to learn one route and one clean catch.',
        competitive:'Flag tournaments can get serious quickly once you want more than casual league play.',
      },
      checklist:['Get a football or find one to borrow','Practise throwing a spiral','Watch one game and note the positions','Search for a local flag football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:"Start with run-walk intervals, not heroics — shoes, a path, and a pace you can repeat.",
    guide:{
      whyItFits:"Running is honest without being complicated. You can measure progress by feeling smoother, recovering faster, or adding one more minute of jogging.",
      howToStart:"Start with 20 minutes of run-walk intervals two or three times a week. Keep the pace easy enough that you finish thinking, 'I could do that again.'",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and somewhere safe to move. A phone timer is enough tracking.",
        shy_solo:'Running alone is normal. Choose a familiar route and keep it conversational.',
        social_team:'Running clubs often have no-drop or walk-run groups. Search "running club [your city]".',
        limited_time:'A 20-minute run-walk session is legitimate training, especially when you repeat it.',
        competitive:'Local 5K races are common and low-pressure if you treat them as a finish-line goal.',
      },
      checklist:['Complete a 20-minute run-walk session','Download a free run-tracking app or use a timer','Find your nearest track or park path','Look up a local 5K when you want a gentle target']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet cardio with full-body effort — lane swim lets you build at your own pace.',
    guide:{
      whyItFits:"Swimming is kind to joints but still demanding. Technique matters more than raw strength, so small improvements in breathing and body position feel meaningful fast.",
      howToStart:'Book a lane swim session. Start with easy lengths, rest whenever you need, and focus on calm breathing before distance.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles are enough for your first lane swim.",
        shy_solo:"Lane swimming gives you your own lane, your own pace, and very little small talk.",
        social_team:'Masters Swimming programmes are adult lap groups with lanes for different speeds.',
        limited_time:"20 minutes can be simple: a few easy lengths with generous rest.",
        competitive:'USMS (Masters) meets have events by age and distance. Your first target can simply be a personal time.',
      },
      checklist:['Find your nearest pool with lane swim','Book a session and swim a few easy lengths','Focus on calm breathing and relaxed rests','Look up Masters Swimming when you want coaching']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Rhythm, sweat, and confidence — bag work gets you moving before sparring is even a question.',
    guide:{
      whyItFits:"Boxing blends coordination, conditioning, and composure. A good gym will spend your first sessions on stance, footwork, and basic punches, not proving how tough you are.",
      howToStart:"Find a boxing gym — don't try to learn alone. Spend the first month on stance, jab, cross, and footwork. Don't spar until your coach says you're ready.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms build community through shared rounds, partner drills, and regular class times.',
        limited_time:'A 30-minute bag workout can be plenty: warm-up, a few focused rounds, cool-down.',
        competitive:'USA Boxing and Golden Gloves have novice divisions. Ask your coach when your fundamentals and defence are ready.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Intense, technical, and coached from the ground up — not something to learn alone.',
    guide:{
      whyItFits:"Wrestling is demanding, but the first layer is teachable: stance, movement, balance, and safe contact. It suits people who like hard work with clear coaching.",
      howToStart:"Find a wrestling club or school programme — you cannot learn this safely without a coach and a mat.",
      equipment:[{item:'Athletic clothes without zippers',tier:'need'},{item:'Wrestling shoes',tier:'later'},{item:'Headgear',tier:'club'},{item:'Wrestling singlet',tier:'later'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Clubs provide the mat and often loan headgear or shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A practice session usually runs 60–90 minutes because warm-ups, drilling, and safety all matter.",
        competitive:'Ask your coach about entry-level events only after you can move, fall, and drill safely.',
      },
      checklist:['Find a local wrestling club or YMCA programme','Attend one open practice','Learn basic stance from a coach','Ask about beginner training schedule']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'Low-pressure movement you can do in your living room, even on a rough day.',
    guide:{
      whyItFits:"Yoga gives you a way to move, breathe, and notice what your body is doing without competing with anyone. It can be gentle, strong, quiet, or sweaty depending on the class.",
      howToStart:"Find a free YouTube class (Yoga with Adriene is excellent for beginners) and do it in your living room. No studio needed for months.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are good enough to start. A mat costs $10–20 when you are ready.",
        no_equipment:'You can practise on carpet or a towel before buying a mat.',
        shy_solo:'This can be as private as you want: a video, a floor, and no audience.',
        social_team:'Studio classes can be social without pressure, especially beginner-labelled sessions.',
        limited_time:'A 20-minute session is enough to loosen up and learn a few poses. Start there.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (20 min)",'Complete your first session','Practise 3 times this week',"Notice what feels tight — that's your target"]
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:"Solo or group, your own pace, covering ground fast — the fun sneaks up on you.",
    guide:{
      whyItFits:"Cycling is easier on joints than running but still gives you real cardio. The bonus is exploration: a normal route feels different when you cover it on two wheels.",
      howToStart:'Borrow or find a used bike. Pick a flat route for your first ride. Focus on comfort and consistency before speed.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50–150. Check your city for bike libraries or loan programmes.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programmes before buying anything.',
        shy_solo:'Cycling alone is normal. Start on quiet streets, paths, or protected lanes.',
        social_team:'Group rides run in most cities. Search for your local cycling club — most have beginner-paced rides.',
        limited_time:"A 20-minute loop around your neighbourhood is enough. Comfort matters more than distance at first.",
        competitive:'Local cycling clubs have timed rides and beginner races. Strava segments give you something to chase solo.',
      },
      checklist:['Borrow or find a used bike','Find a flat, safe 20-minute route','Complete your first ride','Join a local cycling club or find a group ride']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'Problem-solving meets physical challenge — indoor gyms make it immediately accessible.',
    guide:{
      whyItFits:"Climbing is part puzzle, part workout. Indoor gyms make the first try manageable because routes are graded, gear is rentable, and staff can point you at the easiest problems.",
      howToStart:"Visit an indoor climbing gym. Rent shoes and a harness. Start on bouldering (no ropes) — it's the lowest-barrier entry point.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms often cost $15–25 with rental. Look for intro nights, off-peak pricing, or punch cards.',
        no_equipment:'Gyms rent everything. Wear comfortable clothes and let staff know it is your first visit.',
        shy_solo:'Bouldering needs no partner or ropes. You can work one easy problem, rest, and try again.',
        social_team:'Climbing gyms are naturally chatty because people compare beta and cheer small wins.',
        limited_time:'A 45-minute bouldering session is plenty when you rest between attempts.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent gear','Try bouldering for 45 minutes','Ask a staff member to show you one route']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"A reset button with better scenery — start with an easy trail, not a summit.",
    guide:{
      whyItFits:"Hiking is approachable because the pace is yours. You can turn around, stop for water, take photos, and still get the lift of being outside.",
      howToStart:'Find a local trail on AllTrails (free app). Pick something rated "easy" and under 3 miles, then check the weather and daylight before you go.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need comfortable shoes, water, and a charged phone. That is enough for an easy local trail.',
        shy_solo:'Solo hiking is common. Start with a popular, well-marked trail and tell someone where you are going.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 45-90 minute loop can be enough. You do not need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download the AllTrails app','Find an easy trail near you','Complete a hike under 3 miles',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music turns the workout into a mood — pick a style that makes you curious.',
    guide:{
      whyItFits:'Dance can be expressive, social, athletic, or all three. Some styles let you practise alone; others put you in a room where everyone is learning the same steps.',
      howToStart:'Find a beginner class in the style that interests you most. Salsa, swing, and hip-hop all have regular intro classes where awkward first attempts are expected.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute drop-in is enough to know whether the music and room feel right.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or free intro session','Attend your first class','Go back a second time — the first is always awkward']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Clear structure, coached basics, and progress you can actually see belt by belt.',
    guide:{
      whyItFits:'Martial arts offer a rare combination: individual skill, partner practice, and clear progression. BJJ, judo, karate, and muay thai all have beginner paths when the club teaches fundamentals well.',
      howToStart:'Pick one style and find a local club. Ask whether the trial class is fundamentals-focused and what contact level to expect.',
      equipment:[{item:'Gi / uniform (club may loan one)',tier:'later'},{item:'Comfortable athletic wear',tier:'need'},{item:'Mouthguard',tier:'later'}],
      adaptive:{
        low_budget:'Many clubs have sliding-scale dues or reduced first-month rates. Ask.',
        no_equipment:'Most clubs loan a gi to new members for the first few sessions.',
        shy_solo:"Drilling technique alone or in pairs is the core of most martial arts. You won't be thrown into sparring immediately.",
        social_team:"Martial arts clubs build community through repeated partner drills, bow-ins, and shared routines.",
        limited_time:'A standard class runs 60 minutes. Most people go 2–3 times per week.',
        competitive:'Every martial art has a competition structure. BJJ tournaments run almost every weekend across the country.',
      },
      checklist:['Pick a martial art style (BJJ, karate, judo, muay thai)','Find a local club and book a trial class','Attend your first class with no expectations','Go back at least twice before deciding']
    }
  },

  skateboarding: {
    id:'skateboarding', name:'Skateboarding', icon:'🛹',
    fitTags:['shy_solo','high_energy'],
    pitch:'Creative, self-directed, and humbling in the best way — progress arrives in tiny wins.',
    guide:{
      whyItFits:"Skateboarding has no fixed schedule and no required team. You learn by repeating tiny movements until pushing, turning, and stopping start to feel like your own style.",
      howToStart:"Get a proper starter board, not a toy-store board. Find a smooth surface and learn to push, turn, and stop before anything else.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A proper beginner board runs about $60–80. Avoid cheap toy-store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'30 minutes on one basic skill is plenty. Beginners get tired fast because balance is work.',
        competitive:'Local skate jams and amateur contests exist if you eventually want a public challenge.',
      },
      checklist:['Get a proper beginner skateboard','Find a smooth flat surface to practise on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Small court, quick games, and lots of rotation — social without needing a whole team.",
    guide:{
      whyItFits:"Pickleball is low-impact, quick to understand, and social by design. Open play rotates people through short games, so arriving alone feels less awkward than in many sports.",
      howToStart:'Find an open play session at a local court. Most parks have converted tennis courts. Borrow a paddle at first.',
      equipment:[{item:'Pickleball paddle',tier:'need'},{item:'Pickleballs',tier:'need'},{item:'Court shoes',tier:'nice'}],
      adaptive:{
        low_budget:'Paddles cost $20–40 for a decent beginner option. Many parks provide loaner paddles at open play.',
        no_equipment:'Ask at open play sessions — loaner paddles are very common.',
        shy_solo:'Open play is social, but wall practice works if you want to learn the paddle feel first.',
        social_team:'Open play rotates partners and opponents, so you meet people without having to organise a team.',
        limited_time:'A single open play session has games of 5–7 minutes each. Drop in for 30 minutes.',
        competitive:'USA Pickleball runs tournaments for every skill level including beginners.',
      },
      checklist:['Find an open play session near you','Borrow a paddle and join a game','Learn the basic serve and kitchen rule','Come back a second time — the first game is always confusing']
    }
  },

  badminton: {
    id:'badminton', name:'Badminton', icon:'🏸',
    fitTags:['social_team','competitive','low_budget'],
    pitch:"Fast reflexes, small space, easy to find a game — surprisingly intense once you play well.",
    guide:{
      whyItFits:'Badminton is deceptively demanding at high levels but forgiving enough to be fun from day one. Drop-in community sessions are common.',
      howToStart:'Find a community hall or gym that runs badminton drop-in nights. Bring a racket or borrow one.',
      equipment:[{item:'Badminton racket ($15–25)',tier:'need'},{item:'Non-marking court shoes',tier:'need'},{item:'Shuttlecocks',tier:'need'}],
      adaptive:{
        low_budget:'A racket costs $15–25. Many drop-in sessions provide shuttles for free.',
        no_equipment:'Community hall sessions usually have spare rackets. Ask ahead.',
        shy_solo:'Rally alone against a wall to build basic technique.',
        social_team:'Badminton drop-in sessions are very social — you rotate opponents constantly.',
        limited_time:'A game to 21 points often takes 15–20 minutes, so a short drop-in can still feel satisfying.',
        competitive:'Badminton England and USAB both run beginner tournament pathways.',
      },
      checklist:['Find a local badminton drop-in session','Get a basic racket or borrow one','Attend your first session','Learn the serve and basic court lines']
    }
  },

  ultimate_frisbee: {
    id:'ultimate_frisbee', name:'Ultimate Frisbee', icon:'🥏',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Running, passing, and spirit-of-the-game culture — a disc is the only special gear.",
    guide:{
      whyItFits:'Ultimate frisbee combines open-field running with quick passing and self-refereed play. The culture puts teaching and sportsmanship close to the centre of the game.',
      howToStart:"Find a local ultimate club or pickup game. Most cities have a club that runs beginner sessions. A disc costs $10.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Message ahead or arrive early.',
        shy_solo:'It is harder to practise alone, but throwing at a target or fence builds useful touch.',
        social_team:'Spirit-of-the-game culture makes teaching, fairness, and post-game hangs part of the sport.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get an ultimate disc ($10)','Find a local club or pickup game','Attend your first session','Learn a basic backhand and forehand grip']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythmic, low-impact, and quietly intense — start on an indoor rower before the boat.',
    guide:{
      whyItFits:"Rowing feels technical and meditative at once: legs, back, arms, breathe, repeat. Club rowing also has a strong learn-to-row culture for adults.",
      howToStart:"Find a local rowing club and ask about their learn-to-row programme. Indoor rowing (ergs) at a gym is a zero-barrier first step.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide boats, oars, and safety gear for learn-to-row sessions.',
        shy_solo:'Indoor rowing on an erg is solo and predictable. Many gyms have one tucked near the cardio machines.',
        social_team:'Crew boats require timing and trust, so rowing clubs tend to become social quickly.',
        limited_time:'A 20-minute erg session can be plenty if you keep the stroke smooth.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a local rowing club or gym with ergs','Try a 20-minute indoor rowing session','Look up learn-to-row programmes near you','Attend a beginner club session']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:"Patient, precise, and solo-friendly — the driving range is the least awkward doorway.",
    guide:{
      whyItFits:"Golf rewards patience, precision, and repeatable calm. A driving range lets you learn the swing without keeping score or holding up a group.",
      howToStart:"Go to a driving range. Rent clubs if you don't have them. Focus on making contact — nothing else matters on day one.",
      equipment:[{item:'Golf clubs (rent to start)',tier:'rent'},{item:'Golf balls',tier:'need'},{item:'Golf shoes',tier:'later'}],
      adaptive:{
        low_budget:'Driving ranges charge $10–20 for a bucket of balls. Club rental is usually $5–10 extra. Many municipal courses are under $25.',
        no_equipment:"Driving ranges and courses rent clubs. You don't need to own anything to start.",
        shy_solo:"Driving ranges are naturally solo. Pick a bay, hit your bucket, and keep the expectations low.",
        social_team:'Golf leagues and four-ball formats are social. Many clubs run mixer events.',
        limited_time:"A driving range session takes 45–60 minutes. You don't need a full 18-hole round to start.",
        competitive:'Every golf club has a handicap system that makes fair competition possible at any level.',
      },
      checklist:['Find a nearby driving range','Book a bucket of balls and rent clubs','Focus only on making clean contact','Look up a local municipal course for a short round']
    }
  },

  gym_training: {
    id:'gym_training', name:'Gym Training', icon:'🏋️',
    fitTags:['shy_solo','high_energy'],
    pitch:'Measurable, flexible, and less mysterious once you have one simple routine.',
    guide:{
      whyItFits:"Gym training works for people who like visible progress. You repeat a few movements, write down what you did, and slowly make the next session easier or stronger.",
      howToStart:'Use a trial pass or beginner orientation. On day one, choose 4-5 simple movements, go light, and leave with notes instead of soreness as the goal.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 30-minute full-body session is enough when the routine is simple and repeatable.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Sign up for a gym or find one with a free trial','Do a 30-minute full-body workout','Log what you did so you can repeat it','Go back within a few days while the routine is still familiar']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'Strength training with almost no setup — scale every move to where you are today.',
    guide:{
      whyItFits:"Calisthenics is portable and honest. Incline push-ups, squats, planks, and hangs can grow with you without a gym membership.",
      howToStart:'Start with a basic bodyweight circuit: incline push-ups, squats to a chair, a short plank, and an easy mobility move. Do it 2-3 times this week.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor, wall, or sturdy chair is enough to start.',
        shy_solo:'It can be done entirely alone at home or in a quiet park corner.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is useful if you keep the reps controlled.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete: incline push-ups, chair squats, and a short plank','Find a park with pull-up bars near you','Do the routine 2-3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny table, huge reflex game — playful at first, tactical once you get hooked.',
    guide:{
      whyItFits:'Table tennis is deceptively deep. Speed, spin, and placement create a game that rewards both quick reflexes and tactical thinking.',
      howToStart:'Find a table at a community centre, pub, or park. Borrow a paddle. Just rally — keep the ball on the table for as long as possible.',
      equipment:[{item:'Table tennis paddle ($15–25)',tier:'need'},{item:'Table tennis balls (pack of 6)',tier:'need'}],
      adaptive:{
        low_budget:'A decent paddle costs $15–20. Many community centres have free tables.',
        no_equipment:'Community centres and pubs often have paddles and balls available.',
        shy_solo:'Solo practice against a wall (ping pong rebound board) is effective and cheap.',
        social_team:'Round-the-table (group game) makes table tennis very social.',
        limited_time:'A match can take 10-15 minutes, which makes it easy to fit into a lunch break.',
        competitive:'USATT and national associations have beginner tournament pathways.',
      },
      checklist:['Find a table tennis table near you (community centre, park)','Borrow or get a basic paddle','Rally with someone for 20 minutes','Learn the basic serve rule']
    }
  },

  lacrosse: {
    id:'lacrosse', name:'Lacrosse', icon:'🥍',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Fast breaks, stick skills, and team tempo — best entered through a beginner club.',
    guide:{
      whyItFits:'Lacrosse combines field running with stick handling and quick decisions. Wall ball gives you a solo way in, while beginner clubs teach the contact and rules safely.',
      howToStart:'Find a local lacrosse club or recreational league and ask about beginner programmes or loaner gear. Practise stick skills alone against a wall between sessions.',
      equipment:[{item:'Lacrosse stick',tier:'need'},{item:'Helmet and pads (full lacrosse)',tier:'need'},{item:'Cleats',tier:'need'}],
      adaptive:{
        low_budget:'Used equipment is widely available. Box lacrosse needs less gear than field.',
        no_equipment:'Some club programmes loan equipment to beginners for the first season.',
        shy_solo:'Wall ball (throwing against a wall) is a legitimate solo lacrosse practice.',
        social_team:'Lacrosse clubs tend to be close-knit because the sport depends on communication and shared reps.',
        limited_time:'Wall ball for 20 minutes is a useful skill session.',
        competitive:'USA Lacrosse runs leagues and tournaments at every level.',
      },
      checklist:['Find a local lacrosse club or league','Get basic equipment or ask about loans','Practise wall ball for 20 minutes','Attend a beginner club practice']
    }
  },

  rugby: {
    id:'rugby', name:'Rugby', icon:'🏉',
    fitTags:['social_team','high_energy','competitive'],
    pitch:"Big camaraderie, clear roles, and a safer first step through touch or tag rugby.",
    guide:{
      whyItFits:"Rugby has a real club culture, but beginners do not need to start with full contact. Touch and tag formats teach spacing, passing, and confidence first.",
      howToStart:'Find a local rugby club and ask about their beginner, touch, or tag rugby programme before showing up.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Clubs almost always have spare gear for beginners.',
        shy_solo:'Tag or touch rugby lowers the intimidation, but this is still a team-first sport.',
        social_team:'Rugby clubs are among the most social in all of sport — the post-match tradition is famous.',
        limited_time:'Training sessions often run around 90 minutes. Tag or touch sessions may be shorter.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about tag rugby or beginner programmes','Show up on a Saturday morning','Get a mouthguard before your first contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Fast chess with footwork — unusual, tactical, and easier to try than it looks.',
    guide:{
      whyItFits:'Fencing is chess at speed. It rewards tactical thinking, reflexes, and composure under pressure. Clubs almost universally provide all equipment to beginners.',
      howToStart:'Find a local fencing club and attend a beginner class. Clubs provide all equipment for lessons.',
      equipment:[{item:'Fencing mask',tier:'club'},{item:'Jacket and glove',tier:'club'},{item:'Blade (after lessons)',tier:'later'}],
      adaptive:{
        low_budget:'Clubs provide equipment. Your cost is club membership and lesson fees.',
        no_equipment:'Everything is provided by the club for beginners.',
        shy_solo:'Individual weapon drilling and footwork are solo-friendly.',
        social_team:'Fencing clubs are often small enough that people notice and help new faces.',
        limited_time:'A lesson runs 45–60 minutes. Private lessons are even shorter.',
        competitive:'USA Fencing runs competitions at every level including absolute beginners.',
      },
      checklist:['Find a local fencing club','Attend a beginner class (club provides equipment)','Learn the three basic commands: en garde, ready, fence','Go back at least 3 times before deciding']
    }
  },

  softball: {
    id:'softball', name:'Softball', icon:'🥎',
    fitTags:['social_team','competitive'],
    pitch:'A social team night with bats, gloves, and a softer landing than hardball.',
    guide:{
      whyItFits:"Softball works well for adults because the game has downtime to talk, clear roles, and plenty of recreational leagues that place solo players.",
      howToStart:"Search your city's parks department for adult softball leagues. Many don't require you to have a team — they'll place you on one.",
      equipment:[{item:'Softball glove',tier:'need'},{item:'Bat (often provided by league)',tier:'nice'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Leagues often have shared bats. A used glove: $15–25.',
        no_equipment:'Many leagues have loaner equipment. Ask when registering.',
        shy_solo:'Batting practice at a cage is a solo option to build confidence.',
        social_team:'Co-ed adult softball leagues are explicitly social. Post-game outings are common.',
        limited_time:'Games run 60–90 minutes. One game per week is the normal commitment.',
        competitive:'City-wide recreational tournaments run at the end of most seasons.',
      },
      checklist:['Search your city parks department for adult softball leagues','Register — many will place you on a team','Get a basic glove','Show up to your first game']
    }
  },

  gymnastics: {
    id:'gymnastics', name:'Gymnastics', icon:'🤸',
    fitTags:['high_energy','shy_solo','competitive'],
    pitch:'Body control, mobility, and bravery — adult beginner classes start with basics, not backflips.',
    guide:{
      whyItFits:'Gymnastics builds body control that carries into almost everything else. Adult beginner classes focus on rolls, mobility, shapes, and safe progressions before big skills.',
      howToStart:'Find a gymnastics club that offers adult classes. Many do. Start with floor work and basic rolls — no apparatus needed at first.',
      equipment:[{item:'Comfortable fitted athletic clothes',tier:'need'},{item:'Bare feet or gymnastics shoes',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Gymnastics clubs build community through shared warm-ups, spotting, and celebrating tiny skill wins.',
        limited_time:'A class usually runs 60-90 minutes because warm-up and safe progressions matter.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Attend your first class','Learn a basic forward roll and cartwheel','Come back — gymnastics rewards consistency']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, gentle slopes, and a lesson that turns sliding into control.',
    guide:{
      whyItFits:'Skiing can feel intimidating, but beginner lessons break it into small pieces: stopping, turning, loading lifts, and reading terrain. The mountain gets friendlier once you can control speed.',
      howToStart:'Book a beginner lesson at a ski resort — do not self-teach. Rentals cover the technical gear, and a smaller local hill is often the least stressful first try.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is enough for a first taste without exhausting yourself.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Practise stopping and linking gentle turns','Ask about a return discount']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'Awkward at first, unforgettable when it clicks — judge it after more than one lesson.',
    guide:{
      whyItFits:"Snowboarding has a distinct culture and a sideways flow that feels different from anything else. The first day often includes falls, so a lesson and patience matter.",
      howToStart:'Book a beginner snowboard lesson. Wear wrist guards, learn to fall safely, and give yourself at least two tries before deciding.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practise at your own pace once you have the basics from a lesson.',
        social_team:'Snowboard parks have a social, helpful culture.',
        limited_time:'A 2-3 hour lesson is plenty for a first attempt.',
        competitive:'Halfpipe, slopestyle, and boardercross have structured pathways at most resorts.',
      },
      checklist:['Book a beginner snowboard lesson','Rent wrist guards — not optional','Get through your first 2-hour lesson','Go back a second time before deciding']
    }
  },

  surfing: {
    id:'surfing', name:'Surfing', icon:'🏄',
    fitTags:['high_energy','shy_solo'],
    pitch:'Balance, patience, and ocean timing — even a tiny wave can feel huge.',
    guide:{
      whyItFits:'Surfing mixes physical effort with reading the ocean. A surf school gives you foam boards, safer waves, and feedback so the first session is exciting instead of reckless.',
      howToStart:'Book a lesson at a surf school — they provide foam boards and choose safe beginner waves. Do not self-teach in open ocean.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is enough for a first experience.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a 2-hour lesson','Catch whitewater safely — standing is a bonus','Return for a second session while the feel is fresh']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, instant feedback, and gear you can borrow before buying a bow.',
    guide:{
      whyItFits:'Archery is calm but not passive. Every arrow tells you something about posture, breath, and focus, and most clubs provide equipment while you learn.',
      howToStart:"Find a local archery club and ask about beginner sessions. Equipment is provided — don't buy anything yet.",
      equipment:[{item:'Recurve bow',tier:'club'},{item:'Arrows',tier:'club'},{item:'Arm guard and finger tab',tier:'club'},{item:'Own bow (after 2–3 months)',tier:'later'}],
      adaptive:{
        low_budget:"Clubs provide all equipment. Session fee: $10–20. Don't buy anything until you're committed.",
        no_equipment:'The club provides bows, arrows, tabs, and arm guards for beginner sessions.',
        shy_solo:'Deeply individual. You focus on your own targets and progress.',
        social_team:'Archery clubs are calm but social; club nights give people time to talk between rounds.',
        limited_time:'A session runs 60–90 minutes. Indoor ranges are weather-independent.',
        competitive:'USA Archery has structured competition pathways from beginner to Olympic level.',
      },
      checklist:['Find a local archery club','Book a beginner intro session','Learn the basic stance and anchor point','Complete your first 10-arrow round']
    }
  },

  cheer: {
    id:'cheer', name:'Cheerleading', icon:'📣',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'High-energy teamwork with jumps, dance, stunts, and a serious practice commitment.',
    guide:{
      whyItFits:'Competitive cheerleading blends tumbling, stunting, jumping, and dance at high intensity. The best beginner teams teach foundations carefully and make the commitment clear up front.',
      howToStart:'Find a local All-Star cheer gym or community programme and ask about true beginner teams, trial practices, and costs before committing.',
      equipment:[{item:'Athletic wear with full range of motion',tier:'need'},{item:'Cheer shoes (flexible, cross-training)',tier:'need'},{item:'Team uniform (provided by gym)',tier:'later'}],
      adaptive:{
        low_budget:'All-Star cheer has fees. Look for school squads or community programmes as lower-cost entry.',
        no_equipment:'Gyms provide mats and all equipment. You need shoes and athletic wear.',
        shy_solo:"Cheerleading is entirely team-based. Not ideal if you want to start alone.",
        social_team:"The team culture is strong because routines depend on trust, timing, and showing up for each other.",
        limited_time:'Practices run 2–3 hours. This sport requires a real time commitment.',
        competitive:'All-Star cheer has a full competition circuit from Levels 1–7 with nationals and worlds.',
      },
      checklist:['Find a local All-Star cheer gym','Attend an open house or trial practice','Learn a basic cheer jump','Ask about the team schedule and competition calendar']
    }
  },

}

// Mark popular sports
Object.values(SPORTS).forEach(s => { if (!s.category) s.category = 'popular' })

// Niche sports — searchable, discoverable, never recommended by the quiz
const NICHE_SPORTS = {
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Moving through a city like an obstacle course — climbing, jumping, and vaulting over things you usually walk past.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Jumping out of a plane with an instructor strapped to your back. A tandem first jump needs zero experience.' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Flying off a hill under a fabric wing, steered like a kite. Tandem flights are a low-commitment first taste.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Hanging beneath a rigid wing and riding air currents. First lessons happen on tiny training hills.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'Drifting wherever the wind takes you in a wicker basket under a giant flame-powered balloon.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'Paddling a small enclosed boat across rivers, lakes, or sea. Rentals start on calm flatwater.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'Paddling an open boat — solo or with a partner. Most rivers and lakes have a rental dock.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Standing on a big floating board and paddling across calm water. Surprisingly meditative, sneakily core-burning.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'Riding a small board pulled behind a boat — basically snowboarding on water.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Riding a board on water powered by a giant steerable kite. Steep learning curve, big payoff.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'A surfboard with a sail bolted on. Old-school, harder than it looks, deeply rewarding.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Breathing underwater with a tank, exploring reefs and wrecks. Open Water cert takes a weekend.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'Diving on a single breath. More mental than physical — calm wins over strong.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Swim, tread water, throw a ball into a goal — brutal cardio in a pool.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'Twenty paddlers in a long boat moving as one to a drumbeat. Beginner-friendly clubs welcome anyone.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Skiing across flat or rolling terrain — basically running in snow with sticks.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Gliding on ice. Public sessions at most rinks let you rent skates and just go.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Spinning, jumping, and dancing on ice. Adult learn-to-skate programs exist in most cities.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Sliding granite stones on ice with brooms. Strangely tactical. Most clubs run beginner leagues.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Skating with sticks chasing a puck. Adult beginner leagues exist — though the gear list is long.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Walking on snow with oversized footwear. Hiking, but where deep snow would normally stop you.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'A grappling martial art focused on throws. Beginners spend their first weeks learning to fall safely.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling where a smaller person can submit a bigger one with technique. Strong gym culture.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Striking martial art with deep tradition. Classes follow a clear belt-by-belt path.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Korean kicking-focused martial art. High kicks, big jumps, structured progression.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Thai kickboxing using fists, elbows, knees, and shins. Tough, addictive, very fit-making.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punches and kicks on bags and pads. Most gyms run no-contact beginner classes.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Israeli self-defense system focused on real-world threats. Practical over pretty.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Brazilian martial art that looks like dance, played in a circle to live music.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'Martial art that redirects an attacker\'s force. Calm, flowing, technical.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Mixed martial arts — striking and grappling. Most gyms run no-spar fundamentals classes.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Japanese sword fighting with bamboo swords and armor. Very disciplined, very loud.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'Tricks and racing on a small, tough bike. Skateparks usually welcome BMX too.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Trail riding on a sturdy bike. Most cities have beginner trails and rental fleets.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Full-contact roller skating on a banked or flat track. Most leagues run "fresh meat" beginner programs.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Rollerblades on bike paths, parks, and smooth pavement. The first win is a controlled stop.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'A long skateboard for cruising and carving. Less about tricks, more about flow.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'Golf with frisbees. Most courses are free public parks. One of the cheapest sports anywhere.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Riding a horse, taught from the basics. Lesson barns provide everything for first sessions.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Hockey on horseback with mallets. Some clubs run beginner polo schools with horses provided.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'A board on a wall and three darts. Pubs, local leagues, and world championships — all of it.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Roll heavy biased balls toward a target on a manicured green. Quietly competitive, often delightful.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules. Toss metal balls toward a small jack. Public squares everywhere in summer.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Toss bean bags into a hole on an angled board. Easy to set up in a backyard or park.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Climbing short, hard problems on padded floors with no rope. The most accessible climbing.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'Walking on a flat webbed line strung between two trees. Surprisingly hard, surprisingly addictive.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing — but structured. Adult trampoline classes teach real somersaults and twists.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run — back to back. Sprint distance keeps the dream within reach.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'Running through forests with a map and compass, finding flagged checkpoints. A puzzle and a workout.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Bat, ball, two stumps, lots of rules. Soft-ball indoor cricket is a quick first taste.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Hockey on grass with curved sticks and a hard ball. Big in many countries, growing in others.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light plastic sticks and a wiffle ball. Fast, chaotic, and easy to sample.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'No-contact basketball cousin played mostly outside the US. Local leagues welcome new players.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'A South Asian tag-and-wrestle game. One person raids while holding their breath, chanting "kabaddi".' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Stacking and unstacking cups in patterns as fast as possible. Yes, there are world championships.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating rounds of chess and boxing. Win by knockout or checkmate.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprinting with a long pole and using it to fling yourself over a high bar.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'Hockey on the bottom of a pool, played holding your breath. As niche as it sounds.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
