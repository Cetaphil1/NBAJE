const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a few shots are enough to feel the rhythm of the game.',
    guide:{
      whyItFits:"Basketball gives you a gentle entry and plenty of room to grow. You can shoot alone, bring a friend, or ease into pickup once the court starts feeling familiar.",
      howToStart:"Find a public court at a nearby park. Spend the first session dribbling with both hands, taking close shots, and learning where you feel comfortable on the court.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10-20, and busy courts often have shared balls around.",
        no_equipment:"Head to a park court, watch for a bit, and ask if you can shoot around or rotate in.",
        shy_solo:"Public courts are normal to use alone. Dribble and shoot by yourself — no pressure to join anything.",
        social_team:"Show up at a busy court, watch a game, and ask \"got next?\" when you feel ready — that really is pickup culture.",
        limited_time:'A 20-minute loop of layups, free throws, and dribbling gives you a useful first session.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Shoot 20 relaxed free throws','Watch a pickup game and ask how people rotate in']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:'Simple to start, endlessly deep once your feet learn what the ball is doing.',
    guide:{
      whyItFits:"Soccer works because the barrier is low but the feeling is big: movement, teamwork, and tiny skill wins every time your touch gets cleaner.",
      howToStart:"Find a park with open grass or a pitch. Start with short touches, wall passes, and gentle juggling attempts before jumping into a casual kickaround.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Pickup games usually share balls, but watching first and asking how to join is the smoother entry.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — many groups label their pace clearly.',
        limited_time:'20 minutes of touches and wall passing builds more comfort than you might expect.',
        competitive:'Many cities have recreational adult leagues with lower-pressure divisions.',
      },
      checklist:['Find a nearby pitch or park','Practise soft touches for 10 minutes','Try wall passing for 10 min','Search for a local casual kickaround']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:'Sharp, focused, and surprisingly satisfying even before you have a partner.',
    guide:{
      whyItFits:"Tennis gives you clear feedback on every swing. A few clean wall rallies can feel rewarding long before you are ready for a match.",
      howToStart:"Find a public court or practice wall. Start with gentle forehands and backhands, aiming for control and comfort before speed.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying gives you a real solo practice option. No partner needed.',
        social_team:'Many tennis clubs run beginner group clinics. USTA has local adult programmes.',
        limited_time:'20 minutes of slow wall rallying is enough for a useful first session.',
        competitive:'USTA leagues have true beginner divisions for adults.',
      },
      checklist:['Find a public tennis court or wall near you','Spend 15-20 min hitting gently for consistency','Get or borrow a basic racket','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'Quick rallies, lots of laughs, and a team vibe that does not need much gear.',
    guide:{
      whyItFits:"Volleyball feels social from the first warm-up. The skills take time, but even messy rallies give you movement, communication, and a clear way to improve.",
      howToStart:"Find an open gym night or a beach court. Focus on the pass first — keeping the ball playable matters more than hitting hard.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights often cost a few dollars, and equipment is usually shared.',
        no_equipment:'Open gym nights and beach courts usually have shared balls. Ask the organiser before buying one.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" — look for groups that mention open gym or lower divisions.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Practise gentle self-passes — 20 reps','Attend one open gym session','Search for beginner recreational leagues']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'A focused, satisfying sport where one clean hit can make the whole session.',
    guide:{
      whyItFits:'Baseball rewards calm attention. Swinging, throwing, and fielding all give you small technical puzzles inside a team sport.',
      howToStart:'Find a batting cage or a quiet field. Start with easy swings and basic throwing mechanics before worrying about power or game speed.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and wall costs nothing.',
        shy_solo:'A batting cage session lets you work alone before joining a team.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'20 minutes at a batting cage is plenty. Focus on clean contact.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage near you','Take 20-30 swings — focus on contact, not power','Practise easy throwing with a partner or wall','Look up local recreational softball leagues']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Routes, quick decisions, and team energy without the full-contact barrier.',
    guide:{
      whyItFits:"Flag football keeps the strategy, speed, and teamwork of football while making the first step far less intimidating than tackle.",
      howToStart:"Start with short throws, simple routes, and learning how downs work. Then look for a parks department league or casual flag group.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practise spiral throwing against a fence or wall alone.',
        social_team:'Flag football leagues are among the most social recreational sports. Search Meetup.',
        limited_time:'A 20-minute session of short throws and route footwork is a useful start.',
        competitive:'Flag tournaments can get seriously competitive once you want that edge.',
      },
      checklist:['Get a football or find one to borrow','Practise throwing a spiral','Watch one game and note the positions','Search for a local flag football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:'Start with a slow run-walk and let the routine build before the pace does.',
    guide:{
      whyItFits:"Running is simple, measurable, and honest without needing to be punishing. You can start with run-walk intervals and still be training.",
      howToStart:"Start with 15-20 minutes of easy run-walk intervals two or three times a week. Keep the pace slow enough that finishing feels possible.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is normal. Many runners prefer the quiet.',
        social_team:'Running clubs often have pace groups and no-drop runs. Search "running club [your city]".',
        limited_time:'A 15-minute run-walk is a legitimate first session.',
        competitive:'Local 5K races are easy to find and usually friendly to first-timers.',
      },
      checklist:['Try a 15-minute run-walk','Download a free run-tracking app if you want one','Find your nearest track or park path','Look up a local 5K for future motivation']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet, low-impact work where a few calm lengths can feel like a reset.',
    guide:{
      whyItFits:"Swimming is gentle on joints but still demanding in the best way. Technique matters more than force, so small improvements show up quickly.",
      howToStart:'Book a lane swim session. Start with easy freestyle or any stroke you know, resting as much as you need between lengths.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles are enough to start.",
        shy_solo:"Lane swimming is naturally private — you're in your own lane, focused on your own breathing.",
        social_team:'Masters Swimming programmes are adult lap groups at many levels, including newer swimmers.',
        limited_time:'20 minutes of easy lengths with generous rest is a strong first session.',
        competitive:'USMS (Masters) meets let you enter open events and chase your own time when ready.',
      },
      checklist:['Find your nearest pool with lane swim','Book a session and swim a few easy lengths','Focus on calm breathing and relaxed rest breaks','Look up adult swim groups in your area']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Footwork, focus, and bag work that feels intense without needing to spar.',
    guide:{
      whyItFits:"Boxing builds coordination, fitness, and composure in a way that feels immediate. A good beginner gym will keep you on stance, footwork, and basics before sparring.",
      howToStart:"Find a boxing gym and ask which class is meant for first-timers. Spend the first month on stance, jab, cross, and footwork. Don't spar until a coach says you're ready.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms often build community through shared rounds, pad work, and regular classes.',
        limited_time:'A 30-minute bag workout — warm-up, a few short rounds, cool-down — is enough.',
        competitive:'USA Boxing and Golden Gloves have true beginner divisions. Ask your coach after 3–6 months.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'A tough, coached sport where learning control starts before going full speed.',
    guide:{
      whyItFits:"Wrestling is intense, but it is not chaos. Good coaching teaches stance, balance, and safe contact before live rounds.",
      howToStart:"Find a wrestling club or school programme. This is one to learn with a coach, a mat, and clear safety rules.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:'A practice session usually runs 60-90 minutes. Watching or trying a beginner class is the better first step than squeezing it into 20 minutes.',
        competitive:'Ask your club coach about entry-level tournaments once your basics and conditioning are ready.',
      },
      checklist:['Find a local wrestling club or YMCA programme','Watch or attend one beginner-friendly practice','Learn basic stance from a coach','Ask about the beginner training schedule']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A calm, private way to move better without turning exercise into a performance.',
    guide:{
      whyItFits:"Yoga gives you a low-pressure way to build mobility, strength, and body awareness. You can keep it private at home or make it social in a studio.",
      howToStart:"Find a short beginner video and do it in your living room. Choose slow and clear over impressive.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes are often excellent. A mat costs $10-20, and carpet works for a first try.",
        no_equipment:'You can practise on carpet without a mat to start.',
        shy_solo:'You can keep it completely private: just you, a little floor space, and a video.',
        social_team:'Studio classes can be social without being pushy — look for beginner or gentle sessions.',
        limited_time:'A 15-20 minute session is enough to count. Start there.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:['Find a 15-20 minute beginner yoga class','Complete your first session','Practise twice this week if it feels good','Notice what feels tight or calmer afterward']
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:'Low-impact effort with a built-in reward: you actually get somewhere.',
    guide:{
      whyItFits:"Cycling is joint-friendly, scalable, and naturally motivating because every ride changes the scenery. You can keep it solo or drift into group rides later.",
      howToStart:'Borrow or find a used bike. Pick a flat, familiar route for your first ride. Focus on comfort, braking, and confidence before distance.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50–150. Check your city for bike libraries or loan programmes.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programmes before buying anything.',
        shy_solo:'Cycling alone is normal, and many riders prefer the quiet.',
        social_team:'Group rides run in most cities. Search for your local cycling club — most have beginner-paced rides.',
        limited_time:"A 20-minute loop around your neighbourhood counts. Distance doesn't matter at first.",
        competitive:'Local cycling clubs have timed rides and beginner races. Strava segments give you something to chase solo.',
      },
      checklist:['Borrow or find a used bike','Find a flat, safe 20-minute route','Complete your first ride','Join a local cycling club or find a group ride']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'Physical problem-solving where the first goal is simply finding your way up.',
    guide:{
      whyItFits:"Climbing makes effort feel playful. Indoor gyms rent gear, grade routes clearly, and give beginners a safe way to experiment without needing outdoor experience.",
      howToStart:"Visit an indoor climbing gym. Rent shoes and start on easy bouldering problems or an intro lesson, then ask staff how grades work.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms often run $15-25 plus rental. Look for first-visit deals before buying gear.',
        no_equipment:'Gyms rent everything. Just show up.',
        shy_solo:'Bouldering works well solo — no partner, no ropes, just you and the wall.',
        social_team:'Climbing gyms tend to be conversational because people trade route ideas naturally.',
        limited_time:'A 30-45 minute bouldering session with rests is enough to learn something.',
        competitive:'Climbing competitions run at indoor gyms at every level including total beginners.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent gear','Try a few easy boulders with rest breaks','Ask a staff member to explain one route']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:'A walk with better scenery, a little planning, and room for your head to clear.',
    guide:{
      whyItFits:"Hiking is forgiving, scalable, and good for people who want movement without gym energy. The reward is built into the route.",
      howToStart:'Find a local trail on AllTrails or a parks site. Pick something rated "easy," under a few miles, and well-reviewed.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'Comfortable shoes and water are enough for an easy first trail.',
        shy_solo:'Solo hiking is common, but choose busy, well-marked trails and tell someone your plan.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:'A 45-90 minute local loop absolutely counts. You do not need a full day.',
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download AllTrails or check your parks website','Find an easy, well-reviewed trail near you','Complete a short local hike','Tell someone where you are going (safety basics)']
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Music, movement, and the permission to be awkward before it feels smooth.',
    guide:{
      whyItFits:'Dance can be expressive, athletic, social, or private depending on the style. It is one of the few sports where personality is part of the practice.',
      howToStart:'Pick the style that makes you curious, then find a true beginner class or intro night. The first class is allowed to feel clumsy.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is plenty. Most studios do drop-ins.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or free intro session','Attend your first class','Go back a second time before judging yourself']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Clear coaching, steady progression, and a room full of people learning details together.',
    guide:{
      whyItFits:'Martial arts give beginners structure: warm-ups, drills, etiquette, progression, and coaches who expect you to be new. The style matters less than finding a good school.',
      howToStart:'Pick one style that interests you and find a local club with trial classes. Ask how they handle first-timers before you show up.',
      equipment:[{item:'Gi / uniform (club may loan one)',tier:'later'},{item:'Comfortable athletic wear',tier:'need'},{item:'Mouthguard',tier:'later'}],
      adaptive:{
        low_budget:'Many clubs have sliding-scale dues or reduced first-month rates. Ask.',
        no_equipment:'Most clubs loan a gi to new members for the first few sessions.',
        shy_solo:"Drilling technique alone or in pairs is the core of most martial arts. You won't be thrown into sparring immediately.",
        social_team:"Martial arts gyms and dojos often build community quickly because everyone drills together.",
        limited_time:'A standard class usually runs 60 minutes. Start with one or two classes per week.',
        competitive:'Most styles have competition pathways. Ask your coach when competing would actually make sense.',
      },
      checklist:['Pick a martial art style (BJJ, karate, judo, muay thai)','Find a local club and book a trial class','Attend your first class with no expectations','Go back at least twice before deciding']
    }
  },

  skateboarding: {
    id:'skateboarding', name:'Skateboarding', icon:'🛹',
    fitTags:['shy_solo','high_energy'],
    pitch:'Creative, self-directed, and built on tiny wins that feel bigger than they look.',
    guide:{
      whyItFits:"Skateboarding is freedom with consequences, which is why the basics matter. You choose the pace, the spot, and the trick, then earn progress one attempt at a time.",
      howToStart:"Get a complete board (not a toy). Find a smooth surface. Learn to push, turn, and stop before thinking about tricks.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'20-30 minutes on pushing, stopping, or one small skill is a useful session.',
        competitive:'Local skate parks sometimes host low-key jams and amateur events.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to push and stop safely','Visit a local skate park and watch how people use the space']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:'Friendly rallies, quick games, and an open-play culture that lowers the awkwardness.',
    guide:{
      whyItFits:"Pickleball gives beginners quick rallies and a built-in social format. Open play means you can arrive alone and rotate into games without forming a team.",
      howToStart:'Find an open play session at a local court. Borrow a paddle at first, learn the serve and kitchen rule, and tell people you are new.',
      equipment:[{item:'Pickleball paddle',tier:'need'},{item:'Pickleballs',tier:'need'},{item:'Court shoes',tier:'nice'}],
      adaptive:{
        low_budget:'Paddles cost $20–40 for a decent beginner option. Many parks provide loaner paddles at open play.',
        no_equipment:'Ask at open play sessions — loaner paddles are very common.',
        shy_solo:'Open play is social by design, but you can practice solo against a wall.',
        social_team:'Open play is naturally social. Rotational games mean you meet people without forcing conversation.',
        limited_time:'A single open play session has games of 5–7 minutes each. Drop in for 30 minutes.',
        competitive:'USA Pickleball runs tournaments for every skill level including beginners.',
      },
      checklist:['Find an open play session near you','Borrow a paddle and join a beginner-friendly game','Learn the basic serve and kitchen rule','Come back a second time — the first game is allowed to be confusing']
    }
  },

  badminton: {
    id:'badminton', name:'Badminton', icon:'🏸',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Light gear, fast reactions, and rallies that get intense before you realise it.',
    guide:{
      whyItFits:'Badminton is easy to try and surprisingly athletic once rallies get going. Drop-in sessions make it simple to learn around other people.',
      howToStart:'Find a community hall or gym that runs badminton drop-in nights. Bring a racket or ask ahead about borrowing one.',
      equipment:[{item:'Badminton racket ($15–25)',tier:'need'},{item:'Non-marking court shoes',tier:'need'},{item:'Shuttlecocks',tier:'need'}],
      adaptive:{
        low_budget:'A racket costs $15–25. Many drop-in sessions provide shuttles for free.',
        no_equipment:'Community hall sessions usually have spare rackets. Ask ahead.',
        shy_solo:'Rally alone against a wall to build basic technique.',
        social_team:'Badminton drop-in sessions are very social — you rotate opponents constantly.',
        limited_time:'A short match or a few rallies can fit into 15-20 minutes.',
        competitive:'Badminton England and USAB both run beginner tournament pathways.',
      },
      checklist:['Find a local badminton drop-in session','Get a basic racket or borrow one','Attend your first session','Learn the serve and basic court lines']
    }
  },

  ultimate_frisbee: {
    id:'ultimate_frisbee', name:'Ultimate Frisbee', icon:'🥏',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:'Running, throwing, and a famously welcoming culture built around fair play.',
    guide:{
      whyItFits:'Ultimate blends the running of soccer, the cutting of basketball, and a self-refereed culture that makes sportsmanship part of the game.',
      howToStart:"Find a local ultimate club or pickup game. Many clubs run beginner sessions, and a disc is cheap if you want to practice throws first.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Just show up.',
        shy_solo:'It is hard to play alone, but throwing at a target or fence builds confidence before pickup.',
        social_team:'The "spirit of the game" culture gives new players a softer landing than many team sports.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get or borrow an ultimate disc','Find a local club or pickup game','Attend your first beginner-friendly session','Learn the basic backhand and forehand grips']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythmic, low-impact effort that feels best when the whole crew clicks.',
    guide:{
      whyItFits:"Rowing is technical, full-body, and easier to approach than it looks because clubs often teach adults from scratch. Indoor ergs let you test the rhythm first.",
      howToStart:"Find a local rowing club and ask about learn-to-row programmes. If that feels like a lot, try an easy indoor row at a gym first.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide boats and oars. Ask what clothing to wear before your first session.',
        shy_solo:'Indoor rowing (erg) is solo-friendly, and many gyms have machines.',
        social_team:'Rowing clubs are social because crew boats require shared timing and trust.',
        limited_time:'A 10-20 minute easy erg session is a good first taste.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a local rowing club or gym with ergs','Try a short indoor rowing session','Look up learn-to-row programmes near you','Attend a beginner club session']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet precision, tiny adjustments, and the strange thrill of one clean strike.',
    guide:{
      whyItFits:"Golf rewards patience more than raw athleticism. A driving range gives you space to learn privately, one swing at a time.",
      howToStart:"Go to a driving range and rent a club if needed. Focus on relaxed contact — distance does not matter on day one.",
      equipment:[{item:'Golf clubs (rent to start)',tier:'rent'},{item:'Golf balls',tier:'need'},{item:'Golf shoes',tier:'later'}],
      adaptive:{
        low_budget:'Driving ranges charge $10–20 for a bucket of balls. Club rental is usually $5–10 extra. Many municipal courses are under $25.',
        no_equipment:"Driving ranges and courses rent clubs. You don't need to own anything to start.",
        shy_solo:"Driving ranges and solo rounds are the norm — no one expects you to know anyone.",
        social_team:'Golf leagues and four-ball formats are social. Many clubs run mixer events.',
        limited_time:"A driving range session takes 45–60 minutes. You don't need a full 18-hole round to start.",
        competitive:'Every golf club has a handicap system that makes fair competition possible at any level.',
      },
      checklist:['Find a nearby driving range','Buy a small bucket and rent clubs if needed','Focus only on making clean contact','Look up a beginner lesson or short municipal course']
    }
  },

  gym_training: {
    id:'gym_training', name:'Gym Training', icon:'🏋️',
    fitTags:['shy_solo','high_energy'],
    pitch:'A flexible training base where progress can be as simple as one extra rep.',
    guide:{
      whyItFits:"Gym training works when you want control and measurable progress. You can start quietly, repeat the same basics, and see change week by week.",
      howToStart:'Try a gym day pass. On day one, do a simple full-body circuit with light weights: squat, press, row, hinge. Leave feeling like you could do more.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 25-30 minute full-body session is enough when it is repeatable.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Find a gym with a day pass or free trial','Complete a short full-body workout with light weights','Log what you did so you can repeat it','Schedule the next visit before soreness talks you out of it']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'Bodyweight training you can scale down, scale up, and take almost anywhere.',
    guide:{
      whyItFits:"Calisthenics gives you a real strength path without a gym. Every move can be scaled, so beginners can build confidence without pretending to be advanced.",
      howToStart:'Start with an easy bodyweight circuit: incline push-ups, squats, a short plank, and rows if you have a bar or sturdy table. Do it two or three times this week.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Free to start. Parks with pull-up bars exist in many cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 15-20 minute bodyweight circuit is enough if you can repeat it.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete an easy circuit: incline push-ups, squats, and a short plank','Find a park with pull-up bars near you','Repeat the routine 2-3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny table, fast hands, and enough spin to keep every rally interesting.',
    guide:{
      whyItFits:'Table tennis is easy to approach and hard to outgrow. Speed, spin, and placement turn a casual rally into a real tactical game.',
      howToStart:'Find a table at a community centre, pub, or park. Borrow a paddle and rally slowly — keeping the ball on the table is the first win.',
      equipment:[{item:'Table tennis paddle ($15–25)',tier:'need'},{item:'Table tennis balls (pack of 6)',tier:'need'}],
      adaptive:{
        low_budget:'A decent paddle costs $15–20. Many community centres have free tables.',
        no_equipment:'Community centres and pubs often have paddles and balls available.',
        shy_solo:'Solo practice against a wall (ping pong rebound board) is effective and cheap.',
        social_team:'Round-the-table (group game) makes table tennis very social.',
        limited_time:'A few short games or 15 minutes of rallies fits easily into a break.',
        competitive:'USATT and national associations have beginner tournament pathways.',
      },
      checklist:['Find a table tennis table near you (community centre, park)','Borrow or get a basic paddle','Rally with someone for 20 minutes','Learn the basic serve rule']
    }
  },

  lacrosse: {
    id:'lacrosse', name:'Lacrosse', icon:'🥍',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Fast breaks, stick skills, and a team culture that rewards hustle early.',
    guide:{
      whyItFits:'Lacrosse combines running, passing, and tactical movement. It can look intimidating, but wall ball gives beginners a private way to build stick confidence.',
      howToStart:'Find a local lacrosse club or recreational league and ask about beginner programmes or loaner gear. Practise wall ball before your first full session.',
      equipment:[{item:'Lacrosse stick',tier:'need'},{item:'Helmet and pads (full lacrosse)',tier:'need'},{item:'Cleats',tier:'need'}],
      adaptive:{
        low_budget:'Used equipment is widely available. Box lacrosse needs less gear than field.',
        no_equipment:'Some club programmes loan equipment to beginners for the first season.',
        shy_solo:'Wall ball (throwing against a wall) is a legitimate solo lacrosse practice.',
        social_team:'Lacrosse clubs usually have a tight team culture once you are practicing regularly.',
        limited_time:'Wall ball for 20 minutes is a useful skill session.',
        competitive:'USA Lacrosse runs leagues and tournaments at every level.',
      },
      checklist:['Find a local lacrosse club or league','Get basic equipment or ask about loans','Practise wall ball for 20 minutes','Attend a beginner club practice']
    }
  },

  rugby: {
    id:'rugby', name:'Rugby', icon:'🏉',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Physical, loyal, and more welcoming to newcomers than its reputation suggests.',
    guide:{
      whyItFits:"Rugby has contact, but it also has a strong teaching culture and a serious sense of belonging. Tag rugby is a smart non-contact entry point.",
      howToStart:'Find a local rugby club and ask about beginner nights or tag rugby. Watch a session first if you want to understand the rhythm.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Many clubs have spare gear for beginners. Ask before buying boots or pads.',
        shy_solo:'Tag rugby (non-contact) removes the intimidation of full contact.',
        social_team:'Rugby clubs tend to be social well beyond practice, especially around post-match traditions.',
        limited_time:'Training sessions often run 90 minutes. Tag rugby or a watched practice is an easier first step.',
        competitive:'From club level to national competitions — rugby has pathways at every level.',
      },
      checklist:['Find a local rugby club','Ask about tag rugby or beginner programmes','Watch or attend a beginner session','Get a mouthguard before any contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Strategy at speed, with club gear and coaching from the first lesson.',
    guide:{
      whyItFits:'Fencing feels dramatic, but the beginner path is very practical: footwork, distance, timing, and borrowed gear while you learn.',
      howToStart:'Find a local fencing club and attend a beginner class. Let the club provide equipment until you know you want to continue.',
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
    pitch:'A relaxed team sport with enough competition to make weeknights fun.',
    guide:{
      whyItFits:"Softball gives adults a built-in team, a weekly rhythm, and a game that leaves room for beginners to learn as they play.",
      howToStart:"Search your city's parks department for adult softball leagues. Many do not require a full team and can place free agents.",
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
    pitch:'Body control, strength, and the rare chance to learn basics as an adult.',
    guide:{
      whyItFits:'Gymnastics builds body control that carries into almost everything else. Adult beginner classes are designed around learning safely, not showing off.',
      howToStart:'Find a gymnastics club that offers adult classes. Start with floor work, mobility, and basic rolls before worrying about apparatus.',
      equipment:[{item:'Gymnastics shorts/leotard',tier:'need'},{item:'Gymnastics shoes or bare feet',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Gymnastics clubs can become social through classes, spotting, and shared progress.',
        limited_time:'A class runs 60–90 minutes.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Attend your first class','Learn a basic forward roll or mobility drill','Come back — gymnastics rewards consistency']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, controlled speed, and a learning curve that feels better with instruction.',
    guide:{
      whyItFits:'Skiing can be exhilarating, but the real beginner unlock is structure. Lessons make stopping, turning, and lift etiquette far less mysterious.',
      howToStart:'Book a beginner lesson at a ski resort instead of self-teaching. Rentals cover the gear, and a smaller local hill is often the friendliest start.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is enough for a first experience.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Practise stopping and turning on beginner terrain','Ask about a return discount or second lesson']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'A humbling first day, a distinct culture, and a flow state people chase hard.',
    guide:{
      whyItFits:"Snowboarding has creative freedom and a flow state that feels different from skiing. Day one usually involves falling; day two often feels less chaotic.",
      howToStart:'Book a beginner snowboard lesson and rent wrist guards. Give yourself at least two tries before deciding whether it is for you.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practise at your own pace once you have the basics from a lesson.',
        social_team:'Snowboard parks have a social, helpful culture.',
        limited_time:'A 2-3 hour lesson is enough for a first session.',
        competitive:'Halfpipe, slopestyle, and boardercross have structured pathways at most resorts.',
      },
      checklist:['Book a beginner snowboard lesson','Rent wrist guards — not optional','Get through your first lesson without judging yourself','Go back a second time before deciding']
    }
  },

  surfing: {
    id:'surfing', name:'Surfing', icon:'🏄',
    fitTags:['high_energy','shy_solo'],
    pitch:'Ocean timing, balance, and tiny rides that feel wildly bigger than they are.',
    guide:{
      whyItFits:'Surfing combines physical effort, patience, and reading the ocean. A surf school makes the first attempt safer and more fun than guessing alone.',
      howToStart:'Book a lesson at a surf school. They provide foam boards, choose safer beginner waves, and teach etiquette before you paddle out alone.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is enough for a first experience.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a lesson with gear included','Ride whitewater however you can — knees count','Return for a second session if the ocean hooked you']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus, clean feedback, and the satisfaction of one tighter grouping.',
    guide:{
      whyItFits:'Archery is calm but not passive. Every shot gives feedback on breath, posture, and patience, and clubs usually provide gear while you learn.',
      howToStart:"Find a local archery club and ask about beginner sessions. Use club equipment until a coach tells you what is worth buying.",
      equipment:[{item:'Recurve bow',tier:'club'},{item:'Arrows',tier:'club'},{item:'Arm guard and finger tab',tier:'club'},{item:'Own bow (after 2–3 months)',tier:'later'}],
      adaptive:{
        low_budget:"Clubs provide all equipment. Session fee: $10–20. Don't buy anything until you're committed.",
        no_equipment:'Everything is provided. Just show up.',
        shy_solo:'Deeply individual. You focus on your own targets and progress.',
        social_team:'Archery clubs are quiet but social; club nights make it easy to see the same people.',
        limited_time:'A session runs 60–90 minutes. Indoor ranges are weather-independent.',
        competitive:'USA Archery has structured competition pathways from beginner to Olympic level.',
      },
      checklist:['Find a local archery club','Book a beginner intro session','Learn the basic stance and anchor point','Complete your first 10-arrow round']
    }
  },

  cheer: {
    id:'cheer', name:'Cheerleading', icon:'📣',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'High-energy teamwork where timing, trust, and athleticism all matter.',
    guide:{
      whyItFits:'Competitive cheer blends tumbling, stunting, jumping, dance, and serious teamwork. Entry-level teams exist, but the schedule and trust piece are real.',
      howToStart:'Find a local All-Star cheer gym and ask about beginner programmes, trial days, or open houses before committing to a team.',
      equipment:[{item:'Athletic wear with full range of motion',tier:'need'},{item:'Cheer shoes (flexible, cross-training)',tier:'need'},{item:'Team uniform (provided by gym)',tier:'later'}],
      adaptive:{
        low_budget:'All-Star cheer has fees. Look for school squads or community programmes as lower-cost entry.',
        no_equipment:'Gyms provide mats and all equipment. You need shoes and athletic wear.',
        shy_solo:"Cheerleading is entirely team-based. Not ideal if you want to start alone.",
        social_team:"Team culture is the centre of cheer. You will get to know teammates quickly.",
        limited_time:'Practices can run 2-3 hours. This sport requires a real time commitment.',
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
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Turning stairs, rails, and ledges into movement puzzles — best started with coached basics, not rooftop leaps.' },
  skydiving:        { id:'skydiving',        name:'Skydiving',                  icon:'🪂',   fitTags:['high_energy'],                                   pitch:'A tandem jump is less "learn a sport today" and more "meet your nervous system at 13,000 feet."' },
  paragliding:      { id:'paragliding',      name:'Paragliding',                icon:'🪂',   fitTags:['high_energy'],                                   pitch:'Floating off a hill under a fabric wing. A tandem flight gives you the view before you commit to lessons.' },
  hang_gliding:     { id:'hang_gliding',     name:'Hang Gliding',               icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Flying belly-down beneath a rigid wing, usually starting on small training hills with a lot of instruction.' },
  ballooning:       { id:'ballooning',       name:'Hot Air Ballooning',         icon:'🎈',   fitTags:['low_impact','social_team'],                      pitch:'Slow flight, early mornings, and the surreal quiet of drifting wherever the wind allows.' },
  kayaking:         { id:'kayaking',         name:'Kayaking',                   icon:'🛶',   fitTags:['shy_solo','low_impact'],                         pitch:'A small boat, a paddle, and calm water first. Save rapids and sea crossings for proper instruction.' },
  canoeing:         { id:'canoeing',         name:'Canoeing',                   icon:'🛶',   fitTags:['social_team','low_impact','low_budget'],         pitch:'An open boat for slow rivers, lake days, and learning how two paddlers find the same rhythm.' },
  sup:              { id:'sup',              name:'Stand-up Paddleboarding',    icon:'🏄‍♀️', fitTags:['shy_solo','low_impact'],                         pitch:'Standing on a wide board and paddling calm water — peaceful until your core reminds you it is working.' },
  wakeboarding:     { id:'wakeboarding',     name:'Wakeboarding',               icon:'🌊',   fitTags:['high_energy'],                                   pitch:'Board riding behind a boat, with plenty of splashy failed starts before the first clean pull-up.' },
  kitesurfing:      { id:'kitesurfing',      name:'Kitesurfing',                icon:'🪁',   fitTags:['high_energy'],                                   pitch:'Wind, water, and a huge controllable kite. The payoff is big, but lessons are non-negotiable.' },
  windsurfing:      { id:'windsurfing',      name:'Windsurfing',                icon:'⛵',   fitTags:['high_energy','shy_solo'],                        pitch:'A board, a sail, and a lot of balance. Old-school in the best way, especially once the wind clicks.' },
  scuba:            { id:'scuba',            name:'Scuba Diving',               icon:'🤿',   fitTags:['low_impact'],                                    pitch:'Breathing underwater, moving slowly, and learning safety rules before reefs and wrecks become the reward.' },
  freediving:       { id:'freediving',       name:'Freediving',                 icon:'🌊',   fitTags:['shy_solo','low_impact'],                         pitch:'A breath-hold sport where calm matters more than force. Take a course before chasing depth.' },
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Swimming, treading, wrestling for position, and still trying to pass — pool cardio with teeth.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'A long boat, a drumbeat, and twenty paddlers learning that timing beats individual strength.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Gliding across snow under your own power — more rhythm than downhill rush, more workout than winter walk.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Rent skates, hold the rail if you need it, and let the first smooth glide do the convincing.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Edges, spins, posture, and music on ice. Adult learn-to-skate classes make the entry less intimidating.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Granite stones, brooms, ice, and more tactics than the calm pace suggests.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Skating, stickhandling, and team speed. Adult beginner leagues exist, but budget for gear and lessons.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Winter hiking with giant footwear, best when snow would normally turn a trail into hard work.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Throws, grips, and learning to fall safely before anything gets fast.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling that turns leverage into a language. Expect close contact and a lot of problem-solving.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Strikes, forms, etiquette, and a clear belt-by-belt path if structure motivates you.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Kicking-focused martial arts with flexibility, speed, and progression you can see.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Pads, clinch work, knees, shins, and a conditioning culture that gets addictive fast.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punches and kicks on bags or pads, with many gyms offering no-contact classes while you learn.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Self-defense training that values practical reactions over polished-looking technique.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Brazilian martial art played like a conversation: music, rhythm, kicks, and movement in a circle.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:"Calm, flowing martial arts built around redirecting force instead of meeting it head-on." },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Striking plus grappling, ideally learned through fundamentals classes long before hard sparring.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Japanese sword fencing with bamboo swords, armour, ritual, footwork, and a lot of noise.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'A small, tough bike for racing lines, pump tracks, and tricks once balance feels automatic.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Trail riding where braking, line choice, and confidence matter more than charging hard at first.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Full-contact team skating with a DIY culture and beginner programs that teach skills from zero.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Smooth pavement, steady strides, and a low-impact glide that gets better once stopping feels safe.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'A longer board for cruising, carving, and finding flow without needing skate-park tricks.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'A walk in the park with throws, trees, and just enough scorekeeping to stay interesting.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Learning balance, cues, and trust with an animal that has opinions of its own.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Mallets, horses, and speed. Beginner polo schools make it possible, but it is still a serious commitment.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'Three darts, one board, and a pub-game surface hiding a precise, nerve-testing sport.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Quiet greens, biased bowls, and gentle-looking strategy that can get wonderfully competitive.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules with metal balls, a tiny jack, and a social pace made for summer evenings.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Bean bags, boards, and backyard pressure — casual enough to start, precise enough to obsess over.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Short climbing puzzles over padded floors, with no ropes and plenty of rest between attempts.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'A flat line between two trees that turns standing still into a full concentration exercise.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing with structure: air awareness, controlled landings, and coached progressions before flips.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run in one event. Sprint distance is the realistic first target, not an iron-distance fantasy.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'A map, a compass, and checkpoints hidden in the landscape — part puzzle, part muddy workout.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Batting, bowling, fielding, and a lot of rules. Soft-ball indoor cricket is a friendlier first taste.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Low sticks, fast passing, and nonstop movement on turf or grass.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light sticks, a plastic ball, and quick shifts that keep beginners involved.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'A no-contact basketball cousin with fixed positions, quick passing, and plenty of local-league energy.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'A tag-and-grapple game where one raider crosses the line, holds their breath, and tries to escape.' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Cup patterns at speed: cheap to start, weirdly satisfying, and far more official than it sounds.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating chess and boxing rounds, where panic can lose on the board or in the ring.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprinting, planting a pole, and learning to fly safely with serious coaching and equipment.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'Hockey along the bottom of a pool while holding your breath. Niche, tactical, and very real.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
