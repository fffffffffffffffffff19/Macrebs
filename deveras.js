const requiredTime = new Date();
requiredTime.setDate(requiredTime.getDate() - 3);
const userAge = new Date("2023-03-27");

console.log(userAge >= requiredTime);
console.log(`userAge: ${userAge}\ncomparateDate: ${requiredTime}`);

if (userAge >= requiredTime) console.log('não passou');
else console.log('passou');
