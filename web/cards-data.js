// 愈见卡牌 · 数据（共 26 张）
// group: core 核心主牌 | maiden 少女与神话 | tale 意象与物语
// image: 01/02/13 在主包 /images/（首页与篇章页预览用），其余 23 张在分包 /cardsPkg/images/，出图后按编号覆盖同名文件
const cards = [
  // ——— 核心主牌（小熊与命运之轮）———
  {
    id: 1, name: '拥抱者', en: 'The Embrace', group: 'core',
    keywords: ['接纳', '安全感', '自我安抚'],
    healing: '不需要时刻坚强，此刻，允许自己做一个被宠爱的小孩。',
    action: '给自己一个大大的拥抱，或者抱紧一个抱枕，深呼吸三次。',
    image: '../images/card_01.jpg'
  },

  // ——— 少女与神话篇 ———
  {
    id: 2, name: '镜中少女', en: 'The Mirror', group: 'maiden',
    keywords: ['自省', '迷茫', '寻找真我'],
    healing: '你看到的自己并不完整，那些裂痕，是光照进来的地方。',
    action: '写下三个你喜欢的自己身上的优点，贴在镜子上。',
    image: '../images/card_02.jpg'
  },
  {
    id: 3, name: '提灯夜游', en: 'The Lantern', group: 'maiden',
    keywords: ['希望', '探索', '微小的勇气'],
    healing: '哪怕周围漆黑一片，你手里的光也足够照亮脚下的路。',
    action: '今晚早点睡，睡前点一盏小夜灯，告诉自己“我很安全”。',
    image: '../cardsPkg/images/card_03.jpg'
  },
  {
    id: 4, name: '人鱼之泪', en: 'The Tears', group: 'maiden',
    keywords: ['释放', '悲伤', '净化'],
    healing: '哭泣不是软弱，是灵魂在下雨，雨后会有彩虹。',
    action: '看一部感人的电影，痛痛快快哭一场，把情绪排出去。',
    image: '../cardsPkg/images/card_04.jpg'
  },
  {
    id: 5, name: '荆棘王冠', en: 'The Crown', group: 'maiden',
    keywords: ['忍耐', '成长', '痛苦的意义'],
    healing: '现在的疼痛，是在为你加冕。你在经历一场华丽的蜕变。',
    action: '做一件虽然困难但对你有益的小事（比如运动10分钟）。',
    image: '../cardsPkg/images/card_05.jpg'
  },
  {
    id: 6, name: '风之信使', en: 'The Wind', group: 'maiden',
    keywords: ['自由', '消息', '打破束缚'],
    healing: '烦恼像风一样，抓不住也留不下，让它吹过去吧。',
    action: '去户外走走，或者打开窗户，让风吹进房间。',
    image: '../cardsPkg/images/card_06.jpg'
  },
  {
    id: 7, name: '沉睡花园', en: 'The Sleep', group: 'maiden',
    keywords: ['休息', '停滞', '充电'],
    healing: '什么都不做也没关系，花朵在开放前，也需要漫长的冬眠。',
    action: '放下手机，发呆15分钟，或者睡个午觉。',
    image: '../cardsPkg/images/card_07.jpg'
  },
  {
    id: 8, name: '编织命运', en: 'The Weaver', group: 'maiden',
    keywords: ['创造', '规划', '掌控力'],
    healing: '生活是一团乱麻，但你手里有针线，可以把它织成画。',
    action: '整理一下桌面，或者列一个明天的“小小愿望清单”。',
    image: '../cardsPkg/images/card_08.jpg'
  },
  {
    id: 9, name: '深海潜水员', en: 'The Deep', group: 'maiden',
    keywords: ['潜意识', '深层情绪', '孤独'],
    healing: '潜入心底深处去看看，那里虽然安静，但藏着巨大的温柔。',
    action: '洗一个热水澡，想象水流带走了所有的疲惫。',
    image: '../cardsPkg/images/card_09.jpg'
  },
  {
    id: 10, name: '火焰舞者', en: 'The Fire', group: 'maiden',
    keywords: ['激情', '愤怒', '生命力'],
    healing: '燃烧吧！无论是爱还是怒火，都是你活着的证明。',
    action: '听一首节奏感强的歌，跟着节奏抖动身体。',
    image: '../cardsPkg/images/card_10.jpg'
  },
  {
    id: 11, name: '时间观测者', en: 'The Time', group: 'maiden',
    keywords: ['焦虑', '等待', '时机'],
    healing: '别急着要答案，时间会把最好的礼物在最后才拆开。',
    action: '把担心的事情写在纸上，折成飞机扔进垃圾桶。',
    image: '../cardsPkg/images/card_11.jpg'
  },
  {
    id: 12, name: '双子星', en: 'The Twins', group: 'maiden',
    keywords: ['矛盾', '选择', '平衡'],
    healing: '接受自己的两面性，快乐和悲伤都是你的一部分。',
    action: '做一个决定，无论选哪个，都告诉自己“这是最好的安排”。',
    image: '../cardsPkg/images/card_12.jpg'
  },

  // ——— 意象与物语篇 ———
  {
    id: 13, name: '独角兽的角', en: 'Unicorn', group: 'tale',
    keywords: ['纯真', '奇迹', '信念'],
    healing: '相信美好，美好才会发生。你的纯真就是你的魔法。',
    action: '',
    image: '../images/card_13.jpg'
  },
  {
    id: 14, name: '枯萎玫瑰', en: 'Withered Rose', group: 'tale',
    keywords: ['怀念', '永恒', '放手'],
    healing: '有些东西离开了，但记忆把它变成了永恒的艺术品。',
    action: '',
    image: '../cardsPkg/images/card_14.jpg'
  },
  {
    id: 15, name: '破茧', en: 'Cocoon', group: 'tale',
    keywords: ['转变', '挣扎', '新生'],
    healing: '现在的束缚只是暂时的，你马上就要飞起来了。',
    action: '',
    image: '../cardsPkg/images/card_15.jpg'
  },
  {
    id: 16, name: '悬浮岛屿', en: 'Floating Island', group: 'tale',
    keywords: ['逃避', '独立空间', '想象力'],
    healing: '如果现实太累，就在心里建一座小岛躲一躲。',
    action: '',
    image: '../cardsPkg/images/card_16.jpg'
  },
  {
    id: 17, name: '水晶鞋', en: 'Glass Slipper', group: 'tale',
    keywords: ['遗憾', '错过', '新的可能'],
    healing: '没赶上的那班车，也许是为了让你遇见路边的花。',
    action: '',
    image: '../cardsPkg/images/card_17.jpg'
  },
  {
    id: 18, name: '捕梦网', en: 'Dreamcatcher', group: 'tale',
    keywords: ['守护', '过滤', '好梦'],
    healing: '噩梦会被网住消散，留下的只有甜美的梦。',
    action: '',
    image: '../cardsPkg/images/card_18.jpg'
  },
  {
    id: 19, name: '断翼天使', en: 'Broken Wing', group: 'tale',
    keywords: ['受伤', '治愈', '不完美'],
    healing: '即使受了伤，你依然拥有爱与被爱的能力。',
    action: '',
    image: '../cardsPkg/images/card_19.jpg'
  },
  {
    id: 20, name: '钥匙孔', en: 'Keyhole', group: 'tale',
    keywords: ['机会', '秘密', '突破口'],
    healing: '门没有锁，试着推一下，外面有你想要的风景。',
    action: '',
    image: '../cardsPkg/images/card_20.jpg'
  },
  {
    id: 21, name: '暴雨屋檐', en: 'Rainy Eaves', group: 'tale',
    keywords: ['庇护', '安全感', '旁观'],
    healing: '外面的风雨再大，只要心有屋檐，就能安然无恙。',
    action: '',
    image: '../cardsPkg/images/card_21.jpg'
  },
  {
    id: 22, name: '星空列车', en: 'Star Train', group: 'tale',
    keywords: ['旅程', '过渡', '未来'],
    healing: '人生是一趟列车，有人上车有人下车，风景一直在变。',
    action: '',
    image: '../cardsPkg/images/card_22.jpg'
  },
  {
    id: 23, name: '沙漏反转', en: 'Hourglass', group: 'tale',
    keywords: ['逆转', '奇迹', '打破常规'],
    healing: '谁说事情只能这样发展？你可以创造属于你的奇迹。',
    action: '',
    image: '../cardsPkg/images/card_23.jpg'
  },
  {
    id: 24, name: '晨曦露珠', en: 'Morning Dew', group: 'tale',
    keywords: ['开始', '清新', '微小希望'],
    healing: '每一天都是新的，像露珠一样晶莹剔透地开始吧。',
    action: '',
    image: '../cardsPkg/images/card_24.jpg'
  },

  // ——— 核心主牌 · 续 ———
  {
    id: 25, name: '星栖小熊', en: 'The Star Bear', group: 'core',
    keywords: ['休息', '星光', '被守护'],
    healing: '星光会落在你的肩头，休息的时候，也不会失去光亮。',
    action: '今晚给自己留出一段不被打扰的时间，安心休息，哪怕只是发一会儿呆。',
    image: '../cardsPkg/images/card_25.jpg'
  },
  {
    id: 26, name: '命运之轮', en: 'Wheel of Fortune', group: 'core',
    keywords: ['转折', '变化', '顺应'],
    healing: '潮汐有涨有落，所有转弯，都是去往新风景的路途。',
    action: '回想一次曾经的“转弯”带来的意外收获，把它写下来，轻轻念给自己听。',
    image: '../cardsPkg/images/card_26.jpg'
  }
]

