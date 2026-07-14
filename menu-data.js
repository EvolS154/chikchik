const menuData = {
  languages: {
    vi: { name: "Tiếng Việt", code: "vi", flag: "🇻🇳", selectText: "Chọn ngôn ngữ" },
    en: { name: "English", code: "en", flag: "🇬🇧", selectText: "Select Language" },
    ru: { name: "Русский", code: "ru", flag: "🇷🇺", selectText: "Выбор языка" },
    ko: { name: "한국어", code: "ko", flag: "🇰🇷", selectText: "언어 선택" },
    zh: { name: "中文", code: "zh", flag: "🇨🇳", selectText: "选择语言" }
  },
  ui: {
    backBtn: {
      vi: "← Chọn ngôn ngữ",
      en: "← Select Language",
      ru: "← Выбор языка",
      ko: "← 언어 선택",
      zh: "← 选择语言"
    },
    subtitle: {
      vi: "Đồ ăn đường phố Hàn Quốc & Đồ nướng",
      en: "Korean Street Food & Grill",
      ru: "Корейский стритфуд & Гриль",
      ko: "한국 스트리트 푸드 & 그릴",
      zh: "韩国街头小吃与烧烤"
    },
    searchPlaceholder: {
      vi: "Tìm kiếm món ăn...",
      en: "Search dishes...",
      ru: "Поиск блюд...",
      ko: "음식 검색...",
      zh: "搜索菜品..."
    },
    showWaiterTitle: {
      vi: "Chi tiết món ăn",
      en: "Show to Host / Staff",
      ru: "Показать хозяину / персоналу",
      ko: "직원에게 보여주기",
      zh: "展示给店员"
    },
    showWaiterBtn: {
      vi: "Xem chi tiết",
      en: "Show to Waiter",
      ru: "Показать родителям/официанту",
      ko: "주문 보여주기",
      zh: "显示订单"
    },
    orderPrompt: {
      vi: "Tôi muốn gọi món này:",
      en: "I would like to order this:",
      ru: "Я хочу заказать это:",
      ko: "이것을 주문하고 싶습니다:",
      zh: "我想点这个："
    },
    closeBtn: {
      vi: "Đóng",
      en: "Close",
      ru: "Закрыть",
      ko: "닫기",
      zh: "关闭"
    },
    addToCart: {
      vi: "Thêm",
      en: "Add",
      ru: "Добавить",
      ko: "추가",
      zh: "添加"
    },
    yourCart: {
      vi: "Giỏ hàng của bạn",
      en: "Your Cart",
      ru: "Ваша корзина",
      ko: "장바구니",
      zh: "您的购物车"
    },
    cartTotal: {
      vi: "Tổng cộng",
      en: "Total",
      ru: "Итого",
      ko: "합계",
      zh: "总计"
    },
    clearCart: {
      vi: "Xóa hết",
      en: "Clear",
      ru: "Очистить",
      ko: "비우기",
      zh: "清空"
    },
    showParentsSubtitle: {
      vi: "Vui lòng đưa màn hình này cho chủ quán để gọi món",
      en: "Please show this screen to the staff to order",
      ru: "Пожалуйста, покажите этот экран сотрудникам для заказа",
      ko: "주문을 위해 이 화면을 직원에게 보여주세요",
      zh: "请将此屏幕出示给店员进行点单"
    },
    cartEmpty: {
      vi: "Giỏ hàng chưa có món nào",
      en: "Cart is empty",
      ru: "Корзина пуста",
      ko: "장바구니가 비어 있습니다",
      zh: "购物车是空的"
    },
    additionalSauces: {
      vi: "Sốt thêm: Chua ngọt / Cay / Phô mai lắc / Sriracha Mayo — 10.000 VND | Sốt tỏi — 20.000 VND",
      en: "Extra sauces: Sweet & Sour / Spicy / Cheese / Sriracha Mayo — 10,000 VND | Garlic sauce — 20,000 VND",
      ru: "Доп. соусы: Кисло-сладкий / Острый / Сырный / Шрирача Майо — 10.000 VND | Чесночный соус — 20.000 VND",
      ko: "추가 소스: 새콤달콤 / 매콤 / 치즈 / 스리라차 마요 — 10,000 VND | 갈릭 소스 — 20,000 VND",
      zh: "额外酱料：酸甜酱 / 辣酱 / 芝士酱 / 是拉差美乃滋 — 10,000 VND | 蒜蓉酱 — 20,000 VND"
    },
    outOfStock: {
      vi: "Hết hàng",
      en: "Out of stock / Hết hàng",
      ru: "Нет в наличии / Hết hàng",
      ko: "품절 / Hết hàng",
      zh: "售罄 / Hết hàng"
    },
    chickenNote: {
      vi: "Tất cả các phần đều được phục vụ kèm theo hương vị lựa chọn.",
      en: "All portions are served with the flavor of your choice.",
      ru: "Все порции подаются с выбранным вкусом.",
      ko: "모든 메뉴는 선택하신 소스와 함께 제공됩니다.",
      zh: "所有份量均配有您选择的口味。"
    },
    cheeseNote: {
      vi: "Có thể thêm phô mai vào mì và bánh gạo: +25.000 VND",
      en: "Can add extra cheese to noodles and tteokbokki: +25,000 VND",
      ru: "К любой лапше и ттокпокки можно добавить сыр: +25.000 VND",
      ko: "면류 및 떡볶이에 치즈 추가 가능: +25,000 VND",
      zh: "面条或年糕可加芝士：+25,000 VND"
    },
    prepTime: {
      vi: "Thời gian chuẩn bị: 25 phút",
      en: "Preparation time: 25 mins",
      ru: "Время приготовления: 25 мин",
      ko: "조리 시간: 25분",
      zh: "准备时间：25分钟"
    },
    chickenSizes: {
      half: { vi: "Nửa con", en: "Half Chicken", ru: "Половина курицы", ko: "반 마리", zh: "半只鸡" },
      fillet: { vi: "Má đùi rút xương (4-5 miếng)", en: "Thigh Fillet (4-5 pcs)", ru: "Филе бедра (4-5 шт)", ko: "순살 닭다리 (4-5조각)", zh: "去骨鸡腿肉 (4-5块)" },
      legs: { vi: "Đùi gà (4 miếng)", en: "Drumsticks (4 pcs)", ru: "Ножки (4 шт)", ko: "닭다리 (4조각)", zh: "鸡腿 (4个)" },
      wings: { vi: "Cánh gà (6 miếng)", en: "Wings (6 pcs)", ru: "Крылья (6 шт)", ko: "닭날개 (6조각)", zh: "鸡翅 (6个)" }
    }
  },
  categories: [
    {
      id: "chicken",
      icon: "🍗",
      title: {
        vi: "Gà rán đặc trưng Chick-Chick",
        en: "Signature Fried Chicken",
        ru: "Фирменная жареная курица",
        ko: "시그니처 후라이드 치킨",
        zh: "招牌炸鸡"
      },
      isTable: true,
      items: [
        {
          id: "ch_classic",
          name: {
            vi: "Truyền thống (Original)",
            en: "Classic (Original)",
            ru: "Классическая (Оригинал)",
            ko: "클래식 (오리지널)",
            zh: "经典原味"
          },
          prices: { half: "180.000", fillet: "140.000", legs: "185.000", wings: "185.000" }
        },
        {
          id: "ch_spicy",
          name: {
            vi: "Giòn cay",
            en: "Crispy Spicy",
            ru: "Остро-хрустящая",
            ko: "크리스피 매콤",
            zh: "香辣酥脆"
          },
          prices: { half: "185.000", fillet: "150.000", legs: "195.000", wings: "195.000" }
        },
        {
          id: "ch_yangnyeom",
          name: {
            vi: "Sốt gia vị (Yangnyeom)",
            en: "Five Spices (Yangnyeom)",
            ru: "С пятью специями (Яннём)",
            ko: "양념 치킨 (5가지 향신료)",
            zh: "韩式洋酿 (五香)"
          },
          prices: { half: "190.000", fillet: "150.000", legs: "195.000", wings: "195.000" }
        },
        {
          id: "ch_spicy_yangnyeom",
          name: {
            vi: "Sốt gia vị cay",
            en: "Spicy Five Spices",
            ru: "Острая с пятью специями",
            ko: "매운 양념 치킨",
            zh: "辣味韩式洋酿"
          },
          prices: { half: "190.000", fillet: "150.000", legs: "195.000", wings: "195.000" }
        },
        {
          id: "ch_soy",
          name: {
            vi: "Sốt tương",
            en: "In Soy Sauce",
            ru: "В соевом соусе",
            ko: "간장 치킨",
            zh: "酱油炸鸡"
          },
          prices: { half: "190.000", fillet: "150.000", legs: "195.000", wings: "195.000" }
        },
        {
          id: "ch_cheese",
          name: {
            vi: "Lắc phô mai (Ppuling)",
            en: "Cheese Powder (Ppuling)",
            ru: "В сырной посыпке (Ppuling)",
            ko: "뿌링클 치즈 치킨",
            zh: "芝士撒粉 (Ppuling)"
          },
          prices: { half: "190.000", fillet: "150.000", legs: "195.000", wings: "195.000" }
        }
      ]
    },
    {
      id: "grill",
      icon: "🔥",
      title: {
        vi: "Món nướng & BBQ",
        en: "Grilled & BBQ Dishes",
        ru: "Блюда на гриле и Барбекю",
        ko: "그릴 & BBQ 요리",
        zh: "烧烤与BBQ"
      },
      items: [
        {
          id: "gr_chicken_half",
          name: {
            vi: "Gà nướng BBQ (Nửa con)",
            en: "BBQ Grilled Chicken (Half)",
            ru: "Курица-барбекю (половина курицы)",
            ko: "BBQ 그릴 치킨 (반 마리)",
            zh: "烤BBQ鸡 (半只)"
          },
          subtext: { vi: "Thời gian chuẩn bị: 25 phút", en: "Preparation time: 25 mins", ru: "Время приготовления: 25 мин", ko: "준비 시간: 25분", zh: "准备时间：25分钟" },
          price: "200.000"
        },
        {
          id: "gr_wings",
          name: {
            vi: "Cánh gà nướng sốt ớt",
            en: "Grilled Chicken Wings with Chili",
            ru: "Куриные крылышки на гриле с чили",
            ko: "칠리 소스 닭날개 구이",
            zh: "辣椒酱烤鸡翅"
          },
          subtext: { vi: "Thời gian chuẩn bị: 25 phút", en: "Preparation time: 25 mins", ru: "Время приготовления: 25 мин", ko: "준비 시간: 25분", zh: "准备时间：25分钟" },
          price: "200.000"
        },
        {
          id: "gr_fillet",
          name: {
            vi: "Má đùi gà rút xương nướng sốt ớt",
            en: "Grilled Thigh Fillet with Chili",
            ru: "Филе бедра на гриле с чили",
            ko: "칠리 소스 순살 닭다리 구이",
            zh: "辣椒酱烤去骨鸡腿肉"
          },
          subtext: { vi: "Thời gian chuẩn bị: 25 phút", en: "Preparation time: 25 mins", ru: "Время приготовления: 25 мин", ko: "준비 시간: 25분", zh: "准备时间：25分钟" },
          price: "200.000"
        },
        {
          id: "gr_skewers",
          name: {
            vi: "Thịt xiên nướng",
            en: "Pork Skewers / Kebab",
            ru: "Шашлык из свинины",
            ko: "돼지고기 꼬치구이",
            zh: "猪肉串"
          },
          price: "135.000"
        }
      ]
    },
    {
      id: "noodles",
      icon: "🍜",
      title: {
        vi: "Mì & Bánh gạo Hàn Quốc",
        en: "Korean Noodles & Tteokbokki",
        ru: "Корейская лапша и ттокпокки",
        ko: "한국 면류 & 떡볶이",
        zh: "韩国面条与年糕"
      },
      hasCheeseNote: true,
      items: [
        {
          id: "nd_ramyeon_classic",
          name: {
            vi: "Mì Ramyeon Shin / Jin",
            en: "Shin / Jin Ramyeon",
            ru: "Рамён Shin / Jin",
            ko: "신라면 / 진라면",
            zh: "辛拉面 / 真拉面"
          },
          subtext: { vi: "Không cay", en: "Non-spicy option available", ru: "Не острый вариант", ko: "안 매운 맛 선택 가능", zh: "可选不辣" },
          price: "70.000"
        },
        {
          id: "nd_jajang",
          name: {
            vi: "Mì tương đen Jajang",
            en: "Jajangmyeon (Black Bean Noodles)",
            ru: "Рамён Jajang",
            ko: "짜장면",
            zh: "炸酱面"
          },
          subtext: { vi: "Sốt tương đen", en: "In black bean sauce", ru: "В черном соусе", ko: "블랙빈 소스", zh: "黑酱" },
          price: "80.000"
        },
        {
          id: "nd_buldak",
          name: {
            vi: "Mì cay Buldak",
            en: "Buldak Spicy Noodles",
            ru: "Рамён Buldak",
            ko: "불닭볶음면",
            zh: "火火辣鸡面"
          },
          subtext: { vi: "Rất cay", en: "Extremely spicy", ru: "Очень острый", ko: "아주 매움", zh: "极辣" },
          price: "90.000"
        },
        {
          id: "nd_tteokbokki",
          name: {
            vi: "Bánh gạo Tteokbokki",
            en: "Tteokbokki (Rice Cakes)",
            ru: "Ттокпокки",
            ko: "떡볶이",
            zh: "辣炒年糕"
          },
          subtext: { vi: "Bánh gạo cay hoặc không cay", en: "Spicy or non-spicy rice cakes", ru: "Острые или неострые рисовые клецки", ko: "매콤한 맛 또는 안 매운 맛", zh: "辣或不辣" },
          price: "120.000"
        },
        {
          id: "nd_cold_kimchi",
          name: {
            vi: "Mì lạnh Kimchi",
            en: "Kimchi Cold Noodles",
            ru: "Холодная кимчи-лапша",
            ko: "김치 냉면",
            zh: "泡菜冷面"
          },
          price: "140.000"
        }
      ]
    },
    {
      id: "soups",
      icon: "🍲",
      title: {
        vi: "Món nóng, Canh & Lẩu om",
        en: "Hot Dishes, Soups & Stews",
        ru: "Горячие блюда, Супы и Рагу",
        ko: "따뜻한 요리, 국 & 찌개",
        zh: "热菜、汤与炖菜"
      },
      items: [
        {
          id: "sp_jjimdak",
          name: {
            vi: "Gà om Andong (Jjimdak)",
            en: "Andong Jjimdak (Braised Chicken)",
            ru: "Куриное рагу по-андонгски",
            ko: "안동찜닭",
            zh: "安东炖鸡"
          },
          subtext: { vi: "Kèm 2 bát cơm", en: "Served with 2 bowls of rice", ru: "Подается с 2 порциями риса", ko: "공기밥 2개 포함", zh: "附送2碗米饭" },
          price: "300.000"
        },
        {
          id: "sp_dakdoritang",
          name: {
            vi: "Gà om cay (Dakdoritang)",
            en: "Dakdoritang (Spicy Braised Chicken)",
            ru: "Острое тушёное куриное рагу",
            ko: "닭볶음탕",
            zh: "辣味炖鸡"
          },
          subtext: { vi: "Kèm 2 bát cơm", en: "Served with 2 bowls of rice", ru: "Подается с 2 порциями риса", ko: "공기밥 2개 포함", zh: "附送2碗米饭" },
          price: "300.000"
        },
        {
          id: "sp_korean_soup",
          name: {
            vi: "Canh gà Hàn Quốc",
            en: "Korean Chicken Soup",
            ru: "Корейский куриный суп",
            ko: "한국식 닭곰탕 / 삼계탕",
            zh: "韩式鸡汤"
          },
          subtext: { vi: "Cay hoặc không cay", en: "Spicy or non-spicy", ru: "Острый или неострый", ko: "얼큰한 맛 또는 맑은 맛", zh: "辣或清汤" },
          price: "60.000"
        },
        {
          id: "sp_pho_bo",
          name: {
            vi: "Phở bò",
            en: "Phở Bò (Vietnamese Beef Noodle Soup)",
            ru: "Вьетнамский суп Фо Бо",
            ko: "퍼 보 (베트남 소고기 쌀국수)",
            zh: "越南牛肉河粉 (Pho Bo)"
          },
          price: "60.000"
        },
        {
          id: "sp_borsch",
          name: {
            vi: "Súp củ dền Nga (Borsch)",
            en: "Russian Beetroot Soup (Borsch)",
            ru: "Борщ",
            ko: "보르시 (러시아식 비트 수프)",
            zh: "俄罗斯红菜汤 (Borsch)"
          },
          price: "60.000"
        }
      ]
    },
    {
      id: "mains",
      icon: "🍱",
      title: {
        vi: "Món chính & Mì cơm xào",
        en: "Main Dishes & Wok",
        ru: "Основные блюда и Вок",
        ko: "메인 요리 & 볶음밥/볶음면",
        zh: "主菜与炒面/炒饭"
      },
      items: [
        {
          id: "mn_samgyeopsal",
          name: {
            vi: "Ba chỉ heo nướng K-BBQ",
            en: "K-BBQ Grilled Pork Belly",
            ru: "Свиная грудинка K-BBQ",
            ko: "삼겹살 구이",
            zh: "韩式烤五花肉 (K-BBQ)"
          },
          price: "180.000"
        },
        {
          id: "mn_pork_stir",
          name: {
            vi: "Thịt heo xào",
            en: "Stir-fried Pork",
            ru: "Жареная свинина",
            ko: "제육볶음 (돼지고기 볶음)",
            zh: "炒猪肉"
          },
          subtext: { vi: "Cay hoặc không cay", en: "Spicy or non-spicy", ru: "Острая или неострая", ko: "매콤한 맛 또는 안 매운 맛", zh: "辣或不辣" },
          price: "160.000"
        },
        {
          id: "mn_chicken_stir",
          name: {
            vi: "Thịt gà xào",
            en: "Stir-fried Chicken",
            ru: "Жареная курица",
            ko: "닭고기 볶음 (닭갈비)",
            zh: "炒鸡肉"
          },
          subtext: { vi: "Cay hoặc không cay", en: "Spicy or non-spicy", ru: "Острая или неострая", ko: "매콤한 맛 또는 안 매운 맛", zh: "辣或不辣" },
          price: "160.000"
        },
        {
          id: "mn_tempura",
          name: {
            vi: "Tôm tẩm bột chiên xù (Tempura)",
            en: "Shrimp Tempura",
            ru: "Темпура из креветок",
            ko: "새우 튀김 (템푸라)",
            zh: "天妇罗大虾"
          },
          price: "150.000"
        },
        {
          id: "mn_fish_tomato",
          name: {
            vi: "Cá sốt cà chua",
            en: "Fried Fish in Tomato Sauce",
            ru: "Жареная рыба в томатном соусе",
            ko: "토마토 소스 생선 구이",
            zh: "茄汁魚"
          },
          price: "140.000"
        },
        {
          id: "mn_seafood_noodles",
          name: {
            vi: "Mì xào hải sản",
            en: "Stir-fried Seafood Noodles",
            ru: "Вок лапша с морепродуктами",
            ko: "해물 볶음우동 / 해물 볶음면",
            zh: "海鲜炒面"
          },
          price: "120.000"
        },
        {
          id: "mn_kimchi_pork_rice",
          name: {
            vi: "Cơm chiên kim chi thịt heo",
            en: "Kimchi Fried Rice with Pork",
            ru: "Жареный рис с кимчи и свининой",
            ko: "돼지고기 김치볶음밥",
            zh: "猪肉泡菜炒饭"
          },
          subtext: { vi: "Cay hoặc không cay", en: "Spicy or non-spicy", ru: "Острый или неострый", ko: "매운맛 또는 순한맛", zh: "辣或不辣" },
          price: "120.000"
        },
        {
          id: "mn_kimchi_chicken_rice",
          name: {
            vi: "Cơm chiên kim chi gà",
            en: "Kimchi Fried Rice with Chicken",
            ru: "Жареный рис с кимчи и курицей",
            ko: "닭고기 김치볶음밥",
            zh: "鸡肉泡菜炒饭"
          },
          subtext: { vi: "Cay hoặc không cay", en: "Spicy or non-spicy", ru: "Острый или неострый", ko: "매운맛 또는 순한맛", zh: "辣或不辣" },
          price: "120.000"
        },
        {
          id: "mn_seafood_rice",
          name: {
            vi: "Cơm chiên hải sản",
            en: "Seafood Fried Rice",
            ru: "Жареный рис с морепродуктами",
            ko: "해물 볶음밥",
            zh: "海鲜炒饭"
          },
          price: "100.000"
        },
        {
          id: "mn_mandu",
          name: {
            vi: "Bánh xếp (Mandu)",
            en: "Mandu (Korean Dumplings)",
            ru: "Пельмени",
            ko: "만두 (튀김/찐만두)",
            zh: "韩式饺子 (Mandu)"
          },
          price: "70.000"
        },
        {
          id: "mn_chicken_rice",
          name: {
            vi: "Cơm gà",
            en: "Chicken Rice",
            ru: "Рис с курицей",
            ko: "치킨 라이스 (닭고기 덮밥)",
            zh: "鸡肉饭"
          },
          price: "60.000"
        },
        {
          id: "mn_bun_cha",
          name: {
            vi: "Bún chả",
            en: "Bún Chả (Grilled Pork Noodles)",
            ru: "Бун ча",
            ko: "분 짜 (하노이식 숯불 구이 분짜)",
            zh: "烤肉米粉 (Bun Cha)"
          },
          subtext: { vi: "Bún thịt nướng Hà Nội", en: "Hanoi-style grilled pork noodles", ru: "Вьетнамская лапша со свининой на гриле", ko: "하노이 스타일 숯불 구이 고기 쌀국수", zh: "河内烤猪肉米粉" },
          price: "60.000"
        },
        {
          id: "mn_bun_nem",
          name: {
            vi: "Bún nem Hà Nội",
            en: "Hanoi Fried Spring Roll Noodles",
            ru: "Бун нем по-ханойски",
            ko: "분 넴 (하노이식 스프링롤 쌀국수)",
            zh: "河内炸春卷米粉 (Bun Nem)"
          },
          price: "50.000"
        }
      ]
    },
    {
      id: "sides",
      icon: "🥗",
      title: {
        vi: "Món ăn kèm & Đồ ăn nhẹ",
        en: "Side Dishes & Appetizers",
        ru: "Закуски и Гарниры",
        ko: "반찬 & 에피타이저",
        zh: "配菜与小吃"
      },
      items: [
        {
          id: "sd_odeng",
          name: {
            vi: "Canh chả cá (Odeng-guk)",
            en: "Fish Cake Soup (Odeng-guk)",
            ru: "Суп \"Рыбный пирог\"",
            ko: "어묵탕 (오뎅국)",
            zh: "鱼糕汤 (Odeng-guk)"
          },
          subtext: { vi: "5 xiên", en: "5 skewers", ru: "5 шпажек", ko: "5 꼬치", zh: "5 串" },
          price: "70.000"
        },
        {
          id: "sd_kimbap_bbq",
          name: {
            vi: "Kimbap thịt ba chỉ nướng BBQ",
            en: "BBQ Pork Belly Kimbap",
            ru: "Кимпаб BBQ со свиной грудинкой",
            ko: "삼겹살 BBQ 김밥",
            zh: "烤五花肉紫菜包饭"
          },
          subtext: { vi: "3 cuộn", en: "3 rolls", ru: "3 ролла", ko: "3 줄", zh: "3 卷" },
          price: "70.000"
        },
        {
          id: "sd_kimbap_mini",
          name: {
            vi: "Kimbap mini chả cá",
            en: "Mini Fish Cake Kimbap",
            ru: "Мини кимпаб с рыбным пирогом",
            ko: "어묵 꼬마 김밥",
            zh: "鱼糕小紫菜包饭"
          },
          subtext: { vi: "3 cuộn", en: "3 rolls", ru: "3 ролла", ko: "3 줄", zh: "3 卷" },
          price: "50.000"
        },
        {
          id: "sd_nem_ran",
          name: {
            vi: "Nem rán Hà Nội",
            en: "Hanoi Fried Spring Rolls",
            ru: "Жареные спринг-роллы по-ханойски",
            ko: "짜조 (하노이식 스프링롤)",
            zh: "河内炸春卷 (Nem Ran)"
          },
          price: "60.000"
        },
        {
          id: "sd_fries",
          name: {
            vi: "Khoai tây chiên",
            en: "French Fries",
            ru: "Картофель фри",
            ko: "감자 튀김",
            zh: "薯条"
          },
          price: "50.000"
        },
        {
          id: "sd_salad_fresh",
          name: {
            vi: "Sa lát rau tươi",
            en: "Fresh Vegetable Salad",
            ru: "Салат из свежих овощей",
            ko: "신선한 야채 샐러드",
            zh: "鲜菜沙拉"
          },
          price: "30.000"
        },
        {
          id: "sd_coleslaw",
          name: {
            vi: "Sa lát bắp cải (Cole slaw)",
            en: "Cole Slaw (Cabbage Salad)",
            ru: "Капустный салат Коул слоу",
            ko: "코울슬로 (양배추 샐러드)",
            zh: "卷心菜沙拉 (Coleslaw)"
          },
          price: "20.000"
        },
        {
          id: "sd_rice",
          name: {
            vi: "Cơm thêm",
            en: "Extra Rice Bowl",
            ru: "Дополнительная порция риса",
            ko: "공기밥 추가",
            zh: "加一碗米饭"
          },
          price: "10.000"
        }
      ]
    },
    {
      id: "drinks_non_alc",
      icon: "🥤",
      title: {
        vi: "Đồ uống không cồn",
        en: "Non-Alcoholic Drinks",
        ru: "Безалкогольные напитки",
        ko: "무알콜 음료",
        zh: "无酒精饮料"
      },
      items: [
        {
          id: "dr_pineapple",
          name: {
            vi: "Nước ép dứa",
            en: "Pineapple Juice",
            ru: "Ананасовый сок",
            ko: "파인애플 주스",
            zh: "菠萝汁"
          },
          price: "40.000",
             isStopped: true      // Поставь true, если закончилось
        },
        {
          id: "dr_coconut",
          name: {
            vi: "Dừa tươi",
            en: "Fresh Coconut",
            ru: "Свежий кокос",
            ko: "생코코넛",
            zh: "新鲜椰子"
          },
          price: "30.000"
        },
        {
          id: "dr_orange",
          name: {
            vi: "Nước ép cam tươi",
            en: "Fresh Orange Juice",
            ru: "Свежевыжатый апельсиновый сок",
            ko: "오렌지 주스",
            zh: "鲜榨橙汁"
          },
          price: "30.000"
        },
        {
          id: "dr_watermelon",
          name: {
            vi: "Nước ép dưa hấu tươi",
            en: "Fresh Watermelon Juice",
            ru: "Свежевыжатый арбузный сок",
            ko: "수박 주스",
            zh: "鲜榨西瓜汁"
          },
          price: "30.000",
             isStopped: true      // Поставь true, если закончилось
        },
        {
          id: "dr_mango",
          name: {
            vi: "Sinh tố xoài",
            en: "Mango Smoothie",
            ru: "Манговый смузи",
            ko: "망고 스무디",
            zh: "芒果冰沙"
          },
          price: "30.000",
             isStopped: true      // Поставь true, если закончилось
        },
        {
          id: "dr_soda",
          name: {
            vi: "Nước ngọt (Coca-Cola / Sprite)",
            en: "Soft Drinks (Coca-Cola / Sprite)",
            ru: "Газировка (Coca-Cola / Sprite)",
            ko: "탄산음료 (코카콜라 / 스프라이트)",
            zh: "软饮料 (可口可乐 / 雪碧)"
          },
          price: "20.000"
        },
        {
          id: "dr_mineral",
          name: {
            vi: "Nước khoáng",
            en: "Mineral Water",
            ru: "Минеральная вода",
            ko: "광천수 / 미네랄 워터",
            zh: "矿泉水"
          },
          price: "10.000"
        }
      ]
    },
    {
      id: "drinks_alc",
      icon: "🍺",
      title: {
        vi: "Đồ uống có cồn",
        en: "Alcoholic Drinks",
        ru: "Алкогольные напитки",
        ko: "알코올 음료",
        zh: "酒精饮料"
      },
      items: [
        {
          id: "dr_soju",
          name: {
            vi: "Rượu Soju Hàn Quốc",
            en: "Korean Soju",
            ru: "Корейское Соджу",
            ko: "소주 (한국 소주)",
            zh: "韩式烧酒 (Soju)"
          },
          price: "120.000"
        },
        {
          id: "dr_vodka_300",
          name: {
            vi: "Rượu Vodka Men (300ml)",
            en: "Vodka Men (300ml)",
            ru: "Водка Men (300 мл)",
            ko: "보드카 맨 (300ml)",
            zh: "Vodka Men (300毫升)"
          },
          price: "90.000"
        },
        {
          id: "dr_vodka_500",
          name: {
            vi: "Rượu Vodka Men (500ml)",
            en: "Vodka Men (500ml)",
            ru: "Водка Men (500 мл)",
            ko: "보드카 맨 (500ml)",
            zh: "Vodka Men (500毫升)"
          },
          price: "140.000"
        },
        {
          id: "dr_beer_tiger",
          name: {
            vi: "Bia Tiger",
            en: "Tiger Beer",
            ru: "Пиво Tiger",
            ko: "타이거 맥주",
            zh: "虎牌啤酒"
          },
          price: "30.000"
        },
        {
          id: "dr_beer_saigon_bottle",
          name: {
            vi: "Bia Sài Gòn (chai)",
            en: "Saigon Beer (bottle)",
            ru: "Пиво Saigon (бутылочное)",
            ko: "사이공 맥주 (병)",
            zh: "西贡啤酒 (瓶装)"
          },
          price: "15.000"
        },
        {
          id: "dr_beer_saigon_can",
          name: {
            vi: "Bia Sài Gòn (lon)",
            en: "Saigon Beer (can)",
            ru: "Пиво Saigon (баночное)",
            ko: "사이공 맥주 (캔)",
            zh: "西贡啤酒 (罐装)"
          },
          price: "30.000"
        }
      ]
    }
  ]
};
