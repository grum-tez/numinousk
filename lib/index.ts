console.log("h!");

function greetName(name = "anon") {
  if (name) {
    console.log(name);
  }
}

greetName("grum");

export const hello = "worlds";
