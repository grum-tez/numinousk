console.log("h!");

export function greetName(name = "anon") {
  if (name) {
    console.log(name);
  }
}

greetName("grum");

export const hello = "worlds";
