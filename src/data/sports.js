const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and suddenly you have a reason to move with other people.',
    guide:{
      whyItFits:"Basketball is easy to sample because public courts are common and solo practice still feels like the real thing. You can shoot around quietly, then join pickup when your confidence catches up.",
      howToStart:"Find a public court at a nearby park. Practise dribbling with both hands and take relaxed shots near the rim before worrying about full games.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, or just show up at a busy court and join someone else's game.",
        no_equipment:"Head to any park court and ask to join. Someone always has a ball.",
        shy_solo:"Public courts are completely normal to use alone. Dribble and shoot by yourself — no pressure to join anything.",
        social_team:"Show up at a busy court on a weekend and ask \"got next?\" — that is how pickup basketball usually works.",
        limited_time:'A 20-minute solo session of free throws, layups, and dribbling is enough to build comfort.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Attempt 20 free throws','Show up at a pickup game and ask to play']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Simple to start, endlessly deep, and built around the joy of chasing a ball with people.",
    guide:{
      whyItFits:"Soccer is low-cost, social, and forgiving at casual levels. You do not need perfect footwork to enjoy a kickaround, and the basics improve quickly when you touch the ball often.",
      howToStart:"Find a park or wall. Start with gentle touches, short passes, and trying to keep the ball close before jumping into a pickup game.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Show up to a pickup game and join a side. Balls are always shared.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — groups are everywhere.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch, park, or wall','Practise gentle touches for 10 minutes','Try wall passing for 10 min','Search for a local casual kickaround']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"One clean rally can hook you. Public courts and a wall make the first step easy.",
    guide:{
      whyItFits:"Tennis gives you a clear feedback loop: the ball either comes back or it does not. Wall practice lets you build timing privately before playing points with someone else.",
      howToStart:"Find a public court or hitting wall. Start close, swing gently, and aim for five controlled returns in a row.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying gives you useful solo reps. 20-30 minutes, no partner needed.',
        social_team:'Most tennis clubs run beginner group clinics. USTA has local adult programmes.',
        limited_time:'20-30 minutes of wall rallying is enough for a focused beginner session.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public tennis court near you','Spend 20 min hitting a wall — focus on consistency','Get or borrow a basic racket','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'Quick rallies, loud teammates, and plenty of room to be new if you find the right open gym.',
    guide:{
      whyItFits:"Volleyball feels social from the first warm-up, and beginners can contribute by learning one reliable pass. Beach and open gym sessions keep the gear barrier low.",
      howToStart:"Find an open gym night or a beach court. Focus on passing first, and tell people you are new so they can place you in easier rotations.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gym nights and beach courts always have balls. Just show up.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" — groups are active and welcoming.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Practise self-bumping — 20 reps','Attend one open gym session','Search for beginner recreational leagues']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'A slower-burn sport where one clean crack off the bat can make the whole session worth it.',
    guide:{
      whyItFits:'Baseball rewards patience, timing, and small technical improvements. It suits people who like practising a specific skill, then bringing that skill into a team setting.',
      howToStart:'Find a batting cage or a softball clinic. Start with contact over power, and use wall throws with a tennis ball to build hand-eye coordination.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage session is completely solo. No team needed to start.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'20 minutes at a batting cage is a real session. Focus on clean contact.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage near you','Take 30 swings — focus on contact not power','Practise throwing with a partner or wall','Look up local recreational softball leagues']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'All the routes, strategy, and team buzz, without needing pads or a tackle background.',
    guide:{
      whyItFits:"Flag football keeps the strategy and teamwork of football while lowering the contact and equipment barrier. It is easiest when you join a beginner or recreational league that explains positions.",
      howToStart:"Start by practising simple throws and catches. Then look for a flag football league, clinic, or pickup group that welcomes free agents.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practise spiral throwing against a fence or wall alone.',
        social_team:'Flag football leagues are among the most social recreational sports. Search Meetup.',
        limited_time:'A 20-minute throwing and route-running solo session is a useful first practice.',
        competitive:'Flag tournaments run frequently and can get seriously competitive.',
      },
      checklist:['Get a football or find one to borrow','Practise throwing a spiral','Watch one game and note the positions','Search for a local flag football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:"No scoreboard, no venue, no fuss. Just a route, your breath, and a little more than last time.",
    guide:{
      whyItFits:"Running is honest and flexible: you can make it social, private, competitive, or meditative. Progress can be as simple as feeling less gassed on the same route.",
      howToStart:"Start with 15-20 minutes of run-walk intervals two or three times a week. Keep the effort easy enough that you could speak in short sentences.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is completely normal. Most runners prefer it.',
        social_team:'Running clubs are among the most welcoming groups in sport. Search "running club [your city]".',
        limited_time:'A 20-minute run three times a week is a legitimate training programme.',
        competitive:'Local 5K races are common and usually welcoming to first-timers.',
      },
      checklist:['Complete a 15-20 minute run-walk','Download a free run-tracking app if you like data','Find your nearest track or park path','Look up a local 5K, no signup pressure yet']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet, full-body effort where the water carries your joints and exposes your technique.',
    guide:{
      whyItFits:"Swimming is demanding without being harsh on your joints. Technique matters more than brute strength, so small improvements in breathing and body position feel noticeable fast.",
      howToStart:'Book a lane swim session. Start with short lengths, plenty of rest, and a simple goal: stay relaxed in the water.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles is all you need.",
        shy_solo:"Lane swimming is one of the most solitary sports — you're in your own lane, focused entirely on yourself.",
        social_team:'Masters Swimming programmes are adult lap groups at all levels — welcoming to beginners.',
        limited_time:"20 minutes: 4×25m with 30-second rest. That's a full first session.",
        competitive:'USMS (Masters) meets are beginner-friendly. Enter open events and chase your own time.',
      },
      checklist:['Find your nearest pool with lane swim','Book a session and try 4 short lengths with rests','Notice when your breathing feels rushed','Look up beginner or Masters Swimming options nearby']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Sharp, sweaty, confidence-building work, with plenty to learn before sparring is even on the table.',
    guide:{
      whyItFits:"Boxing builds coordination, fitness, and composure under pressure. A good beginner gym will slow things down, teach the basics, and keep sparring optional until you are ready.",
      howToStart:"Find a boxing gym with fundamentals classes. Spend your first month on stance, jab, cross, defense, and footwork.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms have a strong training community. Training partners come quickly.',
        limited_time:'A 30-minute bag workout — warm-up, 3×3-min rounds, cool-down — is plenty for an early session.',
        competitive:'USA Boxing and Golden Gloves have true beginner divisions. Ask your coach after 3–6 months.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Technical, intense, and humbling in the best way, but it needs a real coach from day one.',
    guide:{
      whyItFits:"Wrestling rewards effort, leverage, and calm under pressure. It is not casual solo practice, but the coaching environment can be incredibly grounding if you like hard things taught clearly.",
      howToStart:"Find a wrestling club, school programme, or adult grappling class. Watch or attend a beginner practice before buying gear.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A practice session runs 60–90 minutes. There's no shorter version that works.",
        competitive:'Ask your club coach about entry-level tournaments after 1–2 months of training.',
      },
      checklist:['Find a local wrestling club or YMCA programme','Attend one open practice','Learn basic stance from a coach','Ask about beginner training schedule']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A quiet way to build mobility, strength, and a better relationship with your own body.',
    guide:{
      whyItFits:"Yoga can be private, affordable, and surprisingly strengthening. It gives you a low-pressure place to notice what feels tight, shaky, or calmer than when you started.",
      howToStart:"Find a short beginner video and do it at home. Keep the first few sessions gentle; the goal is learning positions, not proving flexibility.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes can be excellent. A mat costs $10–20, and carpet works while you are trying it.",
        no_equipment:'You can practise on carpet without a mat to start.',
        shy_solo:'This is one of the most private sports you can do. Just you and a YouTube video.',
        social_team:'Studio classes are social and welcoming — most have beginner sessions.',
        limited_time:'A 20-minute session is a complete practice. Start there.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (20 min)",'Complete your first session','Practise 3 times this week',"Notice what feels tight — that's your target"]
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:"A workout that doubles as a tiny trip, whether you ride alone or find a group later.",
    guide:{
      whyItFits:"Cycling is gentle on joints but can still build serious fitness. It also changes the feel of your neighborhood: routes, hills, and errands become little adventures.",
      howToStart:'Borrow or find a used bike. Pick a flat route for your first ride. Focus on comfort and consistency before speed.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50–150. Check your city for bike libraries or loan programmes.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programmes before buying anything.',
        shy_solo:'Cycling alone is completely normal and preferred by most cyclists.',
        social_team:'Group rides run in most cities. Search for your local cycling club — most have beginner-paced rides.',
        limited_time:"A 20-minute loop around your neighbourhood is a real session. Distance doesn't matter at first.",
        competitive:'Local cycling clubs have timed rides and beginner races. Strava segments give you something to chase solo.',
      },
      checklist:['Borrow or find a used bike','Find a flat, safe 20-minute route','Complete your first ride','Join a local cycling club or find a group ride']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'A puzzle you solve with your hands and feet, surrounded by people cheering tiny wins.',
    guide:{
      whyItFits:"Climbing blends problem-solving with physical challenge. Indoor gyms rent gear, grade routes clearly, and make it normal to try, fall, rest, and try again.",
      howToStart:"Visit an indoor climbing gym. Rent shoes, ask for an orientation, and start with the easiest boulders before touching roped climbs.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent everything. Just show up.',
        shy_solo:'Bouldering is completely solo — no partner needed, no ropes, just you and the wall.',
        social_team:'Climbing gyms have an unusually welcoming community. People actively help each other.',
        limited_time:'A 45-minute bouldering session is a complete workout.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent gear','Try bouldering for 45 minutes','Ask a staff member to show you one route']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"A walk with better scenery, clearer headspace, and just enough challenge to feel earned.",
    guide:{
      whyItFits:"Hiking can meet you where you are: a flat park loop, a wooded trail, or a bigger climb later. It is one of the easiest ways to turn movement into a mood shift.",
      howToStart:'Find a local trail on AllTrails or a parks website. Pick something rated "easy" and under 3 miles for your first outing.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need shoes and water. Both you probably have.',
        shy_solo:'Most people hike alone. Trails are safe and well-marked on AllTrails.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 90-minute loop is a real hike. You don't need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download AllTrails or check your local parks website','Find an easy trail near you','Complete a hike under 3 miles',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music makes the work feel lighter. Pick a style that makes you want to move twice.',
    guide:{
      whyItFits:'Dance gives fitness a soundtrack and a social world if you want one. Different styles feel wildly different, so taste matters more than choosing the "best" option.',
      howToStart:'Pick one style that actually sounds fun. Find a beginner or absolute beginner class, and expect the first session to feel awkward.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is enough to know whether the style has a spark. Most studios do drop-ins.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or free intro session','Attend your first class','Go back a second time — the first is always awkward']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Clear structure, useful rituals, and skills that make progress feel visible.',
    guide:{
      whyItFits:'Martial arts give beginners a map: fundamentals, repetition, feedback, and visible progression. The best clubs make you feel coached, not thrown into the deep end.',
      howToStart:'Pick one style and find a local club with beginner classes. Attend a trial class before buying a uniform or committing to a contract.',
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
    pitch:'Self-directed, creative, and very honest about balance, pavement, and patience.',
    guide:{
      whyItFits:"Skateboarding lets you choose your own pace and style. It can be frustrating, but the smallest wins feel huge because you earned them on your own feet.",
      howToStart:"Get a complete board (not a toy) and protective gear. Find a smooth surface and learn to push, turn, slow down, and stop before trying tricks.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'30 minutes of focused practice on one basic skill is enough for progress.',
        competitive:'Amateur skateboarding competitions can be accessible at local skate parks.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Fast enough to be fun, gentle enough to start, and social before you know everyone's name.",
    guide:{
      whyItFits:"Pickleball lowers the intimidation of court sports. Open play rotates partners, games are short, and beginners can rally sooner than they expect.",
      howToStart:'Find an open play session at a local court. Ask about beginner times and borrow a paddle before buying one.',
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
    pitch:"Light setup, quick rallies, and a sneaky amount of sweat once the shuttle starts flying.",
    guide:{
      whyItFits:'Badminton is forgiving enough for first rallies but fast enough to stay interesting. Drop-in sessions make it easy to rotate partners and learn by playing.',
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
    pitch:"A running game with a disc, lots of movement, and a culture that usually teaches newcomers well.",
    guide:{
      whyItFits:'Ultimate combines running, passing lanes, and constant teamwork. Because the sport is self-refereed, the culture tends to explain rules and value fair play from the start.',
      howToStart:"Find a local ultimate club or pickup game. Most cities have a club that runs beginner sessions. A disc costs $10.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Just show up.',
        shy_solo:'Hard to practice alone but throwing against a target or fence works.',
        social_team:'One of the most welcoming team sport communities anywhere. The "spirit of the game" culture is real.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get or borrow an ultimate disc','Find a local club or pickup game','Attend your first session','Learn a basic backhand throw before worrying about hucks']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythmic, low-impact effort that can feel meditative on an erg and electric in a boat.',
    guide:{
      whyItFits:"Rowing is low-impact, technical, and deeply rhythmic. Indoor rowing lets you test the movement first, while clubs often have structured learn-to-row programmes for adults.",
      howToStart:"Try an indoor rower at a gym or find a local club's learn-to-row programme. Focus on smooth form before chasing watts.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide everything on the water. Just show up.',
        shy_solo:'Indoor rowing (erg) is completely solo. Many gyms have them.',
        social_team:'Rowing clubs are strong social communities — crew boats require teamwork.',
        limited_time:'A 20-minute erg piece is a full workout.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a local rowing club or gym with ergs','Try a 20-minute indoor rowing session','Look up learn-to-row programmes near you','Attend a beginner club session']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:"Quiet repetition, tiny adjustments, and the occasional perfect shot that keeps you coming back.",
    guide:{
      whyItFits:"Golf rewards patience, feel, and attention to detail. A driving range lets you learn privately, and short municipal courses can keep the first on-course experience manageable.",
      howToStart:"Go to a driving range and rent clubs if needed. Focus on balanced swings and making contact, not distance.",
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
    pitch:'A practical lab for getting stronger, with numbers you can track and routines you can adjust.',
    guide:{
      whyItFits:"Gym training is measurable and flexible. You can build strength, confidence, or general fitness without needing a team, a season, or perfect coordination.",
      howToStart:'Use a trial pass or budget gym. On day one, do a simple full-body session with light weights and leave room to learn the machines.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 30-minute full-body session is a complete workout when done consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Sign up for a gym or find one with a free trial','Complete a light 30-minute full-body workout','Log your weights so you know where to start next time','Schedule your next visit before you leave']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'No gym, no commute, no audience. Just bodyweight basics that scale with you.',
    guide:{
      whyItFits:"Calisthenics is flexible, private, and cheap. Progressions let you start below a full push-up or pull-up and still build real strength.",
      howToStart:'Start with a short bodyweight circuit: squats, incline push-ups, a plank, and easy rows if you have a bar. Rest days matter.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is a complete workout.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete an easy circuit of squats, incline push-ups, and a short plank','Find a park with pull-up bars near you','Do the routine 2-3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Small table, huge speed. It starts playful and gets tactical fast.',
    guide:{
      whyItFits:'Table tennis gives quick feedback and quick rematches. Spin and placement add depth later, but day one can simply be keeping a rally alive.',
      howToStart:'Find a table at a community centre, pub, or park. Borrow a paddle and rally slowly, aiming for control before speed.',
      equipment:[{item:'Table tennis paddle ($15–25)',tier:'need'},{item:'Table tennis balls (pack of 6)',tier:'need'}],
      adaptive:{
        low_budget:'A decent paddle costs $15–20. Many community centres have free tables.',
        no_equipment:'Community centres and pubs often have paddles and balls available.',
        shy_solo:'Solo practice against a wall (ping pong rebound board) is effective and cheap.',
        social_team:'Round-the-table (group game) makes table tennis very social.',
        limited_time:'A match takes 10–15 minutes. Perfect for a lunch break.',
        competitive:'USATT and national associations have beginner tournament pathways.',
      },
      checklist:['Find a table tennis table near you (community centre, park)','Borrow or get a basic paddle','Rally with someone for 20 minutes','Learn the basic serve rule']
    }
  },

  lacrosse: {
    id:'lacrosse', name:'Lacrosse', icon:'🥍',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Fast breaks, stick skills, and a team culture with serious momentum.',
    guide:{
      whyItFits:'Lacrosse mixes running, passing, contact, and tactics. It can look intimidating, so beginner programmes and loaner gear matter a lot.',
      howToStart:'Find a local lacrosse club or recreational league. Ask about beginner sessions, loaner equipment, and wall-ball basics.',
      equipment:[{item:'Lacrosse stick',tier:'need'},{item:'Helmet and pads (full lacrosse)',tier:'need'},{item:'Cleats',tier:'need'}],
      adaptive:{
        low_budget:'Used equipment is widely available. Box lacrosse needs less gear than field.',
        no_equipment:'Some club programmes loan equipment to beginners for the first season.',
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
    pitch:"Physical, loyal, and famously social, especially if you start with touch or tag rugby.",
    guide:{
      whyItFits:"Rugby clubs often take community as seriously as competition. Touch or tag rugby gives you a safer way to learn spacing, passing, and the rhythm of the game.",
      howToStart:'Find a local rugby club and ask about beginner, touch, or tag rugby sessions. Watch a practice if you are unsure.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Clubs almost always have spare gear for beginners.',
        shy_solo:'Tag rugby (non-contact) removes the intimidation of full contact.',
        social_team:'Rugby clubs are among the most social in all of sport — the post-match tradition is famous.',
        limited_time:'Training sessions run 90 minutes. Tag rugby sessions are often shorter.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about tag rugby or beginner programmes','Watch or attend one beginner session','Get a mouthguard before your first contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Fast decisions, tiny feints, and the satisfying drama of a one-on-one duel.',
    guide:{
      whyItFits:'Fencing rewards timing, deception, and composure under pressure. Beginner classes usually provide the equipment, so you can test the sport before investing.',
      howToStart:'Find a local fencing club and attend a beginner class. Wear athletic clothes and let the club handle the gear.',
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
    pitch:'A friendly team sport with room for beginners, shared bats, and post-game conversation.',
    guide:{
      whyItFits:"Softball is one of the easier adult team sports to join because leagues often accept free agents. It is social first, with enough competition to keep games lively.",
      howToStart:"Search your city's parks department for adult softball leagues. Ask whether they place solo players on teams before buying much gear.",
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
    pitch:'Strength, mobility, and body control, taught safely from the floor up.',
    guide:{
      whyItFits:'Gymnastics builds strength, mobility, and body awareness in a structured environment. Adult beginner classes are designed around safe progressions, not childhood experience.',
      howToStart:'Find a gymnastics club that offers adult classes. Start with floor work, rolls, and basic shapes before worrying about apparatus.',
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
    pitch:'Cold air, mountain views, and a learning curve that feels much better with a lesson.',
    guide:{
      whyItFits:'Skiing can feel intimidating, but beginner lessons are built for exactly that. The payoff is a mix of speed, scenery, and winter atmosphere that is hard to replicate.',
      howToStart:'Book a beginner lesson at a ski resort or smaller local hill. Rent gear on-site and keep expectations focused on stopping, turning, and staying safe.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is enough for a real first taste.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Practise stopping and turning on beginner terrain','Ask about a return discount']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'Expect a messy first day, then a glimpse of flow that explains why people obsess over it.',
    guide:{
      whyItFits:"Snowboarding asks for patience early. Once edge control starts to click, the movement feels creative, loose, and very different from other winter sports.",
      howToStart:'Book a beginner snowboard lesson and rent wrist guards. Give yourself at least two sessions before deciding whether it is for you.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practise at your own pace once you have the basics from a lesson.',
        social_team:'Snowboard parks have a social, helpful culture.',
        limited_time:'A 3-hour morning lesson is a realistic first session.',
        competitive:'Halfpipe, slopestyle, and boardercross have structured pathways at most resorts.',
      },
      checklist:['Book a beginner snowboard lesson','Rent wrist guards','Get through your first 2-hour lesson','Go back a second time before deciding']
    }
  },

  surfing: {
    id:'surfing', name:'Surfing', icon:'🏄',
    fitTags:['high_energy','shy_solo'],
    pitch:'Ocean timing, balance, and a hard-earned stand-up that feels bigger than it looks.',
    guide:{
      whyItFits:'Surfing combines physical challenge with reading a changing environment. A surf school keeps the first session safe, simple, and focused on beginner waves.',
      howToStart:'Book a lesson at a surf school. They provide foam boards, explain ocean safety, and choose conditions that make sense for beginners.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is enough for a safe first taste.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a lesson','Practise the pop-up on sand before entering the water','Return for a second session if the first one leaves you curious']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, steady breathing, and the clean satisfaction of seeing an arrow land better.',
    guide:{
      whyItFits:'Archery is calm without being passive. Most clubs provide beginner equipment, and progress shows up clearly in your grouping and consistency.',
      howToStart:"Find a local archery club and ask about beginner sessions. Use club equipment until you know what style you like.",
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
    pitch:'Big team energy, sharp performance, and athletic work that is much tougher than it looks.',
    guide:{
      whyItFits:'Competitive cheer blends tumbling, stunting, jumps, dance, and trust. Entry-level teams exist, but the time commitment is real and the team culture is a major part of the draw.',
      howToStart:'Find a local All-Star cheer gym and ask about beginner programmes or open houses. Ask directly about schedule, cost, and expectations.',
      equipment:[{item:'Athletic wear with full range of motion',tier:'need'},{item:'Cheer shoes (flexible, cross-training)',tier:'need'},{item:'Team uniform (provided by gym)',tier:'later'}],
      adaptive:{
        low_budget:'All-Star cheer has fees. Look for school squads or community programmes as lower-cost entry.',
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
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Turning walls, rails, and stairs into movement problems. Start with safe basics, not rooftop stunts.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'A huge adrenaline hit with a tightly managed first step: tandem jump, instructor, briefing, then sky.' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Launching from a hill under a fabric wing. Tandem flights let you feel the air before learning controls.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Riding air currents under a rigid wing. Beginner schools start low, slow, and very supervised.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'Drifting wherever the wind takes you in a wicker basket under a giant flame-powered balloon.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'Low-to-the-water paddling that can be calm, scenic, or spicy depending on where you launch.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'An open boat, a paddle, and room for a friend, a cooler, or a very quiet morning.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Standing on a big floating board and paddling across calm water. Surprisingly meditative, sneakily core-burning.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'Board riding behind a boat or cable line. The first win is simply standing up and staying loose.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Wind, water, board, kite. Lessons are non-negotiable, but the payoff is enormous.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'Part sailing, part board sport. Awkward at first, then suddenly the wind starts doing the work.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Slow breathing, strange quiet, and underwater worlds. A try-dive or class is the safe first step.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'Diving on one breath, where calm beats force. Learn with a certified instructor, never alone.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Swimming, passing, wrestling for position, and trying to think while your legs are on fire.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'Twenty paddlers in a long boat moving as one to a drumbeat. Beginner-friendly clubs welcome anyone.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Skiing across flat or rolling terrain — basically running in snow with sticks.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Gliding on ice. Public sessions at most rinks let you rent skates and just go.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Spinning, jumping, and dancing on ice. Adult learn-to-skate programs exist in most cities.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Sliding granite stones on ice with brooms. Strangely tactical. Most clubs run beginner leagues.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Skating with sticks chasing a puck. Adult beginner leagues exist — though the gear list is long.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Walking on snow with oversized footwear. Hiking, but where deep snow would normally stop you.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'A grappling martial art focused on throws. Beginners spend their first weeks learning to fall safely.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling built on leverage, patience, and problem-solving under pressure.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Striking martial art with deep tradition. Classes follow a clear belt-by-belt path.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Korean kicking-focused martial art. High kicks, big jumps, structured progression.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Thai striking with fists, elbows, knees, and shins. Tough training, sharp coaching, big sweat.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punches and kicks on bags and pads. Beginner classes can be intense without being full-contact.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Israeli self-defense system focused on real-world threats. Practical over pretty.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Brazilian martial art that looks like dance, played in a circle to live music.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'Martial art that redirects an attacker\'s force. Calm, flowing, technical.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Mixed martial arts — striking and grappling. Most gyms run no-spar fundamentals classes.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Japanese sword fighting with bamboo swords and armor. Very disciplined, very loud.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'Tricks and racing on a small, tough bike. Skateparks usually welcome BMX too.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Dirt trails, roots, and controlled speed. Start on green trails and rent before buying.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Full-contact skating with fierce team culture. Most leagues teach new skaters from the basics.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Smooth paths, low-impact cardio, and enough glide to make a neighborhood loop feel fresh.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'A long skateboard for cruising and carving. Less about tricks, more about flow.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'A walk in the park with targets, discs, and just enough scorekeeping to stay hooked.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Riding a horse, taught from the basics. Lesson barns provide everything for first sessions.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Hockey on horseback with mallets. Some clubs run beginner polo schools with horses provided.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'Three darts, one board, endless tiny adjustments. Pub casual and league-serious can live in the same night.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Roll heavy biased balls toward a target on a manicured green. Quietly competitive, often delightful.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules with metal balls, a tiny jack, and a relaxed park-or-plaza feel.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Toss bean bags into a hole on an angled board. Easy to set up in a backyard or park.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Short climbing puzzles over padded floors. No ropes, lots of rests, plenty of satisfying tries.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'Balancing on a webbed line between trees. The first victory is standing for one breath.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing with structure. Adult classes turn airtime into safe shapes, landings, and skills.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run, stitched together. Start with a sprint plan and a lot of patience.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'Running through forests with a map and compass, finding flagged checkpoints. A puzzle and a workout.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Bat, ball, wickets, and a rhythm all its own. Soft-ball or indoor cricket is the gentlest doorway.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Hockey on grass with curved sticks and a hard ball. Big in many countries, growing in others.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light plastic sticks and a wiffle ball. Fast and beginner-friendly.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'No-contact basketball cousin played mostly outside the US. Local leagues welcome new players.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'A South Asian tag-and-wrestle game. One person raids while holding their breath, chanting "kabaddi".' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Pattern, speed, and hand-eye rhythm with cups. Weirdly satisfying, cheap, and very real.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating rounds of chess and boxing. Win by knockout or checkmate.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprinting with a long pole and using it to fling yourself over a high bar.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'Hockey on the bottom of a pool, played holding your breath. As niche as it sounds.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