// 篇章信息
const groups = {
  core: {
    name: '核心主牌', en: 'The Core',
    desc: '小熊与命运之轮 · 被守护与照亮的时刻',
    color: '#B894D4', gradient: 'linear-gradient(135deg, #D9C2EC 0%, #C9A6E0 100%)'
  },
  maiden: {
    name: '少女与神话', en: 'Maiden & Myth',
    desc: '跟随少女，完成一场内心的冒险',
    color: '#9B7EC8', gradient: 'linear-gradient(135deg, #C9B6E4 0%, #A88BCF 100%)'
  },
  tale: {
    name: '意象与物语', en: 'Tales & Symbols',
    desc: '在唯美的意象中，读取心的讯息',
    color: '#C094C9', gradient: 'linear-gradient(135deg, #E3C2E0 0%, #CFA6D4 100%)'
  },
  all: {
    name: '随心抽', en: 'All Cards',
    desc: '把选择交给此刻的直觉',
    color: '#A88BC4', gradient: 'linear-gradient(135deg, #D4C2E4 0%, #E8C2DA 100%)'
  }
}

// 逆位解读（同一张牌的另一面：阴影、提醒与被忽略的声音）
const reversed = {
  1: { kw: ['封闭', '怕打扰', '坚硬'], heal: '当你说“我没事”的时候，也许正是最需要拥抱的时候。试着向一个人开口，哪怕只是说一句“我有点累”。' },
  2: { kw: ['自我怀疑', '滤镜', '回避'], heal: '你盯着镜中的瑕疵，却忘了镜子里的那个人，已经独自走了很远很远的路。' },
  3: { kw: ['迷失', '暂暗', '等待'], heal: '灯暂时暗了也没关系，不必逼自己发光。先在黑暗里坐一会儿，等眼睛慢慢适应。' },
  4: { kw: ['强忍', '麻木', '哽咽'], heal: '哭不出来不代表你不痛。情绪被冻住了，就用一杯热水、一次深呼吸，慢慢把它焐化。' },
  5: { kw: ['耗竭', '硬撑', '自我苛责'], heal: '不是所有疼痛都该被歌颂。这一次，先把王冠摘下来——你不必靠受苦来证明自己。' },
  6: { kw: ['停滞', '闭塞', '空等'], heal: '风停的日子里，答案还在路上。与其反复张望，不如放下手机，去听听窗外的声音。' },
  7: { kw: ['失眠', '愧疚', '不敢停'], heal: '你总觉得“不该就这么歇着”，可花园从不为冬眠道歉。今天，允许自己只负责呼吸。' },
  8: { kw: ['混乱', '失控', '越理越乱'], heal: '线团解不开的时候，硬扯只会更紧。先松开手，退后一步，结有时会自己松动。' },
  9: { kw: ['回避', '沉溺', '窒息'], heal: '你在心里潜得太深，久到忘了水面的光。该浮上来换口气了，深处不会因此消失。' },
  10: { kw: ['熄灭', '压抑', '冷漠'], heal: '火小了不是你的错，余烬下面仍有温度。不勉强自己燃烧，先护住那一点微光就好。' },
  11: { kw: ['催促', '错过', '来不及'], heal: '你总怕来不及，可花不会因为被催促而早开。属于你的时刻，正以它的速度赶来。' },
  12: { kw: ['拉扯', '内耗', '非此即彼'], heal: '心里两个声音吵得厉害时，不必消灭其中一个，它们都只是在用自己的方式保护你。' },
  13: { kw: ['幻灭', '不信', '世故'], heal: '当你觉得“纯真没用”的时候，正是它最需要被保护的时候。相信美好，本身就是一种勇敢。' },
  14: { kw: ['执念', '不甘', '反复翻旧'], heal: '反复翻开花瓣确认它枯萎，只会弄脏你的手。有些告别，值得一场正式的安放仪式。' },
  15: { kw: ['卡壳', '阵痛', '怕飞翔'], heal: '茧里的黑暗不是失败，是翅膀在成型。你觉得最艰难的时刻，往往正是转变最深的时刻。' },
  16: { kw: ['逃避', '失联', '孤岛'], heal: '在岛上躲了很久之后，记得回头看一眼——大陆没有抛弃你，随时可以返航。' },
  17: { kw: ['将就', '错配', '削足适履'], heal: '挤脚的鞋再漂亮也走不远。别为了赶上谁的舞会，磨掉自己真正的尺寸。' },
  18: { kw: ['不安', '预支担忧', '噩梦重演'], heal: '网眼会漏掉噩梦，也会兜住星光。你担心的事，十有八九并不会真的发生。' },
  19: { kw: ['自责', '怕再飞', '旧伤'], heal: '翅膀受伤不是你的污点。断过的骨头长好以后，往往比原来还要结实。' },
  20: { kw: ['紧锁', '防备', '看不见出口'], heal: '当你觉得所有门都锁着，也许只是忘了，有扇窗一直为你开着。换个方向看看。' },
  21: { kw: ['孤立', '淋湿', '无处可躲'], heal: '你以为自己一直站在雨里，其实有人早就在旁边为你撑了很久的伞。回头看看。' },
  22: { kw: ['离别焦虑', '不舍', '怕失去'], heal: '有人提前下车，不是你的错。感谢同行过的那段路，然后继续看窗外的星空就好。' },
  23: { kw: ['僵局', '无力', '惯性'], heal: '奇迹迟迟不来，也许它在等你先轻轻把沙漏倒转。最小的一步，也算是开始。' },
  24: { kw: ['倦怠', '灰色清晨', '怕新一天'], heal: '醒来没有力气也没关系，不必每天都晶莹剔透。阴天的早晨，也值得被温柔对待。' },
  25: { kw: ['不安', '空转', '不敢休息'], heal: '你总担心一停下来光就会灭，可星星从不加班。休息不是熄灭，是为了明天继续发亮。' },
  26: { kw: ['卡顿', '抗拒变化', '失速'], heal: '轮子像卡在了原地，其实它只是在积蓄转动的力气。别和周期较劲，先照顾好当下的自己。' }
};

// 三张牌阵的位置
const positions = [
  { key: 'past', name: '过去', hint: '事情的来处' },
  { key: 'present', name: '现在', hint: '此刻的处境' },
  { key: 'future', name: '未来', hint: '流转的方向' }
];

window.CARDS = cards; window.GROUPS = groups;
window.REVERSED = reversed; window.POSITIONS = positions;
