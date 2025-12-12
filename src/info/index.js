const caseName = '佳展建設';
export default {
    caseid: '91184de3-cfb1-4bcc-8ca2-d91ef7142c5b',
    address:'台南市北區中華西路二段857號',
    address1: '接待中心', //按鈕區的--- 如空白會只呈現地址
    address2: '接待中心', //map點下確認的--- 如空白會顯示"導航地址"
    googleSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4769292962806!2d120.18590139999999!3d23.0062545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7723c77da6b9%3A0x948606cdea29a273!2z5L2z6YuQ6YOhIOaOpeW-heS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1764692376149!5m2!1szh-TW!2stw',
    googleLink: 'https://maps.app.goo.gl/5qWPKRUKT6wnM8aq8',
    phone: '(06)262-8888',
    fbLink: 'https://www.facebook.com/61578255539676/',
    fbMessage: 'https://m.me/61578255539676/',
    caseName: caseName,
    houseInfos: [
        
        ["投資興建 ", "佳展建設股份有限公司"],
        ["工程營造", "協侑營造有限公司"],
        ["建築設計", "曾聰憲建築師事務所"],
        ["結構工程", "RC"], 
        ["規劃戶數", "住家222戶 / 車位272個 / 店面9戶"],
        ["坪數規劃", "住家24-42坪 / 店面23-63坪"],
        ["樓層規劃", "地上15層 / 地下3層"],
        ["企劃銷售", "新富嘉廣告有限公司"],
        ["基地位置", "安南區州南段1750地號"],
        ["接待中心", "台南市安南區台江大道一段829號旁"],
    ],
    gtmCode: ['GTM-PZGX9WST'], // 可放置多個
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: '6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN', //主3
    recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
    recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
    order: {
        title: '預約賞屋 CONTACT US',
        // subTitle: '歡迎預約，將有專人與您聯絡，我們將竭誠為您服務'
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
            title: '需求房型',
            hold: '請選擇房型',
            option: ['兩房', '三房', '四房', '店面'],
            bypass: false
        }
        //budget: {
        //  title: "購屋預算",
        //  hold: "請選擇區間",
        //  option: ["1600-2000萬", "2000-2500萬", "2500萬以上"],
        //  bypass:false, //必填開啟使用
        //},
        /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
    },
    navList: [
        {
            name: '安享便捷',
            target: '.s6',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '安適生活',
            target: '.s5',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '安心學習',
            target: '.s8',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '安享品味',
            target: '.s10',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '安家推手',
            target: '.s11',
            offset: '-60',
            offsetmo: '0'
        }
    ]
};
