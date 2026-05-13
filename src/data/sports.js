const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little nerve. Shoot solo first, join pickup when it feels right.',
    guide:{
      whyItFits:"Basketball gives you a rare mix: solo practice when you want privacy, pickup games when you want people, and free courts in a lot of neighborhoods.",
      howToStart:"Find a public court at a nearby park. Spend a few visits dribbling, shooting close to the rim, and watching the rhythm of pickup before asking to join.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10-20, and busy courts often have someone willing to share.",
        no_equipment:"Head to a busy park court and watch for a bit. If people are friendly, ask whether you can shoot around or join next.",
        shy_solo:"Public courts are normal to use alone. Dribble, shoot close-range, and leave when you've had enough.",
        social_team:"When you're ready, ask \"got next?\" or say you're new and looking for a casual run.",
        limited_time:'A solo shooting session — free throws, layups, dribbling — can fit into 20 minutes.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practice dribbling with both hands for 10 min','Take 20 easy shots close to the rim','Watch a pickup game and ask how joining works']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Simple to start, endlessly skillful later. A ball and a bit of grass are enough.",
    guide:{
      whyItFits:"Soccer is cheap, familiar in most places, and easy to scale from solo touches to casual kickarounds. You do not need to be fit before you begin.",
      howToStart:"Find a park with a pitch or wall. Start with gentle dribbling, toe taps, and wall passes before you worry about juggling or joining a game.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Pickup groups usually share balls, but messaging first removes the awkward guesswork.',
        shy_solo:'Wall passes, toe taps, and gentle dribbling in any park make a real 20-minute first session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — most cities have a few options.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch, wall, or park','Practice toe taps and gentle dribbling for 10 min','Try wall passing for 10 min','Search for a local casual kickaround']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"Quiet focus, quick feet, and a wall can teach you plenty before you find a partner.",
    guide:{
      whyItFits:"Tennis rewards coordination, quick reactions, and mental toughness. Wall rallying gives you a legitimate solo workout before you need an opponent.",
      howToStart:"Find a public court or practice wall. Use soft, controlled hits first. Comfort with contact matters more than keeping score.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programs.",
        shy_solo:'Wall rallying is a real solo practice. Start with 15-20 minutes and keep the ball speed easy.',
        social_team:'Most tennis clubs run beginner group clinics. USTA has local adult programs.',
        limited_time:'30 minutes of wall rallying is a full session.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public tennis court or wall near you','Spend 15-20 min hitting softly for consistency','Get or borrow a basic racket','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'High-energy rallies, quick laughs, and a sport where one good pass feels amazing.',
    guide:{
      whyItFits:"Volleyball is fast, technical, and deeply social. Beach courts lower the barrier because games often form around whoever is there.",
      howToStart:"Find an open gym night, beginner clinic, or beach court. Focus on passing first, and let people know you are new.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights often cost $3–5, and balls are usually shared.',
        no_equipment:'Open gym nights and beach courts usually have balls. Ask before buying anything.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" — groups are active and welcoming.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night, clinic, or beach court','Practice gentle self-bumps — 20 reps','Attend one beginner-friendly session','Search for recreational leagues if it clicks']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'A slower burn: clean contact, sharper throws, and the tiny thrill of timing it right.',
    guide:{
      whyItFits:'Baseball rewards focus and precision. Every swing, throw, and fielding decision asks for attention. Great for people who like individual skill within a team context.',
      howToStart:'Find a batting cage — many parks have them for $1–2 per token. Throw a tennis ball against a wall to build glove reflexes.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage session lets you start privately. No team needed on day one.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'20 minutes at a batting cage is a real session. Focus on clean contact.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage near you','Take 20-30 easy swings — contact over power','Practice throwing with a partner or wall','Look up local recreational softball leagues']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Routes, quick decisions, and team energy without the full-contact football barrier.',
    guide:{
      whyItFits:"Flag football has the strategy and teamwork of tackle football without the contact or equipment cost. Many rec leagues are beginner-friendly.",
      howToStart:"Start by practicing easy throws and catching. Then look for a flag league, open play, or beginner-friendly rec group.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practice spiral throwing against a fence or wall alone.',
        social_team:'Flag football leagues are among the most social recreational sports. Search Meetup.',
        limited_time:'A 20-minute throwing, catching, or route-walking session is enough for a first practice.',
        competitive:'Flag tournaments run frequently and are genuinely competitive.',
      },
      checklist:['Get a football or find one to borrow','Practice easy throws and catches','Watch one flag game and note the positions','Search for a local beginner-friendly league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:"No scoreboard, no booking, no audience. Just a route, your breath, and small wins.",
    guide:{
      whyItFits:"Running is easy to start because you control the pace. Walk breaks count, short routes count, and progress is simple to notice.",
      howToStart:"Start with 20 minutes of alternating easy jogging and walking. Keep it conversational and stop before it becomes a punishment.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need comfortable shoes and somewhere safe to move.",
        shy_solo:'Running alone is normal. Plenty of runners prefer it.',
        social_team:'Running clubs are among the most welcoming groups in sport. Search "running club [your city]".',
        limited_time:'A 20-minute walk-run a few times a week is a legitimate beginner plan.',
        competitive:'Local 5K races are common and many welcome first-timers.',
      },
      checklist:['Complete a 20-minute walk-run','Find your nearest track or park path','Keep one note on how it felt','Look up a local 5K only if a goal sounds motivating']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Low-impact, full-body effort with a quiet lane between you and the rest of the world.',
    guide:{
      whyItFits:"Swimming is joint-friendly, calming, and technical in a way that rewards patience. You can make it easy or intense without changing sports.",
      howToStart:'Book a lane swim session. Start with short lengths, long rests, and relaxed breathing rather than forcing a perfect stroke.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles are enough to start.",
        shy_solo:"Lane swimming is one of the most solitary sports — you're in your own lane, focused entirely on yourself.",
        social_team:'Masters Swimming programs are adult lap groups at all levels — welcoming to beginners.',
        limited_time:"20 minutes of easy lengths with generous rests is a full first session.",
        competitive:'USMS (Masters) meets are beginner-friendly. Enter open events and chase your own time.',
      },
      checklist:['Find your nearest pool with lane swim','Book a session and swim a few short lengths','Rest as much as you need between attempts','Look up adult swim groups if you want coaching']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Footwork, rhythm, and bag work before sparring ever needs to enter the chat.',
    guide:{
      whyItFits:"Boxing builds coordination, fitness, and composure quickly, but a good gym keeps beginners on basics before contact.",
      howToStart:"Find a boxing gym — don't try to learn alone. Spend the first month on stance, jab, cross, and footwork. Don't spar until your coach says you're ready.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms have a strong training community. Training partners come quickly.',
        limited_time:'A 30-minute bag workout — warm-up, 3×3-min rounds, cool-down — is plenty for a session.',
        competitive:'USA Boxing and Golden Gloves have novice pathways. Ask your coach when fundamentals and safety are ready.',
      },
      checklist:['Find a local boxing gym and ask about a beginner trial','Borrow gloves if possible and buy wraps later','Learn your stance and jab from a coach','Practice 2-3 short shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Raw, technical, humbling, and best started in a coached room with good mats.',
    guide:{
      whyItFits:"Wrestling rewards effort, body control, and patience with hard things. It is demanding, so the right beginner room matters.",
      howToStart:"Find a wrestling club or school program — you cannot learn this safely without a coach and a mat.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programs and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A practice session runs 60–90 minutes. There's no shorter version that works.",
        competitive:'Ask your club coach about entry-level tournaments once you can drill and spar safely.',
      },
      checklist:['Find a local wrestling club or YMCA program','Attend one open practice','Learn basic stance from a coach','Ask about beginner training schedule']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A calmer way to build strength, mobility, and a better relationship with your body.',
    guide:{
      whyItFits:"Yoga meets you where you are. No score, no opponent, and no need to be flexible before you begin.",
      howToStart:"Find a free YouTube class (Yoga with Adriene is excellent for beginners) and do it in your living room. No studio needed for months.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are genuinely excellent. A mat costs $10–20. That's your full startup cost.",
        no_equipment:'You can practice on carpet without a mat to start.',
        shy_solo:'This is one of the most private sports you can do. Just you and a YouTube video.',
        social_team:'Studio classes are social and welcoming — most have beginner sessions.',
        limited_time:'A 20-minute session is enough to count. Start there.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (15-20 min)",'Complete your first session without forcing any pose','Practice 2 times this week',"Notice what feels tight — that's useful information"]
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:"Exercise that feels like getting somewhere. Solo loops, group rides, and plenty of fresh air.",
    guide:{
      whyItFits:"Cycling is easy on joints, strong for cardio, and more exploratory than a treadmill. You decide whether it is quiet solo time or a group ride.",
      howToStart:'Borrow or find a used bike. Pick a flat route for your first ride. Focus on comfort and consistency before speed.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50–150. Check your city for bike libraries or loan programs.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programs before buying anything.',
        shy_solo:'Cycling alone is normal. Start with familiar streets or protected paths.',
        social_team:'Group rides run in most cities. Search for your local cycling club — most have beginner-paced rides.',
        limited_time:"A 20-minute loop around your neighborhood is a real session. Distance doesn't matter at first.",
        competitive:'Local cycling clubs have timed rides and beginner races. Strava segments give you something to chase solo.',
      },
      checklist:['Borrow or find a used bike','Find a flat, safe 15-20 minute route','Complete your first easy ride','Look for a beginner-paced group ride if you want people']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'A puzzle you solve with your body, with rental shoes and soft mats for your first try.',
    guide:{
      whyItFits:"Climbing blends problem-solving, grip strength, balance, and a surprisingly supportive gym culture. You can try it without owning any gear.",
      howToStart:"Visit an indoor climbing gym. Rent shoes and start with the easiest bouldering problems, taking long rests between attempts.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent everything. Just show up.',
        shy_solo:'Bouldering works solo — no partner needed, no ropes, just you and the wall.',
        social_team:'Climbing gyms have an unusually welcoming community. People actively help each other.',
        limited_time:'A 45-minute bouldering visit, including rests, is enough for a first session.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent shoes','Try easy boulders for up to 45 minutes','Ask a staff member to show you one beginner route']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"A low-pressure reset outside: pick an easy trail, bring water, and let the day get bigger.",
    guide:{
      whyItFits:"Hiking turns walking into a little adventure. You can start gently, choose your distance, and get the mental reset without a competitive frame.",
      howToStart:'Find a local trail on AllTrails (free app). Pick something rated "easy" and around 1-3 miles for your first outing.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need comfortable shoes, water, and a charged phone. You probably have the basics already.',
        shy_solo:'Solo hiking is common. Start with popular, well-marked trails and tell someone your plan.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 45-90 minute loop is a real hike. You don't need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download the AllTrails app','Find an easy trail near you','Complete a 1-3 mile hike',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music makes the workout disappear. Pick a style, expect awkwardness, keep moving.',
    guide:{
      whyItFits:'Dance brings music, movement, and personality into the same room. Styles range from solo-friendly hip-hop to social salsa and swing.',
      howToStart:'Find a beginner class in the style that interests you most. Salsa, swing, and hip-hop all have a strong beginner class culture.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centers often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is enough for a session. Most studios do drop-ins.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or free intro session','Attend your first class','Go back a second time — the first class is allowed to be awkward']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Clear progression, coached basics, and a room where respect matters as much as effort.',
    guide:{
      whyItFits:'Martial arts give beginners structure: clear basics, repeatable drills, visible progression, and coaches who expect new people.',
      howToStart:'Pick one style and find a local club. Brazilian jiu-jitsu (BJJ) and karate have particularly good beginner cultures. Attend a trial class.',
      equipment:[{item:'Gi / uniform (club may loan one)',tier:'later'},{item:'Comfortable athletic wear',tier:'need'},{item:'Mouthguard',tier:'later'}],
      adaptive:{
        low_budget:'Many clubs have sliding-scale dues or reduced first-month rates. Ask.',
        no_equipment:'Most clubs loan a gi to new members for the first few sessions.',
        shy_solo:"Drilling technique alone or in pairs is the core of most martial arts. You won't be thrown into sparring immediately.",
        social_team:"Martial arts dojos have a strong community — you'll know people quickly.",
        limited_time:'A standard class runs 60 minutes. Most people go 2–3 times per week.',
        competitive:'Most martial arts have competition pathways. A good coach will tell you when that step makes sense.',
      },
      checklist:['Pick a martial art style (BJJ, karate, judo, muay thai)','Find a local club and book a trial class','Attend your first class with no expectations','Go back at least twice before deciding']
    }
  },

  skateboarding: {
    id:'skateboarding', name:'Skateboarding', icon:'🛹',
    fitTags:['shy_solo','high_energy'],
    pitch:'Self-directed, creative, and humbling in the best way. Flat ground is enough to begin.',
    guide:{
      whyItFits:"Skateboarding has no fixed schedule and no required team. You progress through tiny personal wins, usually on your own timeline.",
      howToStart:"Get a real beginner board, not a toy-store setup. Find a smooth surface and learn to push, turn, and stop before anything else.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A real beginner board is usually $60–80. Avoid cheap toy-store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'30 minutes of focused practice on pushing, turning, or one small skill is enough.',
        competitive:'Amateur skateboarding competitions are genuinely accessible at local skate parks.',
      },
      checklist:['Get a real beginner skateboard','Find a smooth flat surface to practice on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Quick games, low friction, and a social scene that actually expects newcomers.",
    guide:{
      whyItFits:"Pickleball is low-impact, quick to learn, and built around rotation. Open play makes showing up alone much less awkward.",
      howToStart:'Find an open play session at a local court. Most parks have converted tennis courts. Borrow a paddle at first.',
      equipment:[{item:'Pickleball paddle',tier:'need'},{item:'Pickleballs',tier:'need'},{item:'Court shoes',tier:'nice'}],
      adaptive:{
        low_budget:'Paddles cost $20–40 for a decent beginner option. Many parks provide loaner paddles at open play.',
        no_equipment:'Ask at open play sessions — loaner paddles are very common.',
        shy_solo:'Open play is social by design, but you can practice solo against a wall.',
        social_team:'Open play is unusually social. Rotational games mean you meet a lot of people quickly.',
        limited_time:'A single open play session has games of 5–7 minutes each. Drop in for 30 minutes.',
        competitive:'USA Pickleball runs tournaments for every skill level including beginners.',
      },
      checklist:['Find an open play session near you','Ask about borrowing a paddle before buying one','Learn the basic serve and kitchen rule','Come back a second time — the first game can be confusing']
    }
  },

  badminton: {
    id:'badminton', name:'Badminton', icon:'🏸',
    fitTags:['social_team','competitive','low_budget'],
    pitch:"Light racket, tiny court, huge speed. Casual at first, wildly sharp once rallies click.",
    guide:{
      whyItFits:'Badminton is forgiving enough for day one and fast enough to stay interesting for years. Drop-in community sessions are common.',
      howToStart:'Find a community hall or gym that runs badminton drop-in nights. Bring a racket or borrow one.',
      equipment:[{item:'Badminton racket ($15–25)',tier:'need'},{item:'Non-marking court shoes',tier:'need'},{item:'Shuttlecocks',tier:'need'}],
      adaptive:{
        low_budget:'A racket costs $15–25. Many drop-in sessions provide shuttles for free.',
        no_equipment:'Community hall sessions usually have spare rackets. Ask ahead.',
        shy_solo:'Rally alone against a wall to build basic technique.',
        social_team:'Badminton drop-in sessions are very social — you rotate opponents constantly.',
        limited_time:'A game to 21 points takes 15–20 minutes. Drop-in sessions are perfect for a quick game.',
        competitive:'Badminton England and USAB both run beginner tournament pathways.',
      },
      checklist:['Find a local badminton drop-in session','Get a basic racket or borrow one','Attend your first session','Learn the serve and basic court lines']
    }
  },

  ultimate_frisbee: {
    id:'ultimate_frisbee', name:'Ultimate Frisbee', icon:'🥏',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Running, throws, and a culture that usually takes explaining the game seriously.",
    guide:{
      whyItFits:'Ultimate combines soccer-like running with basketball-like spacing. Because the game is self-refereed, sportsmanship is baked into the culture.',
      howToStart:"Find a local ultimate club or pickup game. Most cities have a club that runs beginner sessions. A disc costs $10.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Just show up.',
        shy_solo:'Hard to practice alone but throwing against a target or fence works.',
        social_team:'Ultimate has a reputation for welcoming new players because "spirit of the game" is part of the culture.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get an ultimate disc ($10)','Find a local club or pickup game','Attend your first session','Learn the basic backhand throw before worrying about hucks']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythm, legs, lungs, and teamwork. Start on an indoor rower or a learn-to-row day.',
    guide:{
      whyItFits:"Rowing is low-impact, full-body, and rhythmic. Clubs often have learn-to-row programs, while indoor ergs let you test the movement first.",
      howToStart:"Find a local rowing club and ask about their learn-to-row program. Indoor rowing (ergs) at a gym is a zero-barrier first step.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide everything on the water. Just show up.',
        shy_solo:'Indoor rowing (erg) works well solo. Many gyms have machines.',
        social_team:'Rowing clubs are strong social communities — crew boats require teamwork.',
        limited_time:'A 20-minute erg piece is a full workout.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a local rowing club or gym with ergs','Try a 20-minute indoor rowing session','Look up learn-to-row programs near you','Attend a beginner club session']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:"Small adjustments, quiet focus, and the satisfying sound of one clean strike.",
    guide:{
      whyItFits:"Golf rewards patience and precision. A driving range lets you practice solo for as long as you want. Courses are available at many budget levels.",
      howToStart:"Go to a driving range. Rent clubs if you don't have them. Focus on making contact — nothing else matters on day one.",
      equipment:[{item:'Golf clubs (rent to start)',tier:'rent'},{item:'Golf balls',tier:'need'},{item:'Golf shoes',tier:'later'}],
      adaptive:{
        low_budget:'Driving ranges charge $10–20 for a bucket of balls. Club rental is usually $5–10 extra. Many municipal courses are under $25.',
        no_equipment:"Driving ranges and courses rent clubs. You don't need to own anything to start.",
        shy_solo:"Driving ranges and solo rounds are the norm — no one expects you to know anyone.",
        social_team:'Golf leagues and four-ball formats are social. Many clubs run mixer events.',
        limited_time:"A driving range session takes 45–60 minutes. You don't need a full 18-hole round to start.",
        competitive:'Every golf club has a handicap system that makes fair competition possible at any level.',
      },
      checklist:['Find a nearby driving range','Buy a small bucket and rent clubs','Focus only on making clean contact','Look up a short municipal course if the range feels good']
    }
  },

  gym_training: {
    id:'gym_training', name:'Gym Training', icon:'🏋️',
    fitTags:['shy_solo','high_energy'],
    pitch:'Measurable progress without needing a team, a scoreboard, or perfect confidence.',
    guide:{
      whyItFits:"Weight training and gym-based fitness are among the most measurable activities you can do. You log your weights, you see progress week by week.",
      howToStart:'Try a gym day pass. On day one, do a simple full-body circuit: squat, press, row, hinge. Keep the weights easy.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 30-minute full-body session is enough when done consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Find a gym with a trial or day pass','Complete an easy 30-minute full-body workout','Log your weights so you have a starting point','Schedule a second visit before motivation fades']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'Strength training stripped down: floor space, bodyweight, and steady progress.',
    guide:{
      whyItFits:"Calisthenics requires nothing except your body and a surface. Push-ups, pull-ups, squats, and dips build real functional strength with no gym or gear.",
      howToStart:'Start with an easy bodyweight circuit: squats, incline push-ups, and a short plank. Rest between rounds and do it a few times a week.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor, wall, or sturdy chair is enough.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is enough to build a habit.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete one easy round of squats, incline push-ups, and a short plank','Find a park with pull-up bars near you','Do the routine 2-3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny space, fast hands, quick rallies. Easy to start, surprisingly deep to learn.',
    guide:{
      whyItFits:'Table tennis is deceptively deep. Speed, spin, and placement create a game that rewards both quick reflexes and tactical thinking.',
      howToStart:'Find a table at a community center, pub, or park. Borrow a paddle and just rally gently before worrying about spin.',
      equipment:[{item:'Table tennis paddle ($15–25)',tier:'need'},{item:'Table tennis balls (pack of 6)',tier:'need'}],
      adaptive:{
        low_budget:'A decent paddle costs $15–20. Many community centers have free tables.',
        no_equipment:'Community centers and pubs often have paddles and balls available.',
        shy_solo:'Solo practice against a wall (ping pong rebound board) is effective and cheap.',
        social_team:'Round-the-table (group game) makes table tennis very social.',
        limited_time:'A match takes 10–15 minutes. Perfect for a lunch break.',
        competitive:'USATT and national associations have beginner tournament pathways.',
      },
      checklist:['Find a table tennis table near you (community center, park)','Borrow or get a basic paddle','Rally with someone for 20 minutes','Learn the basic serve rule']
    }
  },

  lacrosse: {
    id:'lacrosse', name:'Lacrosse', icon:'🥍',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Fast feet, stick skills, and team energy, with wall ball as a solo doorway in.',
    guide:{
      whyItFits:'Lacrosse combines running, stick skills, and tactical depth. Box lacrosse or beginner clinics can be a softer entry than full field play.',
      howToStart:'Find a local lacrosse club or recreational league. Many run beginner programs. Stick skills can be practiced alone against a wall.',
      equipment:[{item:'Lacrosse stick',tier:'need'},{item:'Helmet and pads (full lacrosse)',tier:'need'},{item:'Cleats',tier:'need'}],
      adaptive:{
        low_budget:'Used equipment is widely available. Box lacrosse needs less gear than field.',
        no_equipment:'Some club programs loan equipment to beginners for the first season.',
        shy_solo:'Wall ball (throwing against a wall) is a legitimate solo lacrosse practice.',
        social_team:'Lacrosse has a very strong team and club culture.',
        limited_time:'Wall ball for 20 minutes is a useful skill session.',
        competitive:'USA Lacrosse runs leagues and tournaments at every level.',
      },
      checklist:['Find a local lacrosse club or league','Get basic equipment or ask about loans','Practice wall ball for 20 minutes','Attend a beginner club practice']
    }
  },

  rugby: {
    id:'rugby', name:'Rugby', icon:'🏉',
    fitTags:['social_team','high_energy','competitive'],
    pitch:"Big teamwork, bigger camaraderie. Start with tag or touch before contact.",
    guide:{
      whyItFits:"Rugby's culture of respect and inclusivity is real when you find the right club. Tag or touch rugby gives beginners the team feel without immediate contact.",
      howToStart:'Find a local rugby club and ask about their beginner or tag rugby program. Show up on a Saturday.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Many clubs have spare gear for beginners.',
        shy_solo:'Tag rugby (non-contact) removes the intimidation of full contact.',
        social_team:'Rugby clubs are among the most social in all of sport — the post-match tradition is famous.',
        limited_time:'Training sessions run 90 minutes. Tag rugby sessions are often shorter.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about tag rugby or beginner programs','Watch or attend one beginner session','Get a mouthguard before any contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Fast chess with footwork, blades, and protective gear the club usually provides.',
    guide:{
      whyItFits:'Fencing is chess at speed. It rewards tactical thinking, reflexes, and composure under pressure. Clubs almost universally provide all equipment to beginners.',
      howToStart:'Find a local fencing club and attend a beginner class. Clubs provide all equipment for lessons.',
      equipment:[{item:'Fencing mask',tier:'club'},{item:'Jacket and glove',tier:'club'},{item:'Blade (after lessons)',tier:'later'}],
      adaptive:{
        low_budget:'Clubs provide equipment. Your cost is club membership and lesson fees.',
        no_equipment:'Everything is provided by the club for beginners.',
        shy_solo:'Individual weapon drilling and footwork are solo-friendly.',
        social_team:'Fencing clubs are small, tight-knit communities.',
        limited_time:'A lesson runs 45–60 minutes. Private lessons are even shorter.',
        competitive:'USA Fencing runs competitions at every level including absolute beginners.',
      },
      checklist:['Find a local fencing club','Attend a beginner class (club provides equipment)','Learn the three basic commands: en garde, ready, fence','Go back at least 3 times before deciding']
    }
  },

  softball: {
    id:'softball', name:'Softball', icon:'🥎',
    fitTags:['social_team','competitive'],
    pitch:'A team sport with room for rusty adults, shared bats, and post-game hangouts.',
    guide:{
      whyItFits:"Softball is one of the most popular recreational sports for adults. Co-ed leagues are social, competitive enough to be fun, and genuinely welcoming to beginners.",
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
      checklist:['Search your city parks department for adult softball leagues','Ask about free-agent or beginner team placement','Get or borrow a basic glove','Show up to your first practice or game']
    }
  },

  gymnastics: {
    id:'gymnastics', name:'Gymnastics', icon:'🤸',
    fitTags:['high_energy','shy_solo','competitive'],
    pitch:'Body control from the ground up. Adult beginner classes make the impossible feel teachable.',
    guide:{
      whyItFits:'Gymnastics builds strength, mobility, and body awareness that transfers to many other sports. Adult beginner classes are more common than most people realize.',
      howToStart:'Find a gymnastics club that offers adult classes. Many do. Start with floor work and basic rolls — no apparatus needed at first.',
      equipment:[{item:'Gymnastics shorts/leotard',tier:'need'},{item:'Gymnastics shoes or bare feet',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Gymnastics clubs have a strong community and social structure.',
        limited_time:'A class runs 60–90 minutes.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Attend your first class','Learn a basic roll or floor drill safely','Come back — gymnastics rewards consistency']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, mountain views, and a lesson can turn fear into glide surprisingly fast.',
    guide:{
      whyItFits:'Skiing is exhilarating and progress is rapid once you start. Resorts are social environments and beginner lessons are very well structured.',
      howToStart:'Book a beginner lesson at a ski resort — do not self-teach. Rentals cover the gear, and a coach makes the first day safer.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is enough for a first experience.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Practice stopping and turning on beginner terrain','Ask about a return discount if you want another day']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'Expect a humbling first day. The payoff is a smooth, sideways kind of freedom.',
    guide:{
      whyItFits:"Snowboarding has a distinct culture, creative freedom, and a flow state that's genuinely unique. Day one involves falling. Day two is dramatically better.",
      howToStart:'Book a beginner snowboard lesson. Wrist guards are essential. Commit past day one before deciding.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practice at your own pace once you have the basics from a lesson.',
        social_team:'Snowboard parks have a social, helpful culture.',
        limited_time:'A 3-hour morning lesson is plenty for a first session.',
        competitive:'Halfpipe, slopestyle, and boardercross have structured pathways at most resorts.',
      },
      checklist:['Book a beginner snowboard lesson','Rent wrist guards — not optional','Get through your first lesson with patience','Go back a second time before deciding']
    }
  },

  surfing: {
    id:'surfing', name:'Surfing', icon:'🏄',
    fitTags:['high_energy','shy_solo'],
    pitch:'Ocean timing, balance, patience, and the one wave that makes everything worth it.',
    guide:{
      whyItFits:'Surfing combines physical challenge, mental focus, and a unique connection to the ocean. A surf school makes the first attempt safer and less confusing.',
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
      checklist:['Find a surf school near a beginner break','Book a 2-hour lesson','Celebrate any controlled ride, even on your knees','Book another session if the ocean got under your skin']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, visible progress, and a satisfying thunk when your form lines up.',
    guide:{
      whyItFits:'Archery is one of the most accessible precision sports. Calm, technically demanding, and satisfying to improve at. Most clubs provide everything for your first sessions.',
      howToStart:"Find a local archery club and ask about beginner sessions. Equipment is provided — don't buy anything yet.",
      equipment:[{item:'Recurve bow',tier:'club'},{item:'Arrows',tier:'club'},{item:'Arm guard and finger tab',tier:'club'},{item:'Own bow (after 2–3 months)',tier:'later'}],
      adaptive:{
        low_budget:"Clubs provide all equipment. Session fee: $10–20. Don't buy anything until you're committed.",
        no_equipment:'Everything is provided. Just show up.',
        shy_solo:'Deeply individual. You focus on your own targets and progress.',
        social_team:'Archery clubs have a strong community. Club nights and competitions are social.',
        limited_time:'A session runs 60–90 minutes. Indoor ranges are weather-independent.',
        competitive:'USA Archery has structured competition pathways from beginner to Olympic level.',
      },
      checklist:['Find a local archery club','Book a beginner intro session','Learn the basic stance and anchor point','Complete your first 10-arrow round']
    }
  },

  cheer: {
    id:'cheer', name:'Cheerleading', icon:'📣',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Performance, power, timing, and trust. Much more athletic than the stereotype.',
    guide:{
      whyItFits:'Competitive cheer blends tumbling, stunting, jumps, dance, and serious conditioning. The team culture is strong because trust is part of the sport.',
      howToStart:'Find a local All-Star cheer gym and ask about beginner programs. No prior experience required for entry-level teams.',
      equipment:[{item:'Athletic wear with full range of motion',tier:'need'},{item:'Cheer shoes (flexible, cross-training)',tier:'need'},{item:'Team uniform (provided by gym)',tier:'later'}],
      adaptive:{
        low_budget:'All-Star cheer has fees. Look for school squads or community programs as lower-cost entry.',
        no_equipment:'Gyms provide mats and all equipment. You need shoes and athletic wear.',
        shy_solo:"Cheerleading is entirely team-based. Not ideal if you want to start alone.",
        social_team:"One of the strongest team cultures in sport. You'll know your teammates well, quickly.",
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
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Turning stairs, rails, and walls into movement puzzles. Start low, soft, and coached if you can.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'A tandem jump gives you the freefall without pretending you are ready to solo.' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Launching from a hill under a fabric wing. Tandems are the sensible first taste of flight.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'A rigid wing, open air, and early lessons that start on small training hills.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'Slow-motion adventure in a basket: big views, gentle pace, and a little fire overhead.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'A small boat, a paddle, and calm water. Rentals make the first outing low-commitment.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'Open-boat paddling that works solo, with a friend, or as a slow river day.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Standing on calm water looks chill until your core quietly clocks in.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'Board riding behind a boat, with falls, spray, and a very quick lesson in balance.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Wind, water, and a giant kite. Lessons are non-negotiable, but the payoff is huge.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'Sailing meets board sport: awkward at first, then suddenly smooth when the wind clicks.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Learn the safety, then enter a slower underwater world of reefs, wrecks, and bubbles.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'One breath, deep calm, and a sport where relaxation matters more than muscle.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Swimming, treading, passing, and chaos in the best possible pool-shaped way.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'A long boat, a drumbeat, and twenty people learning to move as one.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Snowy trails, steady rhythm, and big cardio without downhill speed anxiety.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Public sessions, rental skates, and the small victory of finding your glide.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Edges, spins, posture, and performance, with adult learn-to-skate classes as the doorway.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Granite stones, sweeping, and sneaky strategy. Most clubs love teaching curious beginners.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Fast skating and team grit, best approached through adult learn-to-play programs.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Winter hiking when the snow gets deep. Quiet, simple, and easier than it looks.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Throws, balance, and learning how to fall safely before anything gets dramatic.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling built on leverage, patience, and a gym culture that drills the basics.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Strikes, forms, and a belt path that gives beginners a clear place to stand.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Kicks, speed, and structure, with plenty of beginner classes before anything flashy.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Pads, shins, elbows, knees, and hard work, usually starting with no-contact fundamentals.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punch-kick combinations on bags and pads. Sweaty, direct, and beginner-class friendly.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Practical self-defense drills with less ceremony and more real-world problem solving.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Martial art, dance, music, and play all happening inside the same circle.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'Calm, circular movement focused on redirecting force instead of meeting it head-on.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Striking plus grappling, best started in a gym that separates fundamentals from sparring.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Bamboo swords, armor, discipline, and loud commitment to every strike.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'Small-bike tricks, jumps, and racing, with skateparks and pump tracks as playgrounds.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Dirt trails, focus, and flow. Start on green routes and let confidence build downhill.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Full-contact skating with big personality and leagues that often teach total beginners.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Smooth paths, steady rhythm, and a low-impact way to make cardio feel playful.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'Cruising and carving more than tricks: a mellow board sport with real flow.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'A few discs, a public course, and a walk that suddenly has targets.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Learning balance, trust, and cues with an animal that absolutely has opinions.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Mallets, horses, and speed, with beginner polo schools handling the intimidating parts.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'Three darts, one board, and a pub game that can get fiercely precise.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Gentle pace, sneaky tactics, and a social club feel on a quiet green.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules with sun, conversation, and just enough precision to become obsessed.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Backyard-friendly aim training with bags, boards, and immediate low-stakes competition.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Short climbing problems over padded floors. No rope, lots of rests, plenty of puzzle.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'A flat line between trees and a balance challenge that humbles people fast.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing with structure: air awareness, drills, and adult classes that go beyond chaos.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run in one event. Start with sprint distance and a forgiving training plan.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'A map-based treasure hunt through parks or forests, with running only as hard as you choose.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Bat, ball, long traditions, and softer indoor versions that make the first try less mysterious.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Fast team play with curved sticks, sharp passing, and clubs that often know how to onboard newcomers.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light sticks and a plastic ball, fast enough to hook beginners quickly.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'A no-contact basketball cousin where roles are clear and local leagues often welcome new players.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'Tag, wrestling, breath control, and strategy packed into one loud South Asian team game.' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Speed, rhythm, and plastic cups. Stranger than it sounds, more competitive than you expect.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternate chess and boxing rounds, then try to keep your brain online while tired.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprint, plant, fly. Very technical, very coached, and not a backyard experiment.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'A puck on the pool floor, short breath holds, and teamwork happening below the surface.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
