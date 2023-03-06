# MERN eCommerce From Scratch

## Installasi react-app

    Todo:
    1. npx create-reat-app frontend

## Setup UI dengan React Bootstrap

    Todo:
    1.  components/Header.js
    2.  components/Footer.js
    3.  download them bootstrap: https://bootswatch.com/
        - setelah di extract kemudian copy file bootstrap.min.css
          dan pastekan pada folder src
    4.  cd frontend => npm i react-bootstrap
    5.  App.js
        - import dan pasang Container dari react-bootstrp
    6.  index.js
        - import file bootstrap.min.css
    7.  index.html
        - pasang link cdn fontawesome dari :  https://cdnjs.com/libraries/font-awesome/5.14.0
    8.  index.css
        - style

## Home Screen Product Listing

    Todo:
    1.  products.js
    2.  public/image
    3.  component/Product.js
        - rafc = react arow function component
        - card image
        - card body
        - card ratting
        - card price
    4.  screens/HomeScreen.js
        - import dan panggil Product
    5.  App.js
        - import dan panggil HomeScreen
    6.  run server : nodemon index
    7.  pengunjian pada browser: http://localhost:3000/

## Rating Component

    Todo:
    1.  Product.js
        - card rating
    2.  Rating.js
        - rafce = react arow function component
        - rating icon
        - menampilkan props text hanya jika text bukan string kosong
    3.  HomeScreen.js
        - memberikan key : sebagai identitas unik untuk setiap elemen di dalam array
          yang dirender di komponen Product.
    4.  index.css
        - mengatur posisi rating

## Implement React Router

    Todo:
    1.  install react router dom:
        npm i react-router-dom
    2.  install react router bootstrap:
        npm i react-router-bootsrtap
        mengatur navigasi dengan component2 dari bootstrap
        yang memungkinkan untuk tidak mere-load halaman ketika
        halaman melakukan navigasi
    3.  App.js
        import dan pasang BrowserRouter,Routes, dan Route dari react router dom
    4.  Header.js
        import dan pasang Linkcontainer :agar halaman tidak reloat saat navigasi
    5.  Product.js
        import dan pasang Link :agar dapat menavigasi halaman berdasarkan id
    6.  screens/ProductScreen.js
        rafce = react arow function component
    7.  App.js
        import dan pasang ProductScreen
    8.  pengujian pada browser
        - halaman product berdasarkan id: http://localhost:3000/product/1
        - halaman login: http://localhost:3000/login
        - halaman card: http://localhost:3000/cart

## Product Details Screen

    Todo:
    1.  ProductScreen.js
        - pasang use param dari react router-dom
        - link go back untuk ke halaman home
        - menampilkan image
        - Menampilkan teks produk, rating, harga, dan deskripsi dalam kolom ketiga.
        - Menampilkan harga produk, status produk, dan tombol untuk menambahkan produk
          ke keranjang belanja

## Backend - Setup server

    Todo:
    1.  diluar backend dan frontend (root folder)
        - npm init:
        - description: MERN shopping cart app
        - endpoint : server.js

    2.  npm install express
    3.  cd backend: buat file server.js
    4.  cd backend: buat folder data trus copy product.js dari frontend dan pasatekan kedalamnya
    5.  server.js
        - setup server dengan express
    6.  jalankan server : node backend/server.js

    7.  package.json
        - "scripts": {
            "start": "node backend/server"
        },
    8.  jalankan lagi servernya : npm start

## Serving products - backend routes

    Todo:
    1.  start server: node serer
    2.  server.js
        - panggil products.js
    3.  data/products.js
        - rubah pada bagian export defaultnya
    4.  enpoint path untuk browser:
        - http://localhost:5000
        - http://localhost:5000/api/products
        - http://localhost:5000/api/products/<id>
    5.  Noted: pada tahap ini , jika melakukan perubahan harus selalu me-restar server
        agar perubahan : node start

## Fetching Product from React(useEffect)

    Todo:
    1.  pada terminal => cd frontend: npm install axios
    2.  screens/HomeScreen.js
        - hapus pemanggilan import products.js
        - import dan pasang {useState, useEffect}
        - import dan pasang axios
    3.  pada frontend : package.json
        - pasang proxy
    4.  screens/ProductScreen.js
        - hapus pemanggilan import products.js
        - import dan pasang {useState, useEffect}
        - import dan pasang axios
    5.  Note jalankan server:
        - buka satu terminal pada route/ diluar backend dan frontend,
          kemudian jalankan node start
        - buka terminal ke dua cd frontend: npm start
    6.  pengujian pada browser:
        - http://localhost:3000/
        - http://localhost:3000/product/<id>

## Nodemon & Concurrently Setup

    Todo:
    1.  Install nodemon dan concurently
        - npm install nodemon concurrently
    2.  package.json
        setup server and app dengan concurrently agar bisa dijalankan dengan satu perintah
        perintahnya: npm run dev
    3.  pengujian pada browser:
        - http://localhost:3000/
        - http://localhost:3000/product/<id>

## Environment Variable

    Todo:
    1.  Install DotEnv
        - npm i dotenv
    2.  buat file .env di directory root
    3.  server.js
        - import dan pasang dotenv
        - modifikasi port
    4.  pengujian pada browser:
        - http://localhost:3000/
        - http://localhost:3000/product/<id>
