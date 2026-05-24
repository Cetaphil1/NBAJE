const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little nerve. Start solo, then slide into pickup when you are ready.',
    guide:{
      whyItFits:"Basketball has an easy on-ramp: shooting alone counts, pickup games are visible, and every miss gives you quick feedback. You can keep it casual or chase real competition without changing sports.",
      howToStart:"Find a public hoop at a quiet time. Spend 15 minutes on layups, short shots, and dribbling. When the court feels less intimidating, ask who has next.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most outdoor courts are free. A used ball is usually $10–20, and busy courts often have shared balls once you are comfortable joining in.",
        no_equipment:"Start at a park court during a busier time and ask if you can shoot around. It is normal for balls to be shared.",
        shy_solo:"Public courts are normal to use alone. Put in headphones, work close to the hoop, and leave before pickup starts if that feels better.",
        social_team:"Show up at a busy court on a weekend and ask \"got next?\" — that's genuinely how pickup basketball works.",
        limited_time:'Twenty focused minutes of layups, free throws, and dribbling is enough to get better without turning it into a whole evening.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Attempt 20 close-range shots or free throws','Watch a pickup game and ask how people join']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Low-cost team energy with plenty of room to be new, rusty, or wildly uncoordinated at first.",
    guide:{
      whyItFits:"Soccer gives you movement, teamwork, and simple equipment without much ceremony. You can build confidence alone with a ball, then join casual games where effort matters more than polish.",
      howToStart:"Find a park with space and start with touches: toe taps, gentle dribbles, and passes against a wall. Save juggling for later; ball control comes first.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Most pickup games use shared balls. Go to watch first, then ask whether beginners can rotate in.',
        shy_solo:'Wall passes and slow dribbling in a park are useful even if you never join a game that day.',
        social_team:'Search Facebook Groups, Meetup, or local parks pages for "casual soccer [your city]" and look for beginner or mixed-level language.',
        limited_time:'Twenty minutes of wall passes and easy dribbling builds more touch than standing around at a crowded game.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch or park','Practise toe taps and slow dribbling for 10 min','Try wall passing for 10 min','Search for a local casual pickup game']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"Quiet court, loud feedback: every rally tells you exactly what to fix next.",
    guide:{
      whyItFits:"Tennis is great if you like skill you can feel improving. A wall, a basket of balls, and a public court let you practise privately before points or partners enter the picture.",
      howToStart:"Find a public court or practice wall. Start with soft forehands from close range and aim for ten controlled returns before backing up.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying gives you a private way in. Keep the pace gentle and count controlled returns, not winners.',
        social_team:'Most tennis clubs run beginner group clinics. USTA has local adult programmes.',
        limited_time:'A 25-minute wall session is enough: warm up, hit gently, then stop before your form falls apart.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public tennis court or practice wall','Spend 20 min hitting soft forehands for consistency','Get or borrow a basic racket','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'Loud, quick, and team-first. You touch the ball for a second, then everyone reacts.',
    guide:{
      whyItFits:"Volleyball turns small skills into big team moments. Passing, calling the ball, and rotating with strangers can feel awkward at first, but the social rhythm clicks quickly.",
      howToStart:"Find an open gym night, beginner clinic, or quiet beach court. Learn the forearm pass first; it is the skill that lets you participate safely.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gyms and beach courts usually have shared balls. Check the session details before buying anything.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup or parks pages for "beginner volleyball [your city]" and look for open gym or novice nights.',
        limited_time:'Open gym sessions often run 1–2 hours, but it is fine to play a few rotations and leave.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night, clinic, or beach court','Practise forearm passing to yourself — 20 gentle reps','Attend one novice-friendly session','Search for recreational leagues after you know the basics']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'A slower burn: one clean catch, one solid swing, one tiny adjustment at a time.',
    guide:{
      whyItFits:'Baseball suits people who like skill work inside a team setting. You can practise hitting, throwing, and catching in small pieces before joining anything organized.',
      howToStart:'Find a batting cage or a safe wall. Start with slow swings and easy throws; clean contact matters more than power.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage is private enough to learn without feeling watched. Pick the slowest speed and ignore power.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'Twenty minutes at a batting cage is plenty when every swing has a purpose.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage near you','Take 20–30 slow swings — focus on contact, not power','Practise easy throws with a partner or wall','Look up local recreational softball leagues']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Football strategy without the pads: routes, timing, quick cuts, and a lot of team noise.',
    guide:{
      whyItFits:"Flag football keeps the playbook feel and team energy of football while lowering the contact and gear barrier. It works best if you like short bursts, roles, and learning by reps.",
      howToStart:"Start by practising short throws and simple routes with a friend or against a wall. Then look for a recreational flag league or open run.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practise spiral throwing against a fence or wall alone.',
        social_team:'Flag football leagues are often social, but skill levels vary. Look for recreational, co-ed, or beginner divisions.',
        limited_time:'A 20-minute session of short throws, catches, and route footwork is a useful first practice.',
        competitive:'Flag tournaments run frequently and are genuinely competitive.',
      },
      checklist:['Get a football or find one to borrow','Practise short throws before worrying about a perfect spiral','Watch one game and note the positions','Search for a local recreational flag football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:"The simplest scoreboard: go out, come back, feel a little more capable than before.",
    guide:{
      whyItFits:"Running is flexible, honest, and easy to scale. You can start with run-walk intervals, track progress without fancy gear, and still feel like you are training for something.",
      howToStart:"Start with 20 minutes total: alternate 1 minute jogging with 1–2 minutes walking. Keep the pace easy enough that you could speak.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need supportive shoes and a safe route. Everything else can wait.",
        shy_solo:'Running alone is completely normal. Most runners prefer it.',
        social_team:'Running clubs vary, so look for "all paces" or "no-drop" language before your first group run.',
        limited_time:'A 20-minute run-walk session three times a week is a real starting point.',
        competitive:'Local 5K races usually welcome walkers and first-timers. Racing can simply mean finishing.',
      },
      checklist:['Complete a 20-minute run-walk session','Download a free run-tracking app if you want one','Find your nearest track or park path','Look up a local 5K that welcomes walkers and first-timers']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Low-impact, full-body, and quiet enough that the world disappears for a few lengths.',
    guide:{
      whyItFits:"Swimming gives you intensity without pounding your joints. Technique matters, but you can begin with short lengths, plenty of rest, and simple breathing before chasing speed.",
      howToStart:'Book a lane swim session or beginner lesson. Start with short freestyle lengths, resting as needed, and focus on relaxed breathing rather than perfect form.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles is all you need.",
        shy_solo:"Lane swimming is naturally private. Everyone is facing the black line, not judging your stroke.",
        social_team:'Masters Swimming groups include a range of speeds; ask whether they have beginner lanes before you go.',
        limited_time:"Twenty minutes is enough for 4–8 short lengths with generous rest.",
        competitive:'USMS (Masters) meets let adults race their own times, but a few coached sessions first will help.',
      },
      checklist:['Find your nearest pool with lane swim','Book a session and swim 4×25m with rest as needed','Focus on calm breathing, not speed','Look up adult swim lessons or Masters Swimming in your area']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Sharp, sweaty, and confidence-building. You can train seriously without sparring on day one.',
    guide:{
      whyItFits:"Boxing blends rhythm, footwork, conditioning, and composure. A good gym will keep beginners on basics long before sparring, which makes progress feel clear instead of chaotic.",
      howToStart:"Find a boxing gym — don't try to learn alone. Spend the first month on stance, jab, cross, and footwork. Don't spar until your coach says you're ready.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms can feel intimidating from the outside, but beginner classes usually create training partners quickly.',
        limited_time:'A 30-minute bag session — warm-up, 3×3-min rounds, cool-down — is enough when your technique stays clean.',
        competitive:'USA Boxing and Golden Gloves have true beginner divisions. Ask your coach after 3–6 months.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Hard, honest, and coached from the ground up. You learn effort and technique together.',
    guide:{
      whyItFits:"Wrestling rewards patience as much as toughness. You learn stance, balance, pressure, and safe movement before anything looks dramatic.",
      howToStart:"Find a wrestling club or school programme — you cannot learn this safely without a coach and a mat.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A normal practice runs 60–90 minutes. If your time is tight, ask whether beginner fundamentals classes exist.",
        competitive:'Ask your club coach when entry-level tournaments make sense; readiness depends on safety and control, not the calendar.',
      },
      checklist:['Find a local wrestling club or YMCA programme','Attend one open practice','Learn basic stance from a coach','Ask about beginner training schedule']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A reset button you can do on the floor: breath, mobility, strength, and a little quiet.',
    guide:{
      whyItFits:"Yoga is low-pressure but not passive. It builds mobility, balance, and body awareness while giving you a practice you can keep private or take into a studio later.",
      howToStart:"Find a free beginner YouTube class and do it in your living room. Modify freely; the goal is to learn how poses feel, not to copy a perfect shape.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are genuinely excellent. A mat costs $10–20. That's your full startup cost.",
        no_equipment:'You can practise on carpet without a mat to start.',
        shy_solo:'This can be as private as you want: a mat, a video, and no audience.',
        social_team:'Studio classes can be social, especially if you choose a beginner series instead of a random advanced drop-in.',
        limited_time:'A 20-minute session is enough to count. Start there.',
        competitive:"Yoga is not built around winning. If you like goals, track consistency, balance, and mobility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (15–20 min)",'Complete your first session without forcing any pose','Practise 2–3 times this week',"Notice what feels tight — that's your starting point"]
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:"A workout that feels like transportation: quiet roads, small adventures, and your own pace.",
    guide:{
      whyItFits:"Cycling lets you build fitness while actually going somewhere. It is gentle on joints, easy to scale, and surprisingly good for clearing your head.",
      howToStart:'Borrow or find a used bike. Pick a flat route for your first ride. Focus on comfort and consistency before speed.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50–150. Check your city for bike libraries or loan programmes.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programmes before buying anything.',
        shy_solo:'Cycling alone is normal. Choose a calm route, ride predictably, and keep the first one short.',
        social_team:'Group rides run in most cities. Search for your local cycling club — most have beginner-paced rides.',
        limited_time:"A 20-minute neighbourhood loop counts. Comfort and confidence matter more than distance at first.",
        competitive:'Local cycling clubs have timed rides and beginner races. Strava segments give you something to chase solo.',
      },
      checklist:['Borrow or find a used bike','Find a flat, safe 20-minute route','Complete your first ride','Join a local cycling club or find a group ride']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'Physical puzzle-solving with a built-in community: one route, many tiny experiments.',
    guide:{
      whyItFits:"Climbing scratches both the brain and body itch. Indoor gyms rent the gear, grades give you clear next steps, and strangers often trade beta without making it weird.",
      howToStart:"Visit an indoor climbing gym. Rent shoes and a harness. Start on bouldering (no ropes) — it's the lowest-barrier entry point.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent shoes and harnesses. Wear clothes you can move in and ask for an intro.',
        shy_solo:'Bouldering is completely solo — no partner needed, no ropes, just you and the wall.',
        social_team:'Climbing gyms are social in a low-pressure way: people share tips, then go back to their own projects.',
        limited_time:'A 45-minute bouldering session is plenty when you rest between attempts.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent gear','Try bouldering for 45 minutes','Ask a staff member to show you one route']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"Walk somewhere with better scenery than your inbox. That is the magic.",
    guide:{
      whyItFits:"Hiking is exercise disguised as leaving the house. It scales from flat park loops to mountain days, so your first outing can be short and still feel like an adventure.",
      howToStart:'Find a local trail on AllTrails or a parks site. Pick something rated "easy," well-marked, and under 3 miles for the first trip.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need comfortable shoes, water, and a charged phone. Use what you already own first.',
        shy_solo:'Solo hiking is common, but start with popular, well-marked trails and tell someone your plan.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 45–90 minute loop is enough. You do not need a full day or a dramatic summit.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download AllTrails or check your local parks site','Find an easy, well-marked trail near you','Complete a walk or hike under 3 miles',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music gives you the rules, your body figures out the rest. Awkward is part of the entry fee.',
    guide:{
      whyItFits:'Dance can be a workout, a social doorway, or a creative outlet depending on the style. The best part: beginners are expected to look like beginners.',
      howToStart:'Pick one style that makes you curious, then find an absolute-beginner class or follow-along. Salsa, swing, hip-hop, and heels classes all have clear beginner lanes.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Hip-hop, contemporary, and follow-along classes are easy to practise alone at home.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is enough. Most studios do drop-ins, so you are not signing your life away.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find an absolute-beginner class or free intro session','Attend your first class','Go back a second time — the first one is allowed to feel awkward']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Clear rules, real skill, steady progression. A good club gives beginners somewhere to stand.',
    guide:{
      whyItFits:'Martial arts give you structure when you do not know what to do next. Different styles feel very different, but good clubs slow things down and teach control before intensity.',
      howToStart:'Pick one style that matches your interest, then book a trial class. BJJ, judo, karate, and muay thai all can work if the beginner coaching is strong.',
      equipment:[{item:'Gi / uniform (club may loan one)',tier:'later'},{item:'Comfortable athletic wear',tier:'need'},{item:'Mouthguard',tier:'later'}],
      adaptive:{
        low_budget:'Many clubs have sliding-scale dues or reduced first-month rates. Ask.',
        no_equipment:'Most clubs loan a gi to new members for the first few sessions.',
        shy_solo:"Drilling technique alone or in pairs is the core of most martial arts. You won't be thrown into sparring immediately.",
        social_team:"Martial arts clubs tend to be close-knit because people drill together every class.",
        limited_time:'A standard class runs about 60 minutes. One or two classes a week is a believable start.',
        competitive:'Most styles have competition pathways, but there is no need to compete until your coach says it fits.',
      },
      checklist:['Pick a martial art style (BJJ, karate, judo, muay thai)','Find a local club and book a trial class','Attend your first class with no expectations','Go back at least twice before deciding']
    }
  },

  skateboarding: {
    id:'skateboarding', name:'Skateboarding', icon:'🛹',
    fitTags:['shy_solo','high_energy'],
    pitch:'Creative, stubborn, and self-paced. Progress sounds like wheels on concrete and a lot of tries.',
    guide:{
      whyItFits:"Skateboarding is self-directed without being boring. You choose the spot, the skill, and the pace, while the culture leaves plenty of room for creativity.",
      howToStart:"Get a complete board, not a toy board. Find a smooth flat surface and learn to stand, push, turn, and stop before thinking about tricks.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social, but you can ease in by watching, asking one question, and skating flat ground first.',
        limited_time:'Thirty minutes focused on pushing, turning, or stopping is enough for a beginner.',
        competitive:'Amateur skateboarding competitions are genuinely accessible at local skate parks.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to push, turn, and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Small court, quick rallies, easy laughs. It gets fun before it gets technical.",
    guide:{
      whyItFits:"Pickleball lowers the intimidation factor without removing the challenge. Open play rotates partners, rallies start quickly, and the learning curve is friendly at first.",
      howToStart:'Find an open play session at a local court. Most parks have converted tennis courts. Borrow a paddle at first.',
      equipment:[{item:'Pickleball paddle',tier:'need'},{item:'Pickleballs',tier:'need'},{item:'Court shoes',tier:'nice'}],
      adaptive:{
        low_budget:'Paddles cost $20–40 for a decent beginner option. Many parks provide loaner paddles at open play.',
        no_equipment:'Ask at open play sessions — loaner paddles are very common.',
        shy_solo:'Open play is social by design, but you can build touch alone against a wall first.',
        social_team:'Rotational open play means you meet people naturally instead of having to arrive with a partner.',
        limited_time:'A single open play session has games of 5–7 minutes each. Drop in for 30 minutes.',
        competitive:'USA Pickleball runs tournaments for every skill level including beginners.',
      },
      checklist:['Find an open play session near you','Borrow a paddle and watch one rotation','Learn the basic serve and kitchen rule','Come back a second time — the first game is always confusing']
    }
  },

  badminton: {
    id:'badminton', name:'Badminton', icon:'🏸',
    fitTags:['social_team','competitive','low_budget'],
    pitch:"Light gear, fast hands, tiny court. It starts playful and gets intense fast.",
    guide:{
      whyItFits:'Badminton is forgiving enough for first rallies and demanding enough to stay interesting. Drop-in sessions make it easy to rotate partners without organizing a whole group.',
      howToStart:'Find a community hall or gym that runs badminton drop-in nights. Bring a racket or borrow one.',
      equipment:[{item:'Badminton racket ($15–25)',tier:'need'},{item:'Non-marking court shoes',tier:'need'},{item:'Shuttlecocks',tier:'need'}],
      adaptive:{
        low_budget:'A racket costs $15–25. Many drop-in sessions provide shuttles for free.',
        no_equipment:'Community hall sessions usually have spare rackets. Ask ahead.',
        shy_solo:'Rally alone against a wall to build basic technique.',
        social_team:'Badminton drop-ins are social without much pressure because partners and opponents rotate naturally.',
        limited_time:'A game to 21 points takes 15–20 minutes. Drop-in sessions are perfect for a quick game.',
        competitive:'Badminton England and USAB both run beginner tournament pathways.',
      },
      checklist:['Find a local badminton drop-in session','Get a basic racket or borrow one','Attend your first session','Learn the serve and basic court lines']
    }
  },

  ultimate_frisbee: {
    id:'ultimate_frisbee', name:'Ultimate Frisbee', icon:'🥏',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Running, passing, and a culture that actually teaches newcomers the rules as they go.",
    guide:{
      whyItFits:'Ultimate combines soccer-style movement with basketball-style spacing, but the culture is the real hook. Self-refereed play makes communication and fairness part of the sport.',
      howToStart:"Find a local ultimate club or pickup game. Most cities have a club that runs beginner sessions. A disc costs $10.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Message first if you are nervous.',
        shy_solo:'Hard to practice alone but throwing against a target or fence works.',
        social_team:'The "spirit of the game" culture makes ultimate unusually good at teaching new players without shaming them.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get an ultimate disc ($10) or borrow one','Find a local club or pickup game','Attend your first session','Learn the basic backhand and forehand grips']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythm, water, and serious engine-building without pounding your joints.',
    guide:{
      whyItFits:"Rowing is repetitive in the best way: technique, rhythm, and effort all matter. Learn-to-row programs exist because almost everyone starts as a true beginner.",
      howToStart:"Try an indoor rowing machine first or ask a club about learn-to-row. Keep the first erg session easy and focus on the sequence: legs, body, arms.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide boats, oars, and safety gear. Ask what to wear before your first session.',
        shy_solo:'Indoor rowing (erg) is completely solo. Many gyms have them.',
        social_team:'Rowing clubs are strong social communities — crew boats require teamwork.',
        limited_time:'A 20-minute easy erg session is enough to learn the rhythm and get sweaty.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a local rowing club or gym with ergs','Try a 20-minute indoor rowing session','Look up learn-to-row programmes near you','Attend a beginner club session']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:"Patient, precise, and oddly satisfying: one good strike can carry the whole session.",
    guide:{
      whyItFits:"Golf gives you a calm solo practice space with endless small adjustments. You do not need to play 18 holes to enjoy the feeling of making clean contact.",
      howToStart:"Go to a driving range. Rent clubs if you don't have them. Focus on making contact — nothing else matters on day one.",
      equipment:[{item:'Golf clubs (rent to start)',tier:'rent'},{item:'Golf balls',tier:'need'},{item:'Golf shoes',tier:'later'}],
      adaptive:{
        low_budget:'Driving ranges charge $10–20 for a bucket of balls. Club rental is usually $5–10 extra. Many municipal courses are under $25.',
        no_equipment:"Driving ranges and courses rent clubs. You don't need to own anything to start.",
        shy_solo:"Driving ranges and solo rounds are the norm — no one expects you to know anyone.",
        social_team:'Golf leagues and four-ball formats are social. Many clubs run mixer events.',
        limited_time:"A 30–45 minute range session is enough. Stop when your swing gets messy.",
        competitive:'Every golf club has a handicap system that makes fair competition possible at any level.',
      },
      checklist:['Find a nearby driving range','Buy a small bucket of balls and rent clubs','Focus only on making clean contact','Look up a local municipal course or short par-3 course']
    }
  },

  gym_training: {
    id:'gym_training', name:'Gym Training', icon:'🏋️',
    fitTags:['shy_solo','high_energy'],
    pitch:'Simple numbers, visible progress, and a place to put nervous energy to work.',
    guide:{
      whyItFits:"Gym training works when you want progress you can write down. Strength, conditioning, machines, classes: you can start simple and build structure over time.",
      howToStart:'Use a trial pass or budget gym. On day one, do a light full-body circuit: squat pattern, press, row, hinge. Two easy sets each is enough.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes, small-group training, or lifting clubs make the gym more social if solo training feels flat.',
        limited_time:'A 30-minute full-body session works when you repeat it consistently and leave a little energy in the tank.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Sign up for a gym or find one with a free trial','Complete a light 30-minute full-body workout','Log what you did so next time feels less random','Schedule your next visit before you leave']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'No machines, no commute, no excuses. Just repeatable strength work you can scale.',
    guide:{
      whyItFits:"Calisthenics turns simple movements into real strength practice. Push-ups, squats, planks, and rows can all be modified so you are not stuck failing reps on day one.",
      howToStart:'Start with a short circuit: incline push-ups, bodyweight squats, a plank, and an easy pulling movement if you have one. Do it 2–3 times this week, not daily.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed for the first sessions. A floor, wall, or sturdy chair is enough.',
        shy_solo:'Easy to do alone at home or in a quiet corner of a park.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is enough if the movements are controlled.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete: incline push-ups, squats, and a 20–30 sec plank','Find a park with pull-up bars near you','Do the routine 2–3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny table, huge reactions. You can rally casually or disappear into spin theory.',
    guide:{
      whyItFits:'Table tennis is easy to start because the rallies are playful, but it gets deep fast. Spin, placement, and timing give you endless ways to improve.',
      howToStart:'Find a table at a community centre, pub, or park. Borrow a paddle. Just rally — keep the ball on the table for as long as possible.',
      equipment:[{item:'Table tennis paddle ($15–25)',tier:'need'},{item:'Table tennis balls (pack of 6)',tier:'need'}],
      adaptive:{
        low_budget:'A decent paddle costs $15–20. Many community centres have free tables.',
        no_equipment:'Community centres and pubs often have paddles and balls available.',
        shy_solo:'Solo practice against a wall or rebound board is useful for rhythm before you play someone.',
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
    pitch:'Fast breaks, stick skills, and a team culture that rewards hustle while your hands catch up.',
    guide:{
      whyItFits:'Lacrosse is great if you want speed plus a skill project. Wall ball lets you build stick confidence alone before the full-field chaos makes sense.',
      howToStart:'Find a local lacrosse club or recreational league and ask about beginner sessions or gear loans. Practise gentle wall ball before buying a full kit.',
      equipment:[{item:'Lacrosse stick',tier:'need'},{item:'Helmet and pads (full lacrosse)',tier:'need'},{item:'Cleats',tier:'need'}],
      adaptive:{
        low_budget:'Used equipment is widely available. Box lacrosse needs less gear than field.',
        no_equipment:'Some club programmes loan equipment to beginners for the first season.',
        shy_solo:'Wall ball (throwing against a wall) is a legitimate solo lacrosse practice.',
        social_team:'Lacrosse clubs tend to be team-heavy and practice-driven, so you get familiar faces quickly.',
        limited_time:'Wall ball for 20 minutes is a useful skill session if you keep the throws controlled.',
        competitive:'USA Lacrosse runs leagues and tournaments at every level.',
      },
      checklist:['Find a local lacrosse club or league','Get basic equipment or ask about loans','Practise wall ball for 20 minutes','Attend a beginner club practice']
    }
  },

  rugby: {
    id:'rugby', name:'Rugby', icon:'🏉',
    fitTags:['social_team','high_energy','competitive'],
    pitch:"Big contact if you want it, big camaraderie either way. Tag rugby is the friendly front door.",
    guide:{
      whyItFits:"Rugby is intense, but the club culture is often warmer than people expect. Tag rugby gives you the running, passing, and teamwork without immediate full contact.",
      howToStart:'Find a local rugby club and ask about beginner, touch, or tag rugby sessions. Watch one practice if jumping in feels like too much.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Clubs almost always have spare gear for beginners.',
        shy_solo:'Tag or touch rugby removes much of the contact intimidation, but this is still a group-first sport.',
        social_team:'Rugby clubs are famously social, from training nights to post-match gatherings.',
        limited_time:'Training sessions run 90 minutes. Tag rugby sessions are often shorter.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about tag, touch, or beginner programmes','Watch or attend one training session','Get a mouthguard before any contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Fast chess with footwork: sharp, tactical, and easier to try than it looks.',
    guide:{
      whyItFits:'Fencing feels dramatic, but the beginner path is structured and safe. Footwork, distance, timing, and tactics give your brain as much to do as your legs.',
      howToStart:'Find a local fencing club and attend a beginner class. Clubs provide all equipment for lessons.',
      equipment:[{item:'Fencing mask',tier:'club'},{item:'Jacket and glove',tier:'club'},{item:'Blade (after lessons)',tier:'later'}],
      adaptive:{
        low_budget:'Clubs provide equipment. Your cost is club membership and lesson fees.',
        no_equipment:'Everything is provided by the club for beginners.',
        shy_solo:'Individual weapon drilling and footwork are solo-friendly.',
        social_team:'Fencing clubs are usually small enough that people notice when you come back.',
        limited_time:'A lesson runs 45–60 minutes. Private lessons are even shorter.',
        competitive:'USA Fencing runs competitions at every level including absolute beginners.',
      },
      checklist:['Find a local fencing club','Attend a beginner class (club provides equipment)','Learn the three basic commands: en garde, ready, fence','Go back at least 3 times before deciding']
    }
  },

  softball: {
    id:'softball', name:'Softball', icon:'🥎',
    fitTags:['social_team','competitive'],
    pitch:'Team sport with a softer landing: shared bats, casual dugouts, and room to learn.',
    guide:{
      whyItFits:"Softball is built for adult recreation in a way baseball often is not. Leagues can be social, competitive, or both, and many teams expect mixed experience levels.",
      howToStart:"Search your city's parks department for adult softball leagues. If you do not have a team, look for free-agent registration or true-beginner divisions.",
      equipment:[{item:'Softball glove',tier:'need'},{item:'Bat (often provided by league)',tier:'nice'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Leagues often have shared bats. A used glove: $15–25.',
        no_equipment:'Many leagues have loaner equipment. Ask when registering.',
        shy_solo:'Batting practice at a cage is a solo option to build confidence.',
        social_team:'Co-ed adult softball leagues often have a social rhythm built in: dugout chatter, shared gear, and post-game plans.',
        limited_time:'Games run 60–90 minutes. One game per week is the normal commitment.',
        competitive:'City-wide recreational tournaments run at the end of most seasons.',
      },
      checklist:['Search your city parks department for adult softball leagues','Register — many will place you on a team','Get a basic glove','Show up to your first game']
    }
  },

  gymnastics: {
    id:'gymnastics', name:'Gymnastics', icon:'🤸',
    fitTags:['high_energy','shy_solo','competitive'],
    pitch:'Strength, mobility, and body control in a padded room where falling is part of class.',
    guide:{
      whyItFits:'Gymnastics builds body control in a way few sports match. Adult beginner classes focus on basics, mobility, and safe progressions rather than throwing you onto advanced apparatus.',
      howToStart:'Find a gymnastics club that offers adult classes. Start with floor work, shapes, and safe rolls; apparatus can wait.',
      equipment:[{item:'Gymnastics shorts/leotard',tier:'need'},{item:'Gymnastics shoes or bare feet',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Gymnastics clubs have a strong community and social structure.',
        limited_time:'A class usually runs 60–90 minutes, and recovery matters because the movements are demanding.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Attend your first class','Learn a safe forward roll or basic floor shape','Come back — gymnastics rewards consistency']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, big scenery, and a learning curve that feels better with a coach beside you.',
    guide:{
      whyItFits:'Skiing can feel magical quickly, but the basics are much safer with instruction. Resorts are set up for first-timers with rentals, bunny slopes, and clear lesson progressions.',
      howToStart:'Book a beginner lesson at a ski resort rather than self-teaching. Rentals cover the technical gear; your job is warm layers and patience.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is a solid first experience. You do not need to master a run that day.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Practise stopping, turning, and using the lift safely','Ask about a return discount']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'The first day is humbling; the first linked turns feel like unlocking a new language.',
    guide:{
      whyItFits:"Snowboarding has a distinct rhythm and culture, but it asks for patience early. Expect falls, learn how to stop safely, and judge it after more than one attempt.",
      howToStart:'Book a beginner snowboard lesson and wear wrist guards. Commit to learning safe falling, heel-edge control, and stopping before chasing turns.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practise at your own pace once you have the basics from a lesson.',
        social_team:'Snowboard parks have a social, helpful culture.',
        limited_time:'A 2–3 hour lesson is plenty for day one. Fatigue makes falling worse.',
        competitive:'Halfpipe, slopestyle, and boardercross have structured pathways at most resorts.',
      },
      checklist:['Book a beginner snowboard lesson','Rent wrist guards — not optional','Get through your first 2-hour lesson','Go back a second time before deciding']
    }
  },

  surfing: {
    id:'surfing', name:'Surfing', icon:'🏄',
    fitTags:['high_energy','shy_solo'],
    pitch:'Ocean timing, balance, and patience. Even a messy whitewater ride feels memorable.',
    guide:{
      whyItFits:'Surfing is part sport, part weather reading, part humility practice. A lesson gives you safe waves, a foam board, and enough structure to enjoy the ocean without guessing.',
      howToStart:'Book a lesson at a surf school; they provide foam boards and choose safe beginner waves. Do not self-teach in open ocean.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is a full first experience. You may stand, kneel, or simply learn how waves work.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a 2-hour lesson','Catch whitewater safely — standing is a bonus','Return for a second session while the basics are fresh']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus with a satisfying thwack. Tiny adjustments show up immediately.',
    guide:{
      whyItFits:'Archery is calm without being sleepy. Stance, breath, anchor, release: each small detail changes the arrow, which makes improvement feel tangible.',
      howToStart:"Find a local archery club and ask about beginner sessions. Equipment is provided — don't buy anything yet.",
      equipment:[{item:'Recurve bow',tier:'club'},{item:'Arrows',tier:'club'},{item:'Arm guard and finger tab',tier:'club'},{item:'Own bow (after 2–3 months)',tier:'later'}],
      adaptive:{
        low_budget:"Clubs provide all equipment. Session fee: $10–20. Don't buy anything until you're committed.",
        no_equipment:'Beginner sessions provide the bow, arrows, and safety gear. Ask what to wear and arrive curious.',
        shy_solo:'Deeply individual. You share the range, but your attention stays on your own target.',
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
    pitch:'Explosive, loud, and precise. The teamwork is real, and so is the conditioning.',
    guide:{
      whyItFits:'Competitive cheer blends tumbling, jumps, stunts, dance, and performance under pressure. Entry-level programs teach roles and safety before expecting big skills.',
      howToStart:'Find a local All-Star cheer gym and ask about beginner or adult programs. No prior tumbling experience should be required for true entry-level teams.',
      equipment:[{item:'Athletic wear with full range of motion',tier:'need'},{item:'Cheer shoes (flexible, cross-training)',tier:'need'},{item:'Team uniform (provided by gym)',tier:'later'}],
      adaptive:{
        low_budget:'All-Star cheer has fees. Look for school squads or community programmes as lower-cost entry.',
        no_equipment:'Gyms provide mats and all equipment. You need shoes and athletic wear.',
        shy_solo:"Cheerleading is entirely team-based. Not ideal if you want to start alone.",
        social_team:"Cheer teams spend a lot of time together, so the social bond tends to build quickly.",
        limited_time:'Practices can run 2–3 hours, so this is better if you want a scheduled team commitment.',
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
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Full-contact roller skating with big team energy. Most leagues run beginner intake programs before contact.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Rollerblades on paths, parks, and quiet streets. Start with balance and braking before chasing speed.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'A long skateboard for cruising and carving. Less about tricks, more about flow.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'Golf with discs through parks and woods. Cheap to try, quietly addictive once throws start shaping.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Riding a horse, taught from the basics. Lesson barns provide everything for first sessions.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Hockey on horseback with mallets. Some clubs run beginner polo schools with horses provided.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'A board on a wall and three darts. Pubs, local leagues, and world championships — all of it.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Roll heavy biased balls toward a target on a manicured green. Quietly competitive, often delightful.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules. Toss metal balls toward a small jack. Public squares everywhere in summer.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Toss bean bags into a hole on an angled board. Easy to set up in a backyard or park.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Climbing short, hard problems on padded floors with no rope. The most accessible climbing.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'Walking on a flat webbed line strung between two trees. Surprisingly hard, surprisingly addictive.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing — but structured. Adult trampoline classes teach real somersaults and twists.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run — back to back. Sprint distance is the realistic first target, not the easy one.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'Running through forests with a map and compass, finding flagged checkpoints. A puzzle and a workout.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Bat, ball, wickets, and a lot of tradition. Soft-ball indoor cricket is the quickest first taste.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Fast passing, low body position, curved sticks, and a hard ball. Team shape matters immediately.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light plastic sticks and quick shifts. Easy gear, fast play, low intimidation.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'A no-contact court game built on passing, spacing, and fixed positions. Great if you like clear roles.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'A South Asian tag-and-wrestle game. One person raids while holding their breath, chanting "kabaddi".' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Stacking and unstacking cups at absurd speed. Low-cost, weirdly hypnotic, and yes, competitive.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating rounds of chess and boxing. Win by knockout or checkmate.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprinting with a long pole and using it to fling yourself over a high bar.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'Hockey on the bottom of a pool, played holding your breath. As niche as it sounds.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
