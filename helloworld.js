import PromptSync from "prompt-sync";

const prompt = PromptSync();
const name = prompt("Your name : ");
console.log(`Hello ${name} !`);