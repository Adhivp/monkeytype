let glarsesMode = false;

export function get() {
  return glarsesMode;
}

export function enable() {
  glarsesMode = true;
  console.log(
    "Glarses Mode On - test result will be hidden. You can check the stats in the console (here)"
  );
  console.log("To disable Glarses Mode refresh the page.");
}
