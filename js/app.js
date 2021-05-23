
const line1Path = document.querySelectorAll("#line1 path");
const line2Path = document.querySelectorAll("#line2 path");

console.log(line1Path);
console.log(line2Path);

for (let i = 0; i < line1Path.length; i++) {
    console.log(`Letter ${i} is ${line1Path[i].getTotalLength()}`);
}
for (let i = 0; i < line2Path.length; i++) {
    console.log(`Letter ${i} is ${line2Path[i].getTotalLength()}`);
}