const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A hoop, a ball, and ten minutes is enough to feel the game click.',
    guide:{
      whyItFits:"Basketball is easy to approach because the first version can be completely yours: dribble, shoot, miss, adjust, repeat. When you want people, pickup culture gives you a natural way in without a formal signup.",
      howToStart:"Find a public court at a nearby park. Spend the first session dribbling slowly with both hands and taking close-range shots. Once that feels less awkward, show up when others are playing and ask who has next.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, or just show up at a busy court and join someone else's game.",
        no_equipment:"Head to any park court and ask to join. Someone always has a ball.",
        shy_solo:"Public courts are completely normal to use alone. Dribble and shoot by yourself — no pressure to join anything.",
        social_team:"Show up at a busy court on a weekend and ask \"got next?\" — that's genuinely how pickup basketball works.",
        limited_time:'A 20-minute solo session — a few layups, free throws, and slow dribbles — is enough to count.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practice dribbling with both hands for 10 min','Take 20 relaxed shots close to the hoop','Watch a pickup game and ask how people join']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:'Simple to start, endlessly deep, and best when someone passes you the ball back.',
    guide:{
      whyItFits:"Soccer works because the beginner version is forgiving: pass, move, breathe, laugh off the bad touches. It costs little, travels well, and has casual games in parks all over the place.",
      howToStart:"Find a park or wall where a ball can safely roll around. Start with inside-foot passes against the wall, then add gentle dribbling. Juggling can come later; first, make the ball feel less wild.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Show up to a pickup game and join a side. Balls are always shared.',
        shy_solo:'Wall passes and slow dribbling alone in any park are a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — look for groups that mention beginners or mixed skill.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby field, court, or safe wall','Practice wall passing for 10 min','Dribble slowly around five markers','Search for a casual local pickup game']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:'A court wall can teach you timing before anyone is watching.',
    guide:{
      whyItFits:"Tennis has a private on-ramp. You can build timing, footwork, and confidence against a wall before a match ever enters the picture.",
      howToStart:"Find a public court with a hitting wall if you can. Use gentle swings and aim for five balls in a row before adding power. Your first win is consistency, not a perfect serve.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programs.",
        shy_solo:'Wall rallying is a complete solo practice. 30 minutes, no partner needed.',
        social_team:'Most tennis clubs run beginner group clinics. USTA has local adult programs.',
        limited_time:'30 minutes of wall rallying is a full session.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public tennis court or hitting wall','Get or borrow a basic racket','Hit gently until you can land 5 in a row','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'A loud, fast team sport where one clean pass can change your whole mood.',
    guide:{
      whyItFits:"Volleyball is social without much small talk: rotate in, call the ball, celebrate the point. Beach courts and open gyms make it possible to try the rhythm before committing to a league.",
      howToStart:"Find an open gym night or a public beach court. Focus on the forearm pass first. If joining a game feels like too much, do a few self-passes on the side and watch how rotations work.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gym nights and beach courts always have balls. Just show up.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" — groups are active and welcoming.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Practice 20 controlled forearm passes','Watch one game to learn rotations','Attend one beginner-friendly session']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'Slow moments, sharp focus, and the tiny thrill of a clean hit.',
    guide:{
      whyItFits:'Baseball gives you individual skill work inside a team game. A beginner can spend time on one simple thing, like making clean contact, and still feel connected to the bigger sport.',
      howToStart:'Find a batting cage or a safe place to play catch. Start with an easy speed and focus on seeing the ball, not crushing it. A tennis ball against a wall also builds hand-eye confidence.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage session is completely solo. No team needed to start.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'20 minutes at a batting cage is a real session. Focus on clean contact.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage or a safe place to throw','Take 20-30 swings with contact as the goal','Practice throwing with a partner or wall','Look up local recreational softball leagues']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Routes, quick cuts, and team strategy without the heavy-contact barrier.',
    guide:{
      whyItFits:"Flag football keeps the fun parts of football: space, timing, play calls, and team energy. It drops the pads, lowers the gear cost, and makes casual leagues much easier to enter.",
      howToStart:"Start by practicing an easy spiral and a few short routes with a friend. Then look for a parks department or social sports league with beginner or mixed-skill teams.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practice spiral throwing into a safe net or against a sturdy fence alone.',
        social_team:'Flag football leagues are among the most social recreational sports. Search Meetup.',
        limited_time:'A 20-minute throwing and route-running solo session is a complete first practice.',
        competitive:'Flag tournaments run frequently and are genuinely competitive.',
      },
      checklist:['Get a football or find one to borrow','Practice 20 easy spiral throws','Watch one game and note the positions','Search for a local flag football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:'Step outside, find an easy rhythm, and let the first finish line be your front door.',
    guide:{
      whyItFits:"Running is honest without being complicated. You can start with run-walk intervals, measure progress in tiny ways, and build a ritual that belongs to you.",
      howToStart:"Start with 20 minutes total: jog until your breathing gets choppy, walk until it settles, then repeat. Do that a few times this week before worrying about pace.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is completely normal. Most runners prefer it.',
        social_team:'Running clubs are among the most welcoming groups in sport. Search "running club [your city]".',
        limited_time:'A 20-minute run-walk session a few times a week is a legitimate start.',
        competitive:'Local 5K races are easy to find and usually welcoming to first-timers.',
      },
      checklist:['Complete a 20-minute run-walk session','Find your nearest track or park path','Notice one thing that felt easier by the end','Look up a local 5K if having a goal helps']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet lanes, full-body effort, and no impact on your joints.',
    guide:{
      whyItFits:"Swimming lets you work hard without pounding your joints. Technique matters, but beginners do not need to be elegant; calm breathing and comfortable rests are enough to start.",
      howToStart:'Book a lane swim session. Spend the first visit moving calmly for 20 minutes, resting at the wall whenever you need to. If freestyle feels frantic, use any stroke that lets you breathe.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles are all you need.",
        shy_solo:"Lane swimming is one of the most solitary sports — you're in your own lane, focused entirely on yourself.",
        social_team:'Masters Swimming programs are adult lap groups at all levels — welcoming to beginners.',
        limited_time:"20 minutes in the water, with rests whenever you need them, is a full first session.",
        competitive:'USMS (Masters) meets are beginner-friendly. Enter open events and chase your own time.',
      },
      checklist:['Find your nearest pool with lane swim','Book one short session','Practice exhaling into the water near the wall','Swim easy lengths or widths with plenty of rest']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Footwork, focus, and bag work that lets you feel powerful without sparring.',
    guide:{
      whyItFits:"Boxing gives anxious energy somewhere useful to go. The beginner path is structured around stance, jab, cross, footwork, and breath before anyone talks about sparring.",
      howToStart:"Find a boxing gym and take a beginner class. Tell the coach you are new, wrap your hands properly, and spend the first month on basics. Do not spar until a coach says you are ready.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms have a strong training community. Training partners come quickly.',
        limited_time:'A 30-minute bag workout — warm-up, a few short rounds, cool-down — is plenty at first.',
        competitive:'USA Boxing and Golden Gloves have true beginner divisions. Ask your coach after 3–6 months.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Tough, technical, and honest in a way few sports are.',
    guide:{
      whyItFits:"Wrestling is demanding, but not mindless. It rewards patience, body awareness, and the willingness to be a beginner in a room that respects effort.",
      howToStart:"Find a wrestling club or school program with coached beginner sessions. This is a mat-and-coach sport, so watching one practice first is a perfectly reasonable start.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programs and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You can build fitness alone, but the wrestling itself needs a coach, a mat, and safe partners.',
        social_team:'Wrestling clubs are tight-knit communities: individual matches, deep room culture.',
        limited_time:"A practice session usually runs 60-90 minutes. If that is too much at first, ask whether observing or joining warm-ups is okay.",
        competitive:'Ask your club coach about entry-level tournaments after 1–2 months of training.',
      },
      checklist:['Find a local wrestling club or YMCA program','Ask whether beginners can watch first','Attend one coached practice','Learn basic stance from a coach']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A quiet reset you can start on a mat, a towel, or the living-room floor.',
    guide:{
      whyItFits:"Yoga gives you a way to move, breathe, and notice what your body is doing without turning it into a performance. The first session can be private and short.",
      howToStart:"Find a free beginner video and do it in your living room. Pick something slow, pause whenever you need to, and ignore any pose that feels sharp or wrong.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are genuinely excellent. A mat costs $10–20. That's your full startup cost.",
        no_equipment:'You can practice on carpet or a towel without a mat to start.',
        shy_solo:'This is one of the most private sports you can do. Just you and a YouTube video.',
        social_team:'Studio classes are social and welcoming — most have beginner sessions.',
        limited_time:'A 20-minute session is enough to shift your day. Start there.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (20 min)",'Complete your first session','Practise 3 times this week',"Notice what feels tight — that's your target"]
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:'Your own pace, actual scenery, and the small joy of covering ground.',
    guide:{
      whyItFits:"Cycling lets exercise feel like going somewhere. It is gentle on joints, easy to scale, and just as valid as a solo loop as it is with a group ride.",
      howToStart:'Borrow or find a used bike. Pick a flat route for your first ride. Focus on comfort and consistency before speed.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50-150. Check your city for bike libraries or loan programs.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programs before buying anything.',
        shy_solo:'Cycling alone is completely normal and preferred by most cyclists.',
        social_team:'Group rides run in most cities. Search for your local cycling club — most have beginner-paced rides.',
        limited_time:"A 20-minute loop around your neighborhood is a real session. Distance does not matter at first.",
        competitive:'Local cycling clubs have timed rides and beginner races. Strava segments give you something to chase solo.',
      },
      checklist:['Borrow or find a used bike','Find a flat, safe 20-minute route','Complete your first ride','Join a local cycling club or find a group ride']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'A puzzle wall, tired forearms, and strangers cheering the move you finally stick.',
    guide:{
      whyItFits:"Climbing feels different because the workout is also a puzzle. Indoor gyms rent the gear, mark beginner routes clearly, and tend to have a surprisingly encouraging culture.",
      howToStart:"Visit an indoor climbing gym. Rent shoes and start with beginner boulders, taking long rests between attempts. Ask staff how the route grades work before you start.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent everything. Just show up.',
        shy_solo:'Bouldering is completely solo — no partner needed, no ropes, just you and the wall.',
        social_team:'Climbing gyms have an unusually welcoming community. People actively help each other.',
        limited_time:'A 45-minute bouldering session is plenty when you rest between attempts.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent shoes','Ask staff how beginner routes are marked','Try three easy boulders with long rests']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:'A longer walk with better views and fewer notifications.',
    guide:{
      whyItFits:"Hiking is approachable because the sport can start as a better walk. You choose the distance, the pace, and the view, then build from there.",
      howToStart:'Find a local trail on AllTrails or your parks website. Pick something rated "easy" and under 3 miles for the first outing. Bring water and turn around early if the trail stops feeling fun.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need comfortable shoes and water. Both you probably have.',
        shy_solo:'Plenty of people hike alone. Choose a popular, well-marked trail first and tell someone your plan.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 45-90 minute loop is a real hike. You do not need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Find an easy trail under 3 miles','Pack water and check the weather','Complete the route or turn back while it still feels good',"Tell someone where you're going"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Pick the music first, then let the movement get less awkward.',
    guide:{
      whyItFits:'Dance gives fitness a soundtrack and a reason to loosen up. Some styles are private and expressive; others are social by design. The right one should make you curious, not self-conscious forever.',
      howToStart:'Find a true beginner class in the style that interests you most. Salsa, swing, and hip-hop all have strong beginner cultures. Expect the first class to feel clumsy; that is part of the entry fee.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centers often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is enough for the first win. Most studios do drop-ins.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or free intro session','Attend your first class','Go back a second time — the first is always awkward']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'A structured place to be new, repeat drills, and earn the next small skill.',
    guide:{
      whyItFits:'Martial arts are built around progression. You learn a stance, a breakfall, a guard, or a strike, then keep layering skills with people who remember being new.',
      howToStart:'Pick one style and find a local club. Brazilian jiu-jitsu (BJJ), judo, karate, and muay thai can all be beginner-friendly when the coaching is good. Attend a trial class before buying gear.',
      equipment:[{item:'Gi / uniform (club may loan one)',tier:'later'},{item:'Comfortable athletic wear',tier:'need'},{item:'Mouthguard',tier:'later'}],
      adaptive:{
        low_budget:'Many clubs have sliding-scale dues or reduced first-month rates. Ask.',
        no_equipment:'Most clubs loan a gi to new members for the first few sessions.',
        shy_solo:"Drilling technique alone or in pairs is the core of most martial arts. You won't be thrown into sparring immediately.",
        social_team:"Martial arts dojos have a strong community — you'll know people quickly.",
        limited_time:'A standard class runs 60 minutes. Most people go 2–3 times per week.',
        competitive:'Every martial art has a competition structure. BJJ tournaments run almost every weekend across the country.',
      },
      checklist:['Pick a martial art style (BJJ, karate, judo, muay thai)','Find a local club and book a trial class','Attend your first class with no expectations','Go back at least twice before deciding']
    }
  },

  skateboarding: {
    id:'skateboarding', name:'Skateboarding', icon:'🛹',
    fitTags:['shy_solo','high_energy'],
    pitch:'Creative, stubborn, and built from tiny wins on flat ground.',
    guide:{
      whyItFits:"Skateboarding is self-directed in the best way. You choose the spot, the trick, the pace, and the soundtrack. Progress is visible in tiny moments: a smoother push, a safer stop, a cleaner turn.",
      howToStart:"Get a complete board, not a toy board. Find a smooth flat surface and learn to push, turn, and stop before anything else. Visit a skate park to watch first if rolling in feels intimidating.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'30 minutes on one tiny skill is a real skate session.',
        competitive:'Amateur skateboarding competitions are genuinely accessible at local skate parks.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practice on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:'Quick games, easy rotations, and a surprisingly gentle way into competition.',
    guide:{
      whyItFits:"Pickleball is low-impact, quick to learn, and social by design. Open play means you can arrive alone, rotate into short games, and meet people without organizing a full team.",
      howToStart:'Find an open play session at a local court. Borrow a paddle at first and tell the group you are brand new. Learn the serve and kitchen rule before worrying about strategy.',
      equipment:[{item:'Pickleball paddle',tier:'need'},{item:'Pickleballs',tier:'need'},{item:'Court shoes',tier:'nice'}],
      adaptive:{
        low_budget:'Paddles cost $20–40 for a decent beginner option. Many parks provide loaner paddles at open play.',
        no_equipment:'Ask at open play sessions — loaner paddles are very common.',
        shy_solo:'Open play is social by design, but you can practice solo against a wall.',
        social_team:'Open play is one of the most social sport formats available. Rotational games mean you meet everyone.',
        limited_time:'A single open play session has games of 5–7 minutes each. Drop in for 30 minutes.',
        competitive:'USA Pickleball runs tournaments for every skill level including beginners.',
      },
      checklist:['Find an open play session near you','Borrow a paddle and join a game','Learn the basic serve and kitchen rule','Come back a second time — the first game is always confusing']
    }
  },

  badminton: {
    id:'badminton', name:'Badminton', icon:'🏸',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Light racket, quick rallies, and a game that gets intense before you expect it.',
    guide:{
      whyItFits:'Badminton is forgiving on day one but never shallow. You can rally casually right away, then discover footwork, placement, and speed as you improve.',
      howToStart:'Find a community hall or gym that runs badminton drop-in nights. Bring a racket or borrow one, then focus on keeping rallies alive before keeping score.',
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
    pitch:'A running team sport where teaching new players is part of the culture.',
    guide:{
      whyItFits:'Ultimate combines soccer-style running with basketball-style cuts, but the culture is the real beginner advantage. Self-refereeing and spirit of the game make communication part of play.',
      howToStart:"Find a local ultimate club or pickup game. Most cities with a scene run beginner sessions. A disc costs about $10, and experienced players usually expect to teach throws.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Just show up.',
        shy_solo:'Hard to fully practice alone, but throwing at a target or fence builds confidence.',
        social_team:'One of the most welcoming team sport communities anywhere. The "spirit of the game" culture is real.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get an ultimate disc ($10)','Find a local club or pickup game','Attend your first session','Learn the basic throwing grip and huck']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythm, teamwork, and a full-body burn without pounding your joints.',
    guide:{
      whyItFits:"Rowing is technical, rhythmic, and low-impact. Indoor rowing gives you a simple first taste, while clubs usually have a clear learn-to-row path for adults.",
      howToStart:"Find a local rowing club and ask about their learn-to-row program. If getting on the water feels like a big leap, try an indoor rower at a gym and ask someone to check your form.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide everything on the water. Ask what clothing works best before you show up.',
        shy_solo:'Indoor rowing (erg) is completely solo. Many gyms have them.',
        social_team:'Rowing clubs are strong social communities — crew boats require teamwork.',
        limited_time:'A 20-minute erg piece is a full workout.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a local rowing club or gym with ergs','Try 10-20 easy minutes on an indoor rower','Look up learn-to-row programs near you','Attend or observe a beginner club session']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Patient, precise, and built around chasing one clean strike at a time.',
    guide:{
      whyItFits:"Golf lets you practice alone without feeling out of place. The range is low-pressure, measurable, and satisfying the moment one shot finally sounds right.",
      howToStart:"Go to a driving range and rent clubs if you do not have them. Start with a small bucket. Focus on making contact and staying relaxed; distance does not matter on day one.",
      equipment:[{item:'Golf clubs (rent to start)',tier:'rent'},{item:'Golf balls',tier:'need'},{item:'Golf shoes',tier:'later'}],
      adaptive:{
        low_budget:'Driving ranges charge $10–20 for a bucket of balls. Club rental is usually $5–10 extra. Many municipal courses are under $25.',
        no_equipment:"Driving ranges and courses rent clubs. You don't need to own anything to start.",
        shy_solo:"Driving ranges and solo rounds are the norm — no one expects you to know anyone.",
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
    pitch:'A measurable solo routine where small progress has receipts.',
    guide:{
      whyItFits:"Gym training is reassuringly measurable. You can log a weight, a rep, or a machine setting, then come back and make one tiny improvement.",
      howToStart:'Use a gym trial or quiet hour. On day one, do one or two easy sets each of a squat, press, row, and hinge pattern. Leave feeling like you could have done more.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A focused 30-minute full-body session works when you repeat it consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Sign up for a gym or find one with a free trial','Complete a short full-body circuit','Log the weights or settings you used','Go back once this week and repeat it slightly better']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'Bodyweight strength that can start beside your couch.',
    guide:{
      whyItFits:"Calisthenics meets you where you are. Push-ups can be inclined, squats can use a chair, and progress comes from cleaner reps before harder tricks.",
      howToStart:'Start with one easy bodyweight circuit: incline push-ups, squats to a chair, and a short plank. Rest as needed and do it 2-3 times this week, not daily.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is enough when the reps are controlled.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Try incline push-ups, chair squats, and a short plank','Stop while you still have good form','Repeat the routine 2-3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny table, fast hands, and rallies that become addictive quickly.',
    guide:{
      whyItFits:'Table tennis starts light and gets deep fast. At first, you are just keeping the ball alive; later, spin, placement, and timing turn it into a tactical game.',
      howToStart:'Find a table at a community center, bar, or park. Borrow a paddle. Just rally at first and keep the ball on the table for as long as possible.',
      equipment:[{item:'Table tennis paddle ($15–25)',tier:'need'},{item:'Table tennis balls (pack of 6)',tier:'need'}],
      adaptive:{
        low_budget:'A decent paddle costs $15-20. Many community centers have free tables.',
        no_equipment:'Community centers and bars often have paddles and balls available.',
        shy_solo:'Solo practice against a wall (ping pong rebound board) is effective and cheap.',
        social_team:'Round-the-table (group game) makes table tennis very social.',
        limited_time:'A match takes 10–15 minutes. Perfect for a lunch break.',
        competitive:'USATT and national associations have beginner tournament pathways.',
      },
      checklist:['Find a table tennis table near you','Borrow or get a basic paddle','Rally for 15-20 minutes before scoring','Learn the basic serve rule']
    }
  },

  lacrosse: {
    id:'lacrosse', name:'Lacrosse', icon:'🥍',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Fast breaks, stick skills, and a team culture with room to learn.',
    guide:{
      whyItFits:'Lacrosse is physical and fast, but it also gives beginners a solo skill to build: wall ball. Box lacrosse or recreational clubs can be easier entry points than full field play.',
      howToStart:'Find a local lacrosse club or recreational league. Many run beginner programs. If you can borrow a stick, practice gentle wall ball before your first session.',
      equipment:[{item:'Lacrosse stick',tier:'need'},{item:'Helmet and pads (full lacrosse)',tier:'need'},{item:'Cleats',tier:'need'}],
      adaptive:{
        low_budget:'Used equipment is widely available. Box lacrosse needs less gear than field.',
        no_equipment:'Some club programs loan equipment to beginners for the first season.',
        shy_solo:'Wall ball (throwing against a wall) is a legitimate solo lacrosse practice.',
        social_team:'Lacrosse has a very strong team and club culture.',
        limited_time:'Wall ball for 20 minutes is a complete skill session.',
        competitive:'USA Lacrosse runs leagues and tournaments at every level.',
      },
      checklist:['Find a local lacrosse club or league','Get basic equipment or ask about loans','Practise wall ball for 20 minutes','Attend a beginner club practice']
    }
  },

  rugby: {
    id:'rugby', name:'Rugby', icon:'🏉',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Big team energy, direct communication, and a non-contact doorway through tag rugby.',
    guide:{
      whyItFits:"Rugby can look intimidating from the outside, but club culture is often direct, welcoming, and deeply social. Tag rugby gives beginners a non-contact way to learn spacing and support play first.",
      howToStart:'Find a local rugby club and ask about their beginner or tag rugby program. Ask which training night is best for new players before showing up.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Clubs almost always have spare gear for beginners.',
        shy_solo:'Tag rugby removes the intimidation of full contact while you learn the shape of the game.',
        social_team:'Rugby clubs are among the most social in all of sport — the post-match tradition is famous.',
        limited_time:'Training sessions run 90 minutes. Tag rugby sessions are often shorter.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about tag rugby or beginner programs','Attend the recommended beginner session','Get a mouthguard before any contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Strategy at speed, with the club handing you the gear on day one.',
    guide:{
      whyItFits:'Fencing is tactical before it is exhausting. You learn distance, timing, and composure in short exchanges, and clubs usually provide the full beginner kit.',
      howToStart:'Find a local fencing club and attend a beginner class. Let the club provide the equipment and teach the commands before you think about buying anything.',
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
    pitch:'Rec-league energy: a glove, a lineup, and a team that wants you to show up.',
    guide:{
      whyItFits:"Softball is a friendly way back into team sports. Rec leagues are social, games have natural pauses, and many teams care more about reliable people than perfect swings.",
      howToStart:"Search your city's parks department for adult softball leagues. Many do not require you to arrive with a full team; they can place solo players or point you to captains.",
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
    pitch:'Body control from the ground up: rolls, shapes, strength, then bigger skills.',
    guide:{
      whyItFits:'Gymnastics builds strength, mobility, and body awareness in a way that carries into almost every sport. Adult beginner classes usually start with floor basics, not dramatic flips.',
      howToStart:'Find a gymnastics club that offers adult beginner classes. Start with floor work, rolls, safe landings, and basic shapes before worrying about apparatus.',
      equipment:[{item:'Gymnastics shorts/leotard',tier:'need'},{item:'Gymnastics shoes or bare feet',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Gymnastics clubs have a strong community and social structure.',
        limited_time:'A class runs 60–90 minutes.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Attend your first class','Learn a basic forward roll and cartwheel','Come back — gymnastics rewards consistency']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, green runs, and the grin that arrives when sliding starts to feel controlled.',
    guide:{
      whyItFits:'Skiing has a real cost and learning curve, but beginner lessons are structured for exactly that. A smaller local hill can make the first day feel much less overwhelming than a major resort.',
      howToStart:'Book a beginner lesson at a ski resort or local hill. Rentals cover the technical gear. One lesson will help you stop, turn, and choose terrain safely.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Look for midweek packages with rental and lesson. Smaller local hills are usually much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is a complete first experience.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Price a beginner lesson at a local hill','Rent gear instead of buying','Learn to stop and turn on beginner terrain','Ask about a return discount before leaving']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'A humbling first day, a distinct culture, and flow that pays back the patience.',
    guide:{
      whyItFits:"Snowboarding has a steep first-day curve, so the honest expectation is falling and resetting. The payoff is a sideways flow that feels creative once the basics land.",
      howToStart:'Book a beginner snowboard lesson and rent wrist guards. Judge it after at least two sessions, because the first day is mostly learning how edges work.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practice at your own pace once you have the basics from a lesson.',
        social_team:'Snowboard parks have a social, helpful culture.',
        limited_time:'A 3-hour morning lesson is a complete first session.',
        competitive:'Halfpipe, slopestyle, and boardercross have structured pathways at most resorts.',
      },
      checklist:['Book a beginner snowboard lesson','Rent wrist guards — not optional','Get through your first 2-hour lesson','Go back a second time before deciding']
    }
  },

  surfing: {
    id:'surfing', name:'Surfing', icon:'🏄',
    fitTags:['high_energy','shy_solo'],
    pitch:'Ocean timing, balance, and the absurd joy of even a messy first ride.',
    guide:{
      whyItFits:'Surfing is physical, humbling, and deeply tied to conditions. A lesson matters because wave choice, board choice, and ocean safety are the real beginner skills.',
      howToStart:'Book a lesson at a surf school. They provide foam boards, choose safe beginner waves, and explain etiquette. Do not self-teach in open ocean.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons vary by beach and season. Bodyboarding or a group lesson can be a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is a complete first experience.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a group lesson if budget matters','Learn the safety and etiquette basics','Ride one wave however you can, even on your knees']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, repeatable form, and progress you can see on the target.',
    guide:{
      whyItFits:'Archery is calm without being passive. The ritual of stance, anchor, release, and reset gives beginners something concrete to improve every round.',
      howToStart:"Find a local archery club and ask about beginner sessions. Equipment is provided, so do not buy a bow until a coach helps you understand fit and draw weight.",
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
    pitch:'Loud, athletic, and deeply team-based, with no hiding in the back row.',
    guide:{
      whyItFits:'Competitive cheer is a full sport: tumbling, stunting, jumps, dance, timing, and trust. It fits people who want high energy and a team that notices when everyone commits.',
      howToStart:'Find a local All-Star cheer gym and ask about beginner programs, trial nights, and the real weekly schedule. Entry-level teams exist, but the commitment should be clear up front.',
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

export default SPORTS
