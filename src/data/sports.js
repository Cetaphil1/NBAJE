const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little nerve — pickup basketball can turn a solo shootaround into a game fast.',
    guide:{
      whyItFits:"Basketball gives you options: shoot alone, bring one friend, or work up to a pickup run. Progress is easy to feel because a cleaner dribble or one made jumper changes the whole session.",
      howToStart:"Find a public court at a nearby park. Spend your first visit dribbling, taking layups, and shooting close to the hoop. When you feel ready, watch a pickup game and ask how they choose next teams.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10-20, and busy courts often have a shared ball in play.",
        no_equipment:"Head to a park court and watch the rhythm first. If people are rotating in, ask how to get next.",
        shy_solo:"Public courts are completely normal to use alone. Dribble and shoot by yourself — no pressure to join anything.",
        social_team:"Watch one game first, then ask \"got next?\" when the vibe feels friendly. That is the normal pickup entry.",
        limited_time:'A solo shooting session — free throws, layups, dribbling — can be useful in 20 minutes.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise dribbling with both hands for 10 min','Attempt 20 close shots or free throws','Watch a pickup game and ask how to join next time']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Simple gear, endless versions — a park kickaround can be casual exercise or the start of a real team habit.",
    guide:{
      whyItFits:"Soccer is easy to start because the rules are familiar and the gear list is tiny. It also scales well: pass against a wall alone, join a casual kickaround, or work toward a rec league.",
      howToStart:"Find a park with a pitch or a wall. Start with gentle touches, short passes, and trying to keep the ball close. Once that feels less chaotic, look for a casual pickup group.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Pickup games usually share balls, but message or watch first if you are nervous about jumping in.',
        shy_solo:'Juggling and wall passes alone in any park is a real 20-minute training session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" — look for pickup, co-ed, or beginner.',
        limited_time:'20 minutes of juggling and wall passing builds more skill than most expect.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch or park','Practise juggling — aim for 10 in a row','Try wall passing for 10 min','Search for a local pickup game']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"Quietly competitive and surprisingly meditative — the wall is a patient first opponent.",
    guide:{
      whyItFits:"Tennis rewards rhythm as much as power. You can build confidence alone against a wall, then add a partner once you can keep a few balls in play.",
      howToStart:"Find a public court with a practice wall if possible. Start close, hit softly, and aim for control over pace. A beginner clinic is worth it once you know you want to continue.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying is a complete solo practice. 30 minutes, no partner needed.',
        social_team:'Many tennis clubs run beginner group clinics. USTA has local adult programmes.',
        limited_time:'30 minutes of wall rallying is a full session.',
        competitive:'USTA and local ladders include adult entry levels once you can rally comfortably.',
      },
      checklist:['Find a public tennis court near you','Spend 20 min hitting a wall — focus on consistency','Get or borrow a basic racket','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'Quick rallies, loud saves, and a team vibe that forms faster than most sports.',
    guide:{
      whyItFits:"Volleyball is social without requiring much small talk: the ball gives everyone a job. Beach and open-gym sessions make it possible to learn the basics before committing to a league.",
      howToStart:"Find an open gym night, beginner clinic, or beach court. Focus on passing first — a controlled bump helps every rally feel less frantic.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gym nights and beach courts usually have shared balls. Ask the organizer before buying one.',
        shy_solo:'Wall setting drills give you a solo practice option to build touch.',
        social_team:'Search Meetup for "beginner volleyball [your city]" or ask local gyms about open play nights.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Practise self-bumping — 20 reps','Attend one open gym session','Search for beginner recreational leagues']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'A slower game with tiny explosions — one clean swing can make the whole session worth it.',
    guide:{
      whyItFits:'Baseball rewards patience, timing, and attention to detail. It is a team sport, but a beginner can build confidence through solo reps at a cage or with simple throwing practice.',
      howToStart:'Find a batting cage and choose the slowest speed available. Focus on making contact, not driving the ball. Throwing a tennis ball against a wall can help build basic glove reflexes.',
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
    pitch:'Football strategy without the pads — routes, roles, and team energy with a lower barrier.',
    guide:{
      whyItFits:"Flag football keeps the play-calling, spacing, and teamwork of football while removing most of the equipment and contact. It is a good entry if you like structure but want a safer first step.",
      howToStart:"Start by practising a comfortable throw and learning a few basic routes. Look for a beginner or recreational flag league through parks departments, gyms, or Meetup.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practise spiral throwing against a fence or wall alone.',
        social_team:'Flag football leagues are among the most social recreational sports. Search Meetup.',
        limited_time:'A 20-minute throwing and route-running solo session is a complete first practice.',
        competitive:'Flag tournaments and leagues can get serious once you know positions and basic plays.',
      },
      checklist:['Get a football or find one to borrow','Practise throwing a spiral','Watch one game and note the positions','Search for a local flag football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:"No roster, no booking, no ceremony — just a route you can make a little more yours each week.",
    guide:{
      whyItFits:"Running is simple, but not easy. That is the appeal: you can start with run-walk intervals, feel progress quickly, and keep the whole sport on your own schedule.",
      howToStart:"Start with 20 minutes of run-walk intervals: jog 1 minute, walk 2 minutes, repeat. Keep the pace gentle enough that you could talk.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is completely normal. Most runners prefer it.',
        social_team:'Many running clubs have no-drop or beginner-paced nights. Search "running club [your city]".',
        limited_time:'A 20-minute run-walk session is a legitimate start. Consistency matters more than pace.',
        competitive:'Local 5K races are a realistic first target when you want a date on the calendar.',
      },
      checklist:['Complete a 20-minute run-walk session','Download a free run-tracking app if you want one','Find your nearest track or park path','Look up a local 5K as a possible future target']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Low-impact, high-effort, and private in the best way — the lane gives you room to learn.',
    guide:{
      whyItFits:"Swimming can feel awkward at first, then suddenly clicks. It is joint-friendly, deeply measurable, and lets you work hard without the noise of a gym floor.",
      howToStart:'Book a lane swim session. Start with easy lengths and long rests. Focus on staying relaxed in the water and exhaling underwater before worrying about speed.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles are enough to start.",
        shy_solo:"Lane swimming gives you your own space. You can focus on breathing, rest, and your next length.",
        social_team:'Masters Swimming programmes are adult lap groups at many levels; ask whether they have lanes for newer swimmers.',
        limited_time:"20 minutes of easy lengths and generous rest is enough for a first swim.",
        competitive:'USMS (Masters) meets offer open events once you can swim a race distance safely.',
      },
      checklist:['Find your nearest pool with lane swim','Book a session and try 4 easy lengths with plenty of rest','Focus on staying relaxed and exhaling underwater','Look up adult swim lessons or Masters Swimming in your area']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Sharp, sweaty, and confidence-building — you can train hard long before sparring enters the picture.',
    guide:{
      whyItFits:"Boxing gives beginners a clear toolkit: stance, guard, footwork, jab, cross. The intensity is real, but a good gym keeps new people on basics and bag work first.",
      howToStart:"Find a boxing gym and ask specifically for a beginner or fundamentals class. Spend the first month on stance, jab, cross, and footwork. Do not spar until a coach says you are ready.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms have a strong training community. Training partners come quickly.',
        limited_time:'A 30-minute bag workout — warm-up, a few short rounds, cool-down — is plenty at first.',
        competitive:'USA Boxing and local shows have novice pathways. Ask your coach when fundamentals are ready.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Hard, technical, humbling — wrestling teaches effort in a way you feel immediately.',
    guide:{
      whyItFits:"Wrestling is intense, but it is not just brute force. Beginners spend a lot of time on stance, balance, safe movement, and learning how to be uncomfortable without panicking.",
      howToStart:"Find a wrestling club, school programme, or combat sports gym with coached wrestling. You need a mat and supervision; this is not a safe self-teach sport.",
      equipment:[{item:'Fitted athletic shirt and shorts',tier:'need'},{item:'Wrestling shoes',tier:'later'},{item:'Headgear',tier:'club'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Many clubs provide mats and headgear, and some have spare shoes. Ask before buying anything.',
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
    pitch:'A quiet reset you can do almost anywhere — strength, mobility, and breath without an audience.',
    guide:{
      whyItFits:"Yoga is useful because it meets you where you are. Some days it is mobility, some days strength, some days just breathing for twenty minutes and feeling less wound up.",
      howToStart:"Find an absolute-beginner YouTube class and do it in your living room. Keep the session short, skip shapes that hurt, and let comfort matter more than looking flexible.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes can be excellent. A mat costs $10-20, and carpet is fine for the first try.",
        no_equipment:'You can practise on carpet without a mat to start.',
        shy_solo:'You can do yoga privately at home with the door closed and no one grading the shapes.',
        social_team:'Studio classes can be social; look for "intro," "foundations," or "gentle" on the schedule.',
        limited_time:'A 20-minute session is a complete practice. Start there.',
        competitive:"Yoga is not competitive. If you want progression, track your flexibility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (20 min)",'Try one short session','Practise 2-3 times this week if it feels good',"Notice what feels tight — that's your starting point"]
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:"Fresh air with momentum — ride alone for headspace or find a group when you want company.",
    guide:{
      whyItFits:"Cycling is kind to your joints but still gives you a real engine. It also changes how your neighborhood feels: errands, parks, and quiet roads become part of training.",
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
      checklist:['Borrow or find a used bike','Find a flat, safe 20-minute route','Take your first easy ride','Join a local cycling club or find a group ride']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'A puzzle you solve with your body — indoor gyms make the first climb less intimidating.',
    guide:{
      whyItFits:"Climbing is physical problem-solving. You do not need to be strong to start; you need curiosity, patience, and a willingness to fail a few times on the same wall.",
      howToStart:"Visit an indoor climbing gym and tell staff it is your first time. Rent shoes. Start with easy boulders, take long rests, and ask someone to explain route grades.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent everything. Just show up.',
        shy_solo:'Bouldering is completely solo — no partner needed, no ropes, just you and the wall.',
        social_team:'Climbing gyms tend to be chatty around routes because people naturally trade beta and encouragement.',
        limited_time:'A 45-minute bouldering session is plenty; your fingers may be done before your motivation is.',
        competitive:'Indoor gyms often run low-pressure competitions with beginner categories.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent gear','Try bouldering for 45 minutes','Ask a staff member to show you one route']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"A low-pressure way to move, think, and come back with a little dirt on your shoes.",
    guide:{
      whyItFits:"Hiking is honest exercise without the performance layer. Pick the right trail and it can be gentle, social, solitary, scenic, or quietly challenging.",
      howToStart:'Find a local trail on AllTrails or a parks website. Pick something rated "easy" and under 3 miles for your first outing. Bring water and turn around before you are exhausted.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'Comfortable shoes and water are enough for an easy local trail.',
        shy_solo:'Solo hiking is normal, but start with popular, well-marked trails and tell someone where you are going.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 45- to 90-minute loop is a real hike. You do not need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Download AllTrails or check your parks website','Find an easy trail under 3 miles','Bring water and complete the route at an easy pace',"Tell someone where you're going (safety basics)"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Movement with a soundtrack — awkward at first, then suddenly a lot less self-conscious.',
    guide:{
      whyItFits:'Dance turns exercise into expression. Some styles are social, some are solo, and most beginner classes are built around people who feel slightly nervous walking in.',
      howToStart:'Pick one style that sounds fun, not impressive. Look for a beginner or absolute beginner class, stand where you can see the instructor, and expect the first class to feel clumsy.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Contemporary and hip-hop styles are practice-alone-friendly.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is enough for the day. Most studios do drop-ins.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or free intro session','Attend your first class','Go back a second time — the first is always awkward']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'A structured place to get stronger, calmer, and a little braver one class at a time.',
    guide:{
      whyItFits:'Martial arts give you structure when starting feels vague. Belts, fundamentals classes, and repeated drills make progress visible without needing to be naturally athletic.',
      howToStart:'Pick one style based on what you actually want: grappling, striking, self-defense, tradition, or fitness. Book a trial class and ask what beginners do in their first month.',
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
    pitch:'Creative, stubborn, and completely yours — progress comes in tiny, satisfying clicks.',
    guide:{
      whyItFits:"Skateboarding gives you full control over the pace. It is repetitive, creative, and sometimes frustrating, but even learning to push smoothly feels like unlocking a new mode of moving.",
      howToStart:"Get a complete board from a skate shop or reputable brand, not a toy board. Find a smooth, quiet surface. Learn to stand, push, turn, and stop before trying tricks.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'30 minutes of focused practice on pushing, stopping, or one tiny trick is enough.',
        competitive:'Local skate jams and beginner divisions exist once you have a few basics under you.',
      },
      checklist:['Get a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to push and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Friendly rallies, short games, low intimidation — pickleball makes joining in feel unusually normal.",
    guide:{
      whyItFits:"Pickleball is popular for a reason: the first playable rally comes quickly. It is gentle enough to start late and tactical enough to stay interesting.",
      howToStart:'Find an open play session that mentions new players or lessons. Borrow a paddle at first, tell people you are new, and learn the serve and kitchen rule before worrying about strategy.',
      equipment:[{item:'Pickleball paddle',tier:'need'},{item:'Pickleballs',tier:'need'},{item:'Court shoes',tier:'nice'}],
      adaptive:{
        low_budget:'Paddles cost $20–40 for a decent beginner option. Many parks provide loaner paddles at open play.',
        no_equipment:'Ask at open play sessions — loaner paddles are very common.',
        shy_solo:'Open play is social by design, but you can practice solo against a wall.',
        social_team:'Open play rotates partners and opponents, so you meet people without forcing introductions.',
        limited_time:'A single open play session has games of 5–7 minutes each. Drop in for 30 minutes.',
        competitive:'USA Pickleball runs tournaments for every skill level including beginners.',
      },
      checklist:['Find an open play session near you','Borrow a paddle and join a game','Learn the basic serve and kitchen rule','Come back a second time — the first game is always confusing']
    }
  },

  badminton: {
    id:'badminton', name:'Badminton', icon:'🏸',
    fitTags:['social_team','competitive','low_budget'],
    pitch:"Small court, fast reactions, big sweat — badminton is much sharper than backyard memories suggest.",
    guide:{
      whyItFits:'Badminton is forgiving enough for a first rally and demanding enough to keep improving for years. Drop-in sessions make it easy to sample without building a full team.',
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
    pitch:"Running, throwing, and a culture that makes room for new people on the field.",
    guide:{
      whyItFits:'Ultimate combines running, spacing, and simple equipment with a culture that actively values fair play. It can be tiring fast, but beginners usually get taught as they go.',
      howToStart:"Find a local ultimate club, beginner session, or pickup game. Buy or borrow a disc, learn a basic backhand throw, and let people know it is your first time.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Just show up.',
        shy_solo:'Hard to practice alone but throwing against a target or fence works.',
        social_team:'The "spirit of the game" culture makes teaching new players part of the sport, not an interruption.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get an ultimate disc ($10)','Find a local club or pickup game','Attend your first session','Learn the basic throwing grip and huck']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythm, legs, lungs, and teamwork — rowing feels orderly even when it is hard.',
    guide:{
      whyItFits:"Rowing is low-impact but demanding, with a rhythm that rewards patience. The learn-to-row culture is real, and indoor ergs let you try the movement before getting on water.",
      howToStart:"Find a local rowing club and ask about learn-to-row sessions. If that feels like too much, try an indoor rowing machine first and learn basic form slowly.",
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
    pitch:"Slow, precise, and weirdly absorbing — a bucket of balls can become its own little ritual.",
    guide:{
      whyItFits:"Golf is less about being athletic and more about repeating a tiny movement until it behaves. The driving range gives beginners a private-feeling place to be bad and still enjoy it.",
      howToStart:"Go to a driving range and rent clubs if you need them. Start with half swings and focus on clean contact. Nothing else matters on day one.",
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
    pitch:'Measurable progress on your terms — the gym works best when the first plan is boring and repeatable.',
    guide:{
      whyItFits:"Gym training is useful because it removes guesswork. Pick a few movements, repeat them, and watch the numbers or reps climb slowly.",
      howToStart:'Sign up for a gym trial or day pass. On day one, do a simple full-body circuit: squat or leg press, push, pull, hinge. Use light weights and leave with energy left.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A 30-minute full-body session is enough when you repeat it consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Sign up for a gym or find one with a free trial','Complete a light 30-minute full-body workout','Log your weights so you know where to start next time','Go back later in the week, not necessarily while you are sore']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'Strength with almost no setup — the floor, a bar, and your own body can take you far.',
    guide:{
      whyItFits:"Calisthenics is simple but scalable. Wall push-ups become floor push-ups, dead hangs become pull-ups, and you can train at home without turning your life around.",
      howToStart:'Start with an easy bodyweight circuit: incline push-ups, squats, a short plank, and assisted rows if you have a bar. Do it every other day at first.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor is all you need.',
        shy_solo:'Done entirely alone. Perfect for home or park training.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 20-minute bodyweight circuit is enough to start building the habit.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete an easy circuit: push-up variation, squats, and a short plank','Find a park with pull-up bars near you','Repeat the routine 2-3 times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Tiny margins, quick laughs, and rallies that make your reflexes wake up fast.',
    guide:{
      whyItFits:'Table tennis is easy to underestimate until spin enters the room. It rewards quick reactions, soft touch, and the kind of tactics you can learn in short games.',
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
    pitch:'Fast feet, quick hands, and a stick skill curve that makes practice feel purposeful.',
    guide:{
      whyItFits:'Lacrosse mixes running, passing, catching, and quick decisions. Wall ball gives beginners a solo way in, while clubs provide the team structure once basic stick skills start to settle.',
      howToStart:'Find a local lacrosse club, box lacrosse programme, or recreational league. Ask if they have loaner gear, then start wall ball with gentle, controlled throws.',
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
    pitch:"Big contact if you want it, bigger camaraderie either way — rugby clubs make team culture tangible.",
    guide:{
      whyItFits:"Rugby is physical, but the culture around teaching newcomers is a real strength. Tag rugby is a smart first step if full contact feels like too much too soon.",
      howToStart:'Find a local rugby club and ask about beginner sessions, touch rugby, or tag rugby. Message before you go so you know what to bring and where to stand.',
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
    pitch:'Fast chess with footwork — dramatic from the outside, surprisingly structured once you start.',
    guide:{
      whyItFits:'Fencing feels theatrical, but beginners start with clear basics: stance, footwork, distance, timing. Clubs usually provide equipment, so curiosity matters more than owning gear.',
      howToStart:'Find a local fencing club and book a beginner intro class. Expect footwork and simple drills before anything looks like a duel.',
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
    pitch:'A social team night with just enough competition to make every at-bat matter.',
    guide:{
      whyItFits:"Softball is often the easier adult entry point to bat-and-ball sports. Games are social, the pace is forgiving, and many leagues are built around mixed experience levels.",
      howToStart:"Search your city's parks department for adult softball leagues. If you do not have a team, ask about free-agent lists or teams that need extra players.",
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
    pitch:'Body control from the ground up — humbling, playful, and very satisfying when basics click.',
    guide:{
      whyItFits:'Gymnastics builds strength, mobility, and body awareness in a way most workouts do not. Adult beginner classes usually focus on safe basics, not throwing you onto advanced apparatus.',
      howToStart:'Find a gymnastics club that offers adult beginner classes. Start with floor work, shapes, rolls, and mobility. Let a coach decide when apparatus work makes sense.',
      equipment:[{item:'Fitted athletic clothes that will not snag',tier:'need'},{item:'Bare feet or gymnastics shoes',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Gymnastics clubs have a strong community and social structure.',
        limited_time:'A class runs 60–90 minutes.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Attend your first class','Learn safe shapes, rolls, or basic floor movement','Come back — gymnastics rewards patience']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, controlled speed, and that first clean glide when the mountain stops feeling impossible.',
    guide:{
      whyItFits:'Skiing can feel intimidating, but beginner lessons are unusually structured. You get gear, terrain, and coaching designed around people who are learning to stop and turn safely.',
      howToStart:'Book a beginner lesson at a ski resort — do not self-teach. Rentals cover everything. A first day is about balance, stopping, and linking easy turns, not conquering the mountain.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is a complete first experience.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort','Rent full gear on arrival','Practise stopping, turning, and riding a beginner lift if ready','Ask about a return discount']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'The first day is messy, the flow is real — snowboarding rewards people who come back once more.',
    guide:{
      whyItFits:"Snowboarding has a steeper first-day learning curve than many sports, but the sideways flow feels completely its own once turns start linking.",
      howToStart:'Book a beginner snowboard lesson and rent wrist guards. Expect falling, take breaks, and commit to a second session before deciding whether it is for you.',
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
    pitch:'Patience, balance, and ocean timing — even a tiny whitewater ride can stay with you all day.',
    guide:{
      whyItFits:'Surfing combines physical effort with reading conditions you cannot control. A surf school gives beginners safer waves, a foam board, and a realistic first taste of the rhythm.',
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
      checklist:['Find a surf school near a beginner break','Book a 2-hour lesson','Aim to catch whitewater, even on your knees','Return for a second session soon if the ocean got under your skin']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus with instant feedback — every arrow tells you something.',
    guide:{
      whyItFits:'Archery is calm without being passive. The target gives clear feedback, the technique is detailed, and most clubs provide beginner equipment so you can learn before buying.',
      howToStart:"Find a local archery club and ask about beginner sessions. Equipment is provided — don't buy anything yet.",
      equipment:[{item:'Recurve bow',tier:'club'},{item:'Arrows',tier:'club'},{item:'Arm guard and finger tab',tier:'club'},{item:'Own bow (after 2–3 months)',tier:'later'}],
      adaptive:{
        low_budget:"Clubs provide all equipment. Session fee: $10–20. Don't buy anything until you're committed.",
        no_equipment:'Clubs provide the bow, arrows, and safety gear for intro sessions.',
        shy_solo:'Deeply individual. You focus on your own targets and progress.',
        social_team:'Archery clubs have a strong community. Club nights and competitions are social.',
        limited_time:'A session runs 60–90 minutes. Indoor ranges are weather-independent.',
        competitive:'USA Archery has structured competition pathways from beginner to Olympic level.',
      },
      checklist:['Find a local archery club','Book a beginner intro session','Learn the basic stance and anchor point','Shoot your first 10-arrow round with coaching']
    }
  },

  cheer: {
    id:'cheer', name:'Cheerleading', icon:'📣',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Performance, power, and trust — cheer is much more athletic than the sideline stereotype.',
    guide:{
      whyItFits:'Competitive cheerleading combines tumbling, stunting, jumping, dance, and performance under pressure. It is team-first, high-energy, and best for people who like being coached closely.',
      howToStart:'Find a local All-Star cheer gym and ask about beginner, novice, or adult programmes. Ask what skills are expected before joining a team.',
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
  parkour:          { id:'parkour',          name:'Parkour',                    icon:'🏃‍♂️', fitTags:['shy_solo','high_energy','no_equipment'],         pitch:'Learning to move through the city with control — jumps, vaults, landings, and a lot more patience than stunts.' },
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
  water_polo:       { id:'water_polo',       name:'Water Polo',                 icon:'🤽',   fitTags:['social_team','high_energy','competitive'],       pitch:'Treading water, passing under pressure, and sprinting in bursts — team sport cardio with no hiding.' },
  dragon_boat:      { id:'dragon_boat',      name:'Dragon Boat Racing',         icon:'🐉',   fitTags:['social_team','high_energy'],                     pitch:'Twenty paddlers in a long boat moving as one to a drumbeat. Beginner-friendly clubs welcome anyone.' },
  xc_skiing:        { id:'xc_skiing',        name:'Cross-country Skiing',       icon:'🎿',   fitTags:['shy_solo','high_energy','low_impact'],           pitch:'Gliding across snow under your own power. Quiet, aerobic, and much harder than it looks from the trailhead.' },
  ice_skating:      { id:'ice_skating',      name:'Ice Skating',                icon:'⛸️',   fitTags:['low_impact','social_team'],                      pitch:'Gliding on ice. Public sessions at most rinks let you rent skates and just go.' },
  figure_skating:   { id:'figure_skating',   name:'Figure Skating',             icon:'⛸️',   fitTags:['shy_solo','competitive','low_impact'],           pitch:'Spinning, jumping, and dancing on ice. Adult learn-to-skate programs exist in most cities.' },
  curling:          { id:'curling',          name:'Curling',                    icon:'🥌',   fitTags:['social_team','low_impact','competitive'],        pitch:'Sliding granite stones on ice with brooms, angles, and team calls. Tactical, social, and beginner leagues are real.' },
  ice_hockey:       { id:'ice_hockey',       name:'Ice Hockey',                 icon:'🏒',   fitTags:['social_team','high_energy','competitive'],       pitch:'Skating with sticks chasing a puck. Adult beginner leagues exist — though the gear list is long.' },
  snowshoeing:      { id:'snowshoeing',      name:'Snowshoeing',                icon:'🥾',   fitTags:['shy_solo','low_impact','low_budget'],            pitch:'Walking on snow with oversized footwear. Hiking, but where deep snow would normally stop you.' },
  judo:             { id:'judo',             name:'Judo',                       icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'A grappling martial art focused on throws. Beginners spend their first weeks learning to fall safely.' },
  bjj:              { id:'bjj',              name:'Brazilian Jiu-Jitsu',        icon:'🥋',   fitTags:['competitive','shy_solo'],                        pitch:'Ground grappling built around leverage, patience, and problem-solving under pressure. Strong gym culture.' },
  karate:           { id:'karate',           name:'Karate',                     icon:'🥋',   fitTags:['shy_solo','competitive'],                        pitch:'Striking martial art with deep tradition. Classes follow a clear belt-by-belt path.' },
  taekwondo:        { id:'taekwondo',        name:'Taekwondo',                  icon:'🥋',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Korean kicking-focused martial art. High kicks, big jumps, structured progression.' },
  muay_thai:        { id:'muay_thai',        name:'Muay Thai',                  icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Thai kickboxing using fists, elbows, knees, and shins. Tough, technical, and excellent for building fitness.' },
  kickboxing:       { id:'kickboxing',       name:'Kickboxing',                 icon:'🥊',   fitTags:['high_energy','shy_solo'],                        pitch:'Punches and kicks on bags and pads. Most gyms run no-contact beginner classes.' },
  krav_maga:        { id:'krav_maga',        name:'Krav Maga',                  icon:'🥋',   fitTags:['shy_solo','high_energy'],                        pitch:'Israeli self-defense system focused on real-world threats. Practical over pretty.' },
  capoeira:         { id:'capoeira',         name:'Capoeira',                   icon:'🤸',   fitTags:['social_team','high_energy'],                     pitch:'Brazilian martial art that looks like dance, played in a circle to live music.' },
  aikido:           { id:'aikido',           name:'Aikido',                     icon:'🥋',   fitTags:['low_impact','shy_solo'],                         pitch:'Martial art that redirects an attacker\'s force. Calm, flowing, technical.' },
  mma:              { id:'mma',              name:'MMA',                        icon:'🥊',   fitTags:['high_energy','competitive'],                     pitch:'Mixed martial arts — striking and grappling. Most gyms run no-spar fundamentals classes.' },
  kendo:            { id:'kendo',            name:'Kendo',                      icon:'⚔️',   fitTags:['shy_solo','competitive'],                        pitch:'Japanese sword fighting with bamboo swords and armor. Very disciplined, very loud.' },
  bmx:              { id:'bmx',              name:'BMX',                        icon:'🚴',   fitTags:['shy_solo','high_energy'],                        pitch:'Tricks, jumps, and racing on a small, tough bike. Skateparks and pump tracks are the usual entry points.' },
  mountain_biking:  { id:'mountain_biking',  name:'Mountain Biking',            icon:'🚵',   fitTags:['shy_solo','high_energy'],                        pitch:'Trail riding on a sturdy bike. Most cities have beginner trails and rental fleets.' },
  roller_derby:     { id:'roller_derby',     name:'Roller Derby',               icon:'🛼',   fitTags:['social_team','high_energy','competitive'],       pitch:'Full-contact roller skating with strategy, speed, and big team identity. Many leagues run new-skater programs.' },
  inline_skating:   { id:'inline_skating',   name:'Inline Skating',             icon:'🛼',   fitTags:['shy_solo','low_impact'],                         pitch:'Smooth cruising on paths and parks, with plenty of room to grow into distance, tricks, or speed.' },
  longboarding:     { id:'longboarding',     name:'Longboarding',               icon:'🛹',   fitTags:['shy_solo','low_impact'],                         pitch:'A long skateboard for cruising and carving. Less about tricks, more about flow.' },
  disc_golf:        { id:'disc_golf',        name:'Disc Golf',                  icon:'🥏',   fitTags:['shy_solo','low_budget','low_impact','social_team'], pitch:'A walk in the park with targets, touch, and a little obsession. Many public courses are free.' },
  horseback:        { id:'horseback',        name:'Horseback Riding',           icon:'🐎',   fitTags:['shy_solo','low_impact'],                         pitch:'Riding a horse, taught from the basics. Lesson barns provide everything for first sessions.' },
  polo:             { id:'polo',             name:'Polo',                       icon:'🐎',   fitTags:['social_team','competitive'],                     pitch:'Hockey on horseback with mallets. Some clubs run beginner polo schools with horses provided.' },
  darts:            { id:'darts',            name:'Darts',                      icon:'🎯',   fitTags:['low_budget','low_impact','social_team','competitive'], pitch:'A board on a wall and three darts. Pubs, local leagues, and world championships — all of it.' },
  lawn_bowls:       { id:'lawn_bowls',       name:'Lawn Bowls',                 icon:'🎱',   fitTags:['low_impact','social_team'],                      pitch:'Roll heavy biased balls toward a target on a manicured green. Quietly competitive, often delightful.' },
  petanque:         { id:'petanque',         name:'Pétanque',                   icon:'🥎',   fitTags:['low_impact','social_team','low_budget'],         pitch:'French boules. Toss metal balls toward a small jack. Low-key, sunny, and more tactical than it first appears.' },
  cornhole:         { id:'cornhole',         name:'Cornhole',                   icon:'🌽',   fitTags:['low_budget','social_team','low_impact'],         pitch:'Toss bean bags at an angled board, then somehow care deeply about the last inch. Backyard-friendly and social.' },
  bouldering:       { id:'bouldering',       name:'Bouldering',                 icon:'🧗',   fitTags:['shy_solo','high_energy'],                        pitch:'Climbing short, hard problems on padded floors with no rope. The most accessible climbing.' },
  slacklining:      { id:'slacklining',      name:'Slacklining',                icon:'🪢',   fitTags:['shy_solo','low_budget'],                         pitch:'Walking on a flat webbed line strung between two trees. Surprisingly hard, surprisingly addictive.' },
  trampoline:       { id:'trampoline',       name:'Trampolining',               icon:'🤾',   fitTags:['high_energy','low_impact'],                      pitch:'Bouncing — but structured. Adult trampoline classes teach real somersaults and twists.' },
  triathlon:        { id:'triathlon',        name:'Triathlon',                  icon:'🏊',   fitTags:['shy_solo','competitive','high_energy'],          pitch:'Swim, bike, run — back to back. Sprint distance is the realistic first target, not the whole iron-distance myth.' },
  orienteering:     { id:'orienteering',     name:'Orienteering',               icon:'🧭',   fitTags:['shy_solo','low_budget'],                         pitch:'Running through forests with a map and compass, finding flagged checkpoints. A puzzle and a workout.' },
  cricket:          { id:'cricket',          name:'Cricket',                    icon:'🏏',   fitTags:['social_team','competitive'],                     pitch:'Bat, ball, two stumps, lots of rules. Soft-ball indoor cricket is a quick first taste.' },
  field_hockey:     { id:'field_hockey',     name:'Field Hockey',               icon:'🏑',   fitTags:['social_team','high_energy','competitive'],       pitch:'Hockey on grass with curved sticks and a hard ball. Big in many countries, growing in others.' },
  floorball:        { id:'floorball',        name:'Floorball',                  icon:'🏑',   fitTags:['social_team','high_energy'],                     pitch:'Indoor hockey with light plastic sticks and a wiffle ball. Fast, cheap to equip, and easy to sample.' },
  netball:          { id:'netball',          name:'Netball',                    icon:'🏐',   fitTags:['social_team','low_impact','competitive'],        pitch:'A no-dribble, no-contact court game with sharp passing and defined roles. Local leagues often welcome new players.' },
  kabaddi:          { id:'kabaddi',          name:'Kabaddi',                    icon:'🤼',   fitTags:['social_team','high_energy'],                     pitch:'A South Asian tag-and-wrestle game. One person raids while holding their breath, chanting "kabaddi".' },
  sport_stacking:   { id:'sport_stacking',   name:'Sport Stacking',             icon:'🥤',   fitTags:['shy_solo','low_budget','low_impact'],            pitch:'Stacking and unstacking cups in patterns as fast as possible. Yes, there are world championships.' },
  chess_boxing:     { id:'chess_boxing',     name:'Chess Boxing',               icon:'♟️',   fitTags:['competitive','shy_solo'],                        pitch:'Alternating rounds of chess and boxing. Win by knockout or checkmate.' },
  pole_vault:       { id:'pole_vault',       name:'Pole Vault',                 icon:'🤸',   fitTags:['shy_solo','high_energy','competitive'],          pitch:'Sprinting with a long pole and using it to fling yourself over a high bar.' },
  underwater_hockey:{ id:'underwater_hockey',name:'Underwater Hockey',          icon:'🤿',   fitTags:['social_team','low_impact'],                      pitch:'Hockey on the bottom of a pool, played holding your breath. As niche as it sounds.' },
}

Object.values(NICHE_SPORTS).forEach(s => { s.category = 'niche' })
Object.assign(SPORTS, NICHE_SPORTS)

export default SPORTS
