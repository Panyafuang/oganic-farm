
const SHOP_DATA = [
    {
      id: 1,
      title: 'ตระกูลกะหล่ำ',
      routeName: 'cabbages',
      items: [
        {
          id: 1,
          name: 'กระหล่ำดอก',
          imageUrl: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
          price: 25
        },
        {
          id: 2,
          name: 'กะหล่ำดาว',
          imageUrl: 'https://foodforward.org/wp-content/uploads/2013/10/Brussels-Larry-Street-.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'กะหล่ำปลี',
          imageUrl: 'https://images.unsplash.com/photo-1508302730834-a3786a6c951d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          price: 35
        },
        {
          id: 4,
          name: 'บร็อคโคลี่',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-broccoli-royalty-free-image-571248799-1532377854.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'กะหล่ำปลีม่วง',
          imageUrl: 'https://www.jesmondfruitbarn.com.au/wp-content/uploads/2016/10/Jesmond-Fruit-Barn-Red-Cabbage.jpg',
          price: 18
        },
        {
          id: 6,
          name: 'บร็อคโคลี่ม่วง',
          imageUrl: 'https://i.pinimg.com/originals/e1/09/33/e10933196e68d2446b339f6df6f7f069.jpg',
          price: 14
        },
        {
          id: 7,
          name: 'กะหล่ำปม',
          imageUrl: 'https://assets.bonappetit.com/photos/57c5d0e54395c0582bb6348c/16:9/w_2560%2Cc_limit/kohlrabi.jpg',
          price: 18
        },
        {
          id: 8,
          name: 'แรดิช',
          imageUrl: 'https://dq.lnwfile.com/2djn2e.jpg',
          price: 14
        },
        {
          id: 9,
          name: 'ผักกาดกวางตุ้ง',
          imageUrl: 'https://www.gardeningknowhow.com/wp-content/uploads/2009/04/bok-choy.jpg',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'ตระกูลถั่ว',
      routeName: 'beans',
      items: [
        {
          id: 1,
          name: 'ถั่วเหลือง',
          imageUrl: 'https://netstorage-tuko.akamaized.net/images/988dce9b13650e14.jpg?imwidth=1200&impolicy=default-amp',
          price: 220
        },
        {
          id: 2,
          name: 'ถั่วเขียว',
          imageUrl: 'https://cms.kapook.com/uploads/tag/41/ID_40180_5996ac6e16432.jpg',
          price: 280
        },
        {
          id: 3,
          name: 'ถั่วลิสง',
          imageUrl: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1550865921243_mainnews2012_x1.jpg',
          price: 110
        },
        {
          id: 4,
          name: 'ถั่วฝักยาว',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81dHRUxR3JL._AC_SL1500_.jpg',
          price: 160
        },
        {
          id: 5,
          name: 'ลูกเดือย',
          imageUrl: 'https://th-test-11.slatic.net/shop/45bc6016e7a341421cf84858b76c2326.jpeg',
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 7,
          name: 'มะม่วงหิมพานต์',
          imageUrl: 'https://live.mrf.io/statics/i/ps/lh3.googleusercontent.com/gFROSLAr8kJsQz6WkJNkDic9HwreOm8TzPVf1TCNQ2dQBJZL-bf1bpKc3M3dovngBLUNnu1BWsN6I4NpYr0UNQ=s750',
          price: 190
        },
        {
          id: 8,
          name: 'อาโวคาโด',
          imageUrl: 'https://36iusc2tb88y2g492si2bqd1-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/avocados.jpg',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'ตระกูลมะเขือ',
      routeName: 'tomatoes',
      items: [
        {
          id: 1,
          name: 'มะเขือเทศ',
          imageUrl: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          price: 125
        },
        {
          id: 2,
          name: 'มะเขือพวง',
          imageUrl: 'https://starrfm.com.gh/wp-content/uploads/2018/06/TURKEY-BERRY.jpg',
          price: 90
        },
        {
          id: 3,
          name: 'มะเขือยาว',
          imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2019/06/multiple-japanese-eggplants-farmers-market-shutterstock_113929570-800x450.jpg',
          price: 90
        },
        {
          id: 4,
          name: 'มะเขือเปราะ',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71LGWVFy2ZL._AC_SX569_.jpg',
          price: 165
        },
        {
          id: 5,
          name: 'มะเขือเทศราชินี ',
          imageUrl: 'https://www.gardeningknowhow.com/wp-content/uploads/2009/04/cherry-tomatoes-1.jpg',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ]

  export default SHOP_DATA;