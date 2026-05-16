const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little nerve — easy to try alone, easy to grow into pickup.',
    guide:{
      whyItFits:"Basketball gives you a rare on-ramp: solo repetition first, social play later. You can build confidence shooting around before asking for next.",
      howToStart:"Find a public court at a nearby park. Practice dribbling with both hands and shooting close-range shots. When the court feels less intimidating, watch a pickup game and ask how people rotate in.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, or just show up at a busy court and join someone else's game.",
        no_equipment:"Head to any park court and ask to join. Someone always has a ball.",
        shy_solo:"Public courts are completely normal to use alone. Dribble and shoot by yourself — no pressure to join anything.",
        social_team:"Show up at a busy court on a weekend and ask \"got next?\" — that's genuinely how pickup basketball works.",
        limited_time:'A solo shooting session — free throws, layups, dribbling — takes 20 minutes and is a complete practice.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Take 20 relaxed shots close to the hoop','Watch one pickup game and learn how people join']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:'Low-cost, global, and instantly social once you find the right casual game.',
    guide:{
      whyItFits:"Soccer scales from one person and a wall to a full-sided game. It suits people who want movement, teamwork, and a very low gear barrier.",
      howToStart:"Find a park with open space. Start with gentle touches, short wall passes, and dribbling in a straight line. Save juggling for later if it frustrates you.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Show up to a pickup game and join a side. Balls are always shared.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — groups are everywhere.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch or park','Do 10 minutes of gentle touches and dribbling','Try wall passing for 10 min','Search for a local casual kickaround']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:'Competitive without needing a team — the wall is a patient first opponent.',
    guide:{
      whyItFits:"Tennis rewards coordination, quick reactions, and mental toughness. You can get a real workout completely alone with wall rallying before you ever need an opponent.",
      howToStart:"Find a public court with a practice wall if you can. Use soft, easy swings and aim for repeatable contact before worrying about power or scoring.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying is a complete solo practice. 30 minutes, no partner needed.',
        social_team:'Most tennis clubs run beginner group clinics. USTA has local adult programmes.',
        limited_time:'30 minutes of wall rallying is a full session.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public tennis court near you','Spend 20 min hitting a wall — focus on consistency','Get or borrow a basic racket','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'Chaotic in the best way: quick rallies, shared mistakes, and big team energy.',
    guide:{
      whyItFits:"Volleyball turns communication into movement. It is technical, but beginners can contribute quickly by learning one reliable pass.",
      howToStart:"Find an open gym night or a beach court with beginner-friendly play. Focus on the pass (bump) first and let serving/spiking wait.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gym nights and beach courts always have balls. Just show up.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" — groups are active and welcoming.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Practise self-bumping or wall passes for 10 min','Attend one beginner-friendly open session','Search for recreational leagues when you want structure']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'Slow-burn skill, quick feedback — batting cages make day one simple.',
    guide:{
      whyItFits:'Baseball rewards patience, timing, and small technical wins. It is a team sport where you can still practice one skill at a time.',
      howToStart:'Find a batting cage and rent gear if available. Start with slower pitches and focus on seeing the ball clearly, not swinging hard.',
      equipment:[{item:'Baseball glove',tier:'later'},{item:'Bat',tier:'rent'},{item:'Batting helmet',tier:'rent'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage session is completely solo. No team needed to start.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'20 minutes at a batting cage is a real session. Focus on clean contact.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage near you','Take one round of easy swings — contact over power','Practise throwing with a partner or wall','Look up local recreational softball or baseball options']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Routes, strategy, bursts of speed — football energy without the heavy contact.',
    guide:{
      whyItFits:"Flag football keeps the teamwork, spacing, and play design while removing pads and most contact. It is easier to try as an adult than tackle football.",
      howToStart:"Start by practising short throws and simple route timing. Then look for a parks department league, meetup, or casual flag session.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practise spiral throwing against a fence or wall alone.',
        social_team:'Flag football leagues are among the most social recreational sports. Search Meetup.',
        limited_time:'A 20-minute throwing and route-running solo session is a complete first practice.',
        competitive:'Flag tournaments run frequently and are genuinely competitive.',
      },
      checklist:['Get a football or find one to borrow','Practise throwing a spiral','Watch one game and note the positions','Search for a local flag football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:'The simplest scoreboard: one route, one body, and a little more ease over time.',
    guide:{
      whyItFits:"Running is honest and flexible. You can do it alone, keep it cheap, and measure progress without needing a facility or team.",
      howToStart:"Start with 10-20 minutes of run-walk intervals. Do not worry about pace or continuous running; the goal is finishing with enough energy to come back.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is completely normal. Most runners prefer it.',
        social_team:'Running clubs are among the most welcoming groups in sport. Search "running club [your city]".',
        limited_time:'A 10-20 minute run-walk session is enough to build the habit.',
        competitive:'Local 5K races are everywhere and completely beginner-friendly.',
      },
      checklist:['Complete a 10-20 minute run-walk session','Download a free run-tracking app if metrics help you','Find your nearest track or park path','Look up a local 5K when you want a goal']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet, full-body effort where the water carries some of the impact for you.',
    guide:{
      whyItFits:"Swimming is joint-friendly, technical, and surprisingly meditative. The early wins are about comfort in the water, not grinding out distance.",
      howToStart:'Book a lane swim or beginner lesson. Start with relaxed lengths and plenty of rest; breathing rhythm matters more than speed.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles is all you need.",
        shy_solo:"Lane swimming is one of the most solitary sports — you're in your own lane, focused entirely on yourself.",
        social_team:'Masters Swimming programmes are adult lap groups at all levels — welcoming to beginners.',
        limited_time:'20 minutes with generous rest is a full first session.',
        competitive:'USMS (Masters) meets are beginner-friendly. Enter open events and chase your own time.',
      },
      checklist:['Find your nearest pool with lane swim or adult lessons','Book a session and swim a few relaxed lengths','Focus on calm breathing and safe rest breaks','Look up Masters Swimming when you want group structure']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Sharp, sweaty, and confidence-building — with zero need to spar on day one.',
    guide:{
      whyItFits:"Boxing builds coordination, fitness, and composure through clear, repeatable skills. A good gym will keep beginners on stance, footwork, bags, and pads before sparring.",
      howToStart:"Find a boxing gym — don't try to learn alone. Spend the first month on stance, jab, cross, and footwork. Don't spar until your coach says you're ready.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms have a strong training community. Training partners come quickly.',
        limited_time:'A 30-minute bag workout — warm-up, 3×3-min rounds, cool-down — is a complete session.',
        competitive:'USA Boxing and Golden Gloves have true beginner divisions. Ask your coach after 3–6 months.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Close-contact, technical, and humbling — best learned in a room that teaches safety first.',
    guide:{
      whyItFits:"Wrestling rewards leverage, timing, and grit. It is demanding, but the first step should be a coached beginner room, not trying moves from videos.",
      howToStart:"Find a wrestling club or adult grappling programme and ask how they onboard beginners. You need a coach, a mat, and a safe pace.",
      equipment:[{item:'Athletic clothes without zippers',tier:'need'},{item:'Wrestling shoes',tier:'later'},{item:'Headgear',tier:'later'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A practice session runs 60–90 minutes. There's no shorter version that works.",
        competitive:'Ask your club coach about entry-level tournaments after 1–2 months of training.',
      },
      checklist:['Find a local wrestling club or YMCA programme','Ask how first-timers are introduced','Attend one coached beginner practice','Learn basic stance and safe falling from a coach']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A low-pressure way to feel better in your body, starting right on the floor.',
    guide:{
      whyItFits:"Yoga gives you structure without forcing competition. Breath, balance, and mobility improve quietly, which is exactly why it sticks for many beginners.",
      howToStart:"Find a free beginner YouTube class and do it in your living room. Pause, modify, and skip anything that feels wrong; consistency matters more than the perfect pose.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are genuinely excellent. A mat costs $10–20. That's your full startup cost.",
        no_equipment:'You can practise on carpet without a mat to start.',
        shy_solo:'This is one of the most private sports you can do. Just you and a YouTube video.',
        social_team:'Studio classes are social and welcoming — most have beginner sessions.',
        limited_time:'A 20-minute session is a complete practice. Start there.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (10-20 min)",'Complete your first session with pauses if needed','Try one more short session this week',"Notice what feels tight or calmer afterward"]
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:'A little adventure machine: solo miles, group rides, errands that become movement.',
    guide:{
      whyItFits:"Cycling is easy on joints while still giving you real cardio. It also turns familiar streets into something you can explore at your own pace.",
      howToStart:'Borrow or find a used bike. Pick a short, flat route with low traffic for your first ride. Comfort, braking, and confidence come before distance.',
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
    pitch:'A puzzle you solve with your body, one hold at a time.',
    guide:{
      whyItFits:"Climbing mixes problem-solving, body awareness, and manageable fear. Indoor gyms rent gear and grade routes clearly, so beginners can choose the right challenge.",
      howToStart:"Visit an indoor climbing gym. Rent shoes and start with easy bouldering routes, taking long rests between attempts.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms usually include rental options. Look for intro nights, punch cards, or off-peak deals.',
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
    pitch:'A walk with better scenery, clearer air, and enough effort to count.',
    guide:{
      whyItFits:"Hiking is movement that does not have to feel like training. You can choose the terrain, the pace, and whether it is quiet solo time or a social plan.",
      howToStart:'Find a local trail on AllTrails or a parks site. Pick something rated easy, under 3 miles, and well-reviewed. Bring water and tell someone your route.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need shoes and water. Both you probably have.',
        shy_solo:'Solo hiking is common. Start with popular, well-marked trails and basic safety habits.',
        social_team:'Hiking groups are active in many places — search Meetup for "[your city] hiking group".',
        limited_time:"A 90-minute loop is a real hike. You don't need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download AllTrails or check your local parks site','Find an easy trail near you under 3 miles','Bring water and wear comfortable shoes',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Movement with music, personality, and permission to look awkward at first.',
    guide:{
      whyItFits:'Dance can be fitness, art, social life, or all three. The right style matters more than being naturally coordinated.',
      howToStart:'Find a true beginner class in a style whose music you actually like. Salsa, swing, hip-hop, and contemporary all have welcoming entry points.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is a complete session. Most studios do drop-ins.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or free intro session','Attend your first class','Go back a second time — the first is always awkward']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Clear progression, useful skills, and a room where repetition is the whole point.',
    guide:{
      whyItFits:'Martial arts give beginners structure: learn a stance, drill a movement, repeat, then slowly add pressure. Belts or grades make progress visible.',
      howToStart:'Pick one style and find a local club with beginner classes. Tell the coach it is your first time and avoid any place that rushes you into hard sparring.',
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
    pitch:'Creative, self-directed, and built on tiny wins that feel bigger than they look.',
    guide:{
      whyItFits:"Skateboarding lets you progress on your own schedule. The early work is simple but meaningful: balance, push, turn, stop, repeat.",
      howToStart:"Get a complete board (not a toy). Find a smooth flat surface. Learn to push, turn, and stop before anything else, and wear protective gear while your balance catches up.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'15-30 minutes of pushing, stopping, or one small skill is a complete session.',
        competitive:'Amateur skateboarding competitions are genuinely accessible at local skate parks.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:'Small court, quick games, low friction — social before it gets serious.',
    guide:{
      whyItFits:"Pickleball is gentle enough to start, quick enough to stay fun, and social by design. Open play lets solo beginners rotate into games without forming a team.",
      howToStart:'Find an open play session at a local court. Most parks have converted tennis courts. Borrow a paddle at first.',
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
    pitch:'Light gear, fast rallies, and a game that turns serious without feeling heavy.',
    guide:{
      whyItFits:'Badminton gives quick feedback without a huge setup. New players can rally on day one, then discover the speed, footwork, and tactics later.',
      howToStart:'Find a community hall or gym that runs badminton drop-in nights. Bring a racket if you have one, but ask about loaners before buying.',
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
    pitch:'Running, throws, and a community that actually teaches newcomers the rules.',
    guide:{
      whyItFits:'Ultimate combines soccer-like running with basketball-like spacing, but the culture is the real beginner advantage. Self-refereeing makes communication part of the sport.',
      howToStart:"Find a local ultimate club or pickup game and ask if they have beginner sessions. Learn a backhand throw before you go; a disc costs about $10.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Just show up.',
        shy_solo:'Hard to practice alone but throwing against a target or fence works.',
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
    pitch:'Rhythmic, low-impact power — quiet on the surface, demanding underneath.',
    guide:{
      whyItFits:"Rowing is low-impact, full-body, and built around rhythm. Many clubs have learn-to-row programs, and indoor ergs let you test the movement before getting on water.",
      howToStart:"Try an indoor rowing machine first, using a beginner technique video so you do not yank with your arms. If it clicks, ask a local club about learn-to-row sessions.",
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
    pitch:'Patient, precise, and weirdly addictive once one clean shot appears.',
    guide:{
      whyItFits:"Golf rewards patience, repeatable rhythm, and staying calm after bad shots. A driving range lets you test it solo before committing to a round.",
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
      checklist:['Find a nearby driving range','Book a bucket of balls and rent clubs','Focus only on making clean contact','Look up a local municipal course for a short round']
    }
  },

  gym_training: {
    id:'gym_training', name:'Gym Training', icon:'🏋️',
    fitTags:['shy_solo','high_energy'],
    pitch:'Clear numbers, flexible goals, and progress you can literally write down.',
    guide:{
      whyItFits:"Gym training works for people who like visible progress. You can start with simple movements, log what you did, and make tiny upgrades over time.",
      howToStart:'Use a gym trial or day pass. On day one, do a short full-body circuit with light weights: squat, press, row, hinge. Leave with notes, not exhaustion.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 30-minute full-body session is a complete workout when done consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Sign up for a gym or find one with a free trial','Complete a short full-body workout with light weights','Log your weights so you know where to start next time','Book your next visit before motivation has to do all the work']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'No commute, no machines — just bodyweight strength you can scale down or up.',
    guide:{
      whyItFits:"Calisthenics removes most friction. You can make movements easier or harder, train at home or outside, and build strength before buying anything.",
      howToStart:'Start with an easy bodyweight circuit: squats, incline push-ups, glute bridges, and a short plank. Do it a few times per week, not daily burnout.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is a complete workout.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete: squats, incline push-ups, glute bridges, and a short plank','Find a park with pull-up bars near you if you want more options','Repeat the routine 2-3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny court, huge reactions, and enough spin to keep things interesting for years.',
    guide:{
      whyItFits:'Table tennis is deceptively deep. Speed, spin, and placement create a game that rewards both quick reflexes and tactical thinking.',
      howToStart:'Find a table at a community centre, pub, or park. Borrow a paddle. Just rally — keep the ball on the table for as long as possible.',
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
    pitch:'Fast feet, stick skills, and a team culture with real momentum.',
    guide:{
      whyItFits:'Lacrosse blends running, hand skills, and tactics. It can look intimidating, but wall ball gives beginners a simple way to build touch before joining team drills.',
      howToStart:'Find a local lacrosse club or recreational league and ask about beginner programs or loaner gear. Practice wall ball if you can borrow a stick.',
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
    pitch:'Big camaraderie, clear roles, and entry points that do not have to start with full contact.',
    guide:{
      whyItFits:"Rugby has a strong club culture and a role for many body types. Tag or touch rugby is the safest first taste if full contact feels like too much.",
      howToStart:'Find a local rugby club and ask about beginner, tag, or touch sessions. Watch a practice first if you want to understand the pace.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Clubs almost always have spare gear for beginners.',
        shy_solo:'Tag rugby (non-contact) removes the intimidation of full contact.',
        social_team:'Rugby clubs are among the most social in all of sport — the post-match tradition is famous.',
        limited_time:'Training sessions run 90 minutes. Tag rugby sessions are often shorter.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about tag rugby or beginner programmes','Show up on a Saturday morning','Get a mouthguard before your first contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Fast decisions, precise footwork, and the satisfying drama of a duel.',
    guide:{
      whyItFits:'Fencing is chess at speed, but physical enough to get your heart moving. Clubs usually provide beginner gear, which keeps the first step simple.',
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
    pitch:'Rec-league energy: a glove, a lineup, and a team that often becomes the point.',
    guide:{
      whyItFits:"Softball is one of the most popular recreational sports for adults. Co-ed leagues are social, competitive enough to be fun, and genuinely welcoming to beginners.",
      howToStart:"Search your city's parks department for adult softball leagues. Many do not require a full team; they can place solo players or point you to captains.",
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
    pitch:'Body control, courage in small doses, and adult beginner classes that start from zero.',
    guide:{
      whyItFits:'Gymnastics builds strength, mobility, and body awareness in a structured setting. Adult beginner classes usually start with floor basics, not elite skills.',
      howToStart:'Find a gymnastics club that offers adult beginner classes. Start with floor work, rolls, and mobility; let coaches decide when apparatus makes sense.',
      equipment:[{item:'Comfortable fitted athletic clothes',tier:'need'},{item:'Bare feet or gymnastics shoes',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
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
    pitch:'Cold air, gentle green runs, and a learning curve that feels better with a lesson.',
    guide:{
      whyItFits:'Skiing is exhilarating, but beginners do best with structure. Resorts are built around lessons, rentals, and green runs that make the mountain less mysterious.',
      howToStart:'Book a beginner lesson at a ski resort and rent gear there. A half-day lesson is a safer first step than trying to figure out lifts and stopping alone.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is a complete first experience.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Complete your first green run by end of day','Ask about a return discount']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'A humbling first day, then the first clean glide starts making promises.',
    guide:{
      whyItFits:"Snowboarding has a distinct culture, creative freedom, and a flow state that's genuinely unique. Day one involves falling. Day two is dramatically better.",
      howToStart:'Book a beginner snowboard lesson. Wrist guards are essential. Commit past day one before deciding.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practise at your own pace once you have the basics from a lesson.',
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
    pitch:'Balance, timing, salt water, and tiny wins that feel cinematic.',
    guide:{
      whyItFits:'Surfing combines physical challenge, patience, and a rare connection to the ocean. Progress can be tiny at first, but even catching whitewater feels memorable.',
      howToStart:'Book a lesson at a surf school — they provide foam boards and choose safe beginner waves. Do not self-teach in open ocean.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is a complete first experience.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a lesson with gear included','Catch whitewater or ride on your knees — it counts','Return for a second session if the first one left a spark']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, visible progress, and the satisfying thud of a better shot.',
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
    pitch:'High-energy teamwork where strength, timing, and trust all show up at once.',
    guide:{
      whyItFits:'Competitive cheer blends tumbling, stunting, jumps, dance, and trust. Entry-level teams exist, but it is still a real commitment with practices, fees, and teammates counting on you.',
      howToStart:'Find a local All-Star cheer gym and ask about open gyms, trial practices, or beginner teams. Be honest about your experience and schedule.',
      equipment:[{item:'Athletic wear with full range of motion',tier:'need'},{item:'Cheer shoes (flexible, cross-training)',tier:'need'},{item:'Team uniform (provided by gym)',tier:'later'}],
      adaptive:{
        low_budget:'All-Star cheer has fees. Look for school squads or community programmes as lower-cost entry.',
        no_equipment:'Gyms provide mats and training space. You need shoes and athletic wear.',
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
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Learning to move over rails, walls, and steps with control. Good coaching keeps it less reckless than it looks.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'A tandem jump is the rare sport where your first try starts at altitude and ends with a story.' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Quiet flying under a fabric wing. A tandem flight lets you feel the air while a pilot handles the hard parts.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'More bird than parachute. Early lessons start low, slow, and close to the ground.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'Gentle, strange, and mostly about surrendering to the wind while a burner roars overhead.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'A small boat, a paddle, and calm water if you choose well. Rentals make the first outing easy.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'An open boat for slow rivers, lakes, and conversations that happen between paddle strokes.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Standing on a big floating board and paddling calm water. Meditative until your core reminds you it is working.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'Board riding behind a boat or cable. The first clean start feels like cheating gravity.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'A board, a giant steerable kite, and a learning curve that should absolutely involve lessons.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'A board with a sail and a lot of balance negotiations. Old-school, technical, deeply rewarding.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Breathing underwater with training, gear checks, and a buddy. Certification takes structure, not bravado.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'Diving on a single breath, where calm matters more than force and instruction matters a lot.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Swim, tread water, pass, shoot, repeat. It is pool cardio with contact and tactics.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'A long boat, a drumbeat, and twenty people trying to become one rhythm.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Gliding across snowy trails under your own power. Peaceful until the hills start asking questions.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Rent skates, hug the rail if needed, and let the first smooth glide do the convincing.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Edges, spins, and music on ice. Adult learn-to-skate classes start with balance, not jumps.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Sliding stones, sweeping hard, and quietly arguing with physics. Tactical without being frantic.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Skating, sticks, and a puck moving faster than your decisions. Adult beginner leagues make it possible.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Winter hiking with oversized footwear, for days when regular walking would sink.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'A grappling art built around throws, balance, and learning how to fall before anything fancy.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling where patience and leverage can beat panic. The gym culture matters, so choose carefully.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Strikes, forms, and a clear belt path. A good beginner class is disciplined without being joyless.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Kicks, speed, and structured progression. Flashy later, basics first.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Thai striking with fists, elbows, knees, and shins. Hard work, great pads, no need to spar immediately.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punches and kicks on bags and pads. Many gyms run fitness-first or no-contact beginner classes.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Practical self-defense training. Look for calm coaching and pressure testing, not movie-fight energy.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Brazilian movement that blends martial arts, dance, music, and a circle full of rhythm.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'A calm, flowing martial art about redirecting force. Technical, patient, and less bruising than many.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Striking plus grappling under one roof. Good gyms separate fundamentals from sparring.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Bamboo swords, armor, footwork, and loud commitment. Very disciplined, very distinctive.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'A tough little bike for racing, ramps, or street tricks. Start with control before airtime.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Trail riding with dirt, roots, and enough speed to make line choice matter.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Full-contact roller skating with strategy and swagger. Many leagues run beginner bootcamps.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Rollerblades on paths, parks, or smooth streets. Easy to sample, satisfying to master.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'A longer board for cruising, carving, and flow. Less trick-chasing, more glide.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'Golf with discs in public parks. Cheap, low-pressure, and quietly addictive.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Learning to ride starts with trust, posture, and a lesson horse that knows more than you do.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Hockey on horseback with mallets. Beginner polo schools exist, but this is definitely not the budget lane.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'Three darts, one board, and a social game that can become absurdly precise.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Biased bowls, tidy greens, and a pace that hides plenty of strategy.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules with metal balls, a small jack, and a pace made for conversation.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Bean bags, a slanted board, and just enough accuracy to make backyard bragging rights feel serious.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Short climbing problems over padded floors. No rope, lots of puzzle, plenty of falling safely.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'Walking a flat webbing line between two anchors. Humbling in seconds, addictive after one good step.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing with structure. Adult classes turn chaos into safe jumps, shapes, and maybe flips later.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run, back to back. Sprint distance is the approachable door, not the easy one.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'A map-and-compass treasure hunt through parks or forests, with a workout hiding inside.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Bat, ball, wickets, and layers of tactics. Soft-ball indoor cricket is a friendlier first taste.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Fast stick work on turf or grass, with enough running to keep every touch urgent.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light sticks and a plastic ball. Fast, forgiving, and easy to start.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'A no-dribble basketball cousin with clear positions, quick passing, and strong local league culture.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'Tag, wrestling, breath control, and one raider trying to escape a whole team.' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Stacking cups in patterns at speed. It looks playful until the timer starts.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating chess and boxing rounds, because apparently one kind of pressure was not enough.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprint, plant, fly. Beginners need a proper coach, a runway, and zero DIY energy.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'Hockey on the bottom of a pool while holding your breath. As weird and tactical as it sounds.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
