// Contoh Synchronous vs Asynchronous di JavaScript

const tunggu = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 1. SYNCHRONOUS: berjalan berurutan, baris berikutnya menunggu
function contohSync() {
  console.log("[Sync] 1. Mulai");
  console.log("[Sync] 2. Proses");
  console.log("[Sync] 3. Selesai");
}

// 2. ASYNCHRONOUS: tidak memblokir, hasil datang belakangan
function contohAsync() {
  console.log("[Async] 1. Mulai");
  setTimeout(() => console.log("[Async] 2. Selesai (setelah 1 detik)"), 1000);
  console.log("[Async] 3. Baris ini jalan duluan");
}

// 3. Tiga cara menulis kode asynchronous
// a) Callback
function ambilDataCallback(callback) {
  setTimeout(() => callback(null, "Data dari Callback"), 500);
}

// b) Promise
function ambilDataPromise() {
  return tunggu(500).then(() => "Data dari Promise");
}

// c) Async/Await
async function ambilDataAwait() {
  await tunggu(500);
  return "Data dari Async/Await";
}

async function main() {
  contohSync();
  console.log("---");

  contohAsync();
  await tunggu(1200);
  console.log("---");

  ambilDataCallback((err, data) => console.log(data));
  await tunggu(600);

  ambilDataPromise().then((data) => console.log(data));
  await tunggu(600);

  console.log(await ambilDataAwait());
}

main();