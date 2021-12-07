import sleep from "sleep-promise";
import logStamp from "logstamp";

const startDate = Date.now();
logStamp(() => (Date.now() - startDate).toString().padStart(4, ' ') + ' ms : ');

function simuleAcceBDD(){
    console.log("START SLOW BDD");
    sleep(1000).then(() => console.log("END SLOW BDD"));
}

function simuleOpenFile(){
    console.log("START OPEN FILE");
    sleep(500).then(() => console.log("END OPEN FILE"));
}

function simuleOpNonBloquante(){
    console.log("START QUICK PROC");
    sleep(0).then(() => console.log("END QUICK PROC"));
}

function simuleOpComplexe(){
    console.log("START LONG PROC");
    sleep(100).then(() => console.log("END LONG PROC"));
}

simuleAcceBDD();
simuleOpComplexe();
simuleOpNonBloquante();
simuleOpenFile();