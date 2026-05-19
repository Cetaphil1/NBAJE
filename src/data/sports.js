const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little nerve — basketball can turn a quiet park visit into a game fast.',
    guide:{
      whyItFits:"Basketball gives you two ways in: solo skill work when you want privacy, and pickup when you want people. You can build confidence one shot at a time before asking for next.",
      howToStart:"Find a public court at a quiet time. Spend your first visits on dribbling, layups, and free throws. When you are ready for people, watch a game first and ask when newer players usually run.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, and busy courts usually have someone willing to share for a shootaround.",
        no_equipment:"Head to any park court and ask to join. Someone always has a ball.",
        shy_solo:"Public courts are normal to use alone. Dribble and shoot by yourself with no pressure to join anything.",
        social_team:'Watch a weekend run for a few minutes, then ask when beginners usually play.',
        limited_time:'Twenty minutes of free throws, layups, and dribbling is enough to build real touch.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling and layups for 15 minutes','Shoot 20 relaxed free throws','Ask a friendly group when beginner pickup usually happens']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Simple to start, endlessly deep, and better with people — even if today is just you and a wall.",
    guide:{
      whyItFits:"Soccer is cheap, social, and forgiving at casual levels. You can start with passing and touches alone, then move into a kickaround once the ball stops feeling like a stranger.",
      howToStart:"Find a park, wall, or empty pitch. Start with gentle passes against a wall and a few minutes of dribbling. Look for beginner kickarounds before jumping into faster pickup.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Show up to a pickup game and join a side. Balls are always shared.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" and look for beginner or social wording.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch, park, or wall','Do 10 minutes of wall passes','Dribble slowly around cones, shoes, or trees','Search for a casual beginner kickaround']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"A clean rally feels amazing, and you can chase that feeling before you ever book an opponent.",
    guide:{
      whyItFits:"Tennis gives solo beginners a real path: wall rallies, serves, and footwork all work without a partner. It still has a sharp competitive edge once you want matches.",
      howToStart:"Find a public court with a practice wall if you can. Keep the first session short, use slow swings, and aim for control rather than power.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying gives you a useful solo practice option with no partner needed.',
        social_team:'Most tennis clubs run beginner group clinics. USTA has local adult programmes.',
        limited_time:'Thirty minutes of wall rallying is plenty for one practice.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public court or hitting wall','Borrow or buy a basic racket and balls','Hit slowly against a wall for 15 minutes','Search for a beginner clinic or group lesson']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'Quick rallies, loud saves, instant teammates — volleyball is social before it is polished.',
    guide:{
      whyItFits:"Volleyball rewards communication as much as athleticism. Beginner open gyms and beach courts make it easier to learn the rhythm without needing a full roster of friends.",
      howToStart:"Find an open gym, beach court, or beginner clinic. Spend the first session learning a forearm pass and underhand serve before chasing spikes.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gym nights and beach courts usually have shared balls. Ask before buying one.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" — groups are active and welcoming.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night, clinic, or beach court','Practise forearm passing against a wall or to yourself','Learn one basic serve','Attend one session that welcomes new players']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'A slow-burn sport where one clean crack of the bat can keep you coming back.',
    guide:{
      whyItFits:'Baseball is built on small, satisfying skills: a better swing, a cleaner throw, a quicker read. It suits people who like individual practice inside a team game.',
      howToStart:'Start at a batting cage or with easy catch. Use slow speeds, think contact over power, and practise throwing mechanics before worrying about league play.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage session is completely solo. No team needed to start.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'Twenty minutes at a batting cage is enough. Focus on clean contact.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage or safe place to play catch','Take 20 easy swings focused on contact','Practise gentle throwing with a partner or wall','Look up local recreational baseball or softball options']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Routes, throws, and quick decisions — football strategy without the pads.',
    guide:{
      whyItFits:"Flag football keeps the teamwork and tactics while removing most of the gear and contact barrier. It is a better first step than tackle for almost every adult beginner.",
      howToStart:"Start with short throws, catching, and simple route names. Then look for a parks department league, Meetup game, or beginner clinic.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practise spiral throwing against a fence or wall alone.',
        social_team:'Flag football leagues are among the most social recreational sports. Search Meetup.',
        limited_time:'Twenty minutes of short throws and route footwork is enough to learn something.',
        competitive:'Flag tournaments run frequently and can get serious fast.',
      },
      checklist:['Get or borrow a football','Practise short spiral throws and easy catches','Watch one flag game and learn the basic positions','Search for a local flag or touch football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:"No court, no team, no ceremony — just a route, your breath, and a pace you can repeat.",
    guide:{
      whyItFits:"Running is honest and flexible. You can train alone, measure progress clearly, and make the first month as gentle as it needs to be.",
      howToStart:"Start with 20 minutes of jog-walk intervals twice a week. Keep the pace easy enough to talk and stop before soreness turns into dread.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is completely normal. Most runners prefer it.',
        social_team:'Running clubs are among the most welcoming groups in sport. Search "running club [your city]".',
        limited_time:'A 20-minute run three times a week is a legitimate training programme.',
        competitive:'Local 5K races are easy to find, and many welcome walkers and first-timers.',
      },
      checklist:['Try a 20-minute jog-walk session','Find your nearest track, park path, or quiet route','Repeat once this week without chasing pace','Look up a local 5K as a future option, not homework']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet, full-body effort with your own lane, your own rhythm, and almost no joint impact.',
    guide:{
      whyItFits:"Swimming can be calming and brutally effective in the same session. It rewards technique over brute force, which makes early progress feel learnable.",
      howToStart:'Book a lane swim or beginner adult lesson. Start with short lengths, long rests, and one cue: exhale underwater before you turn to breathe.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles is all you need.",
        shy_solo:"Lane swimming is one of the most solitary sports — you're in your own lane, focused entirely on yourself.",
        social_team:'Masters Swimming programmes are adult lap groups at all levels — welcoming to beginners.',
        limited_time:'In 20 minutes, try 4 short lengths with generous rest and leave before form falls apart.',
        competitive:'USMS (Masters) meets have open events where you can chase your own time.',
      },
      checklist:['Find your nearest pool with lane swim or adult lessons','Swim 4 short lengths with generous rest','Focus on calm breathing, not speed','Look up Masters Swimming or adult technique classes nearby']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Sweaty, skillful, confidence-building — and sparring is not part of day one.',
    guide:{
      whyItFits:"Boxing gives you a huge workout with clear technique to focus on, so it rarely feels like mindless cardio. A good gym will protect beginners from going too hard too soon.",
      howToStart:"Find a boxing gym with a fundamentals class. Learn stance, guard, jab, cross, and footwork from a coach. Skip sparring until you understand what safe training looks like.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms have a strong training community. Training partners come quickly.',
        limited_time:'A 30-minute bag workout can be plenty: warm-up, a few easy rounds, cool-down.',
        competitive:'USA Boxing and Golden Gloves have true beginner divisions. Ask your coach after 3–6 months.',
      },
      checklist:['Find a local boxing gym and ask about a fundamentals trial','Buy hand wraps or ask to borrow gear','Learn stance and jab from a coach','Practise two easy shadow boxing rounds at home']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Close-contact, technical, and humbling — wrestling is for people who want the real thing.',
    guide:{
      whyItFits:"Wrestling is intense, but not chaotic when taught well. It rewards coachability, grit, and body control more than raw aggression.",
      howToStart:"Find a club, YMCA, or school programme with beginner instruction. You need a coach, partners, and mats; this is not a sport to figure out from videos alone.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A practice session runs 60–90 minutes. There's no shorter version that works.",
        competitive:'Ask your club coach about entry-level tournaments after 1–2 months of training.',
      },
      checklist:['Find a local wrestling club, YMCA, or adult grappling programme','Ask whether true beginners can observe or join','Learn basic stance and safe movement from a coach','Ask what schedule is realistic for a new adult']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'Low-pressure movement you can do at home, in a studio, or anywhere you need a reset.',
    guide:{
      whyItFits:"Yoga is forgiving by design: you can make it gentle, sweaty, private, social, spiritual, or purely physical. The win is noticing your body more clearly.",
      howToStart:"Choose a true beginner video or studio class and stay curious instead of forcing shapes. A towel on carpet is enough for the first try.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are often excellent. A mat costs $10–20, and carpet works for a first try.",
        no_equipment:'You can practise on carpet without a mat to start.',
        shy_solo:'This is one of the most private sports you can do. Just you and a YouTube video.',
        social_team:'Studio classes are social and welcoming — most have beginner sessions.',
        limited_time:'A 20-minute session is enough to notice your breath and loosen up.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:["Find a beginner yoga video or studio intro class",'Try one short session without forcing any pose','Notice which movements feel good or useful','Repeat once this week if your body liked it']
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:"A workout that also gets you somewhere — quiet solo loops or chatty group rides.",
    guide:{
      whyItFits:"Cycling is kind to joints but can still build serious fitness. It also turns ordinary neighbourhoods into routes, landmarks, and little missions.",
      howToStart:'Borrow, rent, or tune up a used bike. Pick a flat, low-traffic loop and make comfort the goal: seat height, braking, shifting, and confidence.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50–150. Check your city for bike libraries or loan programmes.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programmes before buying anything.',
        shy_solo:'Cycling alone is normal, and plenty of riders prefer it.',
        social_team:'Group rides run in most cities. Search for your local cycling club — most have beginner-paced rides.',
        limited_time:"A 20-minute loop around your neighbourhood counts. Distance doesn't matter at first.",
        competitive:'Local cycling clubs have timed rides and beginner races. Strava segments give you something to chase solo.',
      },
      checklist:['Borrow, rent, or find a safe used bike','Check brakes, tires, and helmet fit','Ride a flat 15- to 20-minute route','Look up beginner-paced group rides if solo feels stale']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'A puzzle you solve with your hands and feet, with rented shoes and padded floors to start.',
    guide:{
      whyItFits:"Climbing feels different from normal workouts because your brain is busy the whole time. Indoor gyms make the first step clear, and beginners usually get help just by asking.",
      howToStart:"Visit an indoor gym and rent shoes. Start with bouldering or an intro class, ask staff which grades to try, and learn how to fall or downclimb safely.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent shoes and harnesses, so check rental options before buying gear.',
        shy_solo:'Bouldering works well solo: no partner, no ropes, just you and the wall.',
        social_team:'Climbing gyms have an unusually welcoming community. People actively help each other.',
        limited_time:'A 45-minute bouldering session is plenty, especially while your hands adapt.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass or intro session and rent shoes','Ask staff for two beginner routes','Try a short bouldering session and stop before your grip is cooked']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"A walk with better scenery, a little planning, and the satisfying feeling of getting out there.",
    guide:{
      whyItFits:"Hiking can be as gentle or ambitious as you make it. The first win is not distance; it is choosing a route that gets you outside and back safely.",
      howToStart:'Find a local route on AllTrails or a parks website. Pick something easy, well-marked, and under 3 miles for the first outing.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need shoes and water. Both you probably have.',
        shy_solo:'Most people hike alone. Trails are safe and well-marked on AllTrails.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 90-minute loop is a real hike. You don't need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Find an easy, well-marked local trail','Check distance, weather, and parking before you go','Take a short hike with water and comfortable shoes',"Tell someone where you're going if you hike alone"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music turns effort into expression — awkward at first, freeing after that.',
    guide:{
      whyItFits:'Dance lets you train coordination, cardio, rhythm, and confidence at the same time. Different styles have different cultures, so you can choose solo expression or partner energy.',
      howToStart:'Pick the style that makes you curious, not the one you think you should do. Look for classes labelled absolute beginner, intro, or fundamentals.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute drop-in class is plenty for a first week.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick one style that actually sounds fun','Find an absolute beginner class or intro session','Attend your first class and expect awkward moments','Go back once before deciding whether it is for you']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'A structured path from total beginner to capable, one class and one belt at a time.',
    guide:{
      whyItFits:'Martial arts give beginners structure: warm-ups, drills, etiquette, feedback, and visible milestones. The best style is the one with a safe, welcoming coach near you.',
      howToStart:'Choose one style, then judge the club more than the logo. Ask about beginner classes, trial sessions, sparring expectations, and whether equipment is loaned.',
      equipment:[{item:'Gi / uniform (club may loan one)',tier:'later'},{item:'Comfortable athletic wear',tier:'need'},{item:'Mouthguard',tier:'later'}],
      adaptive:{
        low_budget:'Many clubs have sliding-scale dues or reduced first-month rates. Ask.',
        no_equipment:'Most clubs loan a gi to new members for the first few sessions.',
        shy_solo:"Drilling technique alone or in pairs is the core of most martial arts. You won't be thrown into sparring immediately.",
        social_team:"Martial arts dojos have a strong community — you'll know people quickly.",
        limited_time:'A standard class runs 60 minutes. Most people go 2–3 times per week.',
        competitive:'Every martial art has a competition structure. BJJ tournaments run almost every weekend across the country.',
      },
      checklist:['Pick one martial art style to try first','Find a local club and ask about beginner classes','Attend a trial class with no pressure to be good','Go back at least twice before deciding']
    }
  },

  skateboarding: {
    id:'skateboarding', name:'Skateboarding', icon:'🛹',
    fitTags:['shy_solo','high_energy'],
    pitch:'Creative, stubborn, and self-directed — skateboarding makes tiny progress feel enormous.',
    guide:{
      whyItFits:"Skateboarding gives you freedom and immediate feedback. It is frustrating in honest ways, but the first clean push or turn feels like yours because it is.",
      howToStart:"Get a real complete board, helmet, and pads. Find smooth flat ground and spend the first sessions only on stance, pushing, turning, and stopping.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'Thirty focused minutes on one basic skill can move the needle.',
        competitive:'Local skate jams and amateur contests are accessible once you have a few basics.',
      },
      checklist:['Get a complete beginner skateboard and safety gear','Find a smooth flat surface away from traffic','Learn to push, turn, and stop safely','Visit a skate park just to watch flow and etiquette']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Short games, friendly rotations, and just enough chaos to make beginners laugh.",
    guide:{
      whyItFits:"Pickleball is low-impact and social without needing a long learning curve. Open play works because games rotate quickly and new players are expected.",
      howToStart:'Find open play at a park, rec centre, or club. Borrow a paddle, say you are new, and learn the serve plus the kitchen rule before worrying about strategy.',
      equipment:[{item:'Pickleball paddle',tier:'need'},{item:'Pickleballs',tier:'need'},{item:'Court shoes',tier:'nice'}],
      adaptive:{
        low_budget:'Paddles cost $20–40 for a decent beginner option. Many parks provide loaner paddles at open play.',
        no_equipment:'Ask at open play sessions — loaner paddles are very common.',
        shy_solo:'Open play is social by design, but you can practice solo against a wall.',
        social_team:'Open play is one of the most social sport formats available. Rotational games mean you meet everyone.',
        limited_time:'A single open play session has games of 5–7 minutes each. Drop in for 30 minutes.',
        competitive:'USA Pickleball runs tournaments for every skill level including beginners.',
      },
      checklist:['Find an open play session near you','Ask whether beginner courts or rotations exist','Learn the basic serve and kitchen rule','Come back once after the first-game confusion fades']
    }
  },

  badminton: {
    id:'badminton', name:'Badminton', icon:'🏸',
    fitTags:['social_team','competitive','low_budget'],
    pitch:"Light to start, lightning-fast later — badminton is friendlier than it looks and faster than people expect.",
    guide:{
      whyItFits:'Badminton lets beginners rally almost immediately, then slowly reveals speed, footwork, deception, and tactics. Drop-in nights make it easy to test without a big commitment.',
      howToStart:'Find a community hall, gym, or club drop-in. Borrow a racket if possible and spend the first night learning the serve, boundaries, and how doubles rotation works.',
      equipment:[{item:'Badminton racket ($15–25)',tier:'need'},{item:'Non-marking court shoes',tier:'need'},{item:'Shuttlecocks',tier:'need'}],
      adaptive:{
        low_budget:'A racket costs $15–25. Many drop-in sessions provide shuttles for free.',
        no_equipment:'Community hall sessions usually have spare rackets. Ask ahead.',
        shy_solo:'Rally alone against a wall to build basic technique.',
        social_team:'Badminton drop-in sessions are very social — you rotate opponents constantly.',
        limited_time:'A game to 21 points takes 15–20 minutes. Drop-in sessions are perfect for a quick game.',
        competitive:'Badminton England and USAB both run beginner tournament pathways.',
      },
      checklist:['Find a local badminton drop-in session','Borrow or buy a basic racket','Attend one session and say you are new','Learn the serve and basic court lines']
    }
  },

  ultimate_frisbee: {
    id:'ultimate_frisbee', name:'Ultimate Frisbee', icon:'🥏',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Running, throwing, and a culture that tries hard not to make beginners feel dumb.",
    guide:{
      whyItFits:'Ultimate combines the movement of field sports with a self-refereed culture that puts sportsmanship in the rules. It is energetic, social, and unusually open to new adults.',
      howToStart:"Buy or borrow an ultimate disc and learn a backhand throw. Then find beginner pickup or a local club session; many groups are used to teaching first-timers.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Ask the organiser before the session.',
        shy_solo:'Hard to practice alone but throwing against a target or fence works.',
        social_team:'One of the most welcoming team sport communities anywhere. The "spirit of the game" culture is real.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get or borrow an ultimate disc','Learn a basic backhand throw','Find a local club or beginner pickup game','Attend your first session and ask about Spirit of the Game']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythm, legs, lungs, and teamwork — or a brutally honest solo erg in the corner of the gym.',
    guide:{
      whyItFits:"Rowing is low-impact but demanding, with a rhythm that can feel almost meditative. Clubs often have learn-to-row pathways, and the indoor rower is a practical first taste.",
      howToStart:"Try an indoor rower first, ideally after watching a form tutorial or asking gym staff. If it clicks, look for a local learn-to-row course before getting on the water.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide boats and oars for learn-to-row sessions.',
        shy_solo:'Indoor rowing (erg) works well solo, and many gyms have machines.',
        social_team:'Rowing clubs are strong social communities — crew boats require teamwork.',
        limited_time:'A 20-minute erg piece is a full workout.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a gym with ergs or a local rowing club','Learn the basic rowing stroke sequence','Try 10 to 20 easy minutes indoors','Look up learn-to-row programmes near you']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:"Quiet precision with a stubborn little ball — the range is enough for a satisfying first try.",
    guide:{
      whyItFits:"Golf rewards patience, feel, and small adjustments. You can start alone at a driving range without keeping score or holding anyone up.",
      howToStart:"Go to a driving range and rent clubs. Use half-swings, take breaks, and make clean contact the only goal for day one.",
      equipment:[{item:'Golf clubs (rent to start)',tier:'rent'},{item:'Golf balls',tier:'need'},{item:'Golf shoes',tier:'later'}],
      adaptive:{
        low_budget:'Driving ranges charge $10–20 for a bucket of balls. Club rental is usually $5–10 extra. Many municipal courses are under $25.',
        no_equipment:"Driving ranges and courses rent clubs. You don't need to own anything to start.",
        shy_solo:"Driving ranges and solo rounds are the norm — no one expects you to know anyone.",
        social_team:'Golf leagues and four-ball formats are social. Many clubs run mixer events.',
        limited_time:"A driving range session takes 45–60 minutes. You don't need a full 18-hole round to start.",
        competitive:'Every golf club has a handicap system that makes fair competition possible at any level.',
      },
      checklist:['Find a nearby driving range','Rent clubs and buy a small bucket of balls','Focus only on making clean contact','Look up beginner lessons or a short municipal course']
    }
  },

  gym_training: {
    id:'gym_training', name:'Gym Training', icon:'🏋️',
    fitTags:['shy_solo','high_energy'],
    pitch:'A straightforward way to get stronger, with progress you can write down and see.',
    guide:{
      whyItFits:"Gym training is predictable in a good way: pick a few movements, repeat them, and watch the numbers or reps improve. You control the pace and the privacy level.",
      howToStart:'Use a trial pass or quiet gym time. Start with a short full-body session: squat or leg press, push, row, hinge, and carry. Keep the weights easy.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A focused 30-minute full-body session is enough when you repeat it consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Find a gym with a trial pass or beginner orientation','Try a light 30-minute full-body session','Log weights, reps, and how hard it felt','Schedule the next visit before motivation gets vague']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'No gym required — just scalable strength work you can do on a floor, chair, or park bar.',
    guide:{
      whyItFits:"Calisthenics makes strength feel accessible because every exercise has an easier version. It suits people who want privacy, low cost, and visible progress.",
      howToStart:'Start with two gentle rounds: chair squats, incline push-ups, glute bridges, and a short plank. Leave pull-ups, dips, and daily training for later.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Free to start. Parks with pull-up bars exist in many cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is enough to build the habit.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Try two easy rounds of squats, incline push-ups, and a short plank','Find a park with pull-up bars if you want progression','Repeat the routine twice this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny table, big reactions — table tennis is casual until the spin starts messing with you.',
    guide:{
      whyItFits:'Table tennis starts as simple rallying and turns into a fast tactical game. It is cheap, easy to fit into a lunch break, and social without requiring a big group.',
      howToStart:'Find a table at a community centre, pub, office, or park. Borrow a paddle and rally slowly before playing points.',
      equipment:[{item:'Table tennis paddle ($15–25)',tier:'need'},{item:'Table tennis balls (pack of 6)',tier:'need'}],
      adaptive:{
        low_budget:'A decent paddle costs $15–20. Many community centres have free tables.',
        no_equipment:'Community centres and pubs often have paddles and balls available.',
        shy_solo:'Solo practice against a wall (ping pong rebound board) is effective and cheap.',
        social_team:'Round-the-table (group game) makes table tennis very social.',
        limited_time:'A match takes 10–15 minutes. Perfect for a lunch break.',
        competitive:'USATT and national associations have beginner tournament pathways.',
      },
      checklist:['Find a table tennis table near you','Borrow or buy a basic paddle','Rally slowly for 10 to 20 minutes','Learn the basic serve rule before scoring games']
    }
  },

  lacrosse: {
    id:'lacrosse', name:'Lacrosse', icon:'🥍',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Fast feet, quick hands, and a stick skill you can practise against any sturdy wall.',
    guide:{
      whyItFits:'Lacrosse has the speed of field sports plus the satisfying craft of catching, cradling, and passing with a stick. Wall ball gives beginners a private way to improve.',
      howToStart:'Find a local club or recreational league and ask about equipment loans. Practise wall ball before your first session so catching feels less frantic.',
      equipment:[{item:'Lacrosse stick',tier:'need'},{item:'Helmet and pads (full lacrosse)',tier:'need'},{item:'Cleats',tier:'need'}],
      adaptive:{
        low_budget:'Used equipment is widely available. Box lacrosse needs less gear than field.',
        no_equipment:'Some club programmes loan equipment to beginners for the first season.',
        shy_solo:'Wall ball (throwing against a wall) is a legitimate solo lacrosse practice.',
        social_team:'Lacrosse has a very strong team and club culture.',
        limited_time:'Wall ball for 20 minutes is enough to sharpen the basics.',
        competitive:'USA Lacrosse runs leagues and tournaments at every level.',
      },
      checklist:['Find a local lacrosse club or recreational league','Ask about beginner programmes and loaner gear','Practise wall ball for 15 minutes','Attend one beginner club practice']
    }
  },

  rugby: {
    id:'rugby', name:'Rugby', icon:'🏉',
    fitTags:['social_team','high_energy','competitive'],
    pitch:"Physical, loud, and famously welcoming — especially if you start with touch or tag.",
    guide:{
      whyItFits:"Rugby has a strong club culture, but beginners should not start by absorbing full contact. Touch or tag rugby gives you the running, passing, and community first.",
      howToStart:'Find a local rugby club and ask specifically about beginner, touch, or tag sessions. Watch a practice if you are nervous, then join the non-contact version first.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Clubs almost always have spare gear for beginners.',
        shy_solo:'Tag rugby (non-contact) removes the intimidation of full contact.',
        social_team:'Rugby clubs are among the most social in all of sport — the post-match tradition is famous.',
        limited_time:'Training sessions run 90 minutes. Tag rugby sessions are often shorter.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about touch, tag, or beginner programmes','Attend or observe one practice','Get a mouthguard only before contact training']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'A duel that feels like chess with footwork, reflexes, and rented gear.',
    guide:{
      whyItFits:'Fencing is technical, dramatic, and more accessible than it looks because clubs usually provide the kit. The early learning curve is footwork, timing, and calm decisions.',
      howToStart:'Find a fencing club with intro classes. Let them provide equipment, learn basic footwork first, and ask which weapon beginners usually start with.',
      equipment:[{item:'Fencing mask',tier:'club'},{item:'Jacket and glove',tier:'club'},{item:'Blade (after lessons)',tier:'later'}],
      adaptive:{
        low_budget:'Clubs provide equipment. Your cost is club membership and lesson fees.',
        no_equipment:'Everything is provided by the club for beginners.',
        shy_solo:'Individual weapon drilling and footwork are solo-friendly.',
        social_team:'Fencing clubs are small, tight-knit communities.',
        limited_time:'A lesson runs 45–60 minutes. Private lessons are even shorter.',
        competitive:'USA Fencing runs competitions at every level including absolute beginners.',
      },
      checklist:['Find a local fencing club','Attend a beginner class with club-provided equipment','Learn basic footwork and the three starting commands','Go back a few times before judging the sport']
    }
  },

  softball: {
    id:'softball', name:'Softball', icon:'🥎',
    fitTags:['social_team','competitive'],
    pitch:'A social team sport where beginners can contribute, learn, and still enjoy the post-game hang.',
    guide:{
      whyItFits:"Softball is built for recreational adults in a way many sports are not. Co-ed leagues tend to be social, forgiving, and competitive enough to stay interesting.",
      howToStart:"Search your parks department or local league site for adult softball. Look for free-agent registration if you do not have a team, and borrow a glove before buying.",
      equipment:[{item:'Softball glove',tier:'need'},{item:'Bat (often provided by league)',tier:'nice'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Leagues often have shared bats. A used glove: $15–25.',
        no_equipment:'Many leagues have loaner equipment. Ask when registering.',
        shy_solo:'Batting practice at a cage is a solo option to build confidence.',
        social_team:'Co-ed adult softball leagues are explicitly social. Post-game outings are common.',
        limited_time:'Games run 60–90 minutes. One game per week is the normal commitment.',
        competitive:'City-wide recreational tournaments run at the end of most seasons.',
      },
      checklist:['Search your city parks department for adult softball leagues','Ask about free-agent registration or beginner divisions','Borrow or buy a basic glove','Show up early to your first game and warm up']
    }
  },

  gymnastics: {
    id:'gymnastics', name:'Gymnastics', icon:'🤸',
    fitTags:['high_energy','shy_solo','competitive'],
    pitch:'Strength, mobility, and body control, taught from the floor up in adult beginner classes.',
    guide:{
      whyItFits:'Gymnastics builds body awareness in a way few sports can match. Adult beginner classes usually start with safe floor shapes, rolls, mobility, and conditioning.',
      howToStart:'Find a gymnastics club that explicitly offers adult beginner classes. Start with coached floor work and basic rolls; apparatus can wait.',
      equipment:[{item:'Gymnastics shorts/leotard',tier:'need'},{item:'Gymnastics shoes or bare feet',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Gymnastics clubs have a strong community and social structure.',
        limited_time:'A class runs 60–90 minutes.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Attend one coached class','Learn a safe roll or basic floor shape','Come back once before deciding it is too hard']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, sliding nerves, and the thrill of linking your first controlled turns.',
    guide:{
      whyItFits:'Skiing can feel intimidating, but beginner lessons are structured for people who have never stood on skis. The payoff is real once stopping and turning start to click.',
      howToStart:'Book a beginner lesson at a smaller hill or resort and rent everything. Do not self-teach; learning to stop safely is the first milestone.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is usually enough for the first taste.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local hill or resort','Rent full gear on arrival','Practise stopping and gentle turns on beginner terrain','Ask about a return discount or second lesson']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'The first day is humbling, the second can change everything — snowboarding rewards persistence.',
    guide:{
      whyItFits:"Snowboarding has a distinct style and flow, but the entry is bumpier than skiing. A lesson, wrist guards, and realistic expectations make the difference.",
      howToStart:'Book a beginner snowboard lesson and rent wrist guards. Expect falling, focus on safe edges, and plan a second try before deciding.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practise at your own pace once you have the basics from a lesson.',
        social_team:'Snowboard parks have a social, helpful culture.',
        limited_time:'A 3-hour morning lesson is usually enough for day one.',
        competitive:'Halfpipe, slopestyle, and boardercross have structured pathways at most resorts.',
      },
      checklist:['Book a beginner snowboard lesson','Rent wrist guards and full gear','Get through one lesson focused on balance and edges','Go back a second time before deciding']
    }
  },

  surfing: {
    id:'surfing', name:'Surfing', icon:'🏄',
    fitTags:['high_energy','shy_solo'],
    pitch:'Ocean timing, balance, patience, and the kind of first ride people remember for years.',
    guide:{
      whyItFits:'Surfing is physical, technical, and deeply tied to conditions. A good first lesson gives you safety basics, whitewater practice, and maybe a stand-up moment without pretending the ocean is easy.',
      howToStart:'Book a surf school lesson at a beginner break. Let instructors choose the board, tide, and waves. Do not self-teach in open ocean.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson gives you plenty to process on day one.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a lesson with gear included','Practise pop-ups and whitewater rides safely','Return for a second session if the ocean hooked you']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, visible progress, and the satisfying thud of an arrow landing where you meant it.',
    guide:{
      whyItFits:'Archery is calm without being boring. You get immediate feedback every shot, and clubs usually provide equipment so beginners are not guessing what to buy.',
      howToStart:"Find a local archery club or range and book an intro session. Use their equipment until a coach helps you choose your own.",
      equipment:[{item:'Recurve bow',tier:'club'},{item:'Arrows',tier:'club'},{item:'Arm guard and finger tab',tier:'club'},{item:'Own bow (after 2–3 months)',tier:'later'}],
      adaptive:{
        low_budget:"Clubs provide all equipment. Session fee: $10–20. Don't buy anything until you're committed.",
        no_equipment:'Clubs provide beginner equipment for intro sessions.',
        shy_solo:'Deeply individual. You focus on your own targets and progress.',
        social_team:'Archery clubs have a strong community. Club nights and competitions are social.',
        limited_time:'A session runs 60–90 minutes. Indoor ranges are weather-independent.',
        competitive:'USA Archery has structured competition pathways from beginner to Olympic level.',
      },
      checklist:['Find a local archery club or range','Book a beginner intro session','Learn stance, anchor point, and range safety','Shoot your first small round with club equipment']
    }
  },

  cheer: {
    id:'cheer', name:'Cheerleading', icon:'📣',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Big team energy, sharp timing, and serious athletic work behind the sparkle.',
    guide:{
      whyItFits:'Competitive cheer combines tumbling, jumps, stunts, dance, and trust. It is physically demanding and highly social, which is exactly the draw for the right beginner.',
      howToStart:'Find an All-Star, school, or community cheer programme and ask about beginner or prep teams. Be clear about your schedule before committing.',
      equipment:[{item:'Athletic wear with full range of motion',tier:'need'},{item:'Cheer shoes (flexible, cross-training)',tier:'need'},{item:'Team uniform (provided by gym)',tier:'later'}],
      adaptive:{
        low_budget:'All-Star cheer has fees. Look for school squads or community programmes as lower-cost entry.',
        no_equipment:'Gyms provide mats and all equipment. You need shoes and athletic wear.',
        shy_solo:"Cheerleading is entirely team-based. Not ideal if you want to start alone.",
        social_team:"One of the strongest team cultures in sport. You'll know your teammates well, quickly.",
        limited_time:'Practices run 2–3 hours. This sport requires a real time commitment.',
        competitive:'All-Star cheer has a full competition circuit from Levels 1–7 with nationals and worlds.',
      },
      checklist:['Find a local All-Star, school, or community cheer programme','Attend an open house or trial practice','Learn one basic jump or motion sequence','Ask about practice schedule, fees, and competition expectations']
    }
  },

}

// Mark popular sports
Object.values(SPORTS).forEach(s => { if (!s.category) s.category = 'popular' })

// Niche sports — searchable, discoverable, never recommended by the quiz
const NICHE_SPORTS = {
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Learning to move through everyday spaces with control: vaults, landings, balance, and a lot less recklessness than movies suggest.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'A tandem jump is the realistic first step: instructor attached, training first, then a very memorable door opening.' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Foot-launched flight under a soft wing. Most beginners start with a tandem ride before touching the controls.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Prone flight under a rigid wing, usually learned in tiny hops on training hills before the big-sky version.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'Slow, scenic, and slightly surreal: you drift with the wind while a pilot handles the flame and landing field.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'A low seat, a double paddle, and calm water to start. Rentals make it easy to test before buying anything.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'Open-boat paddling that can be peaceful solo or chatty with a partner. Flatwater rentals are the easy doorway.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Standing on a wide board and paddling calm water: part balance practice, part moving meditation, part sneaky core workout.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'Board riding behind a boat or cable system. Expect splashy starts before the smooth carving shows up.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'A board, a kite, and a lot of wind management. Lessons are non-negotiable, but the payoff is huge.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'Sail control meets board balance. It feels old-school in the best way and rewards stubborn, patient learners.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Breathing underwater after proper training, then exploring reefs, wrecks, and quiet worlds you cannot reach from shore.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'Diving on one breath, where calm and technique beat muscling through. Always learn with certified instruction and a buddy.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Swimming, treading, passing, and wrestling for space in the pool. Fantastic cardio, not a casual float.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'A long boat, a drumbeat, and twenty paddlers trying to become one engine. Clubs often teach total beginners.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Snowy endurance without lift lines: glide across groomed trails and learn why gentle-looking hills are not gentle.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Public rink sessions let you rent skates, cling to the boards for a while, then discover the glide.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Edges, spins, jumps, and performance on ice. Adult learn-to-skate classes are the sensible first step.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Granite stones, sweeping, strategy, and surprisingly loud teamwork. Most clubs run learn-to-curl nights.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Skating, stickhandling, and fast shifts. Adult beginner leagues exist, but learn-to-skate comes first.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Winter hiking with oversized traction. Start on marked trails and let deep snow make walking feel like an adventure.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Throws, trips, pins, and the art of landing safely. Beginner judo starts with falling before flying.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling built around leverage and patience. Expect close contact, problem-solving, and a very chatty mat culture.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Strikes, forms, etiquette, and a clear belt path. Good dojos make the fundamentals feel serious but welcoming.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Kicks, speed, flexibility, and structured ranks. The first classes are basics, not flying head kicks.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Thai boxing with fists, elbows, knees, and shins. Beginner classes can be technical, sweaty, and no-spar.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punch-kick combinations on bags and pads. A strong choice if you want intensity without immediate contact.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Practical self-defense drills built around pressure and simple responses. Quality depends heavily on the gym.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Brazilian movement, music, kicks, and play inside a circle. It is martial art, dance, and community at once.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'A calm, technical art built around blending and redirecting force. Less fight-night energy, more patient mechanics.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Striking plus grappling under one roof. Look for fundamentals classes where sparring is earned, not sprung on you.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Japanese sword fencing with bamboo swords, armor, shouting, and deep etiquette. Disciplined, loud, and distinctive.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'A small tough bike for pump tracks, parks, tricks, or racing. Start with control before chasing airtime.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Trail riding with dirt, roots, speed, and line choice. Beginner trails and rentals keep the first ride realistic.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Contact, strategy, and big found-family energy on skates. Many leagues teach new skaters from basics.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Smooth paths, rented or used skates, and a first mission of stopping confidently before going fast.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'Cruising and carving on a longer board. Less trick-focused than skateboarding, still very much about balance and control.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'A few discs and a public course can buy you a whole afternoon of walking, aiming, and friendly frustration.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Learning balance, cues, and trust with a very large teammate. Lesson barns provide the horse and tack.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Mallets, horses, speed, and teamwork. Beginner polo schools exist, usually with horses provided for lessons.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'Three darts, a board, and a game that can live in pubs, garages, leagues, or world-title arenas.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Slow-looking, quietly ruthless target play on grass. Clubs tend to be social, patient, and very tactical.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules in parks and squares: simple rules, clever shots, and a pace that leaves room for conversation.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Bean bags, angled boards, and backyard pressure. Easy to start, weirdly tense when the game is close.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Short climbs over padded floors, no ropes needed. It is the most direct way to try climbing indoors.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'A flat line between two anchors and a lesson in humility. Balance improves one shaky step at a time.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing with structure: safe progressions, real aerial skills, and more cardio than childhood memories imply.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run in one event. Sprint distance is the entry point, but training still needs planning.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'Map reading meets running or hiking. You find checkpoints, make route choices, and get delightfully lost on purpose.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Bat, ball, wickets, and a lot of tradition. Soft-ball or indoor cricket is the quickest beginner doorway.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Low stick work, fast passing, and constant movement. Look for clubs with adult social or beginner sessions.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light sticks and a plastic ball. Fast, accessible, and much less gear-heavy than ice hockey.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'A no-dribble, position-specific cousin of basketball with strong social league culture in many countries.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'Tag, wrestling, breath control, and team tactics in one South Asian sport. Beginner access depends on local clubs.' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Speed, rhythm, and hand-eye coordination with plastic cups. It sounds silly until the timer starts.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating chess and boxing rounds, where panic can come from a jab or a queen fork.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprint, plant, swing, fly. This is a coached track event, not something to improvise at the park.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'A puck on the pool floor, short breath-hold dives, and teammates surfacing between plays. Niche, real, and oddly fun.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
