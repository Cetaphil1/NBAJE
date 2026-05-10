const SPORTS = {

  basketball: {
    id:'basketball', name:'Basketball', icon:'🏀',
    fitTags:['social_team','high_energy','competitive','low_budget'],
    pitch:'A ball, a hoop, and a little nerve — basketball lets you ease in alone or jump into pickup when ready.',
    guide:{
      whyItFits:"Basketball gives you options from day one: shoot around by yourself, run drills with a friend, or join a casual game when the court feels right. It is active, social, and easy to scale to your confidence.",
      howToStart:"Find a public court at a nearby park. Spend 20 minutes dribbling slowly with both hands and taking close shots. Joining pickup can wait until the court feels familiar.",
      equipment:[{item:'Basketball (size 7 adults / 6 youth)',tier:'need'},{item:'Court shoes with ankle support',tier:'need'},{item:'Shorts and breathable shirt',tier:'have'}],
      adaptive:{
        low_budget:"Most courts are free. A used ball costs $10–20, and busy courts often have a shared ball in play.",
        no_equipment:"If people are already playing, ask whether you can rotate in. Shared balls are common at busy courts.",
        shy_solo:"Public courts are completely normal to use alone. Dribble, shoot, and leave whenever you have had enough.",
        social_team:"Watch one game first, then ask \"got next?\" when the vibe feels casual. That really is how pickup starts.",
        limited_time:'Twenty minutes of close shots, layups, and slow dribbling is enough to build comfort.',
        competitive:'City rec leagues run most seasons. Search your parks department for adult basketball leagues.',
      },
      checklist:['Find a public court near you','Practise slow dribbles with both hands for 10 min','Take 20 close-range shots','Watch a pickup game and ask how people join']
    }
  },

  soccer: {
    id:'soccer', name:'Soccer', icon:'⚽',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"Simple to start, hard to outgrow — soccer turns any patch of grass into a place to move.",
    guide:{
      whyItFits:"Soccer is low-cost, social, and forgiving at casual levels. You can build touch alone with a wall, then join a kickaround where effort matters more than polish.",
      howToStart:"Find a park or wall and start with toe taps, gentle passes, and short dribbles. Juggling is optional; ball comfort matters more on day one.",
      equipment:[{item:'Soccer ball (size 5)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Shin guards',tier:'nice'}],
      adaptive:{
        low_budget:"A ball costs $10–15. Most pitches are free. Many pickup games use shared balls — you don't even need your own.",
        no_equipment:'Look for a casual pickup game and ask whether they need an extra. Shared balls are common.',
        shy_solo:'Wall passes, toe taps, and slow dribbling alone in a park are a useful first session.',
        social_team:'Search Facebook Groups or Meetup for "casual soccer [your city]" and look for words like relaxed, co-ed, or all levels.',
        limited_time:'Fifteen minutes of wall passes and first touches builds more skill than it looks like.',
        competitive:'Most cities have recreational adult leagues with beginner divisions.',
      },
      checklist:['Find a nearby pitch, park, or wall','Practise toe taps for 2 minutes','Try wall passing for 10 min','Search for a local casual kickaround']
    }
  },

  tennis: {
    id:'tennis', name:'Tennis', icon:'🎾',
    fitTags:['competitive','shy_solo','high_energy'],
    pitch:"Clean contact feels addictive, and you can chase it alone against a wall before booking a match.",
    guide:{
      whyItFits:"Tennis blends rhythm, problem-solving, and quick bursts of movement. A wall is enough to learn timing, so you do not need a partner before you feel ready.",
      howToStart:"Find a public court or practice wall. Use soft swings from close range and aim for five controlled returns in a row before you move back.",
      equipment:[{item:'Tennis racket (mid-size head, beginner weight)',tier:'need'},{item:'Tennis shoes with lateral support',tier:'need'},{item:'Can of balls',tier:'need'}],
      adaptive:{
        low_budget:"Public courts are free. A used beginner racket is $15–25. Many parks loan equipment.",
        no_equipment:"Check your city's parks department — some courts have equipment loan programmes.",
        shy_solo:'Wall rallying is quiet, normal, and useful. Start close and keep the ball slow.',
        social_team:'Many clubs run adult beginner clinics where everyone is learning the same basics.',
        limited_time:'Twenty minutes of easy wall rallying is plenty for a first outing.',
        competitive:'USTA leagues include entry-level adult divisions once you can rally consistently.',
      },
      checklist:['Find a public tennis court or wall near you','Get or borrow a basic racket','Hit softly against a wall for 15 min','Search for a local beginner clinic']
    }
  },

  volleyball: {
    id:'volleyball', name:'Volleyball', icon:'🏐',
    fitTags:['social_team','high_energy'],
    pitch:'Loud, quick, and team-first — volleyball gives you a role before you feel like an athlete.',
    guide:{
      whyItFits:"Volleyball is built around communication, quick reactions, and small moments of trust. Beach courts and open gyms make it easy to watch, learn the rotation, and step in gradually.",
      howToStart:"Find an open gym night or beach court and watch a game first. Practice forearm passing with a friend or against a wall before you try full-speed play.",
      equipment:[{item:'Volleyball',tier:'need'},{item:'Knee pads (indoor)',tier:'nice'},{item:'Court shoes (indoor)',tier:'need'}],
      adaptive:{
        low_budget:'Beach courts are free. Indoor open gym nights cost $3–5. Equipment is almost always shared.',
        no_equipment:'Open gym nights and beach courts usually have shared balls. Ask before buying one.',
        shy_solo:'Wall setting and gentle self-passing give you a solo way to build touch.',
        social_team:'Search for beginner open gym nights, not just leagues. They are much easier first steps.',
        limited_time:'Open gym sessions run 1–2 hours but you can leave whenever.',
        competitive:'Recreational leagues run at multiple skill levels in most cities.',
      },
      checklist:['Find an open gym night or beach court','Watch one game and notice the rotation','Practise gentle self-passing for 20 reps','Attend one session labeled beginner or all levels']
    }
  },

  baseball: {
    id:'baseball', name:'Baseball', icon:'⚾',
    fitTags:['social_team','competitive'],
    pitch:'Slow build, sudden payoff — baseball is for people who enjoy tiny adjustments and clean contact.',
    guide:{
      whyItFits:'Baseball rewards patience in a way few sports do. You get repeatable skills to practice alone, then a team setting where one good swing or catch can change the whole inning.',
      howToStart:'Find a batting cage and choose the slowest speed. Take easy swings for contact, then use a tennis ball against a wall to build hand-eye rhythm.',
      equipment:[{item:'Baseball glove',tier:'need'},{item:'Bat',tier:'need'},{item:'Batting helmet',tier:'need'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Batting cages cost $1–2 per token. Used glove and bat: $20–30 combined at thrift stores.',
        no_equipment:'Some batting cages rent equipment on-site. A tennis ball and a wall cost almost nothing.',
        shy_solo:'A batting cage session is completely solo. No team needed to start.',
        social_team:'Adult softball leagues are friendlier and more social than baseball for most beginners.',
        limited_time:'Twenty minutes at a batting cage is enough. Stop while your swing still feels controlled.',
        competitive:'Recreational baseball and softball leagues exist in most cities with beginner divisions.',
      },
      checklist:['Find a batting cage near you','Take 20 slow swings focused on contact','Practise easy throws with a partner or wall','Look up local recreational softball leagues']
    }
  },

  football: {
    id:'football', name:'Flag Football', icon:'🏈',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Plays, speed, and teamwork without the pads — flag football keeps the fun and lowers the barrier.',
    guide:{
      whyItFits:"Flag football gives you routes, roles, and game-day energy without needing full-contact gear. It is easier to learn when you start with simple throws and one or two basic positions.",
      howToStart:"Start by practising short spiral throws and catching on the move. Then look for a parks league, Meetup game, or rookie-friendly pickup session.",
      equipment:[{item:'Football',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Flag belt set',tier:'nice'}],
      adaptive:{
        low_budget:'Flag football needs a ball ($20) and trainers. Skip all pads. Many leagues provide flags.',
        no_equipment:'Flag leagues often supply everything at open sessions.',
        shy_solo:'Practise spiral throwing against a fence or wall alone.',
        social_team:'Flag football leagues are naturally social because everyone has a role on each play.',
        limited_time:'Twenty minutes of short throws and simple routes is a useful first practice.',
        competitive:'Flag tournaments run frequently and get competitive quickly once you know the basics.',
      },
      checklist:['Get a football or find one to borrow','Practise short spiral throws','Watch one game and note two positions','Search for a local flag football league']
    }
  },

  track: {
    id:'track', name:'Running / Track', icon:'🏃',
    fitTags:['shy_solo','low_budget','no_equipment','high_energy'],
    pitch:"Start exactly where you are — running can be a walk-jog, a track lap, or a quiet reset outside.",
    guide:{
      whyItFits:"Running is honest without being fancy: you choose the pace, the route, and the goal. Progress shows up in small ways first, like breathing easier or needing fewer walk breaks.",
      howToStart:"Start with 20 minutes of alternating easy jogging and walking. Keep the pace so comfortable you could talk, and stop before it turns into punishment.",
      equipment:[{item:'Running shoes (get fitted at a running store)',tier:'need'},{item:'Moisture-wicking socks and shorts',tier:'need'},{item:'GPS watch or free phone app',tier:'nice'}],
      adaptive:{
        low_budget:'Running is free. A decent pair of shoes: $30–60 on sale or second-hand.',
        no_equipment:"You need shoes and that's it.",
        shy_solo:'Running alone is completely normal. Headphones, a simple route, and no audience required.',
        social_team:'Running clubs often have no-drop or easy-pace groups. Search "running club [your city]".',
        limited_time:'A 20-minute walk-jog three times a week is a legitimate training programme.',
        competitive:'Local 5K races are easy to find and many welcome walk-jog participants.',
      },
      checklist:['Complete a 20-minute walk-jog','Find your nearest track or park path','Repeat the same route once this week','Look up a local 5K for motivation, not pressure']
    }
  },

  swimming: {
    id:'swimming', name:'Swimming', icon:'🏊',
    fitTags:['shy_solo','low_impact','high_energy'],
    pitch:'Quiet lanes, full-body effort, and no impact — swimming is intense without feeling loud.',
    guide:{
      whyItFits:"Swimming lets you work hard while your joints get a break. It is technical enough to stay interesting, but your first win can be as simple as calmer breathing across one length.",
      howToStart:'Book a lane swim or beginner swim session. Start with short lengths, long rests, and one focus: exhale underwater instead of fighting the water.',
      equipment:[{item:'Fitted swimsuit',tier:'need'},{item:'Goggles',tier:'need'},{item:'Swim cap',tier:'nice'}],
      adaptive:{
        low_budget:'Public pools: $3–6 per session. Suit and goggles: $15–25 total.',
        no_equipment:"A swimsuit and goggles are enough. Add a cap later if you want one.",
        shy_solo:"Lane swimming is naturally private. Everyone is staring at the black line, not at you.",
        social_team:'Masters Swimming programmes are adult lap groups at all levels — welcoming to beginners.',
        limited_time:"Twenty minutes with generous rests is a real first session.",
        competitive:'Adult swim meets have open events where the goal can simply be finishing your own heat.',
      },
      checklist:['Find your nearest pool with lane swim','Book a quieter or beginner-labeled time slot','Try 4 easy lengths with rest','Look up adult swim groups in your area']
    }
  },

  boxing: {
    id:'boxing', name:'Boxing', icon:'🥊',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Sweat, rhythm, and confidence — boxing starts with footwork and bag rounds, not getting hit.',
    guide:{
      whyItFits:"Boxing gives nervous energy somewhere useful to go. A good gym will teach stance, breathing, and control long before sparring is even on the table.",
      howToStart:"Find a boxing gym and ask about a first-timer class. Spend the first few weeks on stance, jab, cross, and footwork. Sparring is optional and should wait for a coach.",
      equipment:[{item:'Hand wraps',tier:'need'},{item:'Boxing gloves 12–16oz',tier:'need'},{item:'Mouthguard',tier:'later'},{item:'Boxing shoes or high-tops',tier:'nice'}],
      adaptive:{
        low_budget:'Hand wraps: $7. Used gloves: $15–20. Many gyms have community rates. Ask.',
        no_equipment:'Many gyms loan gloves to new members for the first few sessions.',
        shy_solo:'Bag work and shadow boxing are entirely solo. Many gym sessions have no partner work at all.',
        social_team:'Boxing gyms build community through shared rounds, partner drills, and coach feedback.',
        limited_time:'A 30-minute class or bag session is plenty if you stay focused.',
        competitive:'If competition interests you, ask your coach about novice pathways after several consistent months.',
      },
      checklist:['Find a local boxing gym and ask about a trial class','Get hand wraps and basic gloves','Learn your stance and jab from a coach','Practise 3×3-min shadow boxing rounds']
    }
  },

  wrestling: {
    id:'wrestling', name:'Wrestling', icon:'🤼',
    fitTags:['competitive','high_energy'],
    pitch:'Direct, demanding, and humbling — wrestling teaches effort you can feel immediately.',
    guide:{
      whyItFits:"Wrestling is intense, but not mindless. It teaches balance, leverage, grit, and respect for basics. The right beginner room will scale the work while keeping safety non-negotiable.",
      howToStart:"Find a wrestling club, YMCA, or adult grappling programme and ask specifically about beginner sessions. You need coaching and mats from the start.",
      equipment:[{item:'Wrestling singlet',tier:'need'},{item:'Wrestling shoes',tier:'need'},{item:'Headgear',tier:'need'}],
      adaptive:{
        low_budget:'High school programmes and YMCAs often have low-cost access. Many clubs loan singlets and shoes.',
        no_equipment:'Wrestling clubs provide everything — mat, headgear, often shoes. Ask before buying anything.',
        shy_solo:'You cannot learn wrestling alone. The first step is finding a club.',
        social_team:'Wrestling clubs are tight-knit communities — individual sport, deep team culture.',
        limited_time:"A practice session usually runs 60–90 minutes. Plan for real recovery afterward.",
        competitive:'Ask your coach about entry-level tournaments only after you have several months of consistent training.',
      },
      checklist:['Find a local wrestling club or YMCA programme','Attend one open practice','Learn basic stance from a coach','Ask about beginner training schedule']
    }
  },

  yoga: {
    id:'yoga', name:'Yoga', icon:'🧘',
    fitTags:['shy_solo','low_impact','low_budget'],
    pitch:'A low-pressure way to feel better in your own body, starting on the floor at home.',
    guide:{
      whyItFits:"Yoga is movement without a scoreboard. It can be calm, challenging, awkward, or restorative depending on the class, and that flexibility makes it easy to return to.",
      howToStart:"Find a free beginner video and do the first 15-20 minutes in your living room. Skip poses that feel sharp or painful; the point is noticing, not forcing.",
      equipment:[{item:'Yoga mat ($10–20)',tier:'need'},{item:'Comfortable clothes',tier:'need'},{item:'Blocks / strap',tier:'nice'}],
      adaptive:{
        low_budget:"Free YouTube classes can take you a long way. A mat costs $10–20, and that is enough to start.",
        no_equipment:'You can practise on carpet without a mat to start.',
        shy_solo:'This is one of the most private ways to start moving. Just you, a video, and a little floor space.',
        social_team:'Studio classes are social and welcoming — most have beginner sessions.',
        limited_time:'A 20-minute session is enough. Start there and leave wanting to come back.',
        competitive:"Yoga is not built around beating people. If you want progression, track steadier balance, breath, and mobility over months.",
      },
      checklist:["Find a beginner YouTube yoga class (15-20 min)",'Complete the first session without forcing anything','Save one class you would repeat','Notice what feels tight or calmer afterward']
    }
  },

  cycling: {
    id:'cycling', name:'Cycling', icon:'🚴',
    fitTags:['shy_solo','low_budget','high_energy'],
    pitch:"Low-impact cardio with scenery — cycling makes exercise feel like going somewhere.",
    guide:{
      whyItFits:"Cycling is gentle on joints but still gives you real cardio. It also adds a sense of exploration, which helps the workout feel less like a chore.",
      howToStart:'Borrow or find a used bike before buying new. Pick a flat, quiet route and make the first ride about comfort, braking, and confidence.',
      equipment:[{item:'Bike (used is fine to start)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Lights for evening riding',tier:'need'},{item:'Padded shorts',tier:'nice'}],
      adaptive:{
        low_budget:'A used bike from Facebook Marketplace or Craigslist: $50–150. Check your city for bike libraries or loan programmes.',
        no_equipment:'Check for local bike libraries, community bikes, or rental programmes before buying anything.',
        shy_solo:'Cycling alone is normal. Pick a quiet loop and repeat it until it feels boring.',
        social_team:'Group rides run in most cities. Search for your local cycling club — most have beginner-paced rides.',
        limited_time:"A 20-minute loop around your neighbourhood is a real session. Distance doesn't matter at first.",
        competitive:'Local cycling clubs have timed rides and beginner races. Strava segments give you something to chase solo.',
      },
      checklist:['Borrow or find a used bike','Check brakes, tires, and helmet fit','Ride a flat, safe 15-20 minute loop','Look up a beginner-paced group ride']
    }
  },

  climbing: {
    id:'climbing', name:'Climbing', icon:'🧗',
    fitTags:['shy_solo','social_team','competitive','high_energy'],
    pitch:'A puzzle you solve with your body — climbing feels playful even when it is hard.',
    guide:{
      whyItFits:"Climbing gives you short, satisfying problems instead of endless reps. Indoor gyms rent the gear, grade the routes, and usually have staff who can point you to the easiest climbs in the room.",
      howToStart:"Visit an indoor climbing gym and say it is your first time. Rent shoes, start with low boulders, and take more rests than you think you need.",
      equipment:[{item:'Climbing shoes (rent to start)',tier:'rent'},{item:'Chalk bag',tier:'nice'},{item:'Harness (for roped climbing)',tier:'later'}],
      adaptive:{
        low_budget:'Day passes at indoor gyms: $15–25 including rental. Membership pays off within 2–3 visits.',
        no_equipment:'Gyms rent everything. Wear clothes you can move in and let staff know you are new.',
        shy_solo:'Bouldering is completely solo — no partner needed, no ropes, just you and the wall.',
        social_team:'Climbing gyms tend to be chatty in a useful way. People swap beta and cheer small wins.',
        limited_time:'Thirty to forty-five minutes of bouldering is plenty for a first visit.',
        competitive:'Indoor gyms often host casual comps with easier routes and first-timer categories.',
      },
      checklist:['Find your nearest indoor climbing gym','Book a day pass and rent shoes','Ask staff which climbs are easiest to start on','Try bouldering for 30 minutes with rests']
    }
  },

  hiking: {
    id:'hiking', name:'Hiking', icon:'🥾',
    fitTags:['shy_solo','low_budget','no_equipment','low_impact'],
    pitch:"A reset disguised as exercise — hiking starts with a walk that has better scenery.",
    guide:{
      whyItFits:"Hiking gives you distance, fresh air, and a clear finish without needing sport-specific skills. You can choose a route that matches your energy instead of proving anything.",
      howToStart:'Find a local trail on AllTrails or a parks website. Pick something rated "easy," well-reviewed, and under 3 miles for the first outing.',
      equipment:[{item:'Comfortable walking shoes or trainers',tier:'need'},{item:'Water bottle',tier:'need'},{item:'Sunscreen',tier:'need'},{item:'Hiking boots',tier:'later'}],
      adaptive:{
        low_budget:'Hiking costs nothing. Most trail parks are free. Good trainers you already own are fine.',
        no_equipment:'You need comfortable shoes, water, and a charged phone. You probably already have the basics.',
        shy_solo:'Solo hikes are normal, but choose a busy, well-marked trail first and tell someone your plan.',
        social_team:'Hiking groups are very active — search Meetup for "[your city] hiking group".',
        limited_time:"A 45- to 90-minute loop counts. You do not need a full day.",
        competitive:'Trail running and peak-bagging challenges give you targets if you want them.',
      },
      checklist:['Find an easy trail near you','Choose a route under 3 miles for your first hike','Pack water and check the weather',"Tell someone where you're going"]
    }
  },

  dance: {
    id:'dance', name:'Dance', icon:'💃',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Movement with a soundtrack — dance lets you choose the room, the rhythm, and the vibe.',
    guide:{
      whyItFits:'Dance is exercise with expression built in. Some styles are social and partner-based, others are solo and practice-friendly, so you can choose the kind of confidence you want to build.',
      howToStart:'Pick one style that sounds fun, not impressive. Try a beginner class or a follow-along video, then repeat it before deciding whether you are "good" at it.',
      equipment:[{item:'Comfortable clothes that move',tier:'need'},{item:'Dance shoes (style-specific)',tier:'later'},{item:'Flat-soled shoes to start',tier:'need'}],
      adaptive:{
        low_budget:'Many studios have a first class free. Community centres often run cheap classes.',
        no_equipment:"No equipment needed — just shoes that let you move.",
        shy_solo:'Hip-hop, contemporary, and online choreo classes are easy to try privately.',
        social_team:'Salsa, swing, and ballroom are built around partner and group dancing.',
        limited_time:'A single 60-minute class is plenty. Most studios do drop-ins.',
        competitive:'Competition dance exists at every level — from local showcases to national events.',
      },
      checklist:['Pick a style that sounds fun to you','Find a beginner class or follow-along video','Try one session without judging how you look','Repeat once — the first time is mostly nerves']
    }
  },

  martial_arts: {
    id:'martial_arts', name:'Martial Arts', icon:'🥋',
    fitTags:['shy_solo','competitive','high_energy'],
    pitch:'Clear structure, real skill, and a room where beginners are expected — not tolerated.',
    guide:{
      whyItFits:'Martial arts give you rituals, coaching, and a visible path from confused beginner to capable regular. Different styles have different intensity levels, but good schools introduce contact gradually.',
      howToStart:'Pick one style and find a local club with an explicit beginner or fundamentals class. Attend a trial class and notice whether the coach explains safety clearly.',
      equipment:[{item:'Gi / uniform (club may loan one)',tier:'later'},{item:'Comfortable athletic wear',tier:'need'},{item:'Mouthguard',tier:'later'}],
      adaptive:{
        low_budget:'Many clubs have sliding-scale dues or reduced first-month rates. Ask.',
        no_equipment:'Most clubs loan a gi to new members for the first few sessions.',
        shy_solo:"You will work near people, but not perform for them. Good beginner classes drill basics before live sparring.",
        social_team:"Martial arts schools become familiar quickly because you train with the same people week after week.",
        limited_time:'A standard class runs 60 minutes. Most people go 2–3 times per week.',
        competitive:'Most styles have competition pathways, but you can train for months before deciding whether that matters.',
      },
      checklist:['Pick a martial art style that matches your comfort with contact','Find a local club with beginner classes','Attend one trial class and watch how safety is taught','Go back at least twice before deciding']
    }
  },

  skateboarding: {
    id:'skateboarding', name:'Skateboarding', icon:'🛹',
    fitTags:['shy_solo','high_energy'],
    pitch:'Creative, stubborn, and yours — skateboarding rewards tiny wins that nobody can fake for you.',
    guide:{
      whyItFits:"Skateboarding is self-directed in the best way: no schedule, no roster, no one telling you what counts. The first wins are small, physical, and weirdly satisfying.",
      howToStart:"Get a complete board, not a toy store board. Find a smooth, empty surface and learn to stand, push once, turn gently, and stop before trying tricks.",
      equipment:[{item:'Complete skateboard ($60–100)',tier:'need'},{item:'Helmet',tier:'need'},{item:'Wrist guards and knee pads',tier:'need'},{item:'Flat-soled shoes',tier:'need'}],
      adaptive:{
        low_budget:'A complete beginner board: $60–80. Avoid cheap toy store boards — they make learning harder.',
        no_equipment:'Skate shops sometimes rent boards. Many skate parks loan gear. Ask first.',
        shy_solo:'Skateboarding is fundamentally solo. Most skaters start by themselves.',
        social_team:'Skate parks are social spaces — people naturally share spots and tips.',
        limited_time:'Fifteen to thirty minutes of pushing, stopping, and turning is a strong first session.',
        competitive:'Amateur skateboarding competitions are genuinely accessible at local skate parks.',
      },
      checklist:['Get or borrow a complete beginner skateboard','Find a smooth flat surface to practise on','Learn to step off and stop safely','Visit a local skate park and watch for 10 minutes']
    }
  },

  pickleball: {
    id:'pickleball', name:'Pickleball', icon:'🏓',
    fitTags:['social_team','low_impact','competitive'],
    pitch:"Quick rallies, easy laughs, and open play that actually welcomes new people.",
    guide:{
      whyItFits:"Pickleball is low-impact, chatty, and quick to understand without being shallow. Open play rotates partners, so showing up alone feels less awkward than in many sports.",
      howToStart:'Find an open play session at a local court and ask whether beginners are welcome. Borrow a paddle first, then spend the first game learning the kitchen and serve.',
      equipment:[{item:'Pickleball paddle',tier:'need'},{item:'Pickleballs',tier:'need'},{item:'Court shoes',tier:'nice'}],
      adaptive:{
        low_budget:'Paddles cost $20–40 for a decent beginner option. Many parks provide loaner paddles at open play.',
        no_equipment:'Ask at open play sessions — loaner paddles are very common.',
        shy_solo:'Open play is social by design, but wall practice helps you learn the paddle feel first.',
        social_team:'Rotational games mean you meet people naturally between points instead of forcing small talk.',
        limited_time:'A single open play session has games of 5–7 minutes each. Drop in for 30 minutes.',
        competitive:'Local ladders and rated events give you competition once the rules feel natural.',
      },
      checklist:['Find an open play session near you','Borrow a paddle and join a game','Learn the basic serve and kitchen rule','Come back a second time — the first game is always confusing']
    }
  },

  badminton: {
    id:'badminton', name:'Badminton', icon:'🏸',
    fitTags:['social_team','competitive','low_budget'],
    pitch:"Light gear, sharp rallies, and more sweat than the shuttlecock suggests.",
    guide:{
      whyItFits:'Badminton is quick to start because the court is small and the gear is simple. Then the layers appear: footwork, touch, angles, and rallies that sneak up on your lungs.',
      howToStart:'Find a community hall or gym that runs badminton drop-in nights. Ask if there is a beginner court or spare racket before you go.',
      equipment:[{item:'Badminton racket ($15–25)',tier:'need'},{item:'Non-marking court shoes',tier:'need'},{item:'Shuttlecocks',tier:'need'}],
      adaptive:{
        low_budget:'A racket costs $15–25. Many drop-in sessions provide shuttles for free.',
        no_equipment:'Community hall sessions usually have spare rackets. Ask ahead.',
        shy_solo:'Gentle wall rallies can build touch before you join a drop-in.',
        social_team:'Badminton drop-in sessions are very social — you rotate opponents constantly.',
        limited_time:'A game to 21 points takes 15–20 minutes. Drop-in sessions are perfect for a quick game.',
        competitive:'Badminton England and USAB both run beginner tournament pathways.',
      },
      checklist:['Find a local badminton drop-in session','Ask whether spare rackets are available','Attend your first session','Learn the serve and basic court lines']
    }
  },

  ultimate_frisbee: {
    id:'ultimate_frisbee', name:'Ultimate Frisbee', icon:'🥏',
    fitTags:['social_team','low_budget','no_equipment','high_energy'],
    pitch:"A running game with a generous culture — ultimate is competitive without taking itself too seriously.",
    guide:{
      whyItFits:'Ultimate combines soccer-like running, basketball-style spacing, and a self-refereed culture that actually teaches newcomers. Spirit of the game is not just branding; it shapes how people play.',
      howToStart:"Find a local ultimate club or pickup game and ask which session is best for new players. Practise a simple backhand throw before your first run.",
      equipment:[{item:'Ultimate frisbee disc ($10)',tier:'need'},{item:'Cleats or flat trainers',tier:'need'},{item:'Mouth guard (optional)',tier:'nice'}],
      adaptive:{
        low_budget:'A disc costs $10. Many clubs provide discs. Most pitches are free.',
        no_equipment:'Clubs usually have spare discs for new players. Ask in the group chat or event post.',
        shy_solo:'It is hard to practice fully alone, but throwing at a target or fence builds the first skill.',
        social_team:'The "spirit of the game" culture makes ultimate unusually good at explaining itself to newcomers.',
        limited_time:'A pickup game takes 30–60 minutes. Sessions are flexible.',
        competitive:'Club leagues and tournaments run at city, regional, and national levels.',
      },
      checklist:['Get or borrow an ultimate disc','Practise 10 short backhand throws','Find a local club or pickup game','Attend a session marked beginner, casual, or all levels']
    }
  },

  rowing: {
    id:'rowing', name:'Rowing', icon:'🚣',
    fitTags:['social_team','high_energy','low_impact'],
    pitch:'Rhythm, power, and quiet focus — rowing makes hard work feel almost meditative.',
    guide:{
      whyItFits:"Rowing is low-impact but demanding, with a rhythm that rewards patience. You can try the movement on an indoor rower before committing to a club or getting on the water.",
      howToStart:"Try an indoor rower at a gym for 10 easy minutes, focusing on smooth legs-body-arms timing. If it clicks, ask a local club about learn-to-row programmes.",
      equipment:[{item:'Athletic clothes',tier:'need'},{item:'Rowing gloves (optional)',tier:'nice'},{item:'Club membership',tier:'need'}],
      adaptive:{
        low_budget:'Indoor erg machines are at most gyms — no club membership needed to start. Concept2 rowing app is free.',
        no_equipment:'Most rowing clubs provide everything on the water. Ask what clothing to wear before you go.',
        shy_solo:'Indoor rowing (erg) is completely solo. Many gyms have them.',
        social_team:'Rowing clubs are strong social communities — crew boats require teamwork.',
        limited_time:'Ten to twenty minutes on an erg is enough when you are learning the motion.',
        competitive:'Head race and sprint regattas have beginner categories at most rowing clubs.',
      },
      checklist:['Find a gym with erg machines or a local rowing club','Try 10 easy minutes on an indoor rower','Watch one form tutorial before your next attempt','Look up learn-to-row programmes near you']
    }
  },

  golf: {
    id:'golf', name:'Golf', icon:'⛳',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:"Quiet focus, tiny adjustments, and the strange joy of one clean shot.",
    guide:{
      whyItFits:"Golf is slow in a useful way. You can practice alone, take breaks, and chase one simple feeling: clean contact. A range removes the pressure of keeping score.",
      howToStart:"Go to a driving range and rent clubs if you need them. Start with half-swings and short irons; distance does not matter on day one.",
      equipment:[{item:'Golf clubs (rent to start)',tier:'rent'},{item:'Golf balls',tier:'need'},{item:'Golf shoes',tier:'later'}],
      adaptive:{
        low_budget:'Driving ranges charge $10–20 for a bucket of balls. Club rental is usually $5–10 extra. Many municipal courses are under $25.',
        no_equipment:"Driving ranges and courses rent clubs. You don't need to own anything to start.",
        shy_solo:"Driving ranges and solo rounds are the norm — no one expects you to know anyone.",
        social_team:'Golf leagues and four-ball formats are social. Many clubs run mixer events.',
        limited_time:"A small bucket at the range is enough. You do not need a full round to start.",
        competitive:'Every golf club has a handicap system that makes fair competition possible at any level.',
      },
      checklist:['Find a nearby driving range','Buy a small bucket and rent clubs if needed','Focus only on making clean contact','Look up a local municipal course for later']
    }
  },

  gym_training: {
    id:'gym_training', name:'Gym Training', icon:'🏋️',
    fitTags:['shy_solo','high_energy'],
    pitch:'Flexible, measurable, and private enough to make progress on your own terms.',
    guide:{
      whyItFits:"Gym training works when you want clear feedback: more reps, steadier form, a little more weight, better energy. You can train quietly without joining a team or learning a whole sport culture.",
      howToStart:'Use a trial pass or budget gym. On day one, do a simple full-body circuit with light weights: squat, press, row, and hinge. Leave feeling like you could have done more.',
      equipment:[{item:'Gym membership',tier:'need'},{item:'Athletic shoes',tier:'need'},{item:'Water bottle',tier:'need'}],
      adaptive:{
        low_budget:'Budget gyms (Planet Fitness, YMCA) are $10–25/month. Many offer free first visits.',
        no_equipment:'The gym provides everything. You need shoes.',
        shy_solo:'Gyms are mostly solo environments. Most people are focused on their own training.',
        social_team:'Group fitness classes (CrossFit, bootcamp) offer a social gym experience.',
        limited_time:'A focused 25- to 30-minute full-body session works when you repeat it consistently.',
        competitive:'Powerlifting and Olympic weightlifting have beginner competitions at local gyms.',
      },
      checklist:['Find a gym with a free trial or day pass','Complete a light 25-minute full-body workout','Log the exercises and weights you used','Schedule your next visit before you leave']
    }
  },

  calisthenics: {
    id:'calisthenics', name:'Calisthenics', icon:'💪',
    fitTags:['shy_solo','no_equipment','low_budget','high_energy'],
    pitch:'No membership, no machines — just small strength wins you can stack anywhere.',
    guide:{
      whyItFits:"Calisthenics makes strength feel practical. You learn to control your own body first, and every movement has easier versions you can scale down.",
      howToStart:'Start with one gentle circuit: chair squats, wall or incline push-ups, dead bugs, and a short plank. Rest as needed and repeat it two or three times this week.',
      equipment:[{item:'Nothing required to start',tier:'need'},{item:'Pull-up bar ($20)',tier:'nice'},{item:'Gymnastic rings',tier:'later'}],
      adaptive:{
        low_budget:'Completely free. Parks with pull-up bars exist in most cities.',
        no_equipment:'No equipment needed. A floor, wall, and sturdy chair cover the basics.',
        shy_solo:'Easy to do entirely alone at home or in a quiet corner of a park.',
        social_team:'Calisthenics parks attract informal communities — people often train together.',
        limited_time:'A 15- to 20-minute bodyweight circuit is enough when the movements are controlled.',
        competitive:'Street workout competitions exist at local and international levels.',
      },
      checklist:['Find a clear floor space at home','Complete one easy circuit of squats, wall push-ups, and a short plank','Write down how it felt','Repeat the routine 2 more times this week']
    }
  },

  table_tennis: {
    id:'table_tennis', name:'Table Tennis', icon:'🏓',
    fitTags:['social_team','competitive','low_budget'],
    pitch:'Fast hands, quick laughs, and enough spin to keep your brain busy.',
    guide:{
      whyItFits:'Table tennis is small enough to start casually and deep enough to stay fascinating. You get quick feedback on touch, spin, and placement without needing much space.',
      howToStart:'Find a table at a community centre, pub, office, or park. Borrow a paddle and rally slowly; keeping the ball on the table is the whole goal at first.',
      equipment:[{item:'Table tennis paddle ($15–25)',tier:'need'},{item:'Table tennis balls (pack of 6)',tier:'need'}],
      adaptive:{
        low_budget:'A decent paddle costs $15–20. Many community centres have free tables.',
        no_equipment:'Community centres and pubs often have paddles and balls available.',
        shy_solo:'Solo practice against a wall (ping pong rebound board) is effective and cheap.',
        social_team:'Round-the-table (group game) makes table tennis very social.',
        limited_time:'A match takes 10–15 minutes. Perfect for a lunch break.',
        competitive:'USATT and national associations have beginner tournament pathways.',
      },
      checklist:['Find a table tennis table near you','Borrow or get a basic paddle','Rally slowly with someone for 15 minutes','Learn the basic serve rule']
    }
  },

  lacrosse: {
    id:'lacrosse', name:'Lacrosse', icon:'🥍',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Fast feet, quick hands, and a strong team identity — lacrosse feels different right away.',
    guide:{
      whyItFits:'Lacrosse combines running, passing, and hand skills in a way that feels fast from the first drill. Wall ball gives you a solo path in, while clubs provide the team piece.',
      howToStart:'Find a local lacrosse club or recreational league and ask whether they loan gear. Start with wall ball: gentle throws and catches from close range.',
      equipment:[{item:'Lacrosse stick',tier:'need'},{item:'Helmet and pads (full lacrosse)',tier:'need'},{item:'Cleats',tier:'need'}],
      adaptive:{
        low_budget:'Used equipment is widely available, but ask about loaner gear before buying. Box lacrosse often needs less gear than field.',
        no_equipment:'Some club programmes loan equipment to beginners for the first season.',
        shy_solo:'Wall ball (throwing against a wall) is a legitimate solo lacrosse practice.',
        social_team:'Lacrosse clubs tend to have a strong team identity, especially around practices and tournaments.',
        limited_time:'Ten to twenty minutes of wall ball is enough to build stick feel.',
        competitive:'USA Lacrosse runs leagues and tournaments at every level.',
      },
      checklist:['Find a local lacrosse club or league','Ask about loaner gear before buying','Practise gentle wall ball for 10 minutes','Attend a beginner club practice']
    }
  },

  rugby: {
    id:'rugby', name:'Rugby', icon:'🏉',
    fitTags:['social_team','high_energy','competitive'],
    pitch:"Big team energy, real camaraderie, and a non-contact doorway through tag rugby.",
    guide:{
      whyItFits:"Rugby can be intense, but the club culture is famously generous to newcomers. Tag rugby and rookie sessions let you learn spacing, passing, and support play before contact.",
      howToStart:'Find a local rugby club and ask about tag rugby, touch rugby, or rookie sessions. Watch or attend the beginner option first.',
      equipment:[{item:'Rugby boots / cleats',tier:'need'},{item:'Mouthguard',tier:'need'},{item:'Shorts and jersey',tier:'have'}],
      adaptive:{
        low_budget:'Most clubs have kit to borrow. Boots are your main cost.',
        no_equipment:'Clubs often have spare gear for beginners. Ask before buying anything.',
        shy_solo:'Tag or touch rugby removes the intimidation of full contact while you learn the shape of the game.',
        social_team:'Rugby clubs are social by design: training, match days, and post-game traditions all matter.',
        limited_time:'Training sessions often run 90 minutes, while tag or touch sessions may be shorter.',
        competitive:'Club rugby has clear pathways, but beginners can stay in touch or development formats as long as needed.',
      },
      checklist:['Find a local rugby club','Ask about tag, touch, or beginner programmes','Watch or attend one rookie session','Get a mouthguard before any contact session']
    }
  },

  fencing: {
    id:'fencing', name:'Fencing', icon:'🤺',
    fitTags:['shy_solo','competitive'],
    pitch:'Tactical, precise, and a little dramatic — fencing makes competition feel like a duel and a puzzle.',
    guide:{
      whyItFits:'Fencing is chess at speed, but with footwork and timing you can feel. Clubs usually provide the kit, so the first barrier is simply trying a beginner class.',
      howToStart:'Find a local fencing club and attend a beginner intro. Expect footwork, safety rules, and simple drills before any real bout.',
      equipment:[{item:'Fencing mask',tier:'club'},{item:'Jacket and glove',tier:'club'},{item:'Blade (after lessons)',tier:'later'}],
      adaptive:{
        low_budget:'Clubs provide equipment. Your cost is club membership and lesson fees.',
        no_equipment:'Everything is provided by the club for beginners.',
        shy_solo:'Individual weapon drilling and footwork are solo-friendly.',
        social_team:'Fencing clubs are small, tight-knit communities.',
        limited_time:'A group lesson runs 45-60 minutes. Private lessons can be shorter once you know you like it.',
        competitive:'USA Fencing runs novice events once your coach says you are ready.',
      },
      checklist:['Find a local fencing club','Attend a beginner class (club provides equipment)','Learn the three basic commands: en garde, ready, fence','Go back at least 3 times before deciding']
    }
  },

  softball: {
    id:'softball', name:'Softball', icon:'🥎',
    fitTags:['social_team','competitive'],
    pitch:'A social league night with just enough competition to make the next at-bat matter.',
    guide:{
      whyItFits:"Softball works because it gives adults a reason to gather, move, and compete without training like professionals. Recreational leagues usually care more about showing up than having a perfect swing.",
      howToStart:"Search your city's parks department for adult softball leagues and ask about free-agent registration. Many leagues can place solo players on teams.",
      equipment:[{item:'Softball glove',tier:'need'},{item:'Bat (often provided by league)',tier:'nice'},{item:'Cleats',tier:'nice'}],
      adaptive:{
        low_budget:'Leagues often have shared bats. A used glove: $15–25.',
        no_equipment:'Many leagues have loaner equipment. Ask when registering.',
        shy_solo:'Batting practice at a cage is a solo option to build confidence.',
        social_team:'Co-ed adult softball leagues are explicitly social. Post-game food or drinks are often part of the rhythm.',
        limited_time:'Games run 60–90 minutes. One game per week is the normal commitment.',
        competitive:'City-wide recreational tournaments run at the end of most seasons.',
      },
      checklist:['Search your city parks department for adult softball leagues','Ask whether solo players can register as free agents','Get or borrow a basic glove','Show up early to your first game']
    }
  },

  gymnastics: {
    id:'gymnastics', name:'Gymnastics', icon:'🤸',
    fitTags:['high_energy','shy_solo','competitive'],
    pitch:'Body control, bravery, and basics — adult gymnastics starts much smaller than the highlight reels.',
    guide:{
      whyItFits:'Gymnastics builds strength, mobility, and body awareness in a way regular workouts rarely do. Adult beginner classes usually start with shapes, rolls, and safe progressions, not flips.',
      howToStart:'Find a gymnastics club that offers adult classes and ask what beginners work on. Expect warm-ups, floor basics, and progressions before apparatus skills.',
      equipment:[{item:'Gymnastics shorts/leotard',tier:'need'},{item:'Gymnastics shoes or bare feet',tier:'need'},{item:'Wrist wraps',tier:'nice'}],
      adaptive:{
        low_budget:'Adult class fees vary — $10–25 per class. Many clubs offer monthly rates.',
        no_equipment:'The gym provides all apparatus. You need clothes that move.',
        shy_solo:'Floor routines and conditioning are done individually.',
        social_team:'Gymnastics clubs have a strong community and social structure.',
        limited_time:'A class usually runs 60-90 minutes, and you will feel it the next day.',
        competitive:'Adult gymnastics competitions (artistry, trampoline) exist at beginner levels.',
      },
      checklist:['Find a gymnastics club with adult beginner classes','Ask what a first class covers','Attend your first class','Learn one basic shape or roll progression']
    }
  },

  skiing: {
    id:'skiing', name:'Skiing', icon:'⛷️',
    fitTags:['high_energy','social_team'],
    pitch:'Cold air, big scenery, and a learning curve that rewards good instruction.',
    guide:{
      whyItFits:'Skiing is exhilarating, but it is much more enjoyable when the first day is structured. Resorts are built for lessons, rentals, and beginner terrain, so use that support.',
      howToStart:'Book a beginner lesson at a ski resort or small local hill. Rentals cover the gear; your job is to learn stopping, turning, and staying relaxed.',
      equipment:[{item:'Ski rental package (skis, boots, poles)',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Goggles',tier:'need'},{item:'Gloves',tier:'need'}],
      adaptive:{
        low_budget:'Midweek packages with rental and lesson: $60–90. Smaller local hills are much cheaper than major resorts.',
        no_equipment:'Resorts rent everything. You only need warm waterproof layers.',
        shy_solo:'Beginner group lessons mix strangers. You ski at your own pace.',
        social_team:'Shared chairlifts, après-ski culture, and group lessons make meeting people easy.',
        limited_time:'A half-day lesson is enough for a first taste. Your legs will agree.',
        competitive:"Ski racing and freestyle have structured progression once you're comfortable on slopes.",
      },
      checklist:['Book a beginner lesson at a local resort or hill','Rent full gear on arrival','Learn to stop and make a few controlled turns','Ask about a return discount']
    }
  },

  snowboarding: {
    id:'snowboarding', name:'Snowboarding', icon:'🏂',
    fitTags:['high_energy','shy_solo'],
    pitch:'A bruising first day, then a glide that makes people weirdly loyal.',
    guide:{
      whyItFits:"Snowboarding has a distinct culture and a flow state that feels different from anything else on snow. The first day involves falling, so the realistic plan is patience and a second try.",
      howToStart:'Book a beginner snowboard lesson and wear wrist guards. Focus on falling safely, standing up, and controlling one edge before judging the sport.',
      equipment:[{item:'Snowboard rental package',tier:'rent'},{item:'Warm waterproof jacket and pants',tier:'need'},{item:'Wrist guards',tier:'need'},{item:'Goggles and gloves',tier:'need'}],
      adaptive:{
        low_budget:'Rental and lesson packages are similar to skiing. Look for midweek deals.',
        no_equipment:'Resorts rent everything. Bring waterproof layers.',
        shy_solo:'You can practise at your own pace once you have the basics from a lesson.',
        social_team:'Snowboard parks have a social, helpful culture.',
        limited_time:'A 2- to 3-hour lesson is enough for day one.',
        competitive:'Halfpipe, slopestyle, and boardercross have structured pathways at most resorts.',
      },
      checklist:['Book a beginner snowboard lesson','Rent wrist guards','Learn how to fall and stand up safely','Go back a second time before deciding']
    }
  },

  surfing: {
    id:'surfing', name:'Surfing', icon:'🏄',
    fitTags:['high_energy','shy_solo'],
    pitch:'Patience, balance, and ocean timing — surfing is hard, humbling, and unforgettable.',
    guide:{
      whyItFits:'Surfing combines physical effort with reading water, which makes every session feel alive. A surf school keeps the first day safe and gives you realistic beginner waves.',
      howToStart:'Book a lesson at a surf school. They provide foam boards, choose safer whitewater, and teach etiquette. Do not self-teach in open ocean.',
      equipment:[{item:'Surfboard (foam board)',tier:'rent'},{item:'Wetsuit (cold water)',tier:'rent'},{item:'Surf leash',tier:'need'},{item:'Water-resistant sunscreen',tier:'need'}],
      adaptive:{
        low_budget:'Surf school lessons run $50–80 including gear. Bodyboarding is a cheaper first step.',
        no_equipment:'Surf schools provide everything. Show up in swimwear.',
        shy_solo:"Surfing is largely solitary — you're focused on waves, not people.",
        social_team:'Surf culture is social at lineups and beach communities.',
        limited_time:'A 2-hour surf lesson is plenty for a first experience.',
        competitive:'Local surf competitions and club leagues exist near most coastal communities.',
      },
      checklist:['Find a surf school near a beginner break','Book a 2-hour lesson','Learn basic ocean safety and etiquette','Celebrate any whitewater ride, even on your knees']
    }
  },

  archery: {
    id:'archery', name:'Archery', icon:'🏹',
    fitTags:['shy_solo','competitive','low_impact'],
    pitch:'Quiet focus with a visible payoff — every arrow tells you something.',
    guide:{
      whyItFits:'Archery is calm without being passive. The ritual of stance, breath, anchor, and release gives your brain something precise to settle into.',
      howToStart:"Find a local archery club and ask about beginner sessions. Equipment is usually provided, so do not buy anything yet.",
      equipment:[{item:'Recurve bow',tier:'club'},{item:'Arrows',tier:'club'},{item:'Arm guard and finger tab',tier:'club'},{item:'Own bow (after 2–3 months)',tier:'later'}],
      adaptive:{
        low_budget:"Clubs provide all equipment. Session fee: $10–20. Don't buy anything until you're committed.",
        no_equipment:'Club equipment is usually included in intro sessions. Confirm before you go.',
        shy_solo:'Deeply individual. You focus on your own targets and progress.',
        social_team:'Archery clubs are quieter than many sport communities, but club nights and shoots are genuinely social.',
        limited_time:'A session runs 60–90 minutes. Indoor ranges are weather-independent.',
        competitive:'USA Archery has structured competition pathways from beginner to Olympic level.',
      },
      checklist:['Find a local archery club','Book a beginner intro session','Learn the basic stance and anchor point','Shoot your first short round with club equipment']
    }
  },

  cheer: {
    id:'cheer', name:'Cheerleading', icon:'📣',
    fitTags:['social_team','high_energy','competitive'],
    pitch:'Performance, power, and trust — cheer is athletic teamwork with the volume turned up.',
    guide:{
      whyItFits:'Competitive cheer combines tumbling, stunting, jumps, dance, and performance under pressure. Entry-level teams exist, but the schedule and teamwork are real commitments.',
      howToStart:'Find a local All-Star, school, or community cheer gym and ask about beginner or novice programmes. No prior experience is usually required for entry-level teams.',
      equipment:[{item:'Athletic wear with full range of motion',tier:'need'},{item:'Cheer shoes (flexible, cross-training)',tier:'need'},{item:'Team uniform (provided by gym)',tier:'later'}],
      adaptive:{
        low_budget:'All-Star cheer has fees. Look for school squads or community programmes as lower-cost entry.',
        no_equipment:'Gyms provide mats and all equipment. You need shoes and athletic wear.',
        shy_solo:"Cheerleading is entirely team-based. Not ideal if you want to start alone.",
        social_team:"One of the strongest team cultures in sport. Trust is part of the skill, not a bonus.",
        limited_time:'Practices run 2–3 hours. This sport requires a real time commitment.',
        competitive:'All-Star cheer has a full competition circuit from Levels 1–7 with nationals and worlds.',
      },
      checklist:['Find a local cheer gym or community programme','Attend an open house or trial practice','Learn one basic motion or jump','Ask about the team schedule and full cost before committing']
    }
  },

}

export default SPORTS
