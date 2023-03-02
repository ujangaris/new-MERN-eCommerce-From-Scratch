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
