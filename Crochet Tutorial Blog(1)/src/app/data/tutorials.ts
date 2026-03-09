export interface Tutorial {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  date: string;
  readTime: string;
  content: {
    materials: string[];
    steps: { title: string; description: string }[];
    tips?: string[];
  };
}

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Getting Started with Crochet: Your First Chain',
    description: 'Learn the fundamental chain stitch that forms the foundation of all crochet projects.',
    image: 'https://images.unsplash.com/photo-1700170726155-fe844921b8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIweWFybiUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzAzNTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Basics',
    difficulty: 'Beginner',
    date: 'March 1, 2026',
    readTime: '5 min read',
    content: {
      materials: [
        'Medium weight yarn (worsted weight)',
        'Size H/8 (5mm) crochet hook',
        'Scissors',
        'Yarn needle for weaving in ends',
      ],
      steps: [
        {
          title: 'Make a slip knot',
          description: 'Create a loop with your yarn, then pull another loop through it. Place this on your hook and gently tighten.',
        },
        {
          title: 'Yarn over',
          description: 'Wrap the yarn over your hook from back to front.',
        },
        {
          title: 'Pull through',
          description: 'Draw the yarn through the loop on your hook. You\'ve made your first chain stitch!',
        },
        {
          title: 'Continue chaining',
          description: 'Repeat steps 2-3 to create a chain of the desired length. Try making a chain of 20 stitches for practice.',
        },
      ],
      tips: [
        'Keep your tension even - not too tight, not too loose',
        'Count your chains as you go to avoid losing track',
        'The loop on the hook never counts as a stitch',
      ],
    },
  },
  {
    id: '2',
    title: 'Classic Granny Square Tutorial',
    description: 'Master the iconic granny square pattern perfect for blankets, bags, and more.',
    image: 'https://images.unsplash.com/photo-1772445693242-c176fe7296b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwZ3Jhbm55JTIwc3F1YXJlfGVufDF8fHx8MTc3MzA2Njk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Patterns',
    difficulty: 'Intermediate',
    date: 'February 28, 2026',
    readTime: '10 min read',
    content: {
      materials: [
        'Worsted weight yarn in 3-4 colors',
        'Size H/8 (5mm) crochet hook',
        'Scissors',
        'Yarn needle',
      ],
      steps: [
        {
          title: 'Start with a magic ring',
          description: 'Create a magic ring (also called magic circle) to begin your square with a tight center.',
        },
        {
          title: 'Round 1: Foundation',
          description: 'Ch 3 (counts as first dc), 2 dc in ring, [ch 2, 3 dc in ring] 3 times, ch 2, sl st to top of beginning ch-3.',
        },
        {
          title: 'Round 2: Building corners',
          description: 'Sl st to corner space, ch 3, (2 dc, ch 2, 3 dc) in same space, *ch 1, (3 dc, ch 2, 3 dc) in next corner space; repeat from * twice more, ch 1, sl st to top of beginning ch-3.',
        },
        {
          title: 'Continue expanding',
          description: 'Repeat the pattern, adding ch-1 spaces between corner clusters on each round. Work until square reaches desired size.',
        },
      ],
      tips: [
        'Change colors at the end of each round for a vibrant look',
        'Block your finished square for crisp edges',
        'Make multiple squares and join them for larger projects',
      ],
    },
  },
  {
    id: '3',
    title: 'Cute Amigurumi Bunny Pattern',
    description: 'Create an adorable stuffed bunny toy with this beginner-friendly amigurumi pattern.',
    image: 'https://images.unsplash.com/photo-1723719121605-5623e3a4f538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYW1pZ3VydW1pfGVufDF8fHx8MTc3MzA2Njk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Toys',
    difficulty: 'Intermediate',
    date: 'February 25, 2026',
    readTime: '15 min read',
    content: {
      materials: [
        'Light worsted weight yarn (main color)',
        'Small amount of pink yarn for nose',
        'Size E/4 (3.5mm) crochet hook',
        'Safety eyes (12mm)',
        'Polyester fiberfill stuffing',
        'Yarn needle',
        'Stitch markers',
      ],
      steps: [
        {
          title: 'Head',
          description: 'Start with a magic ring. Rnd 1: 6 sc in ring. Rnd 2: Inc in each st around (12). Rnd 3: [Sc, inc] around (18). Continue increasing until you have 42 sts, then work even rounds.',
        },
        {
          title: 'Body',
          description: 'Similar to the head, create the body by starting with increases, working straight rounds, then decreasing. Stuff firmly before closing.',
        },
        {
          title: 'Ears (make 2)',
          description: 'Create long oval shapes by chaining, working down both sides of the chain, and continuing in spiral for several rounds.',
        },
        {
          title: 'Assembly',
          description: 'Attach safety eyes, embroider nose with pink yarn, sew ears to head, and attach head to body. Add a fluffy tail with yarn pom-pom.',
        },
      ],
      tips: [
        'Use a smaller hook than recommended for tight stitches',
        'Stuff as you go to ensure even filling',
        'Place safety eyes before closing up the head',
      ],
    },
  },
  {
    id: '4',
    title: 'Cozy Chunky Blanket',
    description: 'Work up this beautiful blanket in a weekend using chunky yarn and simple stitches.',
    image: 'https://images.unsplash.com/photo-1670764732015-61a5cc490ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMHBhdHRlcm58ZW58MXx8fHwxNzczMDY2OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Home Decor',
    difficulty: 'Beginner',
    date: 'February 20, 2026',
    readTime: '8 min read',
    content: {
      materials: [
        'Super bulky weight yarn (6-8 skeins)',
        'Size N/15 (10mm) crochet hook',
        'Scissors',
        'Yarn needle',
      ],
      steps: [
        {
          title: 'Foundation chain',
          description: 'Chain 60 (or desired width in multiples of 3, plus 3 for turning chain). This will create a lap-sized blanket.',
        },
        {
          title: 'Row 1',
          description: 'Dc in 4th ch from hook and in each ch across. Ch 3, turn.',
        },
        {
          title: 'Row 2',
          description: 'Skip first dc, dc in each dc across, dc in top of turning chain. Ch 3, turn.',
        },
        {
          title: 'Continue',
          description: 'Repeat Row 2 until blanket reaches desired length (approximately 60 rows for a lap blanket). Fasten off and weave in ends.',
        },
      ],
      tips: [
        'Chunky yarn works up quickly - perfect for gift-making',
        'Add a simple border for a polished look',
        'Consider color blocking by changing colors every few rows',
      ],
    },
  },
  {
    id: '5',
    title: 'Modern Crochet Basket',
    description: 'Create a stylish storage basket perfect for organizing your yarn stash or home items.',
    image: 'https://images.unsplash.com/photo-1532629804872-98086b058cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmFza2V0JTIwaGFuZG1hZGV8ZW58MXx8fHwxNzczMDY2OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Home Decor',
    difficulty: 'Intermediate',
    date: 'February 15, 2026',
    readTime: '12 min read',
    content: {
      materials: [
        'T-shirt yarn or bulky cotton yarn',
        'Size K/10.5 (6.5mm) crochet hook',
        'Stitch marker',
        'Yarn needle',
      ],
      steps: [
        {
          title: 'Base',
          description: 'Start with a magic ring. Rnd 1: 8 sc in ring. Rnd 2: Inc in each st (16). Continue increasing in spiral pattern until base reaches desired diameter (about 8-10 inches).',
        },
        {
          title: 'Sides',
          description: 'Once base is complete, work in BLO (back loops only) for one round to create a defined edge. Then continue working sc in both loops.',
        },
        {
          title: 'Build height',
          description: 'Work even rounds (no increases) in continuous spiral for 6-8 inches, or until basket reaches desired height.',
        },
        {
          title: 'Finishing',
          description: 'Optional: Add handles by chaining and attaching to opposite sides. Weave in ends securely.',
        },
      ],
      tips: [
        'Use stiff yarn or double strands for a sturdy basket',
        'Working tightly helps the basket hold its shape',
        'Fold down the top edge for a stylish cuffed look',
      ],
    },
  },
  {
    id: '6',
    title: 'Understanding Crochet Hooks and Yarn Weights',
    description: 'A comprehensive guide to choosing the right tools for your crochet projects.',
    image: 'https://images.unsplash.com/photo-1595301390417-c66647b47e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaG9vayUyMGNyYWZ0aW5nfGVufDF8fHx8MTc3MzA2Njk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Basics',
    difficulty: 'Beginner',
    date: 'February 10, 2026',
    readTime: '7 min read',
    content: {
      materials: [
        'Various crochet hooks for comparison',
        'Sample skeins of different yarn weights',
      ],
      steps: [
        {
          title: 'Yarn weight categories',
          description: 'Learn the standard yarn weight system from 0 (lace) to 7 (jumbo). Most beginners start with 4 (worsted weight) or 5 (chunky).',
        },
        {
          title: 'Hook sizes',
          description: 'Understand the relationship between hook size and yarn weight. Hooks range from steel (smallest) to Q and beyond (largest). Letter and millimeter sizes help you find the right match.',
        },
        {
          title: 'Reading yarn labels',
          description: 'Yarn labels provide recommended hook size, gauge, fiber content, and care instructions. Always check the label before starting a project.',
        },
        {
          title: 'Tension and gauge',
          description: 'Your personal tension affects the final size of your project. Always make a gauge swatch to ensure your project turns out the right size.',
        },
      ],
      tips: [
        'Invest in a hook set to experiment with different sizes',
        'Ergonomic hooks can reduce hand fatigue during long sessions',
        'Keep a project journal noting which hook sizes work best for you',
      ],
    },
  },
];

export const categories = ['All', 'Basics', 'Patterns', 'Toys', 'Home Decor'];
