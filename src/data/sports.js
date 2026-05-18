const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little nerve — basketball turns empty time into a game fast.',
    guide:{
      whyItFits:"Basketball gives you options from day one. Shoot alone, bring one friend, or ease into pickup once the court starts to feel familiar.",
      howToStart:"Find a public court at a nearby park. Spend the first session dribbling with both hands, shooting close to the rim, and learning where you feel comfortable on the court.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, or just show up at a busy court and join someone else's game.",
        no_equipment:"Head to any park court and ask to join. Someone always has a ball.",
        shy_solo:"Public courts are completely normal to use alone. Dribble and shoot by yourself — no pressure to join anything.",
        social_team:"Show up at a busy court on a weekend and ask \"got next?\" — that's genuinely how pickup basketball works.",
        limited_time:'A solo shooting session — free throws, layups, dribbling — takes 20 minutes and is a complete practice.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Take 20 relaxed shots from close range','Watch a pickup game and ask how people rotate in']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:'Low-cost, always moving, and easy to scale from wall passes to weekend pickup.',
    guide:{
      whyItFits:"Soccer works because the entry point can be tiny: a ball at your feet, a wall to pass against, or a casual kickaround where nobody expects perfection.",
      howToStart:"Find a park or wall and start with simple touches: inside-foot passes, gentle dribbling, and a few attempts at juggling. Then look for a casual group when you want company.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Show up to a pickup game and join a side. Balls are always shared.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — groups are everywhere.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch, park, or wall','Practise easy touches for 10 min','Try wall passing with both feet','Search for a casual pickup game']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:'A clean rally feels incredible, and you can start chasing that feeling against a wall.',
    guide:{
      whyItFits:"Tennis mixes movement, problem-solving, and patience. Wall practice lets you learn the rhythm privately before adding an opponent.",
      howToStart:"Find a public court or practice wall. Keep the first session simple: soft forehands, easy backhands, and seeing how many gentle returns you can control.",
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
    pitch:'Quick points, loud calls, and the kind of team energy that pulls you in.',
    guide:{
      whyItFits:"Volleyball is social by design: you call the ball, rotate often, and learn by being around other players. Beach and open-gym sessions keep the barrier low.",
      howToStart:"Find an open gym night or beach court and focus on the pass first. A steady bump matters more than a big spike when you are new.",
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
    pitch:'One pitch, one swing, one reset — baseball is satisfying in small, focused reps.',
    guide:{
      whyItFits:'Baseball rewards calm attention more than constant motion. You can build confidence through batting cages, catch, and simple fielding before joining a league.',
      howToStart:'Find a batting cage or a safe wall for throwing practice. Start with easy contact and clean throws instead of trying to hit or throw hard.',
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
    pitch:'Routes, quick decisions, and team play without the heavy gear of tackle football.',
    guide:{
      whyItFits:"Flag football keeps the spacing, routes, and teamwork of football while lowering the contact and gear barrier. It is a practical first step if the full version feels like too much.",
      howToStart:"Start by practising short throws and catching on the move. Then check parks departments, rec centres, or local groups for beginner-friendly flag leagues.",
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
    pitch:'No court, no roster, no schedule — just a route you can make your own.',
    guide:{
      whyItFits:"Running is honest and flexible. You can train alone, measure progress clearly, and make the first sessions as gentle as they need to be.",
      howToStart:"Start with 20 minutes of run-walk intervals: jog until conversation feels hard, walk until breathing settles, repeat. Pace does not matter yet.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is completely normal. Most runners prefer it.',
        social_team:'Running clubs are among the most welcoming groups in sport. Search "running club [your city]".',
        limited_time:'A 20-minute run three times a week is a legitimate training programme.',
        competitive:'Local 5K races are everywhere and completely beginner-friendly.',
      },
      checklist:['Complete a 20-minute run-walk session','Download a free run-tracking app if it helps','Find your nearest track or park path','Look up a local 5K as a future goal']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet lanes, steady breathing, and a full-body workout that is kind to joints.',
    guide:{
      whyItFits:"Swimming is low-impact but still demanding. Technique and breathing matter more than brute strength, so small improvements feel noticeable quickly.",
      howToStart:'Book a lane swim session. Start with short lengths, generous rest, and one focus: exhale in the water so the next breath is calmer.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles is all you need.",
        shy_solo:"Lane swimming is one of the most solitary sports — you're in your own lane, focused entirely on yourself.",
        social_team:'Masters Swimming programmes are adult lap groups at all levels — welcoming to beginners.',
        limited_time:"20 minutes: 4×25m with 30-second rest. That's a full first session.",
        competitive:'USMS (Masters) meets are beginner-friendly. Enter open events and chase your own time.',
      },
      checklist:['Find your nearest pool with lane swim','Book a session and swim a few short lengths with rest','Focus on calm breathing before speed','Look up adult swim groups or lessons in your area']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Sharp, sweaty, and confidence-building — with plenty to learn before sparring.',
    guide:{
      whyItFits:"Boxing builds coordination, conditioning, and composure in a very direct way. Good gyms spend plenty of time on stance, footwork, and bag work before sparring is even a question.",
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
    pitch:'Close-contact, technical, and humbling — wrestling rewards grit and coachable effort.',
    guide:{
      whyItFits:"Wrestling rewards effort, patience, and technical detail. It is demanding, but a good club breaks the hard parts into coached, safe progressions.",
      howToStart:"Find a wrestling club or school programme — you cannot learn this safely without a coach and a mat.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A practice session runs 60–90 minutes. There's no shorter version that works.",
        competitive:'Ask your club coach when entry-level tournaments make sense. Readiness depends on safe technique, not the calendar.',
      },
      checklist:['Find a local wrestling club or YMCA programme','Attend one open practice','Learn basic stance from a coach','Ask about beginner training schedule']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A quiet reset you can do at home, in a studio, or anywhere you can roll out a mat.',
    guide:{
      whyItFits:"Yoga gives you a low-pressure way to move, breathe, and notice what your body needs. It can stay private or become a studio habit when you want company.",
      howToStart:"Find a free beginner YouTube class and do it in your living room. Stop, modify, or rest whenever a pose feels like too much.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are genuinely excellent. A mat costs $10–20. That's your full startup cost.",
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
    pitch:'Part workout, part transportation, part tiny adventure around your own neighbourhood.',
    guide:{
      whyItFits:"Cycling is gentle on joints, strong for cardio, and easy to adjust to your mood. Some days it is training; some days it is just a good way to see more streets.",
      howToStart:'Borrow or find a used bike. Pick a flat, quiet route for your first ride and focus on comfort, braking, and confidence before speed.',
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
    pitch:'A workout disguised as a puzzle, with routes that make progress visible.',
    guide:{
      whyItFits:"Climbing mixes body strength with problem-solving. Indoor gyms rent the gear, mark beginner routes clearly, and usually have staff who can point you to a friendly first wall.",
      howToStart:"Visit an indoor climbing gym. Rent shoes, ask for an orientation, and start on easy bouldering problems or auto-belays depending on what staff recommend.",
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
    pitch:'A simple walk with better scenery, more space, and a reason to put your phone away.',
    guide:{
      whyItFits:"Hiking is forgiving because you control the distance, pace, and difficulty. It can be a quiet solo reset or an easy way to spend time with other people.",
      howToStart:'Find a local trail on AllTrails. Pick something rated "easy", short enough to finish comfortably, and well-reviewed for clear markings.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need shoes and water. Both you probably have.',
        shy_solo:'Most people hike alone. Trails are safe and well-marked on AllTrails.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 90-minute loop is a real hike. You don't need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download the AllTrails app','Find an easy, well-marked trail near you','Complete a short hike with water and decent shoes',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music makes the workout disappear a little. Pick a style and let awkward be allowed.',
    guide:{
      whyItFits:'Dance is movement with personality. Styles range from solo practice to partner socials, so you can choose the level of structure, sweat, and community that feels right.',
      howToStart:'Find a beginner class in the style that interests you most. Salsa, swing, and hip-hop all have a strong beginner class culture.',
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
    pitch:'Clear progression, coached basics, and a little ritual around getting better.',
    guide:{
      whyItFits:'Martial arts give you structure when you do not want to invent your own path. Classes, ranks, drills, and partners make progress visible without rushing you into hard contact.',
      howToStart:'Pick one style and find a local club. Brazilian jiu-jitsu (BJJ) and karate have particularly good beginner cultures. Attend a trial class.',
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
    pitch:'Creative, stubborn, and deeply satisfying once the board starts listening.',
    guide:{
      whyItFits:"Skateboarding is self-directed and creative. Progress comes in tiny unlocks: a smoother push, a cleaner turn, a stop that finally feels controlled.",
      howToStart:"Get a complete board (not a toy). Find a smooth surface. Learn to push, turn, and stop before anything else. Skate parks are welcoming once you have basics.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'30 minutes of focused practice on one trick is a complete session.',
        competitive:'Amateur skateboarding competitions are genuinely accessible at local skate parks.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:'Small court, quick rallies, and open play that makes showing up alone feel normal.',
    guide:{
      whyItFits:"Pickleball is social by design and gentler on the body than many court sports. Open play rotations make it easier to arrive alone and get folded into games.",
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
    pitch:'Light racket, fast reactions, and rallies that get intense before you expect it.',
    guide:{
      whyItFits:'Badminton is friendly at first and fast once you improve. Drop-in sessions make it easy to play short games, rotate partners, and learn by rallying.',
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
    pitch:'A running team sport with a disc, a field, and a culture that teaches newcomers.',
    guide:{
      whyItFits:'Ultimate frisbee combines running, spacing, and passing with a strong culture of self-refereeing. Beginners usually get taught because the game depends on shared spirit.',
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
      checklist:['Get an ultimate disc ($10)','Find a local club or pickup game','Attend your first session','Learn the basic throwing grip and huck']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythmic, full-body, and surprisingly calming once the stroke starts to click.',
    guide:{
      whyItFits:"Rowing is low-impact, full-body, and built around rhythm. Clubs often have learn-to-row programmes, and an indoor rower lets you try the movement before getting on the water.",
      howToStart:"Find a local rowing club and ask about their learn-to-row programme. If that feels like too much, try an indoor rower at a gym first and keep the pace easy.",
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
    pitch:'Patient, precise, and weirdly addictive when one clean shot erases ten bad ones.',
    guide:{
      whyItFits:"Golf rewards patience, feel, and small adjustments. A driving range gives you a low-pressure place to learn before a full round is even on the table.",
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
    pitch:'Measurable progress, flexible routines, and a place to train on your own terms.',
    guide:{
      whyItFits:"Gym training is clear and adjustable. You can track weights, reps, and how you feel without needing a team, court, or perfect weather.",
      howToStart:'Use a trial pass or budget gym. On day one, keep it simple: a light squat, press, row, hinge, and easy cardio. Leave feeling like you could do more.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 30-minute full-body session is a complete workout when done consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Sign up for a gym or find one with a free trial','Complete a light 30-minute full-body workout','Log what you did so next time is simpler','Schedule a second visit before motivation fades']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'Strength training stripped down to the floor, a bar, and your own body.',
    guide:{
      whyItFits:"Calisthenics removes almost every barrier. Push-ups, squats, rows, planks, and progressions can build real strength without a gym membership.",
      howToStart:'Start with a simple bodyweight circuit scaled to your level: push-ups or incline push-ups, squats, a plank, and an easy pulling movement if you have one. Rest between sets.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is a complete workout.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete a comfortable set of push-ups, squats, and a short plank','Find a park with pull-up bars near you','Repeat the routine 2-3 times this week if you recover well']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny movements, fast points, and enough spin to keep your brain busy.',
    guide:{
      whyItFits:'Table tennis is quick to start and deep once spin enters the picture. Short matches make it easy to play socially without a big time commitment.',
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
    pitch:'Fast breaks, stick skills, and a team culture that rewards hustle.',
    guide:{
      whyItFits:'Lacrosse blends running, passing, contact, and quick decisions. Box or recreational versions can be a friendlier entry point than full field lacrosse.',
      howToStart:'Find a local lacrosse club or recreational league. Many run beginner programmes. Stick skills can be practised alone against a wall.',
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
    pitch:'Big contact, bigger camaraderie, and beginner paths that do not have to start with tackling.',
    guide:{
      whyItFits:"Rugby can look intimidating from the outside, but clubs tend to be unusually welcoming. Tag rugby and beginner sessions let you learn shape and passing before full contact.",
      howToStart:'Find a local rugby club and ask about their beginner or tag rugby programme. Show up on a Saturday.',
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
    pitch:'Fast, tactical, and a little dramatic — like a duel with clear beginner rules.',
    guide:{
      whyItFits:'Fencing is tactical, fast, and structured. Clubs usually provide equipment for beginner classes, so you can try the sport before buying anything specialised.',
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
    pitch:'A relaxed team sport where rusty beginners, shared bats, and post-game chats all fit.',
    guide:{
      whyItFits:"Softball is built for adult rec leagues: social, lightly competitive, and much less intimidating than trying to jump straight into baseball.",
      howToStart:"Search your city's parks department for adult softball leagues. Many leagues accept solo signups or can point you toward teams that need players.",
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
    pitch:'Body control, strength, and the rare thrill of learning skills most adults assume are off-limits.',
    guide:{
      whyItFits:'Gymnastics builds strength, mobility, and body awareness in a way few sports can match. Adult beginner classes keep the focus on safe basics, not childhood-level expectations.',
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
      checklist:['Find a gymnastics club with adult beginner classes','Attend your first class','Learn a basic forward roll and cartwheel','Come back — gymnastics rewards consistency']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, wide turns, and a learning curve that feels better with a real lesson.',
    guide:{
      whyItFits:'Skiing is exhilarating, but it is much more fun when the first day is coached. Resorts have structured lessons, rental gear, and slopes designed for new skiers.',
      howToStart:'Book a beginner lesson at a ski resort rather than trying to self-teach. Rentals cover the technical gear; your job is to learn stopping, turning, and staying relaxed.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is a complete first experience.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Practise stopping and turning on beginner terrain','Ask what to work on before your second day']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'The first day is humbling; the first smooth turn is why people get hooked.',
    guide:{
      whyItFits:"Snowboarding has a distinct culture and a satisfying sideways flow. It also involves falling early, so lessons and protective gear make the first attempts much less discouraging.",
      howToStart:'Book a beginner snowboard lesson and plan emotionally for a messy first day. Wrist guards help, and a second session gives the sport a fairer chance.',
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
    pitch:'Ocean timing, balance, and the tiny miracle of moving with a wave.',
    guide:{
      whyItFits:'Surfing combines physical effort, timing, and a connection to the ocean that is hard to fake. A surf school makes the first session safer and far less confusing.',
      howToStart:'Book a lesson at a surf school. They provide foam boards, choose safer beginner waves, and teach ocean basics you should not guess your way through.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is a complete first experience.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a lesson with gear included','Ride whitewater however you can — knees count','Plan a second session if the ocean left you curious']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, visible progress, and the satisfying thud of an arrow landing cleaner.',
    guide:{
      whyItFits:'Archery is calm without being easy. The feedback is immediate, the technique is detailed, and most clubs provide everything while you learn the basics.',
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
    pitch:'High-energy teamwork where jumps, stunts, dance, and trust all matter.',
    guide:{
      whyItFits:'Competitive cheer is athletic and highly coordinated: jumps, stunts, dance, tumbling, and timing. The team culture can be a powerful motivator if you like shared goals.',
      howToStart:'Find a local All-Star cheer gym and ask about beginner programmes. No prior experience required for entry-level teams.',
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
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Turning rails, steps, and walls into movement puzzles — start low, soft, and coached if you can.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'A tandem jump is the usual first taste: brief training, huge nerves, and one very memorable door.' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Floating under a fabric wing with an instructor before you ever think about flying solo.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'A rigid wing, a running launch, and early lessons that begin on small training hills.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'Slow sky, sunrise air, and the odd magic of travelling wherever the wind agrees to go.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'A low seat on calm water, a double-bladed paddle, and a rhythm that can stay mellow or get sporty.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'Open-boat paddling that works for quiet lake loops, partner trips, or lazy river afternoons.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Stand on a wide board, paddle calm water, and discover your core has opinions.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'A board, a tow rope, and the quick lesson that relaxing your arms matters more than muscling it.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Wind power, board control, and lessons first — the payoff is huge, but the kite deserves respect.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'A board with a sail and a very honest balance test. Awkward early, graceful later.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Breathing underwater with a buddy and a lot of training checks before reefs or wrecks enter the picture.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'One-breath diving built on calm, safety, and trained partners — never a solo dare.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Swimming, treading, passing, and defending all at once. Pool cardio with elbows.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'A long boat, a drumbeat, and twenty people learning to make one rhythm together.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Snowy trails, steady effort, and the satisfying glide you get once the skis stop fighting you.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Rent skates, hug the boards if needed, and let the first win be one smooth lap.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Edges, spins, posture, and adult learn-to-skate classes that start with real basics.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Granite stones, brooms, ice, and more strategy than the calm pace suggests.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Skates, sticks, speed, and adult beginner leagues once you are ready for the gear list.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Winter hiking with oversized traction — slow, steady, and easier to start than skiing.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Throws, balance, and the very practical beginner skill of learning to fall safely.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling where leverage matters. Expect puzzles, humility, and a close-knit mat culture.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Strikes, stances, and a belt-by-belt path that gives beginners clear next steps.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Kicking-focused martial arts with high energy, clear ranks, and plenty of mobility work.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Pads, clinch, kicks, and a tough workout culture that still has room for beginners.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punches, kicks, bags, and pads — a high-sweat entry without needing to spar.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Practical self-defense drills with less ceremony and more real-world scenario practice.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Martial art, dance, music, and play in one circle. Athletic, expressive, and social.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'Flowing throws and redirections where calm technique matters more than force.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Striking plus grappling, usually taught through fundamentals long before hard sparring.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Bamboo swords, armour, footwork, and a disciplined practice that is much louder than it looks.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'Small-bike tricks, pump tracks, and races where bike handling becomes the whole game.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Dirt trails, controlled speed, and beginner routes that teach confidence one corner at a time.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Contact skating with a fierce team culture and new-skater programs that teach from the ground up.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Smooth paths, steady balance, and low-impact speed once stopping feels automatic.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'A longer board for cruising, carving, and making ordinary pavement feel a little more alive.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'Frisbee lines through public parks: cheap, mellow, and sneakily satisfying when one throw bends right.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Lesson barns teach the basics slowly: balance, cues, grooming, and trust with a very large teammate.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Mallets on horseback, usually through beginner schools that provide horses and teach the pace gradually.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'Three darts, a wall board, and the satisfying math of trying to stay calm under tiny pressure.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Gentle pace, sneaky tactics, and a social club feel around every weighted roll.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules for parks and public squares: relaxed on the surface, precise once you care.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Bean bags, boards, and backyard tension that somehow gets competitive by the third throw.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Short climbing problems over padded floors: no rope, lots of thinking, and quick visible progress.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'A flat line between trees and a balance challenge that makes ten seconds feel like a victory.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing with structure: adult classes turn airtime into safer skills instead of random chaos.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run in one event. Start with sprint distance and treat finishing as the first win.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'Map reading plus movement: part trail run, part treasure hunt, part "where am I?" puzzle.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Batting, bowling, fielding, and a rulebook that gets friendlier once someone explains the first over.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Fast turf, curved sticks, and quick passing in a team sport that rewards constant movement.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light sticks and a plastic ball: fast, affordable, and beginner-friendly.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'Structured passing, fixed positions, and a no-contact rhythm that still gets competitive quickly.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'Tag, wrestling, breath control, and team tactics packed into short explosive raids.' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Cup patterns against the clock: cheap to start, oddly hypnotic, and absolutely a real competitive scene.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating chess and boxing rounds for people who want their adrenaline and strategy in the same room.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprint, plant, swing, fly — highly coached track chaos with a serious safety learning curve.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'Team hockey along the pool floor, played in short breath-hold bursts. Niche, real, and wonderfully strange.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
