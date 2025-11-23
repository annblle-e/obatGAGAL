// data produk, biar kasir bisa tau nama, harga, dan link shopee
const produk = {
    p1: {
        nama: "OBH Combi Plus Batuk Flu Menthol",
        harga: 24500,
        shopee: "https://id.shp.ee/23gDC3Z"
    },
    p2: {
        nama: "Promag Obat Maag & Asam Lambung",
        harga: 11400,
        shopee: "https://id.shp.ee/4EDjCwy"
    },
    p3: {
        nama: "Diapet Obat Meredakan Diare",
        harga: 8600,
        shopee: "https://id.shp.ee/8A68abM"
    },
    p4: {
        nama: "Counterpain Krim Pereda Nyeri",
        harga: 52500,
        shopee: "https://id.shp.ee/dyYXCcn"
    },
    p5: {
        nama: "Tolak Angin Cair",
        harga: 25500,
        shopee: "https://id.shp.ee/LEZQhRH"
    }
};


// fungsi buat ngambil id produk dari url
function getID() {
    let url = new URL(window.location.href);
    return url.searchParams.get("id");
}

// cek apakah ini halaman kasir
if (window.location.pathname.includes("kasir.html")) {

    // ambil id dari url
    const id = getID();

    // kalo id valid, isi datanya ke input
    if (produk[id]) {

        // masukin nama produk otomatis
        document.getElementById("barang").value = produk[id].nama;

        // masukin harga otomatis
        document.getElementById("harga").value = produk[id].harga;

        // tombol checkout baru ke shopee
        document.getElementById("checkout").addEventListener("click", function () {
            window.open(produk[id].shopee, "_blank");
        });
    }
}
