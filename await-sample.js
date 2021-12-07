import sleep from "sleep-promise";
import logStamp from "logstamp";

const startDate = Date.now();
logStamp(() => (Date.now() - startDate).toString().padStart(4, ' ') + ' ms : ');

async function simuleAcceBDD(){
    console.log("START SLOW BDD");
    await sleep(1000).then(() => console.log("END SLOW BDD"));
}

async function simuleOpenFile(){
    console.log("START OPEN FILE");
    await sleep(500).then(() => console.log("END OPEN FILE"));
}

async function simuleOpNonBloquante(){
    console.log("START QUICK PROC");
    await sleep(0).then(() => console.log("END QUICK PROC"));
}

async function simuleOpComplexe(){
    console.log("START LONG PROC");
    await sleep(100).then(() => console.log("END LONG PROC"));
}

await simuleAcceBDD();
await simuleOpComplexe();
await simuleOpNonBloquante();
await simuleOpenFile();