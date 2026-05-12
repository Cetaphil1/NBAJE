const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and five minutes to get warm. Basketball lets you ease in alone, then join the noise when you are ready.',
    guide:{
      whyItFits:"Basketball is easy to try without turning it into a production. You can shoot alone, work on one small skill, and decide later whether pickup games feel fun.",
      howToStart:"Find a public court at a nearby park. Practice dribbling with both hands and shooting free throws. Once comfortable, show up when others are playing and ask to join.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, or just show up at a busy court and join someone else's game.",
        no_equipment:"At a busy court, someone often has a ball. If not, use the space for footwork and layup steps until you can borrow one.",
        shy_solo:"Public courts are fine for solo practice. Dribble, shoot, leave when you want.",
        social_team:"At a friendly pickup court, asking \"got next?\" is a normal way in. Start by watching the rhythm first.",
        limited_time:'A 20-minute solo session with layups, free throws, and dribbling is enough to build the habit.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Attempt 20 free throws','Show up at a pickup game and ask to play']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Simple gear, endless local games, and enough movement to make time disappear.",
    guide:{
      whyItFits:"Soccer is cheap to try and easy to scale. You can pass against a wall alone, kick around with a friend, or join a casual game once you know the basics.",
      howToStart:"Find a park with a pitch. Start by juggling — just keeping the ball airborne with your feet. Then find a pickup game or search for a casual kickaround group.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Many pickup games share balls, but bringing one or messaging the organizer first removes guesswork.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" and look for words like beginner, social, or co-ed.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch or park','Practise juggling — aim for 10 in a row','Try wall passing for 10 min','Search for a local pickup game']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"A quiet wall session can become a real rally sooner than you think. Precise, scrappy, and easy to practice solo.",
    guide:{
      whyItFits:"Tennis rewards coordination, quick reactions, and mental toughness. You can get a real workout completely alone with wall rallying before you ever need an opponent.",
      howToStart:"Find a public court. Spend your first sessions hitting against the wall. Get your grip and swing comfortable before worrying about playing someone.",
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
    pitch:'Team energy without a huge gear list. Start with a pass, find the rhythm, then let the rally pull you in.',
    guide:{
      whyItFits:"Volleyball is fast, technical, and deeply social. Beach volleyball lowers the barrier even further — just show up at a public court.",
      howToStart:"Find an open gym night or a beach court. Focus on the pass (bump) first — it's the foundation of everything.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are often free. Indoor open gym nights usually cost a small drop-in fee and share balls.',
        no_equipment:'Open gym nights and beach courts usually have balls. Ask ahead if you are unsure.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" and choose a session that names the skill level clearly.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Practise self-bumping — 20 reps','Attend one open gym session','Search for beginner recreational leagues']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'Slow moments, sudden swings, tiny adjustments. Batting cages make the first step private and surprisingly satisfying.',
    guide:{
      whyItFits:'Baseball rewards focus and precision. Every swing, throw, and fielding decision requires complete attention. Great for people who like individual skill within a team context.',
      howToStart:'Find a batting cage — many parks have them for $1–2 per token. Throw a tennis ball against a wall to build glove reflexes.',
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
    pitch:'Routes, quick decisions, and team banter without the tackle-football equipment wall.',
    guide:{
      whyItFits:"Flag football keeps the routes, play-calling, and teamwork without the tackle-football gear. The best first step is a casual or beginner-labelled league.",
      howToStart:"Start by practising throwing a spiral. Find a flag football league — most parks departments run them year-round.",
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
    pitch:"A door, a route, and permission to go slowly. Running can start as a walk-run and still count.",
    guide:{
      whyItFits:"Track and field asks for one thing: honest effort. No team, no equipment, no facility. You run, you improve, you measure it.",
      howToStart:"Start with 20 minutes of easy run-walk intervals two or three times a week. Pace does not matter. Finishing comfortable matters more than never walking.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is common and easy to keep private. Choose familiar routes while you build confidence.',
        social_team:'Many running clubs have slower groups or beginner nights. Search "running club [your city]" and check the pace notes.',
        limited_time:'A 20-minute run-walk session two or three times a week is a legitimate start.',
        competitive:'Local 5K races are common. Pick one with walkers allowed if you want a low-pressure first event.',
      },
      checklist:['Complete a 20-minute run-walk session','Download a free run-tracking app','Find your nearest track or park path','Look up a local 5K with walkers welcome']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet lanes, full-body effort, and no pounding on your joints. Rest at the wall as much as you need.',
    guide:{
      whyItFits:"Swimming is the most joint-friendly high-intensity sport available. Technique matters more than strength and improvements are immediately measurable.",
      howToStart:'Book a lane swim session. Start with freestyle — focus only on breathing rhythm (every 3 strokes).',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles is all you need.",
        shy_solo:"Lane swimming is one of the most solitary sports — you're in your own lane, focused entirely on yourself.",
        social_team:'Masters Swimming programmes often have adult lap groups at multiple levels. Ask whether they accept newer lap swimmers.',
        limited_time:"20 minutes with 4 to 6 short lengths and generous rest is enough for a first session.",
        competitive:'USMS (Masters) meets include a range of abilities. Start by chasing your own time.',
      },
      checklist:['Find your nearest pool with lane swim','Book a session and swim 4×25m','Focus on breathing rhythm — every 3 strokes','Look up Masters Swimming in your area']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Wrap your hands, learn the stance, hit the bag with purpose. The first month is skill, not sparring.',
    guide:{
      whyItFits:"Boxing builds coordination, fitness, and composure through clear fundamentals. A good gym will keep beginners on stance, footwork, wraps, and bag work before anything intense.",
      howToStart:"Find a boxing gym — don't try to learn alone. Spend the first month on stance, jab, cross, and footwork. Don't spar until your coach says you're ready.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms have a strong training community. Training partners come quickly.',
        limited_time:'A 30-minute beginner session with warm-up, light rounds, and cool-down is plenty.',
        competitive:'USA Boxing and Golden Gloves have true beginner divisions. Ask your coach after 3–6 months.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'A coached room, hard effort, and no hiding. Wrestling is intense, but the basics start with stance and safety.',
    guide:{
      whyItFits:"Wrestling rewards mental toughness, technical precision, and commitment. If you want a sport that pushes every limit, this is it.",
      howToStart:"Find a wrestling club or school programme — you cannot learn this safely without a coach and a mat.",
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
    pitch:'Low-pressure movement for stiff bodies and busy brains. Start at home, breathe, and let it be imperfect.',
    guide:{
      whyItFits:"Yoga asks nothing of you except showing up. No competition, no team, no facility required. Your breath and your body are the whole game.",
      howToStart:"Find a free YouTube class (Yoga with Adriene is excellent for beginners) and do it in your living room. No studio needed for months.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are genuinely excellent. A mat costs $10–20. That's your full startup cost.",
        no_equipment:'You can practise on carpet without a mat to start.',
        shy_solo:'This is one of the most private sports you can do. Just you and a YouTube video.',
        social_team:'Studio classes can be social if you want that. Look for beginner, gentle, or fundamentals sessions.',
        limited_time:'A 20-minute session is enough to notice how your body feels. Start there.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (20 min)",'Complete your first session','Practise 3 times this week',"Notice what feels tight — that's your target"]
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:"A small adventure machine. Ride easy, notice more of your neighborhood, and build from there.",
    guide:{
      whyItFits:"Cycling is low-impact on joints but high-output cardiovascularly. You can go completely at your own pace and explore your surroundings.",
      howToStart:'Borrow or find a used bike. Pick a flat route for your first ride. Focus on comfort and consistency before speed.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50–150. Check your city for bike libraries or loan programmes.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programmes before buying anything.',
        shy_solo:'Cycling alone is common. Start on familiar streets or paths until traffic feels manageable.',
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
    pitch:'A puzzle on a wall: hands, feet, balance, breath. Indoor gyms make the first try feel contained.',
    guide:{
      whyItFits:"Climbing is physical problem-solving. Indoor gyms keep the first attempt contained, rent the gear, and make it easy to ask staff how to start safely.",
      howToStart:"Visit an indoor climbing gym. Rent shoes and a harness. Start on bouldering (no ropes) — it's the lowest-barrier entry point.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent everything. Just show up.',
        shy_solo:'Bouldering is completely solo — no partner needed, no ropes, just you and the wall.',
        social_team:'Climbing gyms can be easy places to talk because routes give everyone something specific to discuss.',
        limited_time:'A 45-minute bouldering session is a complete workout.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent gear','Try bouldering for 45 minutes','Ask a staff member to show you one route']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"Walk somewhere greener than your usual loop. No scoreboard, just a trail and a reason to keep going.",
    guide:{
      whyItFits:"Hiking requires nothing except the will to start. It's accessible at every fitness level and the mental health benefits are well-documented.",
      howToStart:'Find a local trail on AllTrails (free app). Pick something rated "easy" and under 5 miles. Just go.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need shoes and water. Both you probably have.',
        shy_solo:'Most people hike alone. Trails are safe and well-marked on AllTrails.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 90-minute loop is a real hike. You don't need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download the AllTrails app','Find an easy trail near you','Complete a hike under 5 miles',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music turns effort into expression. Choose the style that makes you curious and let the first class be awkward.',
    guide:{
      whyItFits:'Dance is movement with music and often community. Styles range from completely solo (hip-hop, contemporary) to highly social (salsa, swing). Pick your vibe.',
      howToStart:'Find a beginner class in the style that interests you most. Salsa, swing, and hip-hop all have a strong beginner class culture.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is plenty for a first taste. Most studios do drop-ins.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or free intro session','Attend your first class','Go back a second time — the first is always awkward']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Clear rituals, repeatable skills, and a coach-led path. You learn the room before you learn the fancy stuff.',
    guide:{
      whyItFits:'Martial arts offer a rare combination: solo skill development, clear progression (belts/grades), and a supportive community. BJJ, judo, karate, and muay thai all have strong beginner programmes.',
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
    pitch:'Creative, stubborn, and honest. Learn to push and stop first; the style comes later.',
    guide:{
      whyItFits:"Skateboarding is one of the few sports with no coach, no team, and no schedule. You go when you want, work on what you want, and progress at your own pace.",
      howToStart:"Get a complete board (not a toy). Find a smooth surface. Learn to push, turn, and stop before anything else. Visit skate parks after the basics feel safe.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'30 minutes of focused practice on pushing, stopping, or one small skill is a real session.',
        competitive:'Amateur skateboarding competitions are genuinely accessible at local skate parks.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Quick rallies, rotating partners, and a friendly learning curve. It is social before it gets serious.",
    guide:{
      whyItFits:"Pickleball is low-impact on joints, fast enough to be exciting, and social by design. Open play sessions mean you can show up alone and have a full game within minutes.",
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
    pitch:"Light racket, fast shuttle, sneaky cardio. It starts casual and gets sharp quickly.",
    guide:{
      whyItFits:'Badminton is deceptively demanding at high levels but forgiving enough to be fun from day one. Drop-in community sessions are common.',
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
    pitch:"A disc, open grass, and a culture that explains itself as you play. Running helps; kindness helps more.",
    guide:{
      whyItFits:'Ultimate frisbee combines running, passing, and team tactics. The self-refereed culture makes communication part of the sport, which helps beginners understand what is happening.',
      howToStart:"Find a local ultimate club or pickup game. Most cities have a club that runs beginner sessions. A disc costs $10.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Just show up.',
        shy_solo:'Hard to practice alone but throwing against a target or fence works.',
        social_team:'The "spirit of the game" culture gives beginners a clear reason to ask questions and learn out loud.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get an ultimate disc ($10)','Find a local club or pickup game','Attend your first session','Learn the basic throwing grip and huck']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythm, power, and patience in one motion. Start on an indoor rower before the boat ever wobbles.',
    guide:{
      whyItFits:"Rowing works 86% of your muscles and is entirely low-impact on joints. Club rowing has a strong learn-to-row culture — most clubs run beginner programmes for adults.",
      howToStart:"Find a local rowing club and ask about their learn-to-row programme. Indoor rowing (ergs) at a gym is a zero-barrier first step.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide everything on the water. Just show up.',
        shy_solo:'Indoor rowing (erg) is completely solo. Many gyms have them.',
        social_team:'Rowing clubs are strong social communities — crew boats require teamwork.',
        limited_time:'A 10- to 20-minute easy erg session is enough while you learn the stroke.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a local rowing club or gym with ergs','Try a 20-minute indoor rowing session','Look up learn-to-row programmes near you','Attend a beginner club session']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:"A bucket of balls, one clean strike to chase, and plenty of room to tinker alone.",
    guide:{
      whyItFits:"Golf rewards patience and precision. A driving range lets you practise completely solo for as long as you want. Courses are available at every budget level.",
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
    pitch:'Simple movements, visible progress, and a place to practice confidence one set at a time.',
    guide:{
      whyItFits:"Weight training and gym-based fitness are among the most measurable activities you can do. You log your weights, you see progress week by week.",
      howToStart:'Sign up for a gym. On day one, do a simple full-body circuit: squat, press, row, hinge. 3 sets each. Keep it simple.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 30-minute full-body session is a complete workout when done consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Sign up for a gym or find one with a free trial','Complete a 30-minute full-body workout','Log your weights so you can beat them next time',"Go back within 48 hours while you're still sore"]
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'Strength with almost no setup. Scale the moves, keep them clean, and let consistency do the heavy lifting.',
    guide:{
      whyItFits:"Calisthenics requires nothing except your body and a surface. Push-ups, pull-ups, squats, and dips build real functional strength with no gym or gear.",
      howToStart:'Start with a scaled bodyweight circuit: squats, wall or incline push-ups, dead bugs, and a short plank. Do it 2–3 times per week.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is a complete workout.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete: 3×10 push-ups, squats, and a 30-sec plank','Find a park with pull-up bars near you','Do the routine 3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny court, huge tempo. Rally first, compete later, and watch your reflexes wake up.',
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
    pitch:'Fast feet, stick skills, and team momentum. Wall ball gives you a real first step before full play.',
    guide:{
      whyItFits:'Lacrosse combines the running of soccer with stick skills and tactical depth. Box lacrosse (indoor) is a more accessible entry point than field lacrosse.',
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
    pitch:"Big teamwork and bigger camaraderie. Tag or touch rugby lets you learn the shape before the contact.",
    guide:{
      whyItFits:"Rugby's culture of respect and inclusivity is genuine. Tag rugby (non-contact) is a great entry point. Club rugby is one of the strongest social sports cultures in the world.",
      howToStart:'Find a local rugby club and ask about their beginner or tag rugby programme. Show up on a Saturday.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Many clubs have spare gear for beginners. Ask before your first session.',
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
    pitch:'Chess at sprint speed, with loaner gear and clear rules. Footwork comes before flair.',
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
    pitch:'A social league sport where showing up matters. Shared bats, simple goals, and plenty of room to learn.',
    guide:{
      whyItFits:"Softball is a popular recreational sport for adults because the league format does a lot of the social work. Co-ed and rec teams usually care more about reliability than perfection.",
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
    pitch:'Body control from the ground up. Adult classes start with shapes, rolls, and confidence, not backflips.',
    guide:{
      whyItFits:'Gymnastics builds functional strength and body control that transfers to every other sport. Adult beginner classes exist in most cities and are more common than people expect.',
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
    pitch:'Cold air, rental gear, and the strange joy of turning on snow. A lesson makes day one safer and calmer.',
    guide:{
      whyItFits:'Skiing is exhilarating and progress is rapid once you start. Resorts are social environments and beginner lessons are very well structured.',
      howToStart:'Book a beginner lesson at a ski resort — do not self-teach. Rentals cover everything. One full lesson day gives you more than weeks of trial and error.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is a complete first experience.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Practise stopping and turning on beginner terrain','Ask what to repeat next time']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'Expect a humbling first day and a memorable second. Snowboarding rewards patience with real flow.',
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
    pitch:'Ocean timing, balance, and a lot of falling in foam. Even tiny rides feel electric.',
    guide:{
      whyItFits:'Surfing combines physical challenge, timing, and attention to the ocean. A surf school lesson gives beginners safer waves, softer boards, and a better shot at a tiny first ride.',
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
      checklist:['Find a surf school near a beginner break','Book a 2-hour lesson','Ride your first wave (on knees counts)','Return for a second session within the week']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus with instant feedback. Clubs provide the gear; your job is stance, breath, release.',
    guide:{
      whyItFits:'Archery is a calm precision sport with visible feedback every round. Most clubs provide equipment for early sessions so you can learn form before buying anything.',
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
    pitch:'Counts, trust, jumps, and team energy. Cheer is athletic from day one, but beginners start with basics.',
    guide:{
      whyItFits:'Competitive cheerleading is a full sport — tumbling, stunting, jumping, and dancing at high intensity. The team culture is exceptionally strong and inclusive.',
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
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'City movement with rules: land softly, choose safe lines, and make ordinary walls feel interesting.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'A tandem jump is the structured first taste: instructor, gear check, huge nerves, bigger sky.' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Floating under a fabric wing instead of fighting gravity. Tandem flights keep the first try contained.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Prone flight under a rigid wing, usually learned first on small hills before bigger air.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'A slow sunrise drift with a loud burner overhead and no steering wheel in sight.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'Low, quiet paddling on flatwater first. Rent a boat, learn the stroke, let the shore stay close.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'An open boat, a steady paddle, and room for a friend. Calm lakes are the honest starting line.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Balance practice disguised as a lake day. Knees first is allowed; standing can wait.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'Board control behind a boat or cable tow. Expect water starts, wipeouts, and a fast learning loop.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Wind, board, and kite handling in one sport. Lessons are non-negotiable and the payoff is huge.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'Sailing while standing on a board. Awkward at first, satisfying once the sail finally pulls clean.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Slow breathing, heavy gear, and a quiet underwater world. Certification turns curiosity into access.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'A calm-first water sport where relaxation matters more than muscling through.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Tread, pass, shoot, recover. It is pool chaos with serious teamwork underneath.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'A long boat, a drumbeat, and twenty people learning to move as one.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Snowy endurance without chairlifts. Start on groomed flats and let rhythm beat speed.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'A rink rental, wobbly laps, and the small thrill of gliding instead of walking.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Edges, spins, and music on ice. Adult learn-to-skate starts with balance before beauty.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Granite stones, sweeping, and surprising strategy. Beginner nights are built for curious adults.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Skates, sticks, and speed with a real gear list. Learn-to-play programs make the ramp less wild.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Winter hiking when the snow gets deep. Slow, steady, and friendlier than skiing for first-timers.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Throws and grip fighting, but beginners start with the most useful skill: falling safely.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling that rewards patience and leverage. Expect close contact and a lot of problem-solving.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Stances, strikes, and forms with a clear belt path. Repetition is the point, not a flaw.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Fast kicks and structured classes. Flexibility helps, but beginners start lower than the highlight reels.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Pads, shins, elbows, knees, and hard conditioning. Start with technique before toughness.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Bag work, pad rounds, and clean combinations. Many gyms keep beginner classes no-contact.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Practical self-defense drills with a direct style. Choose a school that teaches control, not panic.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Martial art, dance, music, and play in one circle. The rhythm is part of the lesson.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'Flowing partner practice built around redirection and balance. Calm does not mean simple.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Striking plus grappling under one roof. Good beginner classes separate fundamentals from sparring.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Bamboo swords, armor, footwork, and loud commitment. Discipline is part of the atmosphere.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'Small-bike control for tracks, parks, and tricks. Learn pumping and braking before airtime.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Dirt trails, line choice, and just enough speed to focus your whole brain.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Contact skating with a punk-team heart. Fresh-skater programs teach falls before hits.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Smooth paths, rolling balance, and a better workout than it looks. Braking comes first.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'Cruising and carving on a longer board. Less trick-chasing, more pavement flow.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'A walk in the park with throws that matter. One disc is enough for a first round.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Learning balance, cues, and trust with a very large teammate. Lesson barns guide the first ride.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Mallets, horses, and fast decisions. Beginner schools make the first taste more possible than it sounds.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'Three darts, a board, and a lot of quiet pressure. Pub casual and league serious both fit.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Slow rolls, curved paths, and friendly precision on a green. Quieter than most sports, not dull.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'Metal balls, a tiny target, and summer-square tactics. Easy to try, hard to place perfectly.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Backyard precision with just enough trash talk. Setup is simple; consistency is not.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Short climbs over padded floors. No ropes, plenty of rests, and problems that reward clever feet.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'A webbing line between trees and a lesson in humility. Two steps can feel heroic.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing with technique, not just chaos. Adult classes build body awareness before flips.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run in one project. Sprint distance is the approachable door, not the easy one.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'Navigation as a workout: map, compass, checkpoints, and the fun of choosing your own route.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Batting, bowling, fielding, and many rules. Soft-ball indoor cricket is a gentler first taste.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Low sticks, quick passes, and constant movement. Protective basics matter because the ball is hard.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light sticks, quick shifts, and a ball that keeps the pace friendly.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'A no-contact basketball cousin built on passing lanes, timing, and fixed positions.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'Tag meets wrestling with breath control. One raider enters, the whole defense wakes up.' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Pattern speed with plastic cups. Cheap, weirdly absorbing, and absolutely a timed sport.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Think under fatigue, then fight under pressure. It is exactly as strange as the name promises.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprint, plant, fly. Coaching and proper facilities are essential from the first session.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'A puck on the pool floor, short breath holds, and teamwork you mostly communicate with movement.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
