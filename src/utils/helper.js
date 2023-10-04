var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function makeRandomMessage(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};


const calcViews = (input) => {
  const ranges = [
    {
      divider: 1e3,
      suffix: "K",
    },
    {
      divider: 1e6,
      suffix: "M",
    },
    {
      divider: 1e9,
      suffix: "B",
    },
  ];

  for (let index = ranges.length - 1; index >= 0; index--) {
    if (input > ranges[index].divider) {
      let quotient = input / ranges[index].divider;

      if (quotient < 10) {
        quotient = Math.floor(quotient * 10) / 10;
      } else {
        quotient = Math.floor(quotient);
      }

      return quotient?.toString() + ranges[index].suffix;
    }
  }

  return input?.toString();
};

const calcTime = (text) => {
  const currentTime = new Date();

  const publishedTime = new Date(text);

  const timeDiff = Math.floor((currentTime - publishedTime) / 1000);

  const years = Math.floor(timeDiff / (365 * 24 * 60 * 60));
  const months = Math.floor(timeDiff / (30 * 24 * 60 * 60));
  const weeks = Math.floor(timeDiff / (7 * 24 * 60 * 60));
  const days = Math.floor(timeDiff / (24 * 60 * 60));
  const hours = Math.floor(timeDiff / (60 * 60));
  const minutes = Math.floor(timeDiff / 60);
  const seconds = timeDiff;

  let timeUnit = "";
  let timeValue = 0;

  if (years > 0) {
    timeUnit = "year";
    timeValue = years;
  } else if (months > 0) {
    timeUnit = "month";
    timeValue = months;
  } else if (weeks > 0) {
    timeUnit = "week";
    timeValue = weeks;
  } else if (days > 0) {
    timeUnit = "day";
    timeValue = days;
  } else if (hours > 0) {
    timeUnit = "hour";
    timeValue = hours;
  } else if (minutes > 0) {
    timeUnit = "minute";
    timeValue = minutes;
  } else {
    timeUnit = "second";
    timeValue = seconds;
  }
  return `${timeValue} ${timeUnit}${timeValue !== 1 ? "s" : ""} ago`;
};

export { calcTime, calcViews};
