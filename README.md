# Synchronous vs Asynchronous di JavaScript

Catatan singkat tentang cara JavaScript menjalankan kode, lengkap dengan contoh di folder [`examples/`](./examples).

## Daftar Isi

1. [Penjelasan Synchronous](#1-penjelasan-synchronous)
2. [Asynchronous](#2-asynchronous)
3. [Perbedaan Synchronous dan Asynchronous](#3-perbedaan-synchronous-dan-asynchronous)
4. [Contoh](#4-contoh)
5. [Tiga Cara Menulis Kode Asynchronous](#5-tiga-cara-menulis-kode-asynchronous-di-javascript)
6. [Contoh di Repo](#6-contoh-di-repo)

---

## 1. Penjelasan Synchronous

Kode dijalankan **satu per satu, berurutan**. Setiap baris harus selesai dulu sebelum baris berikutnya berjalan. Jika satu proses lama, seluruh program ikut menunggu (*blocking*).

## 2. Asynchronous

Kode yang butuh waktu (request API, baca file, timer) dijalankan **di belakang layar** sehingga program tetap berjalan. Hasilnya diproses nanti, saat sudah siap (*non-blocking*).

## 3. Perbedaan Synchronous dan Asynchronous

| Aspek | Synchronous | Asynchronous |
| --- | --- | --- |
| Alur eksekusi | Berurutan | Tidak harus berurutan |
| Sifat | Blocking | Non-blocking |
| Proses lama | Program menunggu | Program lanjut, hasil menyusul |
| Kerumitan | Lebih mudah dibaca | Butuh callback, Promise, atau async/await |
| Cocok untuk | Perhitungan sederhana | API, database, file, timer |

## 4. Contoh

**Synchronous**

```js
console.log("1. Mulai");
console.log("2. Proses");
console.log("3. Selesai");
// Output: 1 -> 2 -> 3
```

**Asynchronous**

```js
console.log("1. Mulai");
setTimeout(() => console.log("2. Selesai (1 detik kemudian)"), 1000);
console.log("3. Baris ini jalan duluan");
// Output: 1 -> 3 -> 2
```

## 5. Tiga Cara Menulis Kode Asynchronous di JavaScript

**a. Callback**: fungsi yang dipanggil setelah proses selesai.

```js
function ambilData(callback) {
  setTimeout(() => callback(null, "Data dari Callback"), 500);
}
ambilData((err, data) => console.log(data));
```

**b. Promise**: objek yang mewakili hasil di masa depan (`then` / `catch`).

```js
const ambilData = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data dari Promise"), 500));

ambilData().then((data) => console.log(data));
```

**c. Async/Await**: penulisan Promise yang terlihat seperti kode synchronous.

```js
async function tampilkan() {
  const data = await ambilData();
  console.log(data);
}
tampilkan();
```

> **Tips:** gunakan `async/await` untuk kode baru karena paling mudah dibaca. Hindari callback yang bersarang terlalu dalam (*callback hell*).

## 6. Contoh di Repo

File contoh lengkap: [`examples/sync-vs-async.js`](./examples/sync-vs-async.js)

```bash
node examples/sync-vs-async.js
```# Tugas-DOM-JS
# Tugas-DOM-JS
