const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little nerve — start alone, then ease into pickup when you are ready.',
    guide:{
      whyItFits:"Basketball gives you a rare mix of solo practice and instant community. You can shoot around at an empty hoop, then slowly work up to pickup without joining a league first.",
      howToStart:"Find a public court and keep the first session small: dribble with both hands, take close shots, and notice when people tend to play pickup. Joining can wait until you feel steadier.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, or just show up at a busy court and join someone else's game.",
        no_equipment:"Head to any park court and ask to join. Someone always has a ball.",
        shy_solo:"Public courts are completely normal to use alone. Dribble and shoot by yourself — no pressure to join anything.",
        social_team:"Show up at a busy court on a weekend and ask \"got next?\" — that is how most pickup games sort the queue.",
        limited_time:'A 20-minute solo mix of close shots, layups, and dribbling is plenty to start.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Take 20 relaxed shots close to the basket','Watch a pickup game and learn how people rotate in']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Low cost, global, and easy to start badly in the best way — touches first, games later.",
    guide:{
      whyItFits:"Soccer is everywhere, but it does not have to start with a full match. A ball and a wall can teach you touch, rhythm, and confidence before you ever join a casual game.",
      howToStart:"Find a park or any safe open space. Start with slow touches, simple wall passes, and short dribbles around markers. When that feels less chaotic, look for a casual kickaround.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Show up to a pickup game and join a side. Balls are always shared.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — many groups are built around weekly kickarounds.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch, park, or wall','Practise gentle touches — aim for control, not tricks','Try wall passing for 10 min','Search for a casual pickup game or beginner kickaround']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"Clean contact feels amazing, and a wall will rally with you for free until you find a partner.",
    guide:{
      whyItFits:"Tennis gives you a clear feedback loop: the ball either comes back or it does not. Public courts and practice walls let you build rhythm privately before a match adds pressure.",
      howToStart:"Find a public court or hitting wall. Keep the first session easy: short swings, soft contact, and five-ball rallies. Save serves and scoring for later.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying is a complete solo practice. 30 minutes, no partner needed.',
        social_team:'Most tennis clubs run beginner group clinics. USTA has local adult programmes.',
        limited_time:'30 minutes of wall rallying is a full session.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public tennis court or hitting wall','Spend 15-20 min making soft contact against a wall','Get or borrow a basic racket','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'A little chaotic at first, very social once it clicks — every rally gives you another chance.',
    guide:{
      whyItFits:"Volleyball is technical, but beginners still get to be part of the rally. The pass is the first unlock, and open gyms or beach courts make it easier to learn by watching.",
      howToStart:"Find an open gym night or beach court and observe the flow before joining. Practise forearm passing first — even ten controlled bumps is a real start.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gym nights and beach courts always have balls. Just show up.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" — many open gyms are used to new players rotating in.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Practise 10 controlled forearm passes to yourself','Watch or attend one beginner-friendly open session','Search for beginner recreational leagues']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'Slow moments, sharp focus, and the tiny thrill of finally squaring one up.',
    guide:{
      whyItFits:'Baseball is built from small, repeatable skills: contact, catching, throwing, reading the play. That makes it easier to start solo than most team sports.',
      howToStart:'Find a batting cage or a quiet wall. Start with easy swings and soft tosses; the goal is timing and clean contact, not home-run power.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage session is completely solo. No team needed to start.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'20 minutes at a batting cage is a real session. Focus on clean contact.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage near you','Take 20-30 swings — focus on contact, not power','Practise easy throws with a partner or wall','Look up local recreational softball leagues']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Routes, quick decisions, and team energy — with flags instead of full-contact gear.',
    guide:{
      whyItFits:"Flag football keeps the strategy and teamwork while lowering the contact and equipment barrier. It is a good way back into team sport if you want structure without pads.",
      howToStart:"Start by practising easy throws and catching on the move. Then search parks departments, rec centres, or Meetup for rookie-friendly flag leagues.",
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
    pitch:"No booking, no team, no mystery — just a route, your breath, and a pace you can repeat.",
    guide:{
      whyItFits:"Running is brutally simple, which is why it works. You can make progress with run-walk intervals, a local path, and patience instead of expensive gear or perfect fitness.",
      howToStart:"Start with 20 minutes of alternating 1 minute jogging and 1 minute walking. Keep it easy enough that you could talk. Consistency matters more than pace.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is completely normal. Most runners prefer it.',
        social_team:'Running clubs are among the most welcoming groups in sport. Search "running club [your city]".',
        limited_time:'A 20-minute run-walk three times a week is a legitimate training programme.',
        competitive:'Local 5K races make a good first target because run-walkers are normal.',
      },
      checklist:['Complete a 20-minute run-walk','Download a free run-tracking app if you want one','Find your nearest track or park path','Look up a local 5K as a future goal']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet, low-impact, and harder than it looks — the pool gives instant feedback.',
    guide:{
      whyItFits:"Swimming builds fitness without pounding your joints, and technique matters more than brute force. It is also one of the few workouts where the world goes quiet for a while.",
      howToStart:'If you can swim already, book a lane swim and do short lengths with plenty of rest. If you are unsure in deep water, start with an adult beginner lesson.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles is all you need.",
        shy_solo:"Lane swimming is one of the most solitary sports — you're in your own lane, focused entirely on yourself.",
        social_team:'Masters Swimming programmes are adult lap groups at all levels — welcoming to beginners.',
        limited_time:"20 minutes of easy lengths or skills practice is enough for a first session.",
        competitive:'USMS (Masters) meets include open events where chasing your own time is the point.',
      },
      checklist:['Find your nearest pool with lane swim or adult lessons','Book one session','Swim short lengths with generous rest','Look up Masters Swimming when you want company']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Sharp, sweaty, and confidence-building — the first month is fundamentals, not fighting.',
    guide:{
      whyItFits:"Boxing builds coordination, fitness, and composure in a way you can feel quickly. A good gym will keep beginners on stance, footwork, bags, and pads before any sparring talk.",
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
    pitch:'Tough, technical, and humbling — best learned with a real coach and a safe mat.',
    guide:{
      whyItFits:"Wrestling is demanding, but it is not just aggression. Beginners learn stance, balance, safe movement, and how to stay calm in uncomfortable positions.",
      howToStart:"Find a wrestling club or school programme and ask about beginner or adult sessions. Do not try to learn throws without a coach and a mat.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs usually provide mats and may have loaner headgear or shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A practice session runs 60–90 minutes. There's no shorter version that works.",
        competitive:'Ask your club coach about entry-level tournaments after 1–2 months of training.',
      },
      checklist:['Find a local wrestling club or YMCA programme','Ask whether beginners can observe first','Learn basic stance from a coach','Ask about the safest beginner training schedule']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A quiet way to build strength, mobility, and breathing room without leaving home.',
    guide:{
      whyItFits:"Yoga is beginner-friendly because the first win is not a pose; it is noticing how your body feels. You can keep it private at home or join a studio when you want guidance.",
      howToStart:"Find a free beginner YouTube class and do it in your living room. Choose gentle or foundations classes before anything labelled power or advanced.",
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
    pitch:"Low-impact miles, fresh air, and the small freedom of getting somewhere under your own power.",
    guide:{
      whyItFits:"Cycling can be exercise, transport, or head-clearing time. It is gentle on joints, easy to scale, and much more enjoyable when the first route is flat and familiar.",
      howToStart:'Borrow or find a used bike that fits well enough. Pick a quiet, flat route for your first ride and focus on braking, shifting, and comfort before distance.',
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
    pitch:'A workout disguised as a puzzle — indoor gyms make the first step surprisingly easy.',
    guide:{
      whyItFits:"Climbing rewards curiosity as much as strength. Indoor gyms rent gear, staff can point you to true beginner routes, and the community tends to celebrate small breakthroughs.",
      howToStart:"Visit an indoor climbing gym and tell the desk it is your first time. Start with bouldering or an intro class, then stop before your hands are completely cooked.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent shoes and harnesses, so a day pass is enough for the first visit.',
        shy_solo:'Bouldering is completely solo — no partner needed, no ropes, just you and the wall.',
        social_team:'Climbing gyms are social without forcing small talk; beta and encouragement happen naturally.',
        limited_time:'A 45-minute bouldering session is a complete workout.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent gear','Try beginner bouldering for 30-45 minutes','Ask a staff member to show you one easy route']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"A low-pressure reset button: walk somewhere green, bring water, come back clearer.",
    guide:{
      whyItFits:"Hiking is movement with scenery and fewer rules. It can be solo, social, gentle, or challenging, but the best first hike is simply short and easy to finish.",
      howToStart:'Find a local trail on AllTrails or a parks website. Pick something rated "easy" and under 3 miles, check the weather, and tell someone where you are going.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need comfortable shoes, water, and weather-appropriate layers.',
        shy_solo:'Solo hiking is common. Start with busy, well-marked trails and tell someone your plan.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 90-minute loop is a real hike. You don't need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download AllTrails or check your parks website','Find an easy trail under 3 miles','Pack water and check the weather',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music makes the effort feel different — pick a style, expect awkwardness, keep moving.',
    guide:{
      whyItFits:'Dance is exercise with personality. Some styles are social and partner-based, others are solo and expressive, so the right class can feel more like play than training.',
      howToStart:'Pick a style that genuinely sounds fun, then find a beginner or absolute-beginner class. The first class will feel awkward; that is part of the deal.',
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
    pitch:'Structure, respect, and clear progression — ideal if you want to be coached from day one.',
    guide:{
      whyItFits:'Martial arts give beginners a path: show up, learn basics, repeat, earn the next step. The best gyms make safety and respect obvious before intensity.',
      howToStart:'Pick one style based on what you want: grappling, striking, tradition, or fitness. Book a trial class and ask exactly what beginners do on day one.',
      equipment:[{item:'Gi / uniform (club may loan one)',tier:'later'},{item:'Comfortable athletic wear',tier:'need'},{item:'Mouthguard',tier:'later'}],
      adaptive:{
        low_budget:'Many clubs have sliding-scale dues or reduced first-month rates. Ask.',
        no_equipment:'Most clubs loan a gi to new members for the first few sessions.',
        shy_solo:"Drilling technique alone or in pairs is the core of most martial arts. You won't be thrown into sparring immediately.",
        social_team:"Martial arts dojos create familiarity quickly because everyone drills, bows in, and struggles through basics together.",
        limited_time:'A standard class runs 60 minutes. Most people go 2–3 times per week.',
        competitive:'Every martial art has a competition structure. BJJ tournaments run almost every weekend across the country.',
      },
      checklist:['Pick a martial art style (BJJ, karate, judo, muay thai)','Find a local club and book a trial class','Attend your first class with no expectations','Go back at least twice before deciding']
    }
  },

  skateboarding: {
    id:'skateboarding', name:'Skateboarding', icon:'🛹',
    fitTags:['shy_solo','high_energy'],
    pitch:'Creative, stubborn, and very honest — the board tells you when you are improving.',
    guide:{
      whyItFits:"Skateboarding is self-directed in the best way. You can practice for 15 minutes, celebrate tiny improvements, and build your own relationship with the sport.",
      howToStart:"Get a complete board, not a toy-store deck. Find smooth flat ground and learn to stand, push, turn, and stop before worrying about tricks or skate parks.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'20-30 minutes of focused practice on one basic skill is a complete session.',
        competitive:'Amateur skateboarding competitions are genuinely accessible at local skate parks.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Fast games, friendly rotations, and enough strategy to keep it interesting after day one.",
    guide:{
      whyItFits:"Pickleball is social by design: short games, rotating partners, and lots of people who remember being new. It is gentle enough to start but tactical enough to keep growing.",
      howToStart:'Find an open play or beginner session at a local court. Message ahead about loaner paddles and ask someone to explain the kitchen rule before your first game.',
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
    pitch:"Light gear, quick rallies, and way more sweat than the backyard version suggests.",
    guide:{
      whyItFits:'Badminton has a low barrier and a high ceiling. You can have fun rallying on day one, then spend years chasing better footwork, timing, and touch.',
      howToStart:'Find a community hall or gym that runs badminton drop-in nights. Ask if there is a beginner court or spare racket before you go.',
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
    pitch:"Running, throwing, and built-in sportsmanship — a team sport that usually teaches newcomers well.",
    guide:{
      whyItFits:'Ultimate combines running, spacing, and throwing with a culture that values explaining the game. Self-refereeing makes communication part of the sport, not an afterthought.',
      howToStart:"Find a local ultimate club, pickup game, or beginner session. If you start solo, practice backhand throws at a target before joining a game.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Just show up.',
        shy_solo:'Throwing at a target or fence is enough to build confidence before a first pickup game.',
        social_team:'The "spirit of the game" culture makes teaching new players part of the sport, not an interruption.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get or borrow an ultimate disc','Practise 10 easy backhand throws at a target','Find a local club or pickup game','Attend a beginner-friendly session']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythm, teamwork, and a serious full-body burn — start on the indoor rower first.',
    guide:{
      whyItFits:"Rowing is technical and low-impact, with a satisfying rhythm once the stroke starts to make sense. Most clubs expect beginners and teach adults through learn-to-row programmes.",
      howToStart:"Try an indoor rowing machine first and learn the basic sequence: legs, body, arms. If it clicks, ask a local rowing club about learn-to-row dates.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide boats, oars, and safety gear for learn-to-row sessions.',
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
    pitch:"Patient, precise, and weirdly addictive — one clean shot can buy a lot of patience.",
    guide:{
      whyItFits:"Golf gives you space to learn alone, but it is still social when you want it. A driving range keeps the first step simple: no scorecard, no pressure, just contact.",
      howToStart:"Go to a driving range and rent clubs if needed. Use a short iron, swing easy, and make clean contact your only day-one goal.",
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
    pitch:'A choose-your-own-strength lab — simple sessions, visible progress, no team required.',
    guide:{
      whyItFits:"Gym training works for people who like control. You choose the plan, track the numbers, and build confidence through repeatable sessions instead of game-day pressure.",
      howToStart:'Take a tour or free trial first. On day one, do a simple full-body circuit with light weights: squat, press, row, hinge. Leave with energy in reserve.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides the equipment; you just need clothes and shoes you can move in.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 30-minute full-body session is a complete workout when done consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Find a gym with a free trial or day pass','Complete a light 30-minute full-body workout','Log the exercises and weights you used','Book your next visit before you leave']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'No commute, no membership, no excuses — just scalable strength work wherever you are.',
    guide:{
      whyItFits:"Calisthenics turns ordinary spaces into training spots. It scales from wall push-ups and assisted squats to pull-ups and handstands, so beginners do not need to be strong first.",
      howToStart:'Start with a basic bodyweight circuit you can actually finish: wall or knee push-ups, squats to a chair, and a short plank. Rest a day between early sessions.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 15-20 minute bodyweight circuit is a complete workout.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete 2 easy rounds of push-up, squat, and plank variations','Find a park with pull-up bars near you','Do the routine 2-3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny table, huge reflexes — quick games that fit into lunch breaks and community centres.',
    guide:{
      whyItFits:'Table tennis is easy to sample and surprisingly deep. You can start by keeping a rally alive, then slowly discover spin, placement, and footwork.',
      howToStart:'Find a table at a community centre, pub, or park. Borrow a paddle and rally gently; keeping the ball on the table is the first win.',
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
    pitch:'Fast feet, stick skills, and team intensity — best started through a club that loans gear.',
    guide:{
      whyItFits:'Lacrosse mixes running, passing, and quick decisions. It has a learning curve, but wall ball gives beginners a solo way to build touch before full-speed play.',
      howToStart:'Find a local lacrosse club or recreational league and ask about beginner programmes or loaner gear. Practise easy wall ball before buying a full kit.',
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
    pitch:"Big contact, bigger camaraderie — start with touch or tag if full rugby feels like a lot.",
    guide:{
      whyItFits:"Rugby clubs can be remarkably welcoming, but the contact is real. Touch and tag versions let you learn spacing, passing, and team culture before tackling enters the picture.",
      howToStart:'Find a local rugby club and ask about beginner, touch, tag, or rookie sessions. Watch a practice first if you want to understand the pace.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Clubs almost always have spare gear for beginners.',
        shy_solo:'Tag rugby (non-contact) removes the intimidation of full contact.',
        social_team:'Rugby clubs are among the most social in all of sport — the post-match tradition is famous.',
        limited_time:'Training sessions run 90 minutes. Tag rugby sessions are often shorter.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about touch, tag, or beginner programmes','Watch or attend one rookie-friendly session','Get a mouthguard before any contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Chess with footwork and nerves — fast, tactical, and easier to try than it looks.',
    guide:{
      whyItFits:'Fencing rewards timing, composure, and reading another person in real time. Clubs usually provide equipment, so beginners can try it before buying anything unusual.',
      howToStart:'Find a local fencing club and attend a beginner class or intro course. Let the club guide you toward foil, epee, or sabre.',
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
    pitch:'Social, forgiving, and still competitive enough to make every at-bat matter.',
    guide:{
      whyItFits:"Softball is one of the friendlier adult team sports because many leagues expect mixed skill levels. You get team energy without needing childhood baseball experience.",
      howToStart:"Search your city's parks department for adult softball leagues. Look for recreational or co-ed divisions that place solo players on teams.",
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
    pitch:'Strength, mobility, and body control — adult beginner classes make the scary stuff safer.',
    guide:{
      whyItFits:'Gymnastics builds body control in a direct, humbling way. Adult beginner classes focus on foundations, strength, mobility, and safe progressions rather than throwing you at big skills.',
      howToStart:'Find a gymnastics club that offers adult classes and ask what beginners do first. Expect floor basics, mobility, and conditioning before apparatus work.',
      equipment:[{item:'Gymnastics shorts/leotard',tier:'need'},{item:'Gymnastics shoes or bare feet',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Adult classes tend to bond quickly because everyone is learning exposed, humbling skills.',
        limited_time:'A class runs 60–90 minutes.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Ask what skills are covered in the first class','Attend your first session','Come back — gymnastics rewards consistency']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, controlled slides, and that first smooth green run — take the lesson.',
    guide:{
      whyItFits:'Skiing can feel intimidating until someone teaches you how to stop, turn, and stand back up. Beginner lessons are structured for exactly that first awkward day.',
      howToStart:'Book a beginner lesson at a ski resort or smaller local hill. Rent gear, dress warm, and measure success by learning control, not by covering the mountain.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent skis, boots, poles, and helmets. You bring warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is a complete first experience.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort or hill','Rent full gear on arrival','Learn how to stop and turn safely','Ask about a return discount']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'Expect falls, then flow — snowboarding rewards the people who come back for day two.',
    guide:{
      whyItFits:"Snowboarding has a real day-one learning curve, but once the edge control starts to click it feels completely different. The culture is creative, relaxed, and progression-focused.",
      howToStart:'Book a beginner snowboard lesson and rent wrist guards. Expect falling as part of the lesson, then judge the sport after a second try if you can.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent boards, boots, helmets, and wrist guards. Bring waterproof layers.',
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
    pitch:'Humbling, salty, and unforgettable — one tiny glide can make the wipeouts worth it.',
    guide:{
      whyItFits:'Surfing is as much wave judgment and patience as fitness. A surf school keeps beginners in safe conditions with foam boards and realistic expectations.',
      howToStart:'Book a lesson at a surf school near a beginner break. Do not self-teach in open ocean; let instructors choose conditions and explain etiquette.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide board, leash, and wetsuit when needed. Show up ready to get wet.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is a complete first experience.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a 2-hour lesson','Practice paddling, popping up, and safe wipeouts','Return for a second session if the first one hooked you']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, visible progress, and the satisfying thud of an arrow landing well.',
    guide:{
      whyItFits:'Archery is calm without being boring. Every shot gives feedback on posture, breath, and focus, and most clubs provide equipment for first sessions.',
      howToStart:"Find a local archery club and ask about beginner sessions. Use club equipment until you know your draw length, style, and interest level.",
      equipment:[{item:'Recurve bow',tier:'club'},{item:'Arrows',tier:'club'},{item:'Arm guard and finger tab',tier:'club'},{item:'Own bow (after 2–3 months)',tier:'later'}],
      adaptive:{
        low_budget:"Clubs provide all equipment. Session fee: $10–20. Don't buy anything until you're committed.",
        no_equipment:'Everything is provided. Just show up.',
        shy_solo:'Deeply individual. You focus on your own targets and progress.',
        social_team:'Archery club nights are quietly social: people swap tips between ends without crowding your focus.',
        limited_time:'A session runs 60–90 minutes. Indoor ranges are weather-independent.',
        competitive:'USA Archery has structured competition pathways from beginner to Olympic level.',
      },
      checklist:['Find a local archery club','Book a beginner intro session','Learn the basic stance and anchor point','Complete your first 10-arrow round']
    }
  },

  cheer: {
    id:'cheer', name:'Cheerleading', icon:'📣',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Big energy, real athleticism, and a team that notices when you show up.',
    guide:{
      whyItFits:'Cheer combines tumbling, jumps, dance, stunts, and teamwork under pressure. Entry-level teams and open houses give beginners a way in without pretending it is easy.',
      howToStart:'Find a local All-Star cheer gym and ask about open houses, beginner programmes, or adult teams. Learn the schedule and costs before committing.',
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
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Learning to move through ordinary spaces with balance and control. Good coaches start with tiny jumps, landings, and safety.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'A tandem jump is the usual first taste: huge nerves, a trained instructor, and no need to pretend you are fearless.' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Floating under a wing, steered by subtle inputs. Tandem flights let you try the feeling before committing to lessons.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Prone flight under a rigid wing. Beginner schools usually start low and controlled, not with a cliff-edge movie scene.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'A quiet drift with a loud burner and a view that does most of the work. More wonder than workout.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'Calm-water paddling is the friendly doorway: rent a boat, learn the stroke, and let the lake set the pace.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'An open boat, a steady paddle, and room for a friend. Best first tried on flatwater from a rental dock.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Standing on a wide board across calm water. Peaceful once you stop staring at your feet.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'Board riding behind a boat or cable tow. Expect hard starts, big splashes, and a very satisfying first clean ride.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Wind, water, board, kite. The learning curve is real, so lessons are the first step, not a nice-to-have.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'Part sailing, part board sport, all balance. Beginner boards are wide, forgiving, and still plenty humbling.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Breathing underwater is surreal. A discovery dive or pool session is the safest first step before certification.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'A breath, a calm body, and strict safety rules. This is mental training as much as water sport.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Pool cardio with contact and tactics. You need swim confidence first, then a beginner club that teaches the chaos.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'A long boat, a drumbeat, and twenty people trying to move as one. Very team-first, very beginner-friendly.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Snowy endurance without chairlifts. Start on groomed flats before pretending you are in a Nordic race.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Public rinks make it easy to rent skates, hold the rail, and slowly turn wobble into glide.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Edges, spins, music, and a lot of patient drilling. Adult learn-to-skate classes are the sensible start.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Granite stones, sweeping, and sneaky strategy. Most clubs run learn-to-curl nights with all gear included.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Fast skating, fast decisions, long gear list. Look for adult learn-to-play before joining a league.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Winter hiking with flotation. Rent snowshoes, choose a marked trail, and let the snow slow everything down.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Throws, grips, and the underrated art of falling safely. Beginner classes spend real time on the landing.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling that rewards patience and problem-solving. A good gym will not throw you into chaos on day one.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Strikes, forms, and a clear belt path. Traditional, structured, and easy to sample through a trial class.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Kicks, speed, flexibility, and formal progression. Beginner classes build the basics before the big airborne stuff.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Striking with fists, elbows, knees, and shins. Hard work, clear coaching, and pads before contact.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punches and kicks without needing to spar. Beginner bag classes are sweaty, simple, and satisfying.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Practical self-defense drills with intensity. Look for a school that teaches control, not panic.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Martial art, dance, music, and game all at once. The roda gives it a social heartbeat.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'A calmer martial art built around redirection and timing. Technical, flowing, and less strike-focused.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Striking plus grappling under one roof. Good beginner gyms separate fundamentals from sparring.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Bamboo swords, armor, discipline, and loud commitment. Beginners start with footwork and etiquette.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'Small-bike tricks, pumps, and races. Start on flat ground or beginner pump tracks before big features.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Trail riding with dirt, roots, and focus. Green trails and rental bikes are the right first move.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Full-contact skating with fierce team culture. Many leagues run beginner bootcamps before contact.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Bike paths, smooth parks, and speed when you want it. First lesson: stopping matters more than going fast.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'Cruising and carving on a longer board. Less trick-focused than skateboarding, still very balance-honest.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'A walk in the park with satisfying throws. Cheap discs, free courses, and plenty of room to be new.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Learning balance, cues, and trust with a very large teammate. Lesson barns provide the horse and tack.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Mallet sport on horseback. Niche and pricey, but some clubs run beginner schools with horses provided.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'Three darts, a board, and more pressure than expected. Pub leagues make it social fast.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Quiet greens, biased bowls, and gentle trash talk. Slower pace, real tactics.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules with a summer-evening feel. Low cost, social, and more precise than it looks.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Backyard-simple, league-serious if you want it. Easy to start, oddly addictive to perfect.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Short climbs over padded floors, no rope partner needed. Problem-solving with sore forearms.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'A flat line between two trees and a lot of falling off. Tiny balance gains feel huge.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing with coaching and progressions. Adult classes make the fun safer and more structured.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run in one project. Start with a sprint plan and respect the logistics.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'A map-reading treasure hunt with cardio. You can walk your first course and still feel clever.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Batting, bowling, fielding, and a rulebook with personality. Indoor or soft-ball formats are friendlier first tastes.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Fast stick skills on turf or grass. Look for adult beginner clubs before buying specialist gear.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Light-stick indoor hockey with quick shifts and low gear demands. Chaotic in a very playable way.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'A no-dribble basketball cousin built on passing, space, and roles. Beginner leagues are common in netball countries.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'Tag, wrestling, breath control, and team tactics in one wild package. Best learned through a club.' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Patterned cup stacking at speed. Cheap, oddly meditative, and yes, legitimately competitive.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating chess and boxing rounds. A novelty on paper, a brutal focus test in practice.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprint, plant, fly. You need a coach, a pit, and patience before anything gets dramatic.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'A puck on the pool floor, short dives, and lots of teamwork without much talking.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
