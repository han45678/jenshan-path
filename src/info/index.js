const caseName = '仁山山之道';
export default {
    caseid: '91184de3-cfb1-4bcc-8ca2-d91ef7142c5b',
    address:'xxxxxx',
    address1: '接待中心', //按鈕區的--- 如空白會只呈現地址
    address2: '接待中心', //map點下確認的--- 如空白會顯示"導航地址"
    googleSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4769292962806!2d120.18590139999999!3d23.0062545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7723c77da6b9%3A0x948606cdea29a273!2z5L2z6YuQ6YOhIOaOpeW-heS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1764692376149!5m2!1szh-TW!2stw',
    googleLink: 'https://maps.app.goo.gl/',
    phone: '08-8352-888',
    fbLink: 'https://www.facebook.com/61578255539676/',
    fbMessage: 'https://m.me/61578255539676/',
    caseName: caseName,
    houseInfos: [
      /*  
        ["投資興建 ", "XXXXXXXXXXXXXXXXXX"],
        ["營造公司", "XXXXXXXXXXXXXXXXXX"],
        ["產品規劃", "XXXXXXXXXXXXXXXXXX"],
        ["行銷公司", "XXXXXXXXXXXXXXXXXX"],
        */
    ],
    gtmCode: ['GTM-KWWGZWF5'], // 可放置多個
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: '6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN', //主3
    recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
    recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
    order: {
        title: '立即預約',
        subTitle: '歡迎預約，將有專人與您聯絡，我們將竭誠為您服務'
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
            title: '需求房型',
            hold: '請選擇房型',
            option: ['100坪', '110坪'],
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
            name: '市政軸心 ',
            target: '.s6',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '百貨環伺',
            target: '.s5',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '建築美學',
            target: '.s8',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '大師團隊',
            target: '.s10',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '款待生活',
            target: '.s11',
            offset: '-60',
            offsetmo: '0'
        },
        {
            name: '立即預約',
            target: '.s11',
            offset: '-60',
            offsetmo: '0'
        }
    ]
};
